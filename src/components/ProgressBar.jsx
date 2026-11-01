import React from "react";
export default function ProgressBar({ current, total }) {
  return (
    <div className="progress-wrap">
      <div className="progress-label"><span>ROUND {current} / {total}</span><span>{Math.round((current/total)*100)}%</span></div>
      <div className="progress-track"><div className="progress-fill" style={{width: `${(current/total)*100}%`}} /></div>
      <div className="dots">{Array.from({length: total}).map((_, i) => <i key={i} className={i < current ? "done" : ""} />)}</div>
    </div>
  );
}