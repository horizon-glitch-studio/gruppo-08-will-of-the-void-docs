# AI context

A short summary of the world and the rules of Will of the Void, to give as context to AI tools. It gives every area the whole picture; details are in the files linked in each section. When this file and another file disagree, the other file is right.

## Where to read more

All the rules are in the [rules folder](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/tree/rulebook/rules) of the docs repository.

| File | Content |
| --- | --- |
| [glossary.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/glossary.md) | Official terms, with the Italian equivalent for the team |
| [factions.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/factions.md) | Factions, inert factions, advantages and the advantage matrix |
| [cards-and-rarities.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/cards-and-rarities.md) | Rarities, points, ATK and DEF ranges, Wanderer duration, memory archive |
| [card-set.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/card-set.md) | Starting card set and the values of every card |
| [decks.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/decks.md) | Deck constraints, starter deck, defense deck, deck validity |
| [match.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/match.md) | How a match is simulated: clash, rounds, Energy, end of match |
| [game-modes.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/game-modes.md) | Friend, Quick and Ranked matches, opponent search, shield, rematch, tournament (phase 2) |
| [ranking.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/ranking.md) | Trophies (Elo), seasons, Orbits |
| [trades.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/trades.md) | Trade rules, minimum collection threshold |
| [packs.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/packs.md) | Standard and event packs, slots, probabilities, guarantees |
| [economy.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/economy.md) | Shards, rewards, conversion to real money (from phase 2) |

### Reference

| File | Content |
| --- | --- |
| [parameters.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/parameters.md) | Every configurable value, with its status |
| [brief-compliance.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/brief-compliance.md) | Each requirement of the brief, where it is met, approved deviations |

## Conventions

- Everything is in English: backend, frontend, official documentation and communication texts. Only internal documents (such as task tracking) and presentations to the client and the teachers are in Italian.
- Use only the terms in [glossary.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/glossary.md), in every file, text and piece of code.
- Rarities and factions are always singular: "a Captive card", "the Lava limit".
- Factions always appear in this order: Lava, Electro, Radio, Ice, Metal, Matte, Gem, Noble Gas.
- Rules have stable IDs (`MATCH-05`); tests, issues and code cite them.
- Every number has a parameter name (`WIN_THRESHOLD_RANKED`); its value is in [parameters.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/parameters.md).
- `[TBD]` marks what is still to be decided, `[TEST]` a value to be confirmed by tests. Never fill a `[TBD]` with an assumed value.

## The game

A digital-only collectible card game: cards are bought, collected, traded and played only on the official portal. Matches are simulated by the server with no choices during play: the strategy is all in the deck.

## World

See [glossary.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/glossary.md) (World).

- The game takes place in **Umbra**, a galaxy with a conscious black hole at its center: the **Void**. The Void feeds on the Energy of battles.
- The player is a **Summoner**, who commands a **Ship** in orbit around the Void. The creatures found in packs live on board.
- Opening a pack sends a call: creatures of many worlds answer and board the Ship, each for the reason of its rarity (see [cards-and-rarities.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/cards-and-rarities.md)). This is why creatures of different factions fight side by side.
- Creatures fight in the **Arena**, inside the Void. Every battle feeds the Void.
- The higher a Summoner's **Orbit**, the farther their Ship from the Void. At 0 Trophies a Summoner is on the **event horizon**, at the edge of the Void. Nobody is ever swallowed.
- The Void is also the voice of the interface: victory, defeat and error messages speak with its tone.

## Factions

See [factions.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/factions.md).

- Six elemental factions (Lava, Electro, Radio, Ice, Metal, Matte) and two inert ones (Gem, Noble Gas).
- Every Elect card is a Gem, every Wanderer card is a Noble Gas. The other rarities hold the elemental factions.
- Every elemental faction prevails over two factions, is overpowered by two and is even with one. Inert factions never give or receive an advantage.
- A creature facing a faction it prevails over gets +3 ATK `[TEST]` for the whole clash. Advantages never change DEF.
- Factions differ only in their advantages, never in their statistics.

| Faction | Prevails over |
| --- | --- |
| Lava | Metal, Matte |
| Electro | Lava, Ice |
| Radio | Lava, Matte |
| Ice | Radio, Metal |
| Metal | Electro, Radio |
| Matte | Electro, Ice |

