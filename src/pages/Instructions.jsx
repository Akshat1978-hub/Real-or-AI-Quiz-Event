import React from "react";
import { Eye, LockKeyhole, Trophy, ArrowRight } from "lucide-react";

export default function Instructions({ onStart }) {
  return (
    <main className="page-center">
      <section className="instructions glass">
        <h1>HOW IT WORKS</h1>
        <div className="rules">
          <article><Eye/><div><b>LOOK CAREFULLY</b><span>Every round shows two images.</span></div></article>
          <article><LockKeyhole/><div><b>ANSWER IS HIDDEN</b><span>You won't know if you are right or wrong during the quiz.</span></div></article>
          <article><Trophy/><div><b>FINAL REVEAL</b><span>Your score, time and all answers appear only after Round 10.</span></div></article>
        </div>
        <div className="warning">😈 Read every question carefully. Sometimes you must find REAL, sometimes AI.</div>
        <button className="primary-btn" onClick={onStart}>I'M READY — START <ArrowRight size={20}/></button>
      </section>
    </main>
  );
}