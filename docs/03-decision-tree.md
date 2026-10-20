# NeighbourAssist — referral decision tree

**Last revised:** 20 October 2026  
**Source of truth:** `src/engine.ts` (questions and routing), `src/journeys.ts` (agency contact instructions), `src/mps.ts` (optional MPS preparation).

This is a deterministic directory and preparation tool, **not** an eligibility checker, approval prediction or official MP appeal service.

## Shared flow

1. The resident or caregiver chooses a help category.
2. Adaptive questions ask about broad circumstances without amounts, addresses, names, NRICs or medical records.
3. The engine chooses a **relevant official agency** and practical contact instructions. Urgent basic needs use the shortest possible route.
4. Non-urgent flows generally ask whether the resident has already contacted the responsible agency:
   - **First contact** → ordinary official service as a starting point.
   - **Waiting for a reply** → encourage follow-up with the relevant agency, using an existing reference if available.
   - **Rejected / still unresolved** → explain the option to ask the agency about review and consider MPS assistance.
   - **Unsure** → start with a verified agency enquiry route, or the official SGDI directory if the agency is unknown.
5. Non-safety results generally include optional MPS preparation: Parliament MP lookup, what to prepare and a printable fixed-choice summary. Immediate family-protection and possible-scam routes omit MPS so it cannot delay official action.

Attending MPS is a resident's choice regardless of their answers. No MP letter, agency case or application is actually created or transmitted.

## Category routing

| Category | Relevant question branches | Initial agency suggestion |
| --- | --- | --- |
| Everyday expenses | Urgency first; if urgent, skip further financial questions. Otherwise expense type, existing ComCare, duration, ability to work, age and prior agency contact | ComCare IA enquiry / existing SSO / SMTA / LTA / SSO depending on answers. Silver Support is supplementary where age 65+ is indicated |
| Housing and rental | Housing type, goal, contextual need or rent difficulty, duration at current public rental flat where relevant, household type and past agency contact; rejected/unresolved requests ask review reason | HDB rental transfer, HDB tenant assistance, change of tenancy, rightsizing, general HDB, or SSO for private-rent hardship |
| CPF and retirement | Aged 55+, purpose, additional 65+ question for Silver Support, type of barrier and past agency contact | CPF general guidance, withdrawals at 55+ or automatically assessed Silver Support information at 65+ |
| Medical costs | Care type, whether healthcare payment help was sought for bills, barrier and agency-contact status | CHAS, MediFund/Medical Social Worker, or MOH guidance |
| Neighbourhood issues | Type of issue and whether previously reported | OneService (not an emergency response service) |
| Fines and appeals | Issuer, court notice, appeal/payment/status and any deadline | HDB, URA, Traffic Police, LTA, Singapore Courts |
| Work and employment | Unpaid salary, dismissal, workplace fairness, work injury and claim deadlines | TADM, TAFEP, MOM |
| Family and social support | Safety first; otherwise relationships, caregiving, childcare and family difficulties | Police 999, NAVH, FAM, FSC, AIC, LifeSG/ECDA |
| Not sure | Situation first: official letter, decision, unanswered agency request, suspicious call/message or unknown problem | Gov.sg Trusted Sites / SGDI, agency, LifeSG, ScamShield; bank-first advice if account access or funds are at risk |

## Important safeguards

- **Urgent essentials**: call ComCare promptly; MPS is not an emergency service.
- **Silver Support**: age 65+ alone does not confirm eligibility; CPF assesses automatically for qualifying citizens.
- **HDB public rental transfer**: HDB generally requires at least two years' residence; explain this condition explicitly when the answer is under two years. No transfer is guaranteed.
- **Owned HDB rightsizing** is not equivalent to transferring a public rental flat.
- **CPF withdrawals**: age 55 is a useful information gate, never a determination of an individual's withdrawable amount.
- **Medical bills**: MediFund is assessed via a Medical Social Worker at an approved institution, not by this website.
- **Caregivers**: ask permission; do not request someone else's Singpass or account passwords.
- **MPS**: do not imply MPs can override agency decisions or guarantee prioritised handling or approval.

## Testing and maintenance

Run `npm test` and `npm run build` after each change to question options, routes or translations. Use `docs/04-mps-preparation.md` for acceptance scenarios. Verify programme requirements and link destinations against primary agency websites before public distribution.

The standalone `demo/` is an older development reference, not a maintained replica of this decision tree. The React source in `src/` is the authoritative application.

## 20 October — Situation-first Not sure branch

```text
Not sure → What brought you here?
  ├─ Government letter / notice → agency known? → deadline? → previous contact → verify source and agency
  ├─ Application / decision → agency known? → deadline? → status → issuing agency / SGDI
  ├─ Unresolved agency contact → agency known? → deadline? → status → original agency / SGDI
  ├─ Suspicious message → money or account access at risk?
  │     ├─ Yes → bank immediately + ScamShield post-scam instructions; NO optional MPS
  │     └─ No / unsure → ScamShield official site / 1799; NO optional MPS
  └─ Truly unknown → SGDI / LifeSG for service discovery
```

Questions accept only preset choices and no identifying case information. This is not a universal appeals office. Court, response and application deadlines remain binding regardless of optional MPS assistance. Source research and manual acceptance tests: `docs/10-content-and-usability-audit.md`.

**21 October simplification:** Removed the redundant “I know roughly what my issue is about” option and secondary topic-selection step. Residents who recognise a subject can use the existing eight categories on the homepage via **All topics**. All remaining Not sure branches are unchanged.
