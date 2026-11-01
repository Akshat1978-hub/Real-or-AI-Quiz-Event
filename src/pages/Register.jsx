import React, { useState } from "react";
import { ArrowRight, UserRound } from "lucide-react";

export default function Register({ onNext }) {
  const [form, setForm] = useState({name:"", college:"", className:""});
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onNext({...form, name: form.name.trim()});
  };
  return (
    <main className="page-center">
      <form className="glass form-card" onSubmit={submit}>
        <UserRound size={42}/>
        <h1>ENTER THE CHALLENGE</h1>
        <p>Your details are used for the event leaderboard.</p>
        <label>FULL NAME *</label>
        <input required placeholder="Enter your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
        <label>COLLEGE / SCHOOL</label>
        <input placeholder="Optional" value={form.college} onChange={e=>setForm({...form,college:e.target.value})}/>
        <label>CLASS / BRANCH</label>
        <input placeholder="Optional" value={form.className} onChange={e=>setForm({...form,className:e.target.value})}/>
        <button className="primary-btn" type="submit">CONTINUE <ArrowRight size={20}/></button>
      </form>
    </main>
  );
}