# NeighbourAssist

An independent student project for Neighborhood Hacks 2026. NeighbourAssist helps Singapore residents, especially older people and their caregivers, locate official assistance channels through accessible questions and practical next steps.

**Status:** Work-in-progress hackathon prototype. Not endorsed by or connected to the Singapore Government. Not a real appeal submission service.

## Run the React + TypeScript project
Requirements: Node.js 22+, npm and internet access to install React, Vite and TypeScript dependencies.

```bash
npm install
npm run dev
```
Open the localhost address printed by Vite (usually `http://localhost:5173`).

### Build for static hosting
```bash
npm run build
npm run preview
```
Deploy the generated `dist/` directory to a static host.

### Run engine tests
```bash
npm test
```

## Offline preview without npm
A self-contained browser-runnable preview is in `demo/`; it uses the **same referral engine source** compiled to `public/demo-engine/engine.js`.

```bash
python -m http.server 8000
```
Open `http://localhost:8000/demo/` in your browser. This is a separate static preview; it is not a substitute for verifying the React build. Do not open via `file://` because JavaScript modules require HTTP serving.

## Source structure
- `src/engine.ts` — category questions, verified referral records, deterministic rules.
- `src/App.tsx` — React UI (landing, question flow, result card, printable checklist).
- `src/style.css` — responsive, large-target accessible styles.
- `demo/index.html`, `demo/preview.js` — browser preview sharing the compiled engine.
- `tests/engine.test.mjs` — unit tests for referrals.
- `docs/` — brief, official referral source log, decision tree, screen wireframes and handoff.

## Safety and privacy
- No accounts, uploads, API calls, cloud DB, analytics, or respondent data persistence.
- Questions cover categories and broad circumstances, not identifiers, bank balances, CPF amounts or personal medical details.
- Only official agencies can determine eligibility, receive actual applications and approve assistance.
- Any official links, policy statements, service hours and contact numbers must be rechecked before real-world deployment.
- Health and urgent needs require appropriate official or emergency channels, not this prototype.

## Publishing to GitHub
1. Create a new empty repository named `neighbourassist` on GitHub **without** initial README (this project already has one).
2. From the unzipped project root:
```bash
git init
git add .
git commit -m "Initialize NeighbourAssist hackathon prototype"
git branch -M main
git remote add origin https://github.com/peepeepoopoomanm/neighbourassist.git
git push -u origin main
```
3. Add your friend via **Repository Settings → Collaborators**; they'll need to accept the invitation.

## Deployxa setup checklist
We could not access your authenticated Deployxa account from this chat. The exact dashboard workflow may change, but the app is a Vite static React build:
1. Log in to Deployxa and inspect the available static site deployment options.
2. If connecting GitHub, authorize and select `neighbourassist`.
3. Build command: `npm install && npm run build` (or the platform's standard install + `npm run build`).
4. Static output/publication folder: `dist`.
5. Do not add unnecessary API keys or environment secrets; the MVP has no backend.
6. Open the provided deployment URL and test the whole questionnaire and official links on mobile.
7. Monitor credit usage before selecting a paid hosting tier.

## Documentation
Read `docs/01-project-brief.md` first, then the referral log and decision tree. The application does not claim actual savings in travel or queue times until user testing supports those outcomes.

## AI attribution
Initial planning and implementation were produced with assistance from ChatGPT (GPT-6). Team members should inspect, understand, and test all source code before submission. Disclose AI assistance in the Devpost writeup if required by the event rules.

**Connected GitHub account:** `peepeepoopoomanm`. For the one-time new-repository step, see `GITHUB_SETUP.md`.
