# NeighbourAssist — Neighborhood Hacks 2026 submission draft

> **Draft, not submitted.** Update the team details, confirmed hackathon eligibility, manual-testing results and video URL before publishing. Do not include real resident information.

## IMPORTANT — eligibility and deadline confirmation

- The live Devpost overview currently lists entrants **ages 13–21** and **high-school students only**, while the linked organizer rules use **high-school / equivalent secondary education** (generally ages 14–19). Singapore polytechnic education is not unambiguously included. **Ask organizers in writing if your team is eligible**, especially if any member is enrolled in a diploma programme. Do not misstate enrolment.
- The hackathon requires that the actual code/design/content be built **16–23 October 2026**; earlier ideation and planning are allowed. Confirm your commit history and factual timeline. Never imply pre-event code was built during the event.
- The official Devpost deadline currently shows **24 October 2026, 12:00 AM CDT**; the organizer timeline also says **23 October, 11:59 PM CST**. Because these timezone labels differ, treat the Devpost live countdown as authoritative and **submit comfortably early**, not at the last minute.
- Required: title, elevator pitch, full description with first-hand evidence, **2–6-minute** demo video, and public code-repository link.
- Sources: https://neighborhood-hacks-2026.devpost.com/rules ; https://neighborhood-hacks-2026.devpost.com/ ; https://neighborhoodhacks.org/rules/ ; https://neighborhoodhacks.org/judging/

## Project title

**NeighbourAssist — Finding the Right Help Shouldn't Be Hard**

## Elevator pitch

NeighbourAssist is a free, bilingual guide that helps people in Singapore—especially older residents and their caregivers—find the right official assistance channel for financial, housing, CPF, healthcare and neighbourhood concerns. It provides understandable next steps and optional Meet-the-People Session preparation without collecting personal documents, assessing eligibility or pretending to be a government service.

## What is the specific problem, and how do you know it's real?

One teammate personally observed this problem while volunteering at Meet-the-People Sessions (MPS) in Singapore. Some residents, including older people, came to ask for help with day-to-day financial hardship, housing arrangements, CPF questions and medical expenses. Some were unfamiliar with or uncomfortable using digital government channels, while others faced lengthy waits at in-person sessions. The teammate also encountered residents with mobility difficulties, including helping a frail visitor home after a session.

That experience raised a practical question: **If a resident cannot easily work out which government agency to contact, should the first step toward assistance be this difficult?**

We are describing **individual observations**, not a statistically representative survey. NeighbourAssist does not claim to have reduced waiting times or proven nationwide demand. Its purpose is to prototype a clearer starting point and validate it through direct user testing.

## What our solution does

NeighbourAssist now offers **nine plain-language categories**: everyday expenses, housing and rental, CPF and retirement, medical costs, neighbourhood issues, fines and appeals, **work and employment**, **family and social support**, and “Not sure”.

Based on fixed, non-sensitive multiple-choice answers, it suggests an **official starting point** and shows practical ways to proceed online, by telephone or in person where those channels are known.

- **Urgent essentials:** A short path directs someone struggling to afford food or basics to the ComCare hotline promptly, without making them complete unnecessary questions or wait for an MP session.
- **Housing:** The questions distinguish renting an HDB public rental flat from owning an HDB flat, rental arrears, tenancy changes and downsizing; they explain that rental transfers are subject to HDB's requirements.
- **CPF / retirement:** The system separates retirement withdrawals from information about Silver Support, without claiming to determine someone's available balance or eligibility.
- **Healthcare:** Clinic subsidies and hospital-bill assistance are treated differently, with guidance to a Medical Social Worker for possible MediFund assistance.
- **Neighbourhood issues:** OneService referrals explain what a report needs, such as an issue location and photograph.
- **Fines & Appeals:** A new agency-aware journey distinguishes HDB parking, URA parking, Traffic Police and LTA notices; checks for a court summons first; and sends payment, appeal-status or financial-difficulty enquiries to the appropriate official page where verified. It does not promise waivers for first offences or honest mistakes.
- **Work & Employment:** Salary and dismissal concerns point to official TADM channels, workplace harassment to TAFEP, and work injuries to MOM. Filing deadlines are explained without making an eligibility decision.
- **Family & Social Support:** Relationship and divorce concerns point to FAM, wider social concerns to Family Service Centres, caregiving to AIC and preschool enquiries to LifeSG/ECDA. Immediate danger directs users to Police 999; non-immediate abuse concerns to NAVH 1800-777-0000. Safety routes avoid a routine MPS handoff.
- **Not sure / agency follow-up:** Residents can select an unclear government letter, a rejected or pending application, an unanswered enquiry, a suspected scam, or “None of these”, without knowing the responsible agency. Government directories and ScamShield provide safe starting points, while the homepage's eight purpose-built service categories remain accessible through **All topics**. Optional **non-emergency** MPS preparation offers a printable fixed-choice summary and Parliament MP finder.

