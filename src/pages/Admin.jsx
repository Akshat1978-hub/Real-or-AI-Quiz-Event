import React, { useEffect, useState } from "react";
import { BarChart3, Users, Trophy, Timer, Lock } from "lucide-react";

function format(ms){const s=Math.floor(ms/1000),m=Math.floor(s/60);return `${String(m).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}

export default function Admin({ results, onClose }) {
  const [allowed,setAllowed]=useState(false), [pass,setPass]=useState("");
  const sorted=[...results].sort((a,b)=>b.score-a.score || a.timeTaken-b.timeTaken);
  if(!allowed) return (
    <main className="page-center">
      <div className="glass admin-login">
        <Lock size={40}/><h1>ADMIN ACCESS</h1>
        <input type="password" placeholder="Enter admin password" value={pass} onChange={e=>setPass(e.target.value)}/>
        <button className="primary-btn" onClick={()=>pass===(import.meta.env.VITE_ADMIN_PASSWORD||"et2026")&&setAllowed(true)}>UNLOCK DASHBOARD</button>
        <button className="text-btn" onClick={onClose}>Back</button>
      </div>
    </main>
  );
  const avg=results.length?Math.round(results.reduce((s,r)=>s+r.score,0)/results.length*10)/10:0;
  return (
    <main className="admin-page">
      <header className="admin-header"><div><p>REAL OR AI?</p><h1>LIVE EVENT CONTROL CENTER</h1></div><button className="secondary-btn" onClick={onClose}>EXIT</button></header>
      <section className="admin-stats">
        <div className="stat"><Users/><span>TOTAL PARTICIPANTS</span><b>{results.length}</b></div>
        <div className="stat"><Trophy/><span>AVERAGE SCORE</span><b>{avg}/10</b></div>
        <div className="stat"><Timer/><span>FASTEST TIME</span><b>{results.length?format(Math.min(...results.map(r=>r.timeTaken))):"--:--"}</b></div>
        <div className="stat"><BarChart3/><span>PERFECT SCORES</span><b>{results.filter(r=>r.score===10).length}</b></div>
      </section>
      <section className="leaderboard glass">
        <h2>🏆 LIVE LEADERBOARD</h2>
        <div className="table">
          <div className="tr head"><span>RANK</span><span>PARTICIPANT</span><span>SCORE</span><span>TIME</span></div>
          {sorted.length===0?<div className="empty">No completed participants yet.</div>:sorted.map((r,i)=>(
            <div className="tr" key={r.id}><span>{i===0?"🥇":i===1?"🥈":i===2?"🥉":`#${i+1}`}</span><span><b>{r.participant.name}</b><small>{r.participant.college||"Event Participant"}</small></span><span>{r.score}/10</span><span>{format(r.timeTaken)}</span></div>
          ))}
        </div>
      </section>
    </main>
  );
}