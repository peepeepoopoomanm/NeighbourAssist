# Work & Employment / Family & Social Support — research and implementation

**Reviewed:** 19 October 2026. **Status:** Student-prototype source review, not professional legal, child-protection, social-work or medical advice. Official agency information can change.

## 1. Work & Employment

Different employment problems belong to different statutory or advisory pathways. NeighbourAssist does not calculate eligibility, submit claims, determine wrongful dismissal or guarantee a settlement.

| Issue | Official source | Supported guidance and limits |
| --- | --- | --- |
| Salary and employment-payment disputes | https://www.mom.gov.sg/employment-practices/managing-employment-disputes | MOM directs qualifying salary disputes to TADM's Ask TADM / eServices and mediation; generally **one year from the dispute** if still employed, or **six months from the last day** if employment ended. Statutory coverage and special employment arrangements may differ. |
| Wrongful dismissal | https://www.mom.gov.sg/employment-practices/termination-of-employment/wrongful-dismissal | For **most** wrongful dismissal claims, file with TADM within **one month after the last day of work**. Some pregnancy/maternity-related or age/re-employment cases involve different criteria or deadlines; check the official service urgently. |
| Workplace discrimination, harassment, unfair treatment | https://www.mom.gov.sg/faq/workplace-harassment/what-can-a-victim-of-workplace-harassment-do | MOM recommends TAFEP for advice or reporting; **6838 0969** is the published TAFEP advice number. Serious threats can require Police assistance. The Workplace Fairness Act is expected to be implemented later (end-2027), not treated as active law in October 2026. See https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/1007-written-answer-to-pq-on-workplace-harassment-complaints |
| Work injuries and occupational diseases | https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/employees-how-to-claim | Notify employer promptly, seek medical care, use MOM's WICA guidance and contact MOM if the employer does not meet obligations. Coverage is not assessed by the app. |
| Other workplace disputes | https://www.mom.gov.sg/employment-practices/employment-act/advisory-services | MOM directs people to TADM, TAFEP, unions or other services according to their circumstances. Not every employment contract or self-employed dispute falls within the same filing process. |

### Employment questionnaire design

- **w_issue**: pay / possible dismissal / harassment or discrimination / work injury / other.
- **w_status** (salary and dismissal only): currently working, left the job, self-employed/uncertain, or unsure.
- **w_recency** (dismissal only): left within approximately one month, longer, or unsure. This **does not** establish eligibility; it emphasises reviewing the deadline urgently.
- **agency_status**: first enquiry, awaiting reply, rejected, unresolved, unsure.
- **contact**: web / phone / in-person / unsure.

Routing: salary → `work_salary` TADM; dismissal → `work_dismissal` TADM; fairness → `work_fairness` TAFEP; injury → `work_injury` MOM; other → `work_general` MOM directory.

**Safeguard:** TADM claim deadlines apply to qualifying case types; do not confuse salary limitation periods with the **shorter** wrongful dismissal window. No employer names, salary amounts, case descriptions, letters or employment records are entered into this prototype.

## 2. Family & Social Support

### Official sources

| Concern | Official source | What the app does |
| --- | --- | --- |
| Imminent danger | https://www.msf.gov.sg/what-we-do/break-the-silence/get-help/i-want-to-report-domestic-violence | MSF states **call Police 999** if there is imminent danger; **SMS 70999** if unable to speak safely. The app gives immediate directions instead of a routine MPS referral. |
| Abuse, neglect, family violence (not immediate danger) | https://www.msf.gov.sg/what-we-do/break-the-silence/get-help/i-am-experiencing-abuse | MSF's **24-hour NAVH 1800-777-0000** provides reporting and specialist guidance. For immediate danger use 999, not NAVH as a substitute. |
| Family counselling, marriage or divorce | https://www.msf.gov.sg/what-we-do/fam | FAM centres offer relationship and divorce support; MSF consolidated **1800-111-2222** (ask for “Family Counselling” or “Divorce Support”). Check centre and appointment details before travel. |
| Broader social or emotional difficulties | https://www.msf.gov.sg/our-services/directories | Family Service Centres (FSC) can provide information, referral, casework and social support. Use official postal-code centre finder directly; do not enter addresses into NeighbourAssist. |
| Caregiver and eldercare resources | https://www.aic.sg/contact-us | Agency for Integrated Care (AIC) advises on care services, AIC Link locations, caregiver support and schemes; call **1800-650-6060** (Mon–Fri 8:30 am–8:30 pm; Sat 8:30 am–4 pm; closed Sundays/public holidays). AIC may ask for identity verification **only on its own hotline**, never here. Official AIC uses `aic.sg`, not a `.gov.sg` address. |
| Preschool and childcare subsidies | https://www.life.gov.sg/family-parenting/preschool-childcare | LifeSG explains ECDA childcare subsidies and enrolment. The authorised preschool and Form 1 invite are used for official subsidy applications, not this site. See https://www.life.gov.sg/services-tools/form-1-preschool |