The interface supports **English and Simplified Chinese**, **larger text**, **caregiver-specific wording**, mobile layouts and keyboard navigation. It does **not** collect NRIC numbers, addresses, CPF balances, bank records, medical records or Singpass details.

**Important boundaries:** It is not affiliated with the Singapore Government. It does not submit benefits, employment claims, police reports or MP appeals; it cannot guarantee faster processing or approval, waive fines, provide legal advice, postpone court attendance or replace an emergency service. Official organisations remain responsible for decisions.

## How we built it

- **Frontend:** React, TypeScript and Vite.
- **Decision engine:** A deterministic rule-based referral engine, without a predictive AI eligibility model.
- **Content:** Bilingual, agency-specific referral and contact instructions based on linked Singapore government sources.
- **Quality checks:** Node.js test runner, TypeScript checks and Vite production build. On 19 October 2026 the developer's main PC confirmed **93/93 automated tests passing** and a successful nine-category production build, which the developer subsequently redeployed. The original six-option Not sure version passed **107/107 tests** and a production build on 20 October. The subsequently simplified five-option version has **not yet been retested**. Automated tests cannot replace human accessibility or agency-link checks.
- **Source control and CI:** GitHub and GitHub Actions.
- **Hosting:** Deployed via Deployxa. The provider's deployment logs reported a successful container health check and HTTPS certificate. The public site's browser-based acceptance tests should be completed before claiming it is fully live-tested.
- **AI disclosure:** ChatGPT assisted with ideation, drafting, code changes and/or debugging during development. The team reviewed the results, maintained project decisions and ran tests. Accurately identify all AI assistants used, and do not claim work was manually written if it was AI-assisted.

## Challenges we faced

1. **Making complex public-service guidance understandable** without misrepresenting eligibility, official authority or contact channels.
2. **Designing for more than one type of user:** residents can get help themselves, while trusted caregivers may need different wording and safe handling of another person's credentials.
3. **Keeping safety and privacy boundaries:** no personal case history, medical details or official application submission is gathered by the prototype.
4. **Handling policy-dependent pathways:** a rejected request is not the same as an initial enquiry; an MP appeal does not guarantee approval or faster processing.
5. **Making content usable in Chinese and on small screens:** translations, button names on English-only government sites, font scaling and assistive-technology testing remain important.
6. **Build and deployment verification:** maintaining reproducible npm dependencies and building a static React application for managed hosting.

## What we would build next

First we would conduct consent-based usability tests with older residents and caregivers using **fictional scenarios**, record points of confusion, and have the Chinese text reviewed by someone fluent in Singapore Mandarin.

Then we would introduce a sustainable process to re-check official content, support additional local languages where feasible, improve screen-reader behaviour and low-bandwidth usability, and co-design the guidance with community volunteers and social-service professionals. We would only consider deeper agency integrations if authorised, privacy-safe and operationally supportable.

## Links

- **Public website:** https://neighbourassist.deployxa.online
- **GitHub source:** https://github.com/peepeepoopoomanm/NeighbourAssist
- **Demo video:** [ADD A WORKING VIDEO URL]
- **Team:** [ADD MEMBERS, WITH CONSENT]
- **Build period:** [CHECK COMMIT HISTORY AND FILL ACCURATE DATES]

