# Match

A match is a battle between two decks. The server simulates it from start to end: the Summoners make no choices during the match, the strategy is all in the deck.

## Start

- **MATCH-01** Each Summoner starts the match with 0 Energy.
- **MATCH-02** The server shuffles both decks. No Summoner can influence the order.
- **MATCH-03** Each Summoner deploys the first card of their deck in the Arena.

## Clash

- **MATCH-04** The two creatures in the Arena clash in rounds. In every round both creatures hit at the same time: each one loses DEF equal to the effective ATK of the other (see [factions.md](factions.md)).
- **MATCH-05** DEF lost in a clash is never restored. ATK never changes.
- **MATCH-06** A creature is defeated when its DEF is 0 or less.
- **MATCH-07** If both creatures are still alive after a round, another round is played. The clash ends when at least one creature is defeated.

## Energy

- **MATCH-08** If only one creature is defeated, the Summoner of the other creature gains Energy equal to the excess damage: the DEF below 0 of the defeated creature. A creature defeated at exactly 0 DEF generates no Energy.
- **MATCH-09** If both creatures are defeated, nobody gains Energy.

## After a clash

- **MATCH-10** The surviving creature stays in the Arena with the DEF it has left.
- **MATCH-11** The Summoner whose creature was defeated deploys the next card of their deck. If both creatures were defeated, both Summoners deploy their next card.

## End of the match

- **MATCH-12** After every clash, if a Summoner has reached the win threshold, they win the match. The threshold depends on the mode:

  | Mode | Win threshold | Parameter |
  | --- | --- | --- |
  | Ranked | 30 Energy | `WIN_THRESHOLD_RANKED` |
  | Friend | 30 Energy | `WIN_THRESHOLD_FRIEND` |
  | Quick | 20 Energy `[TEST]` | `WIN_THRESHOLD_QUICK` |

- **MATCH-13** If no Summoner has reached the threshold and a Summoner has to deploy a card but has none left, the match ends by deck exhaustion.
- **MATCH-14** At deck exhaustion, each Summoner gains 4 Energy (`END_BONUS_PER_CARD`) `[TEST]` for every card they still have, the card in the Arena included. The Summoner with more Energy wins.
- **MATCH-15** If both Summoners end with the same Energy, the match is a draw.
- **MATCH-16** The end bonus only decides who has more Energy. Going past the win threshold with the bonus does not count as a win by threshold.
- **MATCH-17** A match has no turn limit.

## Replay

- **MATCH-18** The full match, round by round, is saved in the match history of both Summoners and both can watch it.

## Example

The two creatures are of even factions, so no advantage applies.

| Clash | Card of A | Card of B | Round | DEF of A | DEF of B | Result |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Electro 8/8 | Radio 5/7 | 1 | 8 − 5 = 3 | 7 − 8 = −1 | B's creature is defeated: A gains 1 Energy |
| 2 | Electro, DEF 3 | Radio 6/6 | 1 | 3 − 6 = −3 | 6 − 8 = −2 | Both defeated: nobody gains Energy |

After clash 1, A's creature stays in the Arena with DEF 3 and B deploys their next card. After clash 2, both Summoners deploy their next card.

## Rationale

- **Energy instead of life points.** The brief counts life points that go down; here Energy goes up, and every battle feeds the Void. The scoring is the same read the other way round: each point of Energy gained is a life point lost by the opponent. The change was approved by the teachers.
- **No turn limit.** Every card has at least 1 ATK, so every clash ends, and every clash defeats at least one card. With two decks of 30 cards a match cannot last more than 59 clashes.
- **End bonus.** Deck exhaustion is a rare case. The bonus rewards the Summoner who still has creatures to send into the Arena.