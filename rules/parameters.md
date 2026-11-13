# Parameters

Reference value of every parameter used in the rules. When a value changes, update it here first, then in the rule.

Status: **Decided**, `[TEST]` (decided, to be confirmed by tests), `[TBD]` (to be decided).

## Factions

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `ADVANTAGE_VALUE` | +3 ATK | `[TEST]` | FAC-02 |

## Cards and rarities

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `POINTS_CAPTIVE` | 12 | Decided | CARD-03 |
| `POINTS_CONSCRIPT` | 16 | Decided | CARD-03 |
| `POINTS_SOLDIER` | 20 | Decided | CARD-03 |
| `POINTS_CHAMPION` | 24 | Decided | CARD-03 |
| `POINTS_ELECT` | 28 | Decided | CARD-03 |
| `POINTS_WANDERER` | 32 | Decided | CARD-03 |
| `ATK_SHARE_CENTER` | 45% | Decided | CARD-06, CARD-07 |
| `ATK_SHARE_BAND_60` | 60% of the cards within ±10 points (35%–55%) | Decided | CARD-06 |
| `ATK_SHARE_BAND_80` | 80% of the cards within ±15 points (30%–60%) | Decided | CARD-06 |
| `ATK_SHARE_BAND_90` | 90% of the cards within ±20 points (25%–65%) | Decided | CARD-06 |
| `WANDERER_DURATION_DAYS` | 7 | Decided | CARD-12, CARD-13 |

## Decks

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `DECK_SIZE` | 30 | Decided | DECK-01 |
| `MAX_COPIES_CAPTIVE` | 3 | Decided | DECK-02 |
| `MAX_COPIES_CONSCRIPT` | 3 | Decided | DECK-02 |
| `MAX_COPIES_SOLDIER` | 2 | Decided | DECK-02 |
| `MAX_COPIES_CHAMPION` | 1 | Decided | DECK-02 |
| `MAX_COPIES_ELECT` | 1 | Decided | DECK-02 |
| `MAX_COPIES_WANDERER` | 1 | Decided | DECK-02 |
| `MAX_PER_DECK_SOLDIER` | 8 | Decided | DECK-03 |
| `MAX_PER_DECK_CHAMPION` | 3 | Decided | DECK-03 |
| `MAX_PER_DECK_ELECT` | 2 | Decided | DECK-03 |
| `MAX_PER_DECK_WANDERER` | 1 | Decided | DECK-03 |
| `MAX_PER_FACTION` | 15 | Decided | DECK-04 |
| `MAX_SAVED_DECKS` | – | `[TBD]` | DECK-10 |

## Match

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `WIN_THRESHOLD_RANKED` | 30 Energy | Decided | MATCH-12 |
| `WIN_THRESHOLD_FRIEND` | 30 Energy | Decided | MATCH-12 |
| `WIN_THRESHOLD_QUICK` | 20 Energy | `[TEST]` | MATCH-12 |
| `END_BONUS_PER_CARD` | 4 Energy | `[TEST]` | MATCH-14 |

## Game modes

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `CHALLENGE_EXPIRY_HOURS` | 48 | Decided | MODE-06 |
| `OPPONENT_LIST_SIZE` | 5 | Decided | MODE-09, MODE-13 |
| `OPPONENT_LIST_REFRESH_SECONDS` | 5 | Decided | MODE-11 |
| `QUICK_ACTIVE_DAYS` | 7 | Decided | MODE-14 |
| `RANKED_ATTACKS_PER_OPPONENT` | 1 every 24 hours | Decided | MODE-16 |
| `QUICK_ATTACKS_PER_OPPONENT` | 3 every 24 hours | Decided | MODE-17 |
| `SHIELD_TRIGGER_ATTACKS` | 5 Ranked attacks in 24 hours | Decided | MODE-19 |
| `SHIELD_DURATION_HOURS` | 12 | Decided | MODE-19 |

Trophy range for the opponent search (MODE-12, MODE-13), decided:

| Summoner's Trophies | Range |
| --- | --- |
| 0–199 | ±200 |
| 200–499 | ±150 |
| 500–999 | ±100 |
| 1000 and more | ±50 |

## Ranking

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `ELO_K` | 32 | Decided | RANK-04 |
| `SEASON_LENGTH_WEEKS` | 4 | Decided | RANK-07 |
| `SEASON_RESET_THRESHOLD` | 1000 Trophies | Decided | RANK-08 |
| `SEASON_REWARD_ORBIT_1` | 1 × daily bonus | `[TEST]` | RANK-09 |
| `SEASON_REWARD_ORBIT_2` | 3 × daily bonus | `[TEST]` | RANK-09 |
| `SEASON_REWARD_ORBIT_3` | 6 × daily bonus | `[TEST]` | RANK-09 |
| `SEASON_REWARD_ORBIT_4` | 10 × daily bonus | `[TEST]` | RANK-09 |
| `ORBIT_REWARD_MULTIPLIER` | – | `[TBD]` | RANK-11 |

Orbit thresholds (RANK-10), decided: Orbit 1 0–199, Orbit 2 200–499, Orbit 3 500–999, Orbit 4 1000 and more.

## Trades

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `TRADE_EXPIRY_HOURS` | 48 | Decided | TRADE-07 |
| `MIN_COLLECTION_SIZE` | 30 cards | Decided | TRADE-12 |

## Packs

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `PACK_PRICE` | 300 Shards | Decided | PACK-04 |
| `GUARANTEE_CHAMPION_PACKS` | 10 | Decided | PACK-08 |
| `GUARANTEE_ELECT_PACKS` | 50 | Decided | PACK-09 |
| `GUARANTEE_WANDERER_PACKS` | 50 | Decided | PACK-10 |

Slot probabilities (PACK-05), decided:

| Slot | Standard pack | Event pack |
| --- | --- | --- |
| 1, 2, 3 | Captive 70%, Conscript 30% | Captive 70%, Conscript 30% |
| 4 | Conscript 75%, Soldier 25% | Conscript 75%, Soldier 25% |
| 5 | Soldier 84%, Champion 12.5%, Elect 3.5% | Soldier 84%, Champion 11%, Elect 1.5%, Wanderer 3.5% |

## Economy

| Parameter | Value | Status | Rule |
| --- | --- | --- | --- |
| `DAILY_BONUS` | – | `[TBD]` | ECO-04 |
| `REGISTRATION_BONUS_MULTIPLIER` | – | `[TBD]` | ECO-06 |
| `EMAIL_BONUS_MULTIPLIER` | – | `[TBD]` | ECO-07 |
| `COMEBACK_BONUS_MULTIPLIER` | 3 | `[TEST]` | ECO-08 |
| `COMEBACK_ABSENCE_DAYS` | 7 | Decided | ECO-08 |
| `COMEBACK_INTERVAL_DAYS` | 30 | Decided | ECO-09 |
| `INVITE_BONUS_MULTIPLIER` | – | `[TBD]` | ECO-10 |
| `INVITE_MATCHES` | 10 | Decided | ECO-10 |
| `TIMEZONE_CHANGE_DAYS` | 30 | Decided | ECO-05 |
| `SHARDS_PER_EURO` | 200 | Decided | ECO-11 |