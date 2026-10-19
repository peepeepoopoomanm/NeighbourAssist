# NeighbourAssist — Final verification and release checklist

**Project:** Neighborhood Hacks 2026 student prototype  
**Status:** Pre-launch. Do not present NeighbourAssist as an official government or MP service.

## 1. Official service link audit (October 2026)

The service directory is in `src/engine.ts` and the detailed bilingual instructions are in `src/journeys.ts`. This table distinguishes confirming *published information* from testing the actual service form. Even a reachable website may change its application buttons or availability.

| Service and use | Primary official source | Source review | Outstanding browser check |
| --- | --- | --- | --- |
| ComCare: urgent Interim Assistance (IA) | https://www.msf.gov.sg/what-we-do/comcare | IA, online application entry and hotline 1800-222-0000, daily 7 am–midnight confirmed on ComCare page | Follow “Apply for IA”; verify actual form/phone journey |
| ComCare: Short-to-Medium-Term Assistance (SMTA) | https://www.msf.gov.sg/what-we-do/comcare | SMTA criteria and application entry confirmed | Check SupportGoWhere sign-in handoff |
| ComCare: Long-Term Assistance (LTA) | https://www.msf.gov.sg/what-we-do/comcare | LTA intended population and application entry confirmed | Check SupportGoWhere handoff |
| Existing ComCare and SSO guidance | https://www.msf.gov.sg/our-services/directories | SSO finder and ComCare hotline listed | Test postal-code search and agency opening hours |
| Silver Support | https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme | Age 65+, qualifying citizen, automatic yearly assessment; age alone insufficient | Test eligibility-check button, do not log in with a resident's account |
| HDB public rental transfer | https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/transfer-to-another-public-rental-flat | Registered tenant, occupation >=2 years, other conditions; HDB branch counter option | Validate zone selector and FormSG handoff with fictional pre-sign-in steps |
| HDB rental payment problems | https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants | Instalments, SSO referrals, smaller flat support listed | Verify branch directions for test location |
| HDB change of tenancy | https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/change-of-tenancy | Official page and topic confirmed | Validate tenant-versus-occupier distinctions at application stage |
| HDB rightsizing/Silver Housing Bonus | https://www.hdb.gov.sg/managing-my-home/retirement-planning/monetising-flat-for-retirement/silver-housing-bonus | Official programme page found; no personal eligibility promised | Check criteria and related links in browser |
| HDB general enquiries | https://www.hdb.gov.sg/about-us/contact-us | Branch Service Line 6225-5432, weekdays 8 am–5 pm except public holidays, confirmed | Verify the correct HDB branch for the resident and current service-centre arrangements |
| CPF withdrawal at 55+ | https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs | Age 55 withdrawal route and retirement-dashboard instructions confirmed | Test link to dashboard before authentication |
| CPF general and contact | https://www.cpf.gov.sg/service/ | Retirement hotline 1800-227-1188, Mon–Fri 8:30 am–5:30 pm confirmed | Check CPF service-centre booking flow |
| CHAS | https://chas.moh.gov.sg/Home/Welcome | Official eService and hotline 1800-275-2427, weekday 8:30 am–6 pm confirmed | Check login/application/renewal route |
| MediFund | https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund/ | Medical Social Worker at approved institution; no general application promised | Test human-handoff script with a fictional hospital enquiry |
| General medical subsidies | https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/ | Official directory exists | Confirm the appropriate category page and contact method |
| OneService | https://www.oneservice.gov.sg/oschatbot-faqs/ | Chatbot requires description, photo, precise location, observation time and contact details; original bot English-only, Tell Us beta supports Chinese | Try beta Mandarin navigation with fictional issue; verify fallback for users who cannot take a photo |
| LifeSG | https://www.life.gov.sg/ | Government information directory reachable | Verify that labelled topics still match current navigation |
| MPS MP finder | https://www.parliament.gov.sg/mps/find-mps-in-my-constituency | Official constituency lookup accepts street/postal-code; individual MP pages provide contact information | Confirm MPS arrangements for chosen fictional constituency; do not assume sessions are available without confirmation |

