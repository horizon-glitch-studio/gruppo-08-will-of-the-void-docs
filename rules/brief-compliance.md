# Brief compliance

How the rules meet the requirements of the project brief. This file covers only the rules and the game logic; technical requirements and deliverables are covered in the frontend and backend repositories.

## Cards

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| Every card is a creature with an attack and a defense value. | CARD-01 | |
| Every creature belongs to a faction. | CARD-01, [factions.md](factions.md) | Eight factions: six elemental and two inert. |
| Factions have mutual strengths and weaknesses: a faction gets an advantage against the faction it is strong against. | FAC-01 … FAC-06 | The advantage is an ATK bonus. Inert factions give and receive no advantage. |

## Deck

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| A set number of cards per deck. | DECK-01 | |
| A maximum number of copies of the same card. | DECK-02 | |
| A balance constraint on the overall strength of the deck, so that it cannot be made only of the strongest cards. | DECK-03 | Set by rarity. DECK-04 also limits the cards of each faction. |
| The portal checks that every deck meets the constraints. | DECK-06 … DECK-09 | |

## Match

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| 1. Every player has life points. | MATCH-01 | Energy instead of life points: see Approved deviations. |
| 2. At the start of the match each deck is shuffled at random. | MATCH-02 | |
| 3. Each player draws the first card of their deck and puts it into play. | MATCH-03 | |
| 4. The two creatures clash at the same time, taking faction advantages into account. | MATCH-04, FAC-02, FAC-06 | |
| 5. Damage lowers defense and is not restored; attack does not change; a creature dies when its defense reaches zero. | MATCH-05, MATCH-06 | |
| 6. If only one creature dies, the winner deals damage equal to the difference between its attack and the remaining defense of the defeated creature. | MATCH-08 | The same amount, gained as Energy: see Approved deviations. |
| 7. If both creatures die, no player takes damage. | MATCH-09 | |
| 8. If no creature dies, a new round is played between the same creatures. | MATCH-07 | |
| 9. When a creature dies, its owner draws the next card. | MATCH-10, MATCH-11 | |

## End of the match

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| The player whose life points reach zero loses. | MATCH-12 | The player who reaches the win threshold wins: see Approved deviations. |
| The match ends when the decks run out, with a criterion for win or draw. | MATCH-13 … MATCH-16 | |
| The match ends when it goes on beyond a number of turns, with a criterion for win or draw. | MATCH-17 | Every clash defeats at least one card, so a match lasts at most 59 clashes and then ends by deck exhaustion. |

## Game design note

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| The player makes no decisions during the match: the strategy is in the deck. | [match.md](match.md) | |
| The match is simulated by the system with no interaction, right after the challenge is accepted. | MODE-01, MODE-05 | |
| Shuffling happens on the server, so no player can influence it. | MATCH-02 | |

## Portal features

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| Every user has a balance of virtual credits. | ECO-01 … ECO-03 | |
| How users get credits in phase 1 is chosen by the group. | ECO-04 … ECO-10, RANK-09, RANK-11 | |
| Buying credits with real money is planned for phase 2 and not developed; the conversion is planned and quantified in phase 1. | ECO-11 | |
| Users spend credits on packs with random content. | PACK-04 … PACK-06 | |
| Cards follow a rarity criterion (tier) defined by the group. | [cards-and-rarities.md](cards-and-rarities.md) | |
| Packs hold a specific number of cards for each tier. | PACK-05 | Probabilities per slot instead of a fixed number: see Approved deviations. |
| The price in credits of a pack is coherent with its content. | PACK-04, [packs.md](packs.md) (Expected results) | |
| Users can see the cards they own. | CARD-09, CARD-10, CARD-15 | |
| Every user can build and save more than one deck. | DECK-10 | |
| Users can propose free trades of cards only, also in different quantities. | TRADE-01 … TRADE-05 | Wanderer cards cannot be traded, and trades need a verified email, one pending trade per pair (TRADE-08) and a minimum collection (TRADE-12). |
| A trade happens only if the recipient accepts. | TRADE-06 | |
| No card is lost or duplicated in a trade. | TRADE-10, TRADE-11 | |
| User A challenges user B with one of their decks; when B accepts, choosing a deck, the system simulates the match. | MODE-03 … MODE-08 | Matches against a defense deck start at once: see Approved deviations. |
| The result, turn by turn, is available to both users. | MATCH-18 | |
| History of the matches played and their results. | MATCH-18 | |
| Backoffice for the card catalog. | CARD-08 | The backoffice checks the card rules when a card is created or edited. |

## Additional modes

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| Variants are separate modes and do not change the base mode, which stays playable. | [game-modes.md](game-modes.md) | Every mode uses the same match rules; modes change only how the opponent is found, the win threshold and whether Trophies are at stake. No special abilities or non-creature cards. |
| Every variant is documented in the rules. | [game-modes.md](game-modes.md) | |

## Values and choices

| Requirement | Where it is met | Notes |
| --- | --- | --- |
| The group sets the values: life points, deck constraints, factions and advantages, card balance. | [parameters.md](parameters.md) | |
| Every choice is motivated in the documentation. | Rationale section of every rule file | |

## Approved deviations

Changes to the brief approved by the teachers.

| Brief | Rules | Where |
| --- | --- | --- |
| Players have life points; damage lowers them; the player at zero loses. | Players gain Energy equal to that damage; the first to reach the win threshold wins. The scoring is the same, read the other way round. | MATCH-01, MATCH-08, MATCH-12 |
| Packs hold a specific number of cards for each tier. | Every slot draws its rarity from set probabilities; every pack holds at least one card of Soldier rarity or higher. | PACK-05 |
| The match is played when B accepts the challenge, choosing a deck. | Against a Summoner with a valid defense deck the match is played at once; setting a defense deck counts as accepting. | MODE-03, MODE-08, DECK-14 |
| Cards are bought, collected and shown in the collection. | Wanderer cards stay on board for a limited time, then move to the memory archive: visible, not playable. | CARD-12 … CARD-16 |