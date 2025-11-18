# Carbon Tracker — Frontend (Vite + React)

This is a beginner-friendly frontend application 
 that helps you track simple carbon emissions for trips and home energy. It includes:

 Trip calculator (car, train, flight) and extended options (bike, walk, flight class, long-haul)

Quick setup (PowerShell):
 
 Validation and UI notes:
 - Forms now use numeric inputs where appropriate and perform simple client-side validation.
 - Small icons (emoji) help identify inputs; styles live in `src/styles.css`.
 - Diet and waste estimates are simplified heuristics for demonstration — adjust factors in `src/utils/calculations.js` for accuracy.
npm install
npm run dev
```

Open `http://localhost:5173` in your browser (the port may differ).

Notes for beginners:
- Edit components in `src/components` to adjust UI.
- Calculation factors are in `src/utils/calculations.js` — change them to match your country.
- Data is stored locally in your browser; no account required.

New in this multi-page version:

- Pages: `Login`, `Signup`, `Dashboard`, `Calculator`, `History`, `Profile`, `Settings`.
- Features: signup/login (mock), add/edit/delete entries, search/filter history, export CSV, summary chart, progress tracker, animated UI elements, and a sample leaderboard.

Troubleshooting:
- If `npm install` fails on Windows, try running PowerShell as Administrator and ensure Node.js (>=16) and npm are installed.

