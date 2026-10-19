# NeighbourAssist — Project brief
**Hackathon:** Neighborhood Hacks 2026  
**Prepared:** 17 October 2026  
**Status:** Student prototype. Not government-affiliated. Revised after MPS user-research discussion on 19 October 2026.

## Problem
During Meet-the-People Sessions in Singapore, one teammate witnessed elderly residents who did not know about digital assistance channels or found them confusing. Other older residents attended evening sessions despite mobility difficulties and sometimes waited in long queues. Many sought financial support, housing changes (particularly more affordable or smaller rental flats), guidance about CPF money, and help with medical costs. These observations occurred more than four months before the hackathon and do not establish current prevalence across Singapore.

## Primary audience
Older residents in Singapore seeking financial and housing assistance, particularly those who have limited familiarity with online systems or mobility constraints.

## Secondary audience
Caregivers and trusted family members helping a resident navigate official programmes. A future professional/caseworker dashboard is beyond the core MVP.

## Product promise
A free, bilingual, mobile-friendly guide that helps residents understand ordinary government assistance channels, identify appropriate next steps after an unsuccessful or pending agency enquiry, and prepare structured notes for a Meet-the-People Session (MPS) if they choose. It never claims to submit an appeal, obtain preferential treatment, or decide eligibility.

## MVP scope
- Landing page with **nine** help categories: everyday expenses; housing and rental; CPF and retirement; medical costs; municipal issues; fines and appeals; **work and employment**; **family and social support**; unsure.
- Conditional, accessible questionnaires that never ask for NRIC, income amounts, medical history, CPF balances, or documents.
- Deterministic recommendation rules tied to official sources. Fines distinguish issuers and court summonses; employment distinguishes TADM claims, TAFEP advice and MOM work injuries; family support distinguishes urgent safety from counselling, AIC caregiving and ECDA childcare. No eligibility, legal or safety determination is made.
- Official referral links, phone details only where verified, steps and checklist.
- Larger-text option; bilingual English and Simplified Chinese guidance; mobile layout; print-friendly results.
- Agency-contact status (first enquiry, awaiting reply, rejected or unresolved), with optional human/MPS guidance and on-device printable fixed-choice summary.
- No database, account or case uploads.

## Out of scope
Fine waivers, legal advice, court filings, employment dispute submissions, police reports, protection assessments or appeal outcomes; official applications, government integration, real caseworker dashboard, AI-driven eligibility, direct benefits claims, Singpass/biometric login, confidential case storage, automatic MP letters, promises of MPS queue reductions or faster processing, personal financial advice, medical advice, automated emergency response.

## Success measures to test (not claims)
1. Correct recommendation across the planned scenario tests.
2. Each result includes a working official link, agency-contact alternatives and a non-technical explanation.
3. A resident/caregiver can complete a scenario in either language without assistance from developers.
4. Users understand that NeighbourAssist is unofficial and does not apply for benefits.
5. No sensitive information is transmitted or persisted by the application.
6. Users can explain the difference between ordinary agency contact and optional MPS assistance, without expecting guaranteed approval.

## Risks and mitigations
- **Overlapping services:** multiple pathways can apply; show a primary starting point with supplementary services rather than claiming exclusive eligibility.
- **Outdated government programmes:** data last verified 17 October 2026; recheck before actual public deployment.
- **Low digital literacy:** large touch targets, simple language and caregiver mode; test with older participants before release.
- **Limited evidence of current demand:** describe observations as historical and validate through interviews/tests; don't invent surveys or results.
- **Sensitive matters:** no submissions, personal data collection, third-party analytics or government impersonation.
- **MPS misunderstandings:** never imply a referral or MP letter guarantees higher priority, faster processing, approval, or an agency exception.
- **Fine and court deadlines:** never suggest an agency appeal or MP contact automatically postpones court attendance. Do not imply first-offence mistakes guarantee a waiver. See `docs/08-fines-appeals-research.md`.
- **Employment dispute deadlines:** MOM/TADM salary and dismissal claim deadlines vary; warn users not to wait for an MP meeting. Some work arrangements have separate rules. See `docs/09-employment-family-research.md`.
- **Family safety:** ask about imminent danger first; show Police 999 (or SMS 70999) and NAVH as appropriate, without treating MPS as emergency response. Never collect personal family or abuse narratives.
- **Language handoffs:** Chinese guidance cannot guarantee all external application steps are available in Chinese; give phone or in-person fallbacks.

## Intended demo story
An older resident living alone wants a smaller HDB public rental flat. They open NeighbourAssist, select housing, identify their current tenancy and goal, and are guided to HDB's actual rental-flat transfer information and branch alternative. A second demo involves difficulty affording food and shows an urgent ComCare route.
