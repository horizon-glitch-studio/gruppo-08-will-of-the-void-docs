# Economy

Shards are the currency of the game. In phase 1 Summoners earn them by playing and spend them on packs; from phase 2 they can also buy them with real money.

## Shards

- **ECO-01** A Summoner's Shards never go below 0.
- **ECO-02** Shards can be spent only on packs (see [packs.md](packs.md)).
- **ECO-03** Shards cannot be traded between Summoners (see [trades.md](trades.md)).

## Earning Shards

Every reward is a multiple of the daily bonus, so the whole economy is tuned through a single value.

| Reward | Amount | Parameter | Rule |
| --- | --- | --- | --- |
| Daily bonus | `[TBD]` Shards | `DAILY_BONUS` | ECO-04 |
| Invite bonus | `[TBD]` × daily bonus | `INVITE_BONUS_MULTIPLIER` | ECO-10 |
| Registration bonus | `[TBD]` × daily bonus | `REGISTRATION_BONUS_MULTIPLIER` | ECO-06 |
| Email verification bonus | `[TBD]` × daily bonus | `EMAIL_BONUS_MULTIPLIER` | ECO-07 |
| Comeback bonus | 3 × daily bonus `[TEST]` | `COMEBACK_BONUS_MULTIPLIER` | ECO-08 |
| Season reward | 1 to 10 × daily bonus `[TEST]` | see [ranking.md](ranking.md) | RANK-09 |
| Orbit reward | `[TBD]` × daily bonus | `ORBIT_REWARD_MULTIPLIER` | RANK-11 |

- **ECO-04** A Summoner receives the daily bonus once a day, at the first login of the day.
- **ECO-05** The day follows the Summoner's time zone, set at registration. The time zone can be changed at most once every 30 days (`TIMEZONE_CHANGE_DAYS`).
- **ECO-06** A Summoner receives the registration bonus once, at registration.
- **ECO-07** `[TBD]` A Summoner receives a bonus when they verify their email.
- **ECO-08** A Summoner who logs in after at least 7 days without playing (`COMEBACK_ABSENCE_DAYS`) receives the comeback bonus, on top of the daily bonus.
- **ECO-09** The comeback bonus can be received at most once every 30 days (`COMEBACK_INTERVAL_DAYS`).
- **ECO-10** A Summoner who invites another receives the invite bonus when the invited Summoner has verified their email and played 10 matches (`INVITE_MATCHES`) against different opponents, in any mode. Each invited Summoner gives the bonus once.

## Phase 2

- **ECO-11** From month 13 after launch, Summoners can buy Shards with real money, at 200 Shards for 1 € (`SHARDS_PER_EURO`). `[TBD]` Shard bundles and their prices.

## Rationale

- **One value to tune.** With every reward tied to the daily bonus, changing that one value keeps all rewards in proportion.
- **Comeback bonus.** It is worth less than the daily bonuses missed in 7 days, so staying away on purpose never pays.
- **Time zone limit.** Changing the time zone could start the next day early and give an extra bonus; the limit allows at most one a month.
- **Invite bonus condition.** A verified email and matches against different opponents make it hard to collect the bonus with fake accounts.