# NeighbourAssist — Submission-Night Demo & Devpost Package
**Prepared:** 23 October 2026. **Submission deadline:** 24 October 2026, 1:00 PM Singapore time (as displayed on the live 2026 Devpost page).
**Status:** Draft script and copy, not a published video or submitted Devpost entry. Verify the actual live website while recording.

## Recording setup
- Use the live site: https://neighbourassist.deployxa.online
- Record at 1080p (1920×1080) if possible, with browser zoom 110–125% so question text remains readable.
- Turn off browser notifications, hide bookmarks, personal tabs and account details.
- Use OBS Studio, Windows Snipping Tool video recording or another recorder you already know. Avoid unfamiliar editing software tonight.
- Record voice and screen together. One continuous take or two simple cuts are fine.
- Speak naturally; use fictional selections, never actual residents' details or real banking/Singpass information.
- Aim 3:30–4:15, stay strictly within **2–6 minutes**.

## Demo narration and action cues (approximately 4 minutes)

### 0:00–0:35 — Problem and origin
**ON SCREEN:** Homepage, hero, nine categories.

"Hi, this is NeighbourAssist, my project for Neighborhood Hacks 2026. I built it around something I personally observed while volunteering at Meet-the-People Sessions in Singapore. Some residents, including older people, came to ask for help with financial difficulties, housing, CPF and medical costs. Some weren't sure which government service could help, or found online systems difficult to navigate. I also saw long waits and residents with mobility difficulties. These were my firsthand observations, not a formal survey. My question was: could we make finding the right starting point easier?"

### 0:35–1:25 — Everyday expenses, urgency
**ON SCREEN:** Select Everyday expenses → select urgent lack of essentials → telephone contact → results showing ComCare and agency instructions.

"NeighbourAssist begins with everyday concerns rather than agency names. For example, imagine a resident who urgently needs help paying for food. The questionnaire identifies urgency and skips unnecessary questions. It directs the resident to ComCare, shows its official contact information and explains the next steps. It doesn't claim the resident is eligible, and it doesn't apply on their behalf. The objective is to help them find an appropriate official contact more quickly."

### 1:25–2:15 — Housing, caregiver and Chinese
**ON SCREEN:** Go to All topics. Choose Someone I care for and Simplified Chinese; open Housing and rental → public rental → smaller home; advance to HDB guidance.

"Some people need help from a family member or caregiver. I'll switch to our caregiver mode and Simplified Chinese. The question wording now refers to the person being helped. Here, we're asking about a resident in an HDB public rental flat who hopes to move to a smaller home. NeighbourAssist distinguishes rental transfers from owning and selling an HDB flat, and points to official HDB guidance. It also highlights requirements that residents should check directly with HDB. This makes the questions more specific without collecting private identities or documents."

### 2:15–2:55 — Unknown issue, verify a letter and deadlines
**ON SCREEN:** Return home; switch to English; choose Not sure → Government letter → Agency unknown → Deadline yes → suitable agency status → online → results.

"Residents do not always know how to describe their issue. The 'Not sure' category asks about a familiar situation instead. In this fictional example, someone has received a government letter they don't understand. We ask whether the agency is known and whether a deadline appears. The results explain how to verify the sender and find the responsible agency through official channels. Importantly, contacting an MP does not automatically extend a deadline or postpone a court hearing."

### 2:55–3:35 — Accessibility and optional MPS preparation
**ON SCREEN:** Show enlarged text option; MPS preparation (on a non-emergency route), notes and Parliament MP finder, plus result agency link.

"The site is designed to be usable on a phone, with larger text, English and Chinese, accessible controls and alternate ways to contact agencies. For non-emergency concerns, residents can also prepare for a Meet-the-People Session using a checklist and printable notes created on their device. NeighbourAssist doesn't send any notes to an MP or government agency. It stores no case records and is not affiliated with the Singapore Government."

### 3:35–4:00 — Technology, limits and close
**ON SCREEN:** Live site homepage, then optionally GitHub repository.

"Technically, we built a React and TypeScript website using a deterministic referral engine, verified government links, bilingual guidance and conditional questions. Automated tests cover the major routes, though real-world usability still needs evaluation. We would next test with older residents and caregivers, refine translations and establish a regular source-review process. NeighbourAssist doesn't replace official advice or emergency services, but it makes a confusing first step more approachable. Thank you."

## Alternative recording choices
- If time is tight, skip the Housing or MPS detail and keep the 3-minute core: firsthand problem → ComCare urgent route → Not sure letter verification → bilingual/caregiver → limitations.
- Do not demonstrate actual emergency calls or personal credentials.
- The demo should show **working interactions** rather than scroll past text; spend at least 2 minutes interacting with the live app.

## Ready-to-paste Devpost fields

### Project name
NeighbourAssist — Finding the Right Help Shouldn't Be Hard

