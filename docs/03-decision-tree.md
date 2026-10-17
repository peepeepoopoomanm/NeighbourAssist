# Decision tree — implementation spec
The single source of truth is `src/engine.ts` (questions, services and matching rules).

## Shared flow
```
LANDING
  ↓ Select help category
QUESTIONNAIRE (one question per screen, Back/Continue)
  ↓ Answer non-sensitive category-specific questions
REFERRAL RULES (transparent, deterministic)
  ↓
RESULT (reason, official agency, link, next steps, checklist, offline option if confirmed)
```

## Everyday financial assistance
```
Urgent need for essentials? ── YES ──> Ask contact preference ──> ComCare urgent guidance
  │ NO / UNSURE
Already receiving ComCare? ── YES ──> Current SSO/caseworker
  │ NO / UNSURE
Duration? → Work situation? → Aged 65+? → Contact preference?
  ├─ Long-term + unable to work → Ask about ComCare Long-Term Assistance
  ├─ Low wages / temporary work issue / short-duration need → Ask about ComCare SMTA
  └─ Uncertain → SSO assessment
Plus: if 65+, show *additional* Silver Support card; government assesses automatically.
```

## Housing and rental
```
Living situation?
  ├─ HDB public rental:
  │    Want smaller / more affordable unit → HDB rental flat transfer
  │    Struggle to pay rent → HDB tenant assistance
  │    Tenant/occupier information → HDB tenancy changes
  │    Unclear → General HDB guidance
  ├─ HDB owner:
  │    Want smaller home → HDB rightsizing / Silver Housing Bonus information
  │    Else → General HDB guidance
  └─ Private rental with rent affordability issue → general SSO financial assistance; other private rental questions → LifeSG general directory. Unsure residence type → general HDB guidance
Then contact preference; show known in-person branch route where applicable.
```
**Quality note:** Private rental disputes may need other specialist channels. Our fallback is only a service directory, not an assessment. Research the appropriate private-tenancy resource before public release.

## CPF and retirement
```
Age 55+? → Interest?
  ├─ Withdrawal + 55+ → CPF withdrawal guidance (not calculation)
  ├─ Withdrawal + under 55/unsure → CPF Board general guidance
  ├─ Senior support → Silver Support explanation (auto assessment)
  └─ Payouts / unsure → CPF Board general guidance
Then contact preference.
```

## Medical bills
```
Type of expense?
  ├─ GP / dental → CHAS
  ├─ Hospital / medical bills difficult to afford → MediFund / hospital Medical Social Worker
  └─ Unsure → MOH financial assistance information
Then contact preference.
```

## Municipal and uncertain
- Municipal issue → OneService.
- Other/unsure → LifeSG directory; clear explanation of limitations.

## Referral precedence
Urgent basic needs override other financial follow-up questions. Existing ComCare overrides other non-urgent ComCare labels; additional Silver Support information may appear independently.

## Acceptance tests
`npm test` covers urgent, ongoing, existing benefit, Silver Support, rental transfer, public rental arrears, rightsizing, CPF age gating, CHAS/MediFund and unknown fallback routes.
