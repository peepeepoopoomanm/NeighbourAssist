# October 17 — Handoff and status

## Completed
- Finalized problem, primary audience, solution and project scope.
- Researched official ComCare, Silver Support, HDB public-rental transfer/tenant assistance, CPF withdrawal, CHAS, MediFund and OneService referrals (links recorded in `docs/02-service-research.md`).
- Specified all main questionnaire routes and conservative fallbacks.
- Designed landing, questionnaire and results screens as accessible wireframes and implemented responsive prototype UI.
- Prepared React + TypeScript + Vite source project.
- Built a separate dependency-free web preview that uses the **same rules engine**.
- Passed **17** automated rules tests and checked browser-preview urgent financial and HDB rental-transfer flows.
- Confirmed Deployxa officially supports React/Vite static builds with `npm run build` and `dist` output.
- Initialized and committed a local Git repository in the creation environment.

## NOT completed — access required
- **GitHub remote repository and teammate invitation:** GitHub account is now connected (17 October), but the account currently has zero repositories. The connector has no create-repository action. Create an empty repository at https://github.com/new; then ChatGPT can publish the files into that repository using the connection. See `GITHUB_SETUP.md`.
- **React dependency installation / full production build:** the creation environment cannot reach the npm registry. Run `npm install`, `npm run build` on one of your computers.
- **Deployxa live deployment:** requires logging into your Deployxa account and publishing the built app. No live URL or credit usage has been verified.
- **Both computers running project:** teammates must separately download and start the app.

## First actions for you
1. Extract the ZIP; read `README.md`.
2. Run `npm install`, `npm run dev` from project folder, then `npm test`.
3. Create a GitHub repo, push this project, and invite your friend.
4. Connect repo to Deployxa, run `npm run build`, use static output `dist`.
5. Test on a phone and manually review every government referral.

**Do not accept live confidential submissions or identify this as a government-endorsed product.**
