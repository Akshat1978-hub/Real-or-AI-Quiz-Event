// Quiz data: 10 image rounds + 6 mixed-media rounds.
// Music files are provided by the event organizer. Voice/video demo assets can be replaced with verified clips before the live event.

const imageRounds = [
  [1,"EASY","WHICH IMAGE IS REAL?","https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85"],
  [2,"EASY","WHICH IMAGE IS AI-GENERATED?","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85"],
  [3,"EASY","FIND THE AUTHENTIC PHOTOGRAPH.","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"],
  [4,"MEDIUM","IDENTIFY THE AI-GENERATED IMAGE.","https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"],
  [5,"MEDIUM","WHICH ONE WAS CAPTURED BY A REAL CAMERA?","https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"],
  [6,"MEDIUM","FIND THE IMAGE CREATED BY ARTIFICIAL INTELLIGENCE.","https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"],
  [7,"HARD","CAN YOU FIND WHAT'S REAL?","https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"],
  [8,"HARD","SPOT THE AI CREATION.","https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"],
  [9,"HARD","SELECT THE AUTHENTIC PHOTOGRAPH.","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"],
  [10,"FINAL","FINAL IMAGE ROUND: WHICH IMAGE IS AI-GENERATED?","https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"]
].map(([id,difficulty,question,real,ai])=>({id,type:"image",difficulty,question,real,ai,clue:"Look carefully at fine details, consistency and natural imperfections."}));

const mediaRounds = [
 {id:11,type:"audio",difficulty:"HARD",question:"LISTEN CAREFULLY — IS THIS MUSIC REAL OR AI-GENERATED?",src:"/audio/music-ai.mp3",correctType:"AI",clue:"AI music can sound polished, but listen for unusual transitions and repetition."},
 {id:12,type:"audio",difficulty:"HARD",question:"LISTEN CAREFULLY — IS THIS MUSIC REAL OR AI-GENERATED?",src:"/audio/music-real.mp3",correctType:"REAL",clue:"Focus on natural performance, timing and human variation."},
 {id:13,type:"voice",difficulty:"EXPERT",question:"VOICE CHALLENGE — IS THIS VOICE AI OR REAL?",src:"/audio/voice-ai.mp3",correctType:"AI",clue:"Listen to rhythm, breath patterns and pronunciation consistency."},
 {id:14,type:"voice",difficulty:"EXPERT",question:"VOICE CHALLENGE — IS THIS VOICE AI OR REAL?",src:"/audio/voice-real-demo.mp3",correctType:"REAL",clue:"Before the live event, replace this demo file with a verified human voice clip."},
 {id:15,type:"video",difficulty:"EXPERT",question:"VIDEO CHALLENGE — IS THIS VIDEO REAL OR AI-GENERATED?",src:"/videos/video-ai-demo.mp4",correctType:"AI",clue:"Inspect motion, temporal consistency and fine details across frames."},
 {id:16,type:"video",difficulty:"FINAL",question:"FINAL VIDEO CHALLENGE — REAL OR AI?",src:"/videos/video-real-demo.mp4",correctType:"REAL",clue:"Before the live event, replace this demo file with a verified real camera video."}
];

// Mixed order so media rounds appear between image rounds.
const byId = Object.fromEntries([...imageRounds,...mediaRounds].map(q=>[q.id,q]));
export const quizData = [1,11,2,13,3,4,12,5,14,6,7,15,8,9,16,10].map(id=>byId[id]);
