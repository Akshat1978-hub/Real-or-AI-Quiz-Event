import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Instructions from "./pages/Instructions";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Admin from "./pages/Admin";

export default function App() {
  const [page,setPage]=useState("landing");
  const [participant,setParticipant]=useState(null);
  const [result,setResult]=useState(null);
  const [results,setResults]=useState(()=>JSON.parse(localStorage.getItem("real-or-ai-results")||"[]"));

  useEffect(()=>localStorage.setItem("real-or-ai-results",JSON.stringify(results)),[results]);

  const finish=(answers,timeTaken)=>{
    const score=answers.filter(a=>a.correct).length;
    const r={id:crypto.randomUUID(),participant,answers,timeTaken,score,createdAt:new Date().toISOString()};
    setResult(r); setResults(prev=>[...prev,r]); setPage("result");
  };
  const restart=()=>{setParticipant(null);setResult(null);setPage("landing")};

  return (
    <div className="app">
      <ParticleBackground/>
      {page!=="admin"&&<Navbar page={page} onHome={()=>setPage("landing")} onAdmin={()=>setPage("admin")}/>}
      {page==="landing"&&<Landing onStart={()=>setPage("register")}/>}
      {page==="register"&&<Register onNext={(p)=>{setParticipant(p);setPage("instructions")}}/>}
      {page==="instructions"&&<Instructions onStart={()=>setPage("quiz")}/>}
      {page==="quiz"&&<Quiz onFinish={finish}/>}
      {page==="result"&&result&&<Result participant={result.participant} answers={result.answers} timeTaken={result.timeTaken} onRestart={restart}/>}
      {page==="admin"&&<Admin results={results} onClose={()=>setPage("landing")}/>}
    </div>
  );
}