## Cards and rarities

See [cards-and-rarities.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/cards-and-rarities.md).

- Every card is a creature with a faction, a rarity, ATK and DEF. ATK and DEF are at least 1.
- ATK + DEF equals the points of the rarity. The points are internal and never shown to the player.
- Rarity is the only measure of strength:

  | Rarity | Points |
  | --- | --- |
  | Captive | 12 |
  | Conscript | 16 |
  | Soldier | 20 |
  | Champion | 24 |
  | Elect | 28 |
  | Wanderer | 32 |

- Wanderer cards stay on board for 7 days, then leave for the memory archive: visible, not playable. A Summoner owns at most one copy of each.
- The values of every card are in [card-set.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/card-set.md) `[TBD]`.

## Decks

See [decks.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/decks.md).

- A deck has exactly 30 cards, at most 15 of the same elemental faction.
- Limits on copies of the same card and on cards per rarity keep rare cards few: at most 8 Soldier, 3 Champion, 2 Elect and 1 Wanderer.
- A deck holds only cards the Summoner owns and can play. The server checks it on every change and before every match; an invalid deck cannot be used.
- Every Summoner receives the same starter deck at registration.
- A defense deck is the deck used when others attack in Ranked.

## Match

See [match.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/match.md).

- Both decks are shuffled by the server. Each Summoner deploys the first card in the Arena.
- The two creatures clash in rounds and hit at the same time. Lost DEF is never restored; a creature with DEF 0 or less is defeated.
- If only one creature is defeated, the other Summoner gains Energy equal to the DEF below 0. If both are defeated, nobody gains Energy.
- The survivor stays with the DEF it has left; a Summoner whose creature was defeated deploys the next card.
- The first to reach the win threshold wins: 30 Energy in Ranked and Friend, 20 in Quick `[TEST]`.
- At deck exhaustion each Summoner gains 4 Energy `[TEST]` for every card left, the card in the Arena included; more Energy wins, equal Energy is a draw.
- The full match is saved and both Summoners can watch it.

## Game modes

See [game-modes.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/game-modes.md).

| Mode | Opponent | Trophies |
| --- | --- | --- |
| Friend | One of the Summoner's friends | No |
| Quick | From a list of random active opponents | No |
| Ranked | From a list of opponents with similar Trophies | Yes |

- All modes are asynchronous and use the same match rules.
- In Friend and Quick, against an opponent without a valid defense deck the match becomes a challenge, which expires after 48 hours.
- Ranked is always instant: both Summoners need a valid defense deck. Attack limits stop farming; a shield protects Summoners who receive many attacks.

## Ranking

See [ranking.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/ranking.md).

- Trophies follow the Elo system and change only in Ranked. They never go below 0.
- Seasons last 4 weeks. At the end, Trophies above 1000 are halved toward 1000 and Summoners who played Ranked in the season receive Shards by Orbit.
- Four Orbits by Trophies: 0–199, 200–499, 500–999, 1000 and more.

## Trades

See [trades.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/trades.md).

- Any two Summoners with a verified email can trade cards, in any quantity on each side. Shards and Wanderer cards cannot be traded.
- A trade happens only if the receiver accepts; all its cards move together or none.
- After a trade, every Summoner keeps at least 30 cards.

## Packs

See [packs.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/packs.md).

- Standard packs are always on sale; event packs only during their event and can contain Wanderer cards. Both cost 300 Shards.
- Every pack holds 5 cards, one per slot; each slot draws its rarity from set probabilities.
- Guarantees stop long streaks of bad luck: a Champion or higher within 10 packs, an Elect within 50 standard packs, a Wanderer within 50 event packs.

## Economy

See [economy.md](https://github.com/horizon-glitch-studio/gruppo-08-will-of-the-void-docs/blob/rulebook/rules/economy.md).

- Shards are the only currency and are spent only on packs. They cannot be traded.
- In phase 1 Shards are only earned: daily, registration, comeback, invite and ranking rewards, all multiples of the daily bonus `[TBD]`.
- From phase 2 (month 13 after launch) Shards can also be bought: 200 Shards for 1 €.