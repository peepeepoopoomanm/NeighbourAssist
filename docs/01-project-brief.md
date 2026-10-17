# NeighbourAssist — Project brief
**Hackathon:** Neighborhood Hacks 2026  
**Prepared:** 17 October 2026  
**Status:** Student prototype. Not government-affiliated.

## Problem
During Meet-the-People Sessions in Singapore, one teammate witnessed elderly residents who did not know about digital assistance channels or found them confusing. Other older residents attended evening sessions despite mobility difficulties and sometimes waited in long queues. Many sought financial support, housing changes (particularly more affordable or smaller rental flats), guidance about CPF money, and help with medical costs. These observations occurred more than four months before the hackathon and do not establish current prevalence across Singapore.

## Primary audience
Older residents in Singapore seeking financial and housing assistance, particularly those who have limited familiarity with online systems or mobility constraints.

## Secondary audience
Caregivers and trusted family members helping a resident navigate official programmes. A future professional/caseworker dashboard is beyond the core MVP.

## Product promise
A free, mobile-friendly, plain-language guide that asks a small number of non-sensitive questions, points to a relevant *existing official service*, explains why, and provides practical next steps including offline routes when verified. It never claims to submit an appeal or decide eligibility.

## MVP scope
- Landing page with help categories: everyday expenses; housing and rental; CPF and retirement; medical costs; municipal issues; unsure.
- Conditional, accessible questionnaires that never ask for NRIC, income amounts, medical history, CPF balances, or documents.
- Deterministic recommendation rules, tied to official sources.
- Official referral links, phone details only where verified, steps and checklist.
- Larger-text option; mobile layout; print-friendly results.
- No database, account or case uploads.

## Out of scope
Official applications, government integration, real caseworker dashboard, AI-driven eligibility, direct benefits claims, Singpass/biometric login, confidential case storage, personal financial advice, medical advice, automated emergency response.

## Success measures to test (not claims)
1. Correct recommendation across the planned scenario tests.
2. Each result includes a working official link and non-technical explanation.
3. A resident/caregiver can complete a scenario without assistance from developers.
4. Users understand that NeighbourAssist is unofficial and does not apply for benefits.
5. No sensitive information is transmitted or persisted by the application.

## Risks and mitigations
- **Overlapping services:** multiple pathways can apply; show a primary starting point with supplementary services rather than claiming exclusive eligibility.
- **Outdated government programmes:** data last verified 17 October 2026; recheck before actual public deployment.
- **Low digital literacy:** large touch targets, simple language and caregiver mode; test with older participants before release.
- **Limited evidence of current demand:** describe observations as historical and validate through interviews/tests; don't invent surveys or results.
- **Sensitive matters:** no submissions, personal data collection, third-party analytics or government impersonation.

## Intended demo story
An older resident living alone wants a smaller HDB public rental flat. They open NeighbourAssist, select housing, identify their current tenancy and goal, and are guided to HDB's actual rental-flat transfer information and branch alternative. A second demo involves difficulty affording food and shows an urgent ComCare route.
