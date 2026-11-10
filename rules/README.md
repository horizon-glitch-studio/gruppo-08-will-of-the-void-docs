# Will of the Void – Game rules

Reference specification of the game rules. It is the single source of truth for the backend, the game engine tests, the AI prompts and the player-facing rulebook on the website, which is derived from it.

## Index

### Core rules

The base rules required by the project brief: cards, factions, decks and match. Every other mode builds on them without changing them.

| File | Content | Status | Open `[TBD]` |
| --- | --- | --- | --- |
| [glossary.md](glossary.md) | Official terms, with the Italian equivalent for the team | Review | – |
| [factions.md](factions.md) | Factions, inert factions, advantages and the advantage matrix | Draft | – |
| [cards-and-rarities.md](cards-and-rarities.md) | Rarities, points, ATK and DEF ranges, Wanderer duration, memory archive | Draft | – |
| [card-set.md](card-set.md) | Starting card set and the values of every card | Draft | – |
| [decks.md](decks.md) | Deck constraints, starter deck, defense deck, deck validity | Draft | – |
| [match.md](match.md) | How a match is simulated: clash, rounds, Energy, end of match | Draft | – |

### Platform rules

The rules of the portal around the base game: modes, ranking, packs, economy and trades.

| File | Content | Status | Open `[TBD]` |
| --- | --- | --- | --- |
| [game-modes.md](game-modes.md) | Friend, Quick and Ranked matches, opponent search, shield, rematch, tournament (phase 2) | Draft | – |
| [ranking.md](ranking.md) | Trophies (Elo), seasons, Orbits | Draft | – |
| [packs.md](packs.md) | Standard and event packs, slots, probabilities, guarantees | Draft | – |
| [economy.md](economy.md) | Shards, rewards, conversion to real money (phase 2) | Draft | – |
| [trades.md](trades.md) | Trade rules, minimum collection threshold | Draft | – |

### Reference

| File | Content | Status | Open `[TBD]` |
| --- | --- | --- | --- |
| [parameters.md](parameters.md) | Every configurable value, with its status | Draft | – |
| [brief-compliance.md](brief-compliance.md) | Each requirement of the brief, where it is met, and the deviations approved by the teachers | Draft | – |

Status: **Draft** (being written), **Review** (complete, waiting for review), **Stable** (reviewed; changes go through a pull request).

## Conventions

### Language and format

- English for every file. File names in kebab-case.
- One H1 per file. Sections are H2, subsections H3.
- One paragraph per line, without manual line breaks.

### Names

- The terms in [glossary.md](glossary.md) are the only ones used. A new term is added to the glossary first.
- Rarities are always singular, also when they describe a group: "an Elect card", "a Captive creature", "the Champion limit".

### Rule IDs

- Every rule has an ID made of a prefix and a number: `FAC-01`, `CARD-01`, `DECK-01`, `MATCH-01`, `MODE-01`, `RANK-01`, `PACK-01`, `ECO-01`, `TRADE-01`.
- An ID never changes and is never reused. A removed rule keeps its ID with the note "Removed".
- Tests, issues and code cite the ID, for example `// MATCH-05` in a JUnit test.

### Wording

- **must** / **must not** for obligations and prohibitions.
- **can** for what is allowed.
- No "should": a rule either applies or it does not.

### Numbers

- In the text, write the value followed by the parameter name: "30 Energy (`WIN_THRESHOLD_RANKED`)".
- [parameters.md](parameters.md) holds the reference value of every parameter. When a value changes, update it there first, then the text.

### Rationale and examples

- Every file ends with a **Rationale** section that explains why the rules are as they are. The brief asks for every choice to be motivated.
- Examples use tables, round by round when they show a match.

## Open items

Two inline tags mark what is not final. Both are searchable across the folder.

| Tag | Meaning |
| --- | --- |
| `[TBD]` | To be decided |
| `[TEST]` | Decided, but the value must be confirmed by tests |

Example: "+1 Energy per surviving creature (`END_BONUS_PER_CARD`) `[TEST]`".

When an open item needs work from someone outside the rules (a database change, a backend parameter, a price), it also gets a GitHub issue, linked next to the tag.

The count of open `[TBD]` tags in the index is updated when a file changes status.