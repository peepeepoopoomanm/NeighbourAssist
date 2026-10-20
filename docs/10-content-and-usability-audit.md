# NeighbourAssist — 20 October content, pathway and usability audit

**Status:** Code updated on GitHub; full updated Node test run, TypeScript/Vite production build, browser acceptance tests and Deployxa redeployment **pending**. Do not describe these changes as validated live until checked.

## Purpose and findings

The previous **Not sure** questionnaire forced someone who did not understand an official notice or agency decision to choose a government policy area. This made it difficult for people with a confusing letter, a rejected government application, an unanswered case or a potentially fraudulent message.

The 20 October update replaces this with a **situation-first, rule-based** journey, without unrestricted free text or invented appeal rights. It also refines contact wording and small-screen wrapping.

## Official sources independently reviewed

1. [LifeSG](https://www.life.gov.sg/) provides official government information and service discovery, not a guarantee that every question has a digital application.
2. [gov.sg Resources](https://www.gov.sg/resources/) identifies the **Singapore Government Directory** for public-service contact information.
3. [Singapore Government Directory (SGDI)](https://www.sgdi.gov.sg/ministries) lists agencies and public contacts, **not** a government-wide application or appeal office. It can help locate the agency, not verify case status.
4. [gov.sg Trusted Sites](https://www.gov.sg/trusted-sites/) helps check whether websites claiming government affiliation are authentic. Do not take an unsolicited message's links at face value.
5. [AskGov Help Centre](https://ask.gov.sg/help/questions/cmhx3p29t004xv48x4bo2uuhd) explicitly states AskGov is **not** a government-agency directory. It can search help articles but cannot be assumed to accept all appeals or redirect any case.
6. [ScamShield — Check for scams](https://www.scamshield.gov.sg/check-for-scams/) confirms the **1799 helpline is available 24/7** to help verify suspicious calls and messages.
7. [ScamShield — I've been scammed](https://www.scamshield.gov.sg/i-have-been-scammed/) says people who may have sent money or compromised bank access should **contact their bank immediately**, make a Police report and secure accounts. Scam checks must not delay bank action.

Sources reviewed on 20 October 2026. Official websites and processes may change.

## New Not sure flow

| Initial situation | Follow-up | Official starting point | Critical safeguard |
| --- | --- | --- | --- |
| Unexplained government letter or notice | Know agency? Deadline? Previous agency contact? Contact preference | Verify sender on gov.sg; use verified agency or SGDI | Government branding alone isn't proof of authenticity; court and response deadlines still apply |
| Application or government decision | Know agency? Deadline? Status? Contact preference | SGDI to find issuing agency, then official agency review/status channel | No universal appeal form or guaranteed right to review |
| Unanswered or unresolved government enquiry | Know agency? Deadline? Status? Contact preference | Original agency, its verified follow-up or feedback service; SGDI helps find it | SGDI cannot check or escalate case statuses by itself |
| Possible scam, no known loss | Was account access exposed? Contact preference | ScamShield app / web / **1799** | Do not trust suspicious links or share banking/Singpass secrets |
| Possible scam, money or access may be compromised | A second question identifies this and ends the questionnaire | **Bank first**, ScamShield's official post-scam steps, Police reporting | No MPS section; contact-choice delay removed; prototype cannot freeze funds |
| Still cannot describe the concern | Contact preference | Official SGDI directory and LifeSG discovery | Does not guess an agency or invent a one-size-fits-all appeal |

All questions are fixed choice. NRIC, address, account number, letter scan, case reference, amount and medical or family narratives are not entered. The optional MPS notes reflect broad preset answers only.

## Audit of all nine categories

| Category | Main safety/completeness check | Outcome / known limit |
| --- | --- | --- |
| Everyday expenses | Urgent food/essentials skips lengthy questions, ComCare first; Silver Support only when 65+ indicated | Rule-based referral retained. Cannot assess ComCare eligibility |
| Housing and rental | Public rental vs HDB ownership vs private rental remain distinct; 2-year rental transfer warning; agency history | Existing automated scenarios retained. HDB determines any exception or transfer |
| CPF and retirement | Under-55 withdrawal avoided; Silver Support automatically assessed, not promised | Rules retained. Exact balances, withdrawal entitlements unavailable to this site |
| Medical costs | Clinic subsidy distinct from hospital bills; MediFund points to medical social worker | No medical data entry; no eligibility decision |
| Neighbourhood issues | OneService handles municipal issues and tells users to prepare location/photo *only for the official service* | Does not report anything to OneService or provide emergency response |
| Fines and appeals | Identify issuer before appeals/payment; court summons takes priority; no first-offence waiver promise | Verified agency-specific pointers retained; legal and court advice out of scope |
| Work and employment | TADM salary vs dismissal deadlines; TAFEP harassment vs MOM injury | Existing deadline-warning tests retained; no legal assessment |
| Family and social support | Police 999 for immediate danger; NAVH for non-immediate abuse; ordinary FAM/FSC/AIC/ECDA routes | Protection paths skip MPS. Not a reporting or emergency-response system |
| **Not sure** | New letter, application, agency-follow-up and scam situations; deadline/agency questions, caretaker wording | Six new referral services and four new questions. Does not replace an agency's formal procedures |

**Cross-cutting issues found and addressed:**
- Initial "Not sure" question used to require the user to recognise a policy category; now starts with a concrete life situation.
- General agency-contact prompts previously named unrelated agencies for some enquiries; Not sure now uses notice-specific agency wording.
- Generic telephone scripts implied all enquiries were about financial assistance. Fines, work, family, government letters and scam checks now have context-specific templates.
- Important deadlines lacked a prominent result alert in the unknown-issue route; the new result does not imply MPS assistance pauses a deadline.
- Confirmed potential scam loss now triggers **bank-first guidance**, and the irrelevant method picker and MPS section are hidden.
- **21 October adjustment:** The broad topic selection duplicated the homepage's dedicated categories. This option and its follow-up were removed; the **All topics** breadcrumb still takes residents back to the homepage.
- Added 320–390px layout safeguards for long Chinese labels, large-text navigation, and word wrapping, and an explicit reduced-motion hover fallback.
- Removed duplicate reason-translation keys discovered during static review.

## Regression and source audit

A structural audit of the updated GitHub tree found:

- **Nine** homepage categories.
- **36** questionnaire questions, each with Simplified Chinese wording, all answer choices, and English/Chinese caregiver alternatives.
- **41** referral records, each with a complete Chinese service translation and matching English/Chinese online, phone and in-person guidance.
- **107** Node test definitions, including **14 new tests** for the Not sure routes.
- No duplicate keys in the Chinese or caregiver referral-reason dictionaries.

**These are structural findings only.** A fresh `npm.cmd test`, `npm.cmd run build`, interactive mobile/browser pass and public redeployment remain required.

## Manual browser acceptance checklist

- [ ] **First question:** Not sure → asks for situation, not a list of agencies or monetary amounts.
- [ ] **No redundant option:** Not sure first question has five choices, beginning with a government letter. **All topics** remains available and returns to the eight existing service categories.
- [ ] **Letter:** not sure of agency → deadline yes → result shows gov.sg verification plus an explicit deadline/court warning.
- [ ] **Application:** rejected request → find agency and formal review instructions, no automatic right of appeal.
- [ ] **Follow-up:** awaiting response → official directory and the agency's own enquiry channel, no promise of response times.
- [ ] **Unidentified problem:** simple two-question path and agency directory, not a forced policy category.
- [ ] **Suspicious message, no loss:** ScamShield 1799 and official web check.
- [ ] **Suspicious message, possible loss:** 2-question route; **bank first**; no general phone-method selector or MPS; *do not call emergency services when testing*.
- [ ] **Change earlier answer:** use Back after choosing a branch; previous branch-specific choices must be discarded.
- [ ] **English/Chinese:** all six paths, translated service cautions and browser `lang` change.
- [ ] **Caregiver:** pronouns reflect the person needing help; no suggestion that the helper is the applicant.
- [ ] **Mobile:** test at 320px, 375px, 390px and a normal desktop width. No horizontal scrolling at large text or with Chinese.
- [ ] **Keyboard:** Tab/Shift+Tab and Enter/Space operate radio choices, contact buttons, topic handoff and link; focus moves to next question/results heading.
- [ ] **Print:** for a non-scam letter/application, optional MPS notes print without names, addresses or private reference values.
- [ ] **Existing nine categories:** representative financial urgency, rental transfer, CPF, clinic/hospital, OneService, HDB/URA/Traffic Police fine, TADM, and family safety paths still work.

## Remaining limitations and release rules

Human readability, the legal correctness of any individual agency decision, authenticated form behaviour, live URL availability, and the Chinese translations are not guaranteed by source-code tests. Ask someone fluent in Singapore Mandarin to review key screens; conduct consent-based fictional-scenario testing with at least one non-developer.

The public Deployxa website may still serve an earlier nine-category build. **Do not treat the latest changes as deployed until the new source has passed tests, compiled, and the live website shows the updated Not sure journey.**

Follow-up: if the new suite passes, run manual checks and then redeploy latest `main`; verify the public URL again before showing it in the hackathon demo.

## 21 October follow-up: Remove unnecessary first option

During manual browser testing, the first choice **“I know roughly what my issue is about”** was identified as duplicating the eight purpose-built homepage categories. The question now begins with **“I received a government letter or notice I do not understand”**. The original second step to choose a broad topic was removed from routing, bilingual data, caregiver wording and results UI. A defensive regression test ensures older, unreachable `u_start='topic'` and `u_need` values cannot activate the removed route; they fall back to the official government directory. The five remaining options and the **All topics** breadcrumb preserve safe navigation. Source coverage is now nine categories, **36 questions**, 41 services and 107 defined tests. A fresh test run and build are required after this change.
