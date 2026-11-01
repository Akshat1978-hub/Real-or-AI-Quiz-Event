import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Eye, Trophy, Zap } from "lucide-react";

export default function Landing({ onStart }) {
  return (
    <main className="landing page-center">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="hero">
        <div className="hero-badge"><Zap size={16}/> LIVE COLLEGE CHALLENGE</div>
        <div className="hero-icon"><BrainCircuit size={62}/></div>
        <h1>REAL <span>OR</span> AI?</h1>
        <h2>CAN YOUR EYES BEAT ARTIFICIAL INTELLIGENCE?</h2>
        <p>16 challenges. Images, music, voices and videos. Can you tell what is REAL and what is AI?</p>
        <div className="hero-stats">
          <div><Eye/><b>20</b><small>Images</small></div>
          <div><BrainCircuit/><b>16</b><small>Rounds</small></div>
          <div><Trophy/><b>TOP 3</b><small>Winner</small></div>
        </div>
        <button className="primary-btn" onClick={onStart}>START THE CHALLENGE <ArrowRight size={20}/></button>
        <p className="mini">No timer pressure. No instant feedback. Results revealed at the end.</p>
      </motion.div>
    </main>
  );
}