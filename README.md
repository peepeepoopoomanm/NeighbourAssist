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

## Archived development preview

The `demo/` directory is **legacy developer reference material**, not the current NeighbourAssist website. It is English-only, uses an earlier copy of the referral engine stored in `demo/engine.js`, and **does not include** the new MPS preparation feature or the latest translations. Do not share, deploy or demonstrate this older preview to residents.

Use `npm run dev` for development and `npm run build` for the authoritative React application. The generated `dist/` folder is the only intended production output.

## Source structure
- `src/engine.ts` — category questions, official-source referral records, deterministic rules (including fines and court-safe routing).
- `src/App.tsx` — React UI (landing, adaptive question flow, results, optional MPS preparation and printing).
- `src/style.css` — responsive, large-target accessible styles.
- `src/mps.ts` — on-device bilingual MPS preparation summary; no personal identifiers collected.
- `src/journeys.ts` — official agency contact routes in English and Simplified Chinese, with separate fine appeal, payment, status and hardship handoffs.
- `demo/index.html`, `demo/preview.js` — browser preview sharing the compiled engine.
- `tests/engine.test.mjs` — unit tests for referrals.
- `docs/` — brief, official referral source log, decision tree, screen wireframes and handoff.

## Safety and privacy
- No accounts, uploads, API calls, cloud DB, analytics, or respondent data persistence.
- Questions cover categories and broad circumstances, not identifiers, bank balances, CPF amounts or personal medical details.
- Only official agencies can determine eligibility, receive actual applications and approve assistance.
- Any official links, policy statements, service hours and contact numbers must be rechecked before real-world deployment.
- Health and urgent needs require appropriate official or emergency channels, not this prototype.

## Existing GitHub repository

This project is already published at https://github.com/peepeepoopoomanm/NeighbourAssist. Contributors should clone the repository, use `git pull` for upstream changes, and run `npm test` plus `npm run build` before proposing changes. The older initial-repository setup instructions in `GITHUB_SETUP.md` are retained only as historical onboarding material.

## Deployxa setup checklist
Deployxa's public documentation confirms React/Vite and static sites are supported. Its authenticated dashboard and deployment result have **not** been independently checked. The app is a Vite static React build; follow the full staging checklist in [`docs/06-release-checklist.md`](docs/06-release-checklist.md):
1. Log in to Deployxa and inspect the available static site deployment options.
2. If connecting GitHub, authorize only the required access and select `peepeepoopoomanm/NeighbourAssist` on the `main` branch.
3. Build command: `npm ci && npm run build` (or the platform's standard install + `npm run build`).
4. Static output/publication folder: `dist`.
5. Do not add unnecessary API keys or environment secrets; the MVP has no backend.
6. Prefer a staging/preview URL first, then test the full questionnaire, Chinese/caregiver mode, keyboard navigation and official links on mobile.
7. Monitor hosting plan limits and credit usage before selecting any paid tier. Never use the Vite development or preview server as the production start command.

## Documentation
Read `docs/01-project-brief.md` first, then `docs/03-decision-tree.md`, `docs/06-release-checklist.md` and `docs/08-fines-appeals-research.md`. The latter records official-source checks, bilingual and accessibility tests, and the static hosting handoff. The application does not claim actual savings in travel or queue times until user testing supports those outcomes.

## AI attribution
Initial planning and implementation were produced with assistance from ChatGPT (GPT-6). Team members should inspect, understand, and test all source code before submission. Disclose AI assistance in the Devpost writeup if required by the event rules.

**Repository:** `peepeepoopoomanm/NeighbourAssist`. See `GITHUB_SETUP.md` for the current contributor handoff; the repository already exists.


## October 17 usability update (English / 简体中文)

- Choose **Language / 语言** in the header to switch all React interface questions, recommendations, checklist and instructions between English and Simplified Chinese.
- Choose **Text size / 字体大小** (Normal, Large) to enlarge the text across answers, buttons, headings and results.
- The financial questionnaire now asks about the broad expense category (food, utilities, rent or living expenses), without amounts; housing asks extra situation-specific questions.
- The final contact preference changes the main action and help copy: online, telephone, in person, or unsure. Urgent ComCare pathways stay short.
- Footer **Browse assistance topics** scrolls to the actual topic choices.

**Translation status:** Simplified Chinese is a student-written draft, not an official government translation. Ask a fluent Chinese speaker to review the translated guidance and have all agency details checked before any real-world use. The `demo/` standalone preview remains an older English-only reference; the updated React application in `src/` is the authoritative version. Real cases, identity documents and financial/medical details must never be entered into this prototype.

## October 19: Agency follow-up and Meet-the-People Session preparation

NeighbourAssist now asks **why a resident needs help and whether they have contacted the responsible agency**. It distinguishes first applications, pending replies, rejected requests and unresolved problems, without making legal or eligibility decisions. Urgent food/basic-needs requests are not delayed by additional questions.

- Housing, CPF, medical costs, municipal issues and “Not sure” now use more relevant adaptive questions. Housing public-rental transfers explain the usual two-year occupancy condition. CPF Silver Support guidance is restricted to people who indicate they are 65 or above.
- Each results page retains agency instructions and offers an **optional MPS preparation** section, including the [official Parliament MP finder](https://www.parliament.gov.sg/mps/find-mps-in-my-constituency).
- The printable MPS preparation summary contains **only fixed-choice questionnaire answers**. It is not an MP appeal letter, never sends a case to an MP, and does not ask for NRIC, home address, Singpass or medical records.
- All newly added questions, caregiver prompts and MPS instructions are available in English and Simplified Chinese.
- The static `demo/` folder is an older reference, not the authoritative version. Use the React application in `src/` for testing or demonstration.

Read [MPS preparation design and testing](docs/04-mps-preparation.md) before deployment. Run `npm test` and `npm run build` after pulling the latest changes, then manually test bilingual and mobile journeys.

## October 19: Fines & Appeals expansion

A new bilingual category helps residents identify **which government authority issued a penalty**, whether it is a **court summons**, and whether they need an **appeal, payment, appeal-status enquiry or financial-difficulty enquiry**. HDB, URA and Traffic Police use their own verified online payment/appeal routes; LTA active-mobility notices direct the user to confirm the correct process with LTA. A court summons shortens the questionnaire and prioritises court attendance instructions.

The prototype does **not** waive fines, decide an appeal's success, submit legal representations, recommend court pleas, store notice numbers or promise that an MP can override penalties. Full official sources, supported/unsupported cases and manual acceptance tests are in [Fines & Appeals research](docs/08-fines-appeals-research.md).

After pulling the latest changes, run `npm test` and `npm run build`, then manually validate the bilingual fine, court and payment routes before considering another public release. Deployxa may need an explicit redeployment unless Git-based automatic deployment is enabled and confirmed.