**Important:** The MSF ComCare page identifies **1800-222-0000** as the ComCare hotline. Some other MSF pages also offer the consolidated **1800-111-2222** hotline, which is a separate entry point. Keep the primary referral tied to the specific ComCare page unless that source changes.

### Source review cannot establish

- Whether official account creation, Singpass handoffs and appointment bookings work: these require real browser navigation and authorised users.
- Whether an agency accepts or approves a particular person's application.
- Whether all external official websites are fully translated into Chinese.
- Whether a caller actually gets through or any particular branch has appointments.

## Fines & Appeals expansion — release addendum (19 October 2026)

The original release checklist pre-dates the fines module. Before deploying this update, use [the fine-and-appeal source audit](08-fines-appeals-research.md) and check all of the following:

- [ ] Verify the issuing agency on sample HDB, URA, Traffic Police and LTA notices before opening a recommended agency site.
- [ ] Verify that **court summons** answers finish quickly, warn about attendance and never promise that an MP letter changes proceedings.
- [ ] Confirm that HDB, URA and SPF **payment** requests lead to official payment pages; URA and SPF appeal-status enquiries use status pages; LTA e-scooter enquiries do not automatically use vehicle appeals.
- [ ] Complete English, Chinese and caregiver paths, including first-time honest mistake and financial hardship. The page must not claim either is a guaranteed waiver ground.
- [ ] Check unknown-issuer cases direct users to identify the responsible agency, rather than inventing a common appeal form.
- [ ] Re-run the **new 73-test suite** and TypeScript/Vite build locally; verify GitHub Actions and that Deployxa serves the same commit. **The earlier 54-test passing run does not validate these new changes.**
- [ ] Have a fluent Singapore Mandarin speaker and a non-developer run at least one fines scenario before public demonstration.

## 2. Chinese and caregiver checks

- [ ] Switch to Simplified Chinese and complete **all six** help categories.
- [ ] Confirm the HDB words `调换租赁组屋` / `换屋` mean transfer to another public rental unit, **not** subletting (`转租`).
- [ ] Confirm **MediFund = 保健基金（MediFund）** is consistent in directions and results.
- [ ] Ensure every official English button name quoted in Chinese matches the actual official interface.
- [ ] For OneService Chinese, use the supported **Tell Us @ OneService beta** chatbot; original chatbot is English-only according to OneService.
- [ ] Repeat financial urgent, HDB transfer, CPF Silver Support, MediFund and MPS notes in caregiver mode. Wording must refer to the **person being helped**, not incorrectly to the helper.
- [ ] Ask a fluent Singapore Mandarin speaker, preferably familiar with older residents, to review comprehension. Automated translation-coverage tests cannot evaluate naturalness.
- [ ] Explain that official websites may require English, Singpass, a photograph, or contact information **only on the official website**, never inside NeighbourAssist.

## 3. Accessibility and device checks

- [ ] Keyboard-only: Tab/Shift+Tab through language controls, categories, answers, Back/Continue and results; Enter/Space activate controls; focus moves to the new heading after each wizard step.
- [ ] Screen reader (Windows Narrator or NVDA): page language, question heading, progress indicator, radio labels, contact choices and MPS expansion are announced correctly.
- [ ] Small-screen 320 px and 375 px widths, at both font-size settings: no side scrolling, clipping, unusably small text or overlapping buttons.
- [ ] 200% browser zoom and system text magnification.
- [ ] Prefer-reduced-motion device setting: no forced smooth scroll or meaningful animation.
- [ ] Print normal guidance and separately print MPS notes: no clipped content or unrelated navigation.
- [ ] For urgent financial requests, no lengthy questions block the referral.
- [ ] Have at least one non-developer complete a fictional scenario without instructions.

## 4. CI, dependencies and local build

