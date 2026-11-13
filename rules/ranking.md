# Ranking

Summoners are ranked by Trophies, which only Ranked matches change. Play is split into seasons, and Trophies place every Summoner in an Orbit.

## Trophies

- **RANK-01** A new Summoner starts with 0 Trophies.
- **RANK-02** Only Ranked matches change Trophies.
- **RANK-03** Trophies follow the Elo system: beating a Summoner with more Trophies gives more, beating one with fewer gives less. A draw counts as half a win for both.
- **RANK-04** After a Ranked match between A and B:
  - expected result of A = 1 / (1 + 10^((Trophies of B − Trophies of A) / 400));
  - result of A = 1 for a win, 0.5 for a draw, 0 for a defeat;
  - change for A = 32 (`ELO_K`) × (result of A − expected result of A), rounded to the nearest whole number;
  - B changes by the same amount with the opposite sign.
- **RANK-05** Trophies never go below 0. A Summoner at 0 Trophies who loses stays at 0; the winner gains the full amount anyway.
- **RANK-06** A Summoner at 0 Trophies is on the event horizon, at the edge of the Void.

## Seasons

- **RANK-07** A season lasts 4 weeks (`SEASON_LENGTH_WEEKS`).
- **RANK-08** At the end of a season, every Summoner above 1000 Trophies (`SEASON_RESET_THRESHOLD`) is reset to 1000 + (Trophies − 1000) / 2. Summoners at 1000 Trophies or below keep their Trophies.
- **RANK-09** At the end of a season, every Summoner who played at least one Ranked match in it receives a reward in Shards. The reward depends on the Orbit at the end of the season, before the reset, and is a multiple of the daily bonus (see [economy.md](economy.md)):

  | Orbit | Reward | Parameter |
  | --- | --- | --- |
  | 1 | 1 × daily bonus | `SEASON_REWARD_ORBIT_1` |
  | 2 | 3 × daily bonus | `SEASON_REWARD_ORBIT_2` |
  | 3 | 6 × daily bonus | `SEASON_REWARD_ORBIT_3` |
  | 4 | 10 × daily bonus | `SEASON_REWARD_ORBIT_4` |

## Orbits

- **RANK-10** Trophies place every Summoner in one of four Orbits:

  | Orbit | Trophies | Name |
  | --- | --- | --- |
  | 1 | 0–199 | – |
  | 2 | 200–499 | – |
  | 3 | 500–999 | – |
  | 4 | 1000 and more | – |

  `[TBD]` Orbits names.

- **RANK-11** The first time in a season that a Summoner reaches an Orbit higher than their current one, they receive a reward in Shards.

  `[TBD]` Amount of the reward (`ORBIT_REWARD_MULTIPLIER`).

## Leaderboard

- **RANK-12** The leaderboard lists Summoners by Trophies, from the most to the fewest. Summoners with the same Trophies share the same position.
- **RANK-13** There is a global leaderboard and one for each Orbit.
- **RANK-14** Only Summoners who played at least one Ranked match in the current season appear in the leaderboard.

## Rationale

- **Elo.** Beating a stronger opponent is worth more, so climbing means facing the Summoners at the top.
- **Sum zero.** The Trophies one Summoner gains are the ones the other loses, so the total does not grow over time. The only exception is a Summoner at 0, who cannot lose more: nobody is swallowed by the Void.
- **Season reset.** Halving only the Trophies above the threshold keeps the order of the leaderboard but shrinks the gaps, so the best Summoners have to keep playing to stay on top.
- **Rewards only for active Summoners.** Accounts that do not play collect no Shards.