## Demo video storyboard — 3 minutes 30 seconds (target)

**0:00–0:35 — Firsthand problem.** Explain the experience volunteering at MPS: older residents, queues, difficulty finding official assistance; explicitly distinguish personal observation from measured research. Show title and homepage.

**0:35–1:20 — Financial urgency.** In English, choose **Everyday expenses** → urgent help with essentials → preferred telephone contact. Show the short ComCare route, phone number, official instructions and notice that the site does not submit an application.

**1:20–2:10 — Housing and caregiving.** Return home, switch to **Someone I care for** and **Simplified Chinese**. Choose **Housing & rental** → public rental → smaller home. Show context and HDB transfer guidance, mentioning the two-year condition and that actual approval rests with HDB.

**2:10–2:45 — After contacting an agency.** Demonstrate a fictional **rejected** or **unresolved** housing situation, the additional review-reason question, and optional MPS preparation. Expand the notes, show official Parliament MP lookup and print preview. Explicitly state: no data is sent to an MP.

**2:45–3:15 — Fines & Appeals and accessibility.** Briefly show an HDB-versus-URA parking enquiry and the special court notice warning, then the text-size selector. Mention that agencies, not this site, decide outcomes.

**3:15–3:30 — Value and limitations.** Summarize that NeighbourAssist turns uncertainty about government services into a clear starting point. Mention the GitHub repository and that government links and human usability need ongoing review. Close on the live website URL.

**Recording rules:** Use fictional scenarios only. Don't enter or expose NRIC, real addresses, resident stories with identifying details, Singpass screens, or genuine case files. Avoid editing cuts that conceal failures.

## Final publishing checklist

- [ ] Organizers have confirmed team/student eligibility; registration and team membership are accurate.
- [ ] Source code/design/content were created within the allowed hacking period, and attribution is complete.
- [ ] Devpost draft created and live project name/elevator pitch entered.
- [ ] Final written description reviewed by all teammates; no fabricated statistics, interviews, endorsements or impact.
- [ ] Website works in a real browser: HTTPS, all categories, bilingual caregiver mode, mobile zoom, print and official links.
- [ ] At least one non-developer runs a fictional scenario; record actual feedback if available.
- [ ] Required video uploaded and publicly viewable by judges, length 2–6 minutes.
- [ ] Public GitHub repository and deployed URL included.
- [ ] Submission completed and confirmed in Devpost before its live countdown ends.

## Added source-backed module: Fines & Appeals

Research and implementation notes: [Fines & Appeals source document](08-fines-appeals-research.md), [Work & Family source notes](09-employment-family-research.md) and [20 October content/usability audit](10-content-and-usability-audit.md). The previous nine-category release was reported redeployed successfully after a 93/93 test run. **The latest Not sure journey is pending test execution and redeployment.**

## Additional demonstration footage for the nine-category release

After the 107-test build passes and the latest Deployxa deployment is confirmed, capture a 20–30 second illustration of **Work & Employment** (choose unpaid salary and show the TADM deadline caution), and a short **Family & Social Support** view (ordinary caregiver route to AIC). Show the family safety-first question without staging an actual emergency, and explain that the Police and NAVH routes do not wait for MPS. The existing 3½-minute storyboard may need to be shortened elsewhere to remain below six minutes; record only what is actually deployed and tested.

## Demo option: solving the "I don't know which agency" problem

If the 20 October improvement passes tests and reaches Deployxa, show a fictional resident with an unclear government letter selecting **Not sure → Received a government letter → Agency unknown → Deadline stated**. The result must explain how to verify the sender and find a responsible agency, **not** claim the student website verifies the letter or appeals the decision. An alternate demonstration is a suspicious message routed to the official **ScamShield 1799** helpline (without staging a real scam or revealing personal data). The bank-first urgent scenario can be described briefly without showing a real bank account.
