# NeighbourAssist — Pre-launch repository audit

**Audit date:** 19 October 2026  
**Scope:** Existing GitHub main-branch files found via known project paths and source imports, with direct examination of core code, test scripts, configuration, documentation and legacy demo. This is a **source audit, not a penetration test or full accessibility review**. The connected GitHub interface did not provide an exhaustive recursive file-tree listing; therefore this document does not claim to verify unknown/unlisted files.

## Verified by source inspection

| Area | Files inspected | Finding |
| --- | --- | --- |
| App and accessibility | `src/App.tsx`, `src/style.css`, `src/main.tsx`, `index.html`, `src/CategoryIcon.tsx` | Main flow has large text, labelled questions, language control, caregiver flow, step-by-step links and print mode. Browser/screen-reader/mobile checks still required. |
| Decision rules | `src/engine.ts`, `src/mps.ts`, `src/journeys.ts` | Deterministic referrals without an eligibility prediction or official appeal submission. MPS notes use only validated multiple-choice responses; caregiver labels now refer to the person being helped. |
| Translations | `src/i18n.ts`, `src/audience.ts` | English and Simplified Chinese text available for all defined questionnaire questions and caregiver prompts. Review by a fluent speaker remains necessary. |
| Safety | `src/App.tsx`, `src/engine.ts`, `src/mps.ts`, `.gitignore` | No observed API-based case submission, local-storage persistence or Singpass collection in main flow. Source-level regression test added. This does not prove third-party hosting or future changes are privacy-safe. |
| Tests and CI | `tests/engine.test.mjs`, `tests/release-audit.test.mjs`, `.github/workflows/ci.yml`, `tsconfig.json`, `vite.config.ts`, `package.json` | Referral, translation and print-summary unit tests; strict TypeScript and Vite production build. CI restricted to read-only and a timeout. Tests and build need rerunning after these audit edits. |
| Website metadata | `index.html`, `src/main.tsx` | Basic page title, viewport and description; inspect deployed URL and social preview later. |
| Legacy preview | `demo/index.html`, `demo/preview.js`, `demo/engine.js` | Marked clearly as outdated and kept outside production entry point. Old `public/demo-engine/engine.js` removed so it is no longer copied to deployed `dist/`. Do not demonstrate the legacy preview. |
| Written guidance | `README.md`, `GITHUB_SETUP.md`, `docs/01-project-brief.md`, `docs/02-service-research.md`, `docs/03-decision-tree.md`, `docs/04-mps-preparation.md` | Obsolete setup and old routing statements rewritten or clarified. The official-source research log remains a historical record. |

## Corrective changes made in the audit

1. Updated MPS note labels in caregiver mode and discarded invalid option values rather than showing unrecognised selections.
2. Added regression tests for those MPS note behaviours.
3. Rewrote stale decision-tree documentation and contributor instructions; aligned project brief with the current bilingual agency/MPS purpose.
4. Preserved the old demo under `demo/` but removed its unused public production copy; added a visible legacy warning.
5. Hardened GitHub Actions with read-only permissions and a ten-minute timeout.
6. Added a minimal privacy and legacy-asset regression test.
7. Documented remaining validation and deployment gates below.

## Launch blockers to resolve

- **Dependency reproducibility:** `package-lock.json` was not found in the repository. On the development machine, run `npm install --package-lock-only`, inspect the generated lockfile for unexpected packages, commit it and push. Then use `npm ci` in GitHub Actions and in clean installations. The lock must be generated with a real package resolver; do not hand-write it.
- **Run latest tests/build:** `npm test` and `npm run build` after pulling all audit commits. Check CI is green.
- **Live official links:** Click each outgoing service link and check whether its landing page, labels, phone numbers and requirements still match our instructions; include online/phone/in-person modes.
- **Chinese language handoff:** A proficient Singapore Chinese reader should test every category and the official site transition, noting places where an English-only external form needs assisted alternatives.
- **Accessibility usability:** Check at least one narrow phone screen, mobile zoom, keyboard-only navigation, and screen-reader reading order. In particular check conditional question progress, MPS note expansion and print controls.
- **Human test:** Use fictional cases with at least one caregiver and, if available, an older adult; record whether the user knows what to do next.
- **Hosting/privacy:** Deploy only `dist/` over HTTPS, avoid analytics and trackers, verify hosting logs/data policies, set sensible security headers if the provider supports them, and check there are no unexpected calls or sensitive URLs in the browser Network tab.
- **Submission:** Clearly state unofficial status, no guarantee of MPS prioritisation or agency approval, and the limits of the prototype.

## Government policy checks

Official sources reviewed for major requirements:
- MSF ComCare hotline and SSO guidance: https://www.msf.gov.sg/what-we-do/comcare
- HDB transfer conditions (registered tenant, normally at least two years in current unit): https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/transfer-to-another-public-rental-flat
- CPF Silver Support eligibility age and automatic assessment: https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme
- Official MP lookup: https://www.parliament.gov.sg/mps/find-mps-in-my-constituency

These spot checks do **not** amount to live verification of every link in `src/journeys.ts` or `src/engine.ts`.

## Release gate

**Do not treat a green unit-test suite as proof of correctness or suitability for real assistance cases.** Release once lockfile, CI, links, bilingual accessibility, privacy/hosting and human usability checks above are satisfactory.