- [ ] `git pull`
- [ ] `npm ci` (uses the committed `package-lock.json`)
- [ ] `npm test` (includes the release-audit static checks)
- [ ] `npm run build` (generates `dist/`)
- [ ] `npm run preview` (check the **production build**, usually at http://localhost:4173/; stop it with Ctrl+C afterward)
- [ ] `npm audit` (investigate any new issues; an earlier audit showed zero advisories)
- [ ] Verify that the latest **Validate NeighbourAssist** GitHub Actions run is green after source edits.
- [ ] Ensure no `.env`, credentials, case documents or personal details are committed.

## 5. Deployment handoff

The app is a **static React / TypeScript / Vite build**, with no production backend, database, application authentication or environment variables required by the current code.

- **Build command:** `npm ci && npm run build` (or configure separate install `npm ci` and build `npm run build`)
- **Publish directory:** `dist`
- **Node.js:** use a supported 22 LTS environment consistent with the CI workflow
- **SPA paths:** current application has no URL-based client-side router, so no custom deep-link rewrite is required for this version

Deployxa's public pages now explicitly advertise React/Vite deployments, Git-connected static site builds and automatic HTTPS; see https://deployxa.com/docs and https://deployxa.com/. Actual field labels and options must still be checked in the logged-in account. **Do not treat these marketing pages as proof of a successful deployment.**

### Deployxa staging/deployment walkthrough

1. Open https://deployxa.com/ and sign in to your own account.
2. Create a new deployment/project and choose to connect GitHub (or, if available, a public Git repository URL).
3. Select repository `peepeepoopoomanm/NeighbourAssist` and branch `main`. **Verify the exact repository name**, and allow only the permissions needed for the project.
4. Confirm that Deployxa detects **React (Vite)** or offers a suitable **static website** build. Don't choose an Express/API project with a fabricated runtime server.
5. Where manual configuration is available, set install command `npm ci`, build command `npm run build`, and output/publish directory `dist`. Use the platform's default supported Node version consistent with the Vite toolchain (the repository CI uses Node 22).
6. Prefer a **preview/staging** deployment first if the account offers it. Do not enable a custom domain or pay for hosting before the site passes the acceptance checks below.
7. Wait for the provider's build to finish, open the reported URL, confirm HTTPS, and test the app there. A successful local build does **not** prove the hosted page is functional.
8. Save the deployment URL and commit identifier in the team's submission notes. If you want continuous delivery on `main`, enable it only after confirming the deployed build is correct.

If Deployxa asks for a **start command** or container port instead of an output folder, stop and inspect the provider's React/Vite deployment guide or build logs rather than using `npm run dev` or `vite preview` as a production server. Vite specifically documents that its `preview` command is for local testing, not production hosting. See https://vite.dev/guide/static-deploy.

**Account, costs and privacy:** Check the plan limits, logging/analytics and retention shown in the actual account. The MVP needs no database, AI API key, secrets or resident login. A managed host may still collect ordinary access logs such as IP addresses; review the provider's privacy terms before public launch.

After deployment:
- [ ] Verify HTTPS, a working root page, no browser-console errors and no unexpected outbound API requests.
- [ ] Verify English, Chinese, caregiver mode, large text, real external links and print mode at the public URL.
- [ ] Inspect the browser Network tab: resident multiple-choice responses should not be transmitted to a server.
- [ ] Review provider access logs, analytics, caching and any configurable security headers.
- [ ] Clearly disclose that this is an unofficial hackathon prototype and does not lodge an agency application or MPS appeal.
- [ ] Keep a rollback point at the last GitHub commit with passing CI.

## 6. Hackathon evidence and submission

- [ ] Prepare a 2–3-minute narrated walkthrough with fictional examples.
- [ ] Obtain consent before using any resident or volunteer likeness/story; do not expose constituent cases.
- [ ] Capture screenshots of English, Chinese, caregiver, urgent ComCare and MPS note features.
- [ ] Verify the exact submission deadline, eligibility rules and Devpost requirements.
- [ ] Describe what you built, what you personally observed, accessibility measures, what is still a prototype, and any AI assistance honestly.

**Release decision:** Public deployment should follow completion of the live-browser and accessibility checks above. A passing automated test suite alone is not enough.
