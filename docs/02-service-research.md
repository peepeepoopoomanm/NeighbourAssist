# Official service research and verification log
**Checked:** 17 October 2026. All external services may change; refresh links and policies before public use.

| User need | Appropriate starting point | What is confirmed | Source |
|---|---|---|---|
| Essential expenses, including urgent need | ComCare / Social Service Office | ComCare hotline 1800-222-0000, 7 am to midnight daily; SSOs assess circumstances holistically, not by a rigid online eligibility formula. | https://www.msf.gov.sg/what-we-do/comcare |
| Short-to-medium basic living expense hardship | ComCare SMTA via official channels | Temporary help is available subject to assessment; SupportGoWhere is an official entry point. | https://www.msf.gov.sg/what-we-do/comcare ; https://supportgowhere.life.gov.sg/ |
| Permanently unable to work / limited support | ComCare Long-Term Assistance | Possible assessment where financial means and family support are limited. | https://www.msf.gov.sg/what-we-do/comcare |
| Senior financial support | Silver Support (CPF) | Qualifying recipients are assessed automatically; no application required. Age 65 alone is not sufficient. | https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme |
| Existing HDB public-rental tenant wanting a smaller flat | Transfer of Rental Flat (HDB) | HDB offers a transfer route subject to conditions; over-the-counter alternative at managing HDB Branch. | https://www.hdb.gov.sg/change-rental-flat-under-public-rental-scheme/get-help ; https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters |
| Public rental difficulty paying rent | HDB tenant assistance | Official page lists instalments for arrears, SSO/VWO referrals, and possible rightsizing. | https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants |
| Change of tenancy of HDB public rental | HDB tenancy guidance | Eligibility and tenancy conditions apply; different from a flat transfer. | https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/change-of-tenancy |
| Owner of HDB flat considering smaller home | HDB Silver Housing Bonus | May support eligible seniors who rightsize; must not be conflated with *public rental* transfer. | https://www.hdb.gov.sg/managing-my-home/retirement-planning/monetising-flat-for-retirement/silver-housing-bonus |
| CPF withdrawals | CPF Board | From 55 some CPF funds may be withdrawn, subject to rules; withdrawals can affect future monthly payouts; never calculate individual entitlement. | https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs |
| GP/dental subsidies | CHAS | Eligible outpatient subsidies at participating clinics; CHAS eService and support hotline 1800-275-2427 (weekday hours on official portal). | https://chas.moh.gov.sg/Home/Welcome |
| Cannot afford healthcare bill at approved institution | MediFund / institution Medical Social Worker | Residents should approach Medical Social Worker in relevant MediFund-approved institution, subject to assessment. | https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund/ |
| Municipal issues (public-area lights, cleanliness) | OneService | App/chatbot for municipal feedback routed to relevant agencies / Town Councils. | https://www.oneservice.gov.sg/ ; https://www.oneservice.gov.sg/oschatbot-faqs/ |
| Unclassified issue | LifeSG official directory | General starting point for discovering government services; not a substitute for case assessment. | https://www.life.gov.sg/ |

## Editorial constraints
- Say **may be relevant** or **ask an officer about**, not **you qualify**.
- We are not an authorised government service, and do not transmit submissions.
- Check programmes/phone hours before public launch; avoid asserting expected processing times.
- Do not require a user to state citizenship status, exact income, NRIC, CPF account balances, bank details, medical records, or addresses in the prototype.
- Distinguish public HDB rental tenants, owners and people renting privately.
- For a real client in immediate danger or a medical emergency, this service directory is not emergency assistance.


## 18 October 2026 — Verified step-by-step guidance update

NeighbourAssist now provides bilingual, service-specific online, telephone and in-person instructions in `src/journeys.ts` for **all 18 referral outcomes**. Users can switch contact methods directly on the result screen. Each guide has a dated official source link; if an official website changes, users are told to follow the current agency page.

Significant confirmations and editorial decisions:

- **ComCare**: MSF publishes individual “Apply for IA”, “Apply for SMTA” and “Apply for LTA” links, opening official SupportGoWhere channels. Urgent cases should also be told to call ComCare promptly rather than wait for an online response. ComCare hotline: 1800-222-0000 (7 am–midnight daily). Official page: https://www.msf.gov.sg/what-we-do/comcare
- **SSO**: In-person application through an SSO is a supported alternative to online ComCare applications. Always check office-specific hours. Directory: https://www.msf.gov.sg/our-services/directories
- **HDB rental transfer**: HDB’s official transfer flow requires the relevant branch zone and Singpass, and sends applicants to FormSG. Public rental tenant transfer conditions include existing registered tenancy, generally at least two years' occupation, and prevailing eligibility. Over-the-counter applications may be submitted at the managing HDB Branch. See https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/transfer-to-another-public-rental-flat and https://www.hdb.gov.sg/change-rental-flat-under-public-rental-scheme/get-help
- **Public rental hardship**: HDB lists arrears instalments, SSO/social-service referrals and possible smaller-flat rightsizing; do not promise approval. https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants
- **HDB branch contact**: 6225-5432 for rental, leases and other residential enquiries, as currently listed at https://www.hdb.gov.sg/about-us/contact-us
- **CPF retirement**: CPF Board provides the official Retirement Dashboard for personal withdrawable amounts and asks members to review bank/contact settings and withdrawal limits before applying. Phone: 1800-227-1188. CPF Service Centre counter visits are by appointment. https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs and https://www.cpf.gov.sg/service/
- **Silver Support**: No application is needed; eligible residents are automatically assessed. https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme
- **CHAS**: The eService portal explicitly offers login to apply, renew or view CHAS status. Hotline 1800-275-2427 during published weekday hours. https://chas.moh.gov.sg/Home/Welcome
- **MediFund**: Applications are handled with Medical Social Workers at approved treating institutions, not by a general public online application form. https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund/
- **OneService**: The official App has a “Submit Case” flow, while the chatbot prompts users to provide a description, photo, location, time and contact details. No live emergency dispatch is provided. https://www.oneservice.gov.sg/osapp-faq/ and https://www.oneservice.gov.sg/oschatbot-faqs/

**Safety**: Do not represent NeighbourAssist as a government portal, request Singpass passwords, or infer programme eligibility from brief user selections. Caregivers must use legitimate agency-authorised pathways instead of impersonating the beneficiary. Store no sensitive case information. Review translations with a fluent Singapore Chinese speaker before real deployment.
