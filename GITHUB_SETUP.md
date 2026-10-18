# NeighbourAssist — repository handoff

**Current repository:** https://github.com/peepeepoopoomanm/NeighbourAssist  
**Default branch:** `main`  
**Status:** Existing hackathon project; **do not create another repository.**

The original instructions for creating an empty GitHub repository are obsolete. Keep this file as a concise contributor and deployment handoff.

## First-time local setup

Install a supported Node.js LTS release and Git. In a PowerShell terminal:

```powershell
git clone https://github.com/peepeepoopoomanm/NeighbourAssist.git
cd NeighbourAssist
npm install
npm test
npm run build
npm run dev
```

A development website will be available at the URL printed by Vite (usually http://localhost:5173/).

## Updating a local copy

From the project folder, stop the development server with Ctrl+C, then:

```powershell
git status
git pull
npm test
npm run build
npm run dev
```

If `git status` shows uncommitted work, back it up or commit it before pulling; never discard a teammate's work to resolve a conflict.

## Collaboration

Before granting write access, confirm the contributor's GitHub username and responsibilities. Use GitHub repository settings to manage access. Review changes and check the test/build results before merging.

## One intended production output

The **React + TypeScript application** lives in `src/`. Build with `npm run build`; deploy **only** the generated `dist/` directory.

Do **not** distribute the older `demo/` standalone prototype as the finished website. It does not implement the current bilingual MPS preparation experience.

## Pre-release safety

- Confirm all published official agency links, phone details and criteria are current.
- Recheck Simplified Chinese translations with a proficient speaker.
- Never collect NRICs, bank statements, Singpass details, medical records or real constituent case information in the prototype.
- Explain that NeighbourAssist is not an official government or MP appeal service.
- Run `npm test` and `npm run build` and manually test mobile, print, caregiver and language settings.
- Commit a reviewed dependency lockfile (`package-lock.json`) before a reproducible public release. Once committed, CI can switch from `npm install` to `npm ci`.
- Check event submission rules and disclose AI development assistance as needed.

See `README.md`, `docs/02-service-research.md`, `docs/03-decision-tree.md`, and `docs/04-mps-preparation.md`.
