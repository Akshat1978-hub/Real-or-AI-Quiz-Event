# REAL OR AI? — Human vs Machine Challenge

## Run locally

1. Install Node.js (18+ recommended)
2. Open the project folder in VS Code
3. Open terminal and run:

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Important: Replace the demo images

Edit:

`src/data/quizData.js`

The included image URLs are placeholders for UI testing. Before your real event, replace every `real` and `ai` URL with your verified images.

For a real public event, use Supabase or another backend for:
- server-side scoring
- preventing duplicate submissions
- persistent multi-device leaderboard
- admin authentication

The current version stores completed results in browser localStorage, so it is a fully working frontend/demo but results are not shared between different devices until the backend is connected.

## Admin Dashboard

Click the trophy icon in the top-right.

Default demo password:

`admin123`

Change it in `.env`:

```env
VITE_ADMIN_PASSWORD=your_secure_password
```
