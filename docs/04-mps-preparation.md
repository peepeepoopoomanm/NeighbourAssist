# 19 October 2026: Resident assistance and MPS preparation

## User goal
Residents need accessible instructions for ordinary agency routes **and** a safe way to organise information for human assistance when online channels have not solved their problem.

## Verified official sources
- Singapore Parliament's **Find MP(s) in My Constituency** accepts a street name/postal code and provides official MP pages with contact details and, for listed MPs, MPS arrangements. The NeighbourAssist website merely opens this official directory; it does not ask for or store an address. https://www.parliament.gov.sg/mps/find-mps-in-my-constituency
- HDB's official rental transfer page specifies that the applicant must be a registered public-rental tenant and have occupied the existing flat for **at least two years**. A request is subject to prevailing conditions; it is not automatically approved. https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/transfer-to-another-public-rental-flat
- HDB says applicants may approach the managing HDB Branch to submit their transfer request. https://www.hdb.gov.sg/change-rental-flat-under-public-rental-scheme/terms-and-conditions
- CPF Silver Support is automatically assessed for qualifying Singapore citizens **aged 65 and above**, with eligibility not established by age alone. https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme

## Implementation
- Adaptive case-history question distinguishes: **first contact**, **awaiting reply**, **rejection**, **unresolved concern**, and **unsure**.
- Urgent ComCare referrals bypass this extra history step.
- Housing branches ask about rental duration, household situation and (where applicable) the reason for requesting review.
- CPF asks about access barriers and makes the additional age-65 check before displaying Silver Support as the primary suggestion.
- Healthcare routes ask whether institutional payment assistance has already been requested.
- Municipal and “Not sure” branches now ask meaningful additional questions.
- The result page highlights the appropriate next direction: immediate assistance, agency enquiry, follow-up, or review. Residents can **always** choose the optional MPS section, regardless of status.
- The optional section directs the user to the official Parliament MP lookup page and prepares a printable summary of **only fixed-choice answers**. It does not create or transmit an official appeal or collect NRICs, names, addresses, medical documents, income amounts, or case narratives.
- All new question wording and MPS guidance are in English and Simplified Chinese, with separate caregiver wording.

## Safety boundaries
- Never say MPS advocacy guarantees priority, approval, exceptional treatment or faster processing.
- Residents can seek MPS assistance without being forced to exhaust administrative routes first.
- Do not suggest MPs can override statutory eligibility or agency decisions.
- Do not claim to book MPS appointments or lodge appeal letters; direct users to official MP contacts.
- Users must consent before caregivers act for them and must not disclose Singpass passwords.
- Short multiple-choice notes might omit important context; encourage checking and correcting notes, and speaking directly with an authorised person.
- The old `demo/` static preview is not feature-equivalent to the React website in `src/`.

## Required manual acceptance scenarios
1. **Urgent essentials**: questionnaire still asks only urgent question and preferred contact; ComCare remains prominent.
2. **First-time HDB transfer**: asks tenancy duration, household and agency history; displays official HDB guidance.
3. **Under-two-year HDB public-rental tenure**: clear caution about normal requirements, no assertion of approval.
4. **Rejected HDB request**: extra review-reason question; agency review and MPS options both shown.
5. **Pending CPF enquiry**: suggests following up with CPF Board rather than assuming rejection.
6. **Silver Support**: under-65 residents do not get Silver Support as a primary recommendation; those aged 65+ get information but not an eligibility assessment.
7. **Hospital bill**: asks about Medical Social Worker and presents institution-based guidance.
8. **Chinese and caregiver mode**: questions, pathways and MPS notes are correct, with no unsupported role impersonation.
9. **MPS notes printing**: printer preview contains just the prepared notes and no ordinary results or document uploads.
10. **Mobile/large text**: no sideways scrolling, button overlap, clipped content, or illegible notes.

## Technical validation
Run `npm test` and `npm run build` after pulling the branch. The automated suite now contains extra checks for MPS routing, option coverage, Silver Support age gating, and note privacy. Manual review is still necessary: code tests cannot measure older users' comprehension or guarantee every agency page will remain unchanged.