### Family questionnaire design

- **family_safety is asked first**. Danger → Police 999 immediately. Concern about abuse/neglect/violence → NAVH. Both end the questionnaire at this first step; no further family background questions are required.
- If no known immediate danger or the person prefers not to disclose, ask **family_issue**: relationship stress, separation/divorce, caregiving, preschool/childcare, essential living expenses or other.
- Then ask about existing agency contact and preferred official contact route.
- Relationship and divorce → FAM; caregiving → AIC; preschool → LifeSG/ECDA; wider social hardship → FSC, plus SSO as supplementary information where appropriate.

**Safety guardrails:**

- For `family_safety=danger` or `concern`, the app shows a prominent call link and **does not show optional MPS preparation**. MPS is not an emergency service.
- It never solicits victim names, details of abuse, witness information, children's identities, NRIC, health records, addresses, free-text narratives or photographs.
- The helper/caregiver version refers to the person needing help and says to act with permission; in an emergency, follow Police directions.
- Do not imply FSC/FAM/AIC approval or suggest people can rely on the app to notify responders or social workers.
- Even if a person selects “not sure”, family pages display a visible Police 999 safety message rather than treating their uncertainty as proof they are safe.
- For an emergency, users should not wait to finish this prototype, fill a form or request MP assistance.

## 3. Technical handoff

- Two new `Category` values: `employment`, `family`.
- Five new questions: `w_issue`, `w_status`, `w_recency`, `family_safety`, `family_issue`.
- Eleven new `services`, bilingual `guides`, translations, caregiver overrides and icons.
- `getRecommendations` routes to official agency-specific services; `getQuestionIds` maintains conditional follow-ups and immediate safety bypass.
- `App.tsx` shows family emergency priority and employment filing deadline reminders. Family safety routes do not expose the optional MPS section.
- `mps.ts` includes safety-first language if a family-case note is generated programmatically.
- Test host checks explicitly permit `aic.sg` as an authoritative AIC agency site, alongside recognised Singapore official .gov.sg hosts.

## 4. Browser acceptance tests still required

1. Salary claim → currently employed → TADM; then test after leaving → TADM. Verify the one-year/six-month instructions.
2. Possible wrongful dismissal → left more than one month ago → TADM; warning should not claim the case is automatically invalid or automatically accepted.
3. Workplace harassment → TAFEP and 6838 0969.
4. Work injury → MOM injury page, not TADM's ordinary salary claim form.
5. Family immediate danger → Police 999; a one-question route, without MPS section or ComCare emergency wording.
6. Possible non-immediate abuse/neglect → NAVH 1800-777-0000; no routine MPS section.
7. Family relationship/divorce → FAM support; family social difficulty → FSC locator.
8. Elderly caregiving → AIC contact and hotline; verify both English and Chinese instructions.
9. Preschool subsidies → LifeSG/ECDA; verify Form 1 invitation guidance and its actual external handoff.
10. All new routes in **Chinese** and **caregiver** mode, large text, phone view, keyboard and screen reader; print MPS notes for **non-safety** cases only.
11. Verify changed source hosts (`www.aic.sg`, `www.mom.gov.sg`, `www.msf.gov.sg`, `www.life.gov.sg`) and opening hours remain current.
12. Run **npm test** and **npm run build**, check GitHub Actions, and confirm the live Deployxa deployment uses the new commit before sharing.

**Release warning:** The work and family sections are a draft implementation until the updated suite and browser checks are run. Earlier passing tests or existing Deployxa success are evidence only for the previous version, not this update.
