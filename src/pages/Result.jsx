import React, { useMemo } from "react";
import { Trophy, Clock, Target } from "lucide-react";

function format(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);

  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export default function Result({ participant, answers, timeTaken }) {
  const score = useMemo(
    () => answers.filter((a) => a.correct).length,
    [answers]
  );

  const accuracy = Math.round((score / answers.length) * 100);

  return (
    <main className="result-page">
      <section className="result-hero glass">
        
        <div className="result-trophy">
          <Trophy size={50} />
        </div>

        <p>CHALLENGE COMPLETE</p>

        <h1>Great Job, {participant?.name || "Participant"}!</h1>

        <div className="score">
          {score}
          <span>/{answers.length}</span>
        </div>

        <p style={{ color: "#aab4cf", marginTop: "-10px" }}>
          YOUR FINAL SCORE
        </p>

        <div className="result-grid">
          
          <div>
            <Target />
            <b>{accuracy}%</b>
            <span>ACCURACY</span>
          </div>

          <div>
            <Clock />
            <b>{format(timeTaken)}</b>
            <span>TIME TAKEN</span>
          </div>

          <div>
            <Trophy />
            <b>
              {score >= 13
                ? "ELITE"
                : score >= 9
                ? "DETECTIVE"
                : "CHALLENGER"}
            </b>
            <span>RANK</span>
          </div>

        </div>

        <p
          style={{
            marginTop: "30px",
            color: "#aab4cf",
            textAlign: "center"
          }}
        >
          Your result has been recorded successfully.
          <br />
          Check the leaderboard for the final rankings.
        </p>

      </section>
    </main>
  );
}