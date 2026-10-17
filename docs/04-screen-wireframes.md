# Screen wireframes (responsive)
These are textual wireframes, supplemented by the working interactive preview at `demo/index.html`.

## Home screen — phone / desktop
```
┌──────────────────────────────────────────────┐
│ [n+] NeighbourAssist            [Aa Larger]  │
├──────────────────────────────────────────────┤
│ A CLEARER PATH TO ASSISTANCE                 │
│ Finding help shouldn't be hard.            │
│ Answer a few simple questions...           │
│ [No account] [No private details]          │
│                                              │
│ HOW IT WORKS                                │
│ 1. Tell us what you need                    │
│ 2. Answer simple questions                  │
│ 3. See your next steps                      │
├──────────────────────────────────────────────┤
│ What would you like help with?              │
│ ( ) Myself    ( ) Someone I care for       │
│ [Everyday expenses           →]             │
│ [Housing & rental            →]             │
│ [CPF & retirement            →]             │
│ [Medical costs               →]             │
│ [Neighbourhood issues        →]             │
│ [Not sure                    →]             │
│                                              │
│ This is a guide, not a government service.  │
└──────────────────────────────────────────────┘
```

## Questionnaire screen
```
┌──────────────────────────────────────────────┐
│ All topics / Everyday expenses              │
│ QUESTION 1 OF 6                             │
│ [■■■■□□□□□□□□□□□□□]                           │
│                                              │
│ Do you need help with food or essentials    │
│ very soon?                                  │
│                                              │
│ ( ) Yes, I need help urgently               │
│ ( ) I can manage for now                    │
│ ( ) I am not sure                           │
│                                              │
│ [← Back]                   [Continue →]      │
│                                              │
│ Your privacy matters: no NRIC or bank info. │
└──────────────────────────────────────────────┘
```

## Results screen
```
┌──────────────────────────────────────────────┐
│ HERE'S WHERE TO START                       │
│ Recommended official starting point        │
│ ComCare assistance                          │
│ Why you are seeing this: ...                │
│                                              │
│ Your next steps                             │
│ 1. ...                                      │
│ 2. ...                                      │
│ 3. ...                                      │
│ [Open official website ↗]                   │
│ Official phone / offline alternative        │
│                                              │
│ Before you contact them                     │
│ [ ] Information to prepare                  │
│ [ ] Documents if official service requests  │
│ [Print this guidance]                       │
│ [← Change answers] [Start again]            │
└──────────────────────────────────────────────┘
```

## Accessibility and UX decisions
- Entire category card is clickable; large tap targets.
- Only one question per page to reduce cognitive load; clear Back and Continue.
- Larger-text control, semantic headings, keyboard focus indicator, proper labels.
- White panels on calm backgrounds with high-contrast dark text.
- No hidden service application or silent transfers to third parties.
- Checklist can be printed; result includes official site and hotline where verified.
- Review with actual older residents before claiming it is usable for the target population.