### Elevator pitch
NeighbourAssist is a free, bilingual, accessibility-focused guide that helps Singapore residents—especially older people and caregivers—navigate official assistance channels. Through simple adaptive questions, it suggests practical next steps, verified government links and optional Meet-the-People Session preparation, without collecting personal case information.

### What is the specific problem, and how do you know it's real?
I observed this problem while volunteering at Meet-the-People Sessions in Singapore. Residents came with everyday financial difficulties, housing questions, CPF concerns and medical expenses. Some older residents found online assistance channels unfamiliar or confusing, and some endured long waits even when mobility was difficult. On one occasion, I helped a frail visitor home. These are firsthand observations rather than a representative survey. They showed me a gap between services existing and people knowing how to find or use them. NeighbourAssist is a prototype response to that navigation problem.

### What it does
NeighbourAssist offers nine plain-language categories: everyday expenses, housing, CPF and retirement, medical costs, neighbourhood issues, fines and appeals, work and employment, family and social support, and Not sure.

Short, branching questionnaires use general, fixed-choice questions to identify suitable official starting points. A resident with an urgent need for essentials sees a shortened ComCare pathway. Housing and fine questions distinguish different responsible agencies or procedures. Employment routes distinguish salary claims, dismissal, workplace fairness and work injuries. Family routes prioritise immediate safety before ordinary counselling or caregiving referrals. The Not sure pathway helps people interpret an unfamiliar government notice, ask about an existing application, follow up with an agency, or check a suspicious message using official resources.

Results explain the recommended contact channel, offer online/phone/in-person guidance where known, link to official sources and show a checklist. Eligible non-emergency scenarios also provide optional, printable preparation notes for Singapore Meet-the-People Sessions.

The interface supports English and Simplified Chinese, caregiver-specific wording, larger text and mobile layouts. No NRIC, banking details, medical history, case documents or open-ended personal narratives are collected. The site is independent and does not file applications, guarantee eligibility or overturn decisions.

### How we built it
We built NeighbourAssist using React, TypeScript and Vite, deployed on Deployxa, and published source code on GitHub. A deterministic rules engine maps adaptive multiple-choice answers to source-linked government-service referrals. We implemented bilingual content, accessible navigation, caregiver phrasing, optional on-device MPS preparation and safety-first exception routes. Our test suite includes 107 automated test definitions; a prior 107-test run passed before the final five-choice simplification. Use an up-to-date test result in the submission only if the latest version has been rerun and verified.

We used ChatGPT to assist with ideation, research, drafting, coding and debugging, while reviewing and testing the implementation ourselves. Disclose any other AI tools actually used.

### Challenges
The hardest part was simplifying complex public-service information without pretending that the prototype can determine eligibility or make an official decision. We also had to keep different agencies and legal deadlines separate, protect user privacy, provide meaningful Chinese and caregiver wording, and ensure that urgent safety concerns never suggest waiting for an MP appointment.

### What's next
We would conduct consent-based usability tests using fictional scenarios with older residents and caregivers, improve Singapore Mandarin wording with fluent reviewers, recheck agency guidance on a schedule, and investigate more languages and further accessibility improvements. Integrations with public agencies would require their authorisation and appropriate privacy safeguards.

### Links
Website: https://neighbourassist.deployxa.online
GitHub: https://github.com/peepeepoopoomanm/NeighbourAssist
Video: [PASTE FINAL PUBLIC VIDEO URL HERE]

## Submission checklist (do not skip)
- [ ] Verify hackathon eligibility and membership on Devpost. The published rules state 13–21 and high school/equivalent secondary education; the organiser may need to confirm polytechnic/NSF status.
- [ ] Verify project creation timeframe and accurately disclose pre-event development, if any. The official rules require code, design and content to be produced in the official hacking window; pre-event planning is permitted.
- [ ] Final local test/build if not already done: `git pull`, `npm.cmd test`, `npm.cmd run build`; latest simplified five-choice build may not be verified.
- [ ] Open deployed site; confirm five-choice Not sure, one working urgent financial route and Chinese/caregiver toggles.
- [ ] Record and review video (2–6 minutes), no sensitive personal information or misleading demo.
- [ ] Upload to YouTube as **Unlisted** (not Private) or another publicly accessible host; test link while signed out.
- [ ] Enter project name, elevator pitch, full written description, technologies, challenges, future work.
- [ ] Paste working video link, public GitHub URL, live website URL.
- [ ] Disclose AI assistance truthfully and confirm contributor credits.
- [ ] Save and **Submit** on Devpost; check for an actual submission confirmation, not just a saved draft.
- [ ] Screenshot confirmation and check project preview.
- [ ] Finish before midnight SGT 23 October, leaving buffer before Devpost's 24 October 1 PM SGT deadline.

## Official event links
- https://neighborhood-hacks-2026.devpost.com/rules
- https://neighborhoodhacks.org/rules/
- https://neighborhood-hacks-2026.devpost.com/
