# Game modes

Every mode uses the same match rules (see [match.md](match.md)). What changes is how the opponent is found, the win threshold and whether Trophies are at stake.

| Mode | Opponent | Win threshold | Trophies |
| --- | --- | --- | --- |
| Friend | One of the Summoner’s friends | 30 Energy (`WIN_THRESHOLD_FRIEND`) | No |
| Quick | From a list of random opponents | 20 Energy (`WIN_THRESHOLD_QUICK`) `[TEST]` | No |
| Ranked | From a list of opponents with similar Trophies | 30 Energy (`WIN_THRESHOLD_RANKED`) | Yes |

## Common rules

- **MODE-01** All modes are asynchronous: the server simulates the match at once, with no real-time play.
- **MODE-02** Friend and Quick matches give no Trophies and no rewards. Only Ranked matches change Trophies (see [ranking.md](ranking.md)).

## Instant match or challenge

- **MODE-03** In Friend and Quick, if the opponent has a valid defense deck, the match is played at once against it.
- **MODE-04** Otherwise the match becomes a challenge. The challenger chooses their deck when sending it, and the deck is saved as it is at that moment.
- **MODE-05** The opponent can accept the challenge, choosing one of their decks, or reject it. When the challenge is accepted the match is played at once.
- **MODE-06** A challenge expires 48 hours after it is sent (`CHALLENGE_EXPIRY_HOURS`). The challenger can cancel it before then.
- **MODE-07** Between two Summoners there can be at most one pending challenge, in either direction.
- **MODE-08** Ranked matches are always instant: both Summoners must have a valid defense deck (see [decks.md](decks.md)).

## Opponent lists

- **MODE-09** In Quick and Ranked the server offers a list of 5 opponents (`OPPONENT_LIST_SIZE`), one list per mode. The list is saved on the server: reloading the page does not change it.
- **MODE-10** A Summoner can attack only opponents in their current list, and each opponent only once per list.
- **MODE-11** A list can be refreshed at most once every 5 seconds (`OPPONENT_LIST_REFRESH_SECONDS`).
- **MODE-12** Opponents are searched within a range of Trophies around the Summoner's own:

  | Summoner's Trophies | Range |
  | --- | --- |
  | 0–199 | ±200 |
  | 200–499 | ±150 |
  | 500–999 | ±100 |
  | 1000 and more | ±50 |

  The range never goes below 0 Trophies.
- **MODE-13** If there are fewer than 5 opponents in the range, the range is doubled until the list is full.
- **MODE-14** A Quick list holds random opponents active in the last 7 days (`QUICK_ACTIVE_DAYS`). They can be without a defense deck: in that case the match becomes a challenge.
- **MODE-15** A Ranked list never holds the Summoner themselves, Summoners without a valid defense deck or Summoners with an active shield.

## Attack limits

- **MODE-16** In Ranked a Summoner can attack the same opponent at most once every 24 hours (`RANKED_ATTACKS_PER_OPPONENT`).
- **MODE-17** In Quick a Summoner can attack the same opponent at most 3 times every 24 hours (`QUICK_ATTACKS_PER_OPPONENT`).
- **MODE-18** Friend matches are not counted.

## Shield

- **MODE-19** A Summoner who receives 5 Ranked attacks in 24 hours (`SHIELD_TRIGGER_ATTACKS`) gets a shield for 12 hours (`SHIELD_DURATION_HOURS`).
- **MODE-20** While the shield is active, the Summoner does not appear in new Ranked lists and cannot be attacked in Ranked.
- **MODE-21** If the Summoner attacks in Ranked, the shield ends at once.
- **MODE-22** Friend and Quick matches neither start nor end the shield.

## Rematch

- **MODE-23** After a Friend or Quick match, either Summoner can ask for a rematch, any number of times. A rematch works like a new match: instant or challenge, as in MODE-03 and MODE-04.
- **MODE-24** There is no rematch in Ranked.

## Phase 2

Planned after launch, not part of these rules: tournaments, and training against an AI opponent of increasing level.

## Rationale

- **Defense deck for Ranked.** In Ranked a Summoner chooses whom to attack, so they must also be open to attack. Setting a defense deck is the same as accepting Ranked challenges.
- **Attack limits.** They stop Summoners from farming Trophies on the same opponent.
- **Shield.** It keeps a Summoner from losing many Trophies while away.
- **No rewards in Friend and Quick.** With nothing to gain, these modes need no limits beyond the Quick attack limit.
- **Challenges expire.** Requests that are never answered do not pile up.