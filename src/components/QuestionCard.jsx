import React from "react";
export default function QuestionCard({ question, difficulty, type="image" }) {
 const label = type === "image" ? "Select the correct choice. Your answer stays hidden until the challenge ends." : "Make your choice. You will not know whether you are right or wrong until the final reveal.";
 return <div className="question-card"><span className={`difficulty ${difficulty.toLowerCase()}`}>{difficulty} • {type.toUpperCase()}</span><h1>{question}</h1><p>{label}</p></div>;
}
