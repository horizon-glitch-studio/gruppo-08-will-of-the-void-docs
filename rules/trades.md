# Trades

Summoners can trade cards with each other. In the lore, a traded creature moves to another Ship.

## Who and what

- **TRADE-01** Any two Summoners can trade, friends or not.
- **TRADE-02** A Summoner can propose or accept a trade only after verifying their email.
- **TRADE-03** A trade moves cards only. Shards cannot be traded.
- **TRADE-04** A trade can hold any number of cards on each side, and one side can be empty (a gift). Every trade moves at least one card.
- **TRADE-05** Wanderer cards cannot be traded. Cards of every other rarity can.

## Proposal

- **TRADE-06** A Summoner proposes a trade to another Summoner, who can accept or reject it. The proposer can cancel it until it is accepted.
- **TRADE-07** A proposal expires 48 hours after it is sent (`TRADE_EXPIRY_HOURS`).
- **TRADE-08** Between two Summoners there can be at most one pending trade, in either direction.
- **TRADE-09** The same copy of a card can be offered in pending trades with several Summoners at once.

## Acceptance

- **TRADE-10** Ownership is checked when the trade is accepted, not when it is proposed. If a Summoner no longer owns the cards, the trade fails.
- **TRADE-11** All the cards of a trade move together or not at all. No card is ever lost or duplicated.
- **TRADE-12** After a trade, neither Summoner can own fewer than 30 cards (`MIN_COLLECTION_SIZE`), the size of the starter deck. Every copy counts, except Wanderer cards and cards in the memory archive. A trade that would break this rule cannot be accepted.

## Effects on decks

- **TRADE-13** After a trade, the decks of both Summoners are checked again. A deck left with more copies of a card than its Summoner owns becomes invalid (see [decks.md](decks.md)).
- **TRADE-14** A pending challenge keeps the deck saved when it was sent, even if some of its cards are traded afterwards (see [game-modes.md](game-modes.md)).

## Rationale

- **Free trades.** Any quantity, with anyone: trading is how a collection takes shape beyond what packs give.
- **Gifts allowed.** Forbidding them would not stop anyone: a gift can always be disguised as an unbalanced trade, such as many cards for one Captive. Abuse is limited in other ways.
- **Verified email and minimum collection.** Both make it harder to create fake accounts only to pass their cards to a main account. Wanderer cards do not count towards the minimum: they leave after a while and belong to no one.
- **One pending trade per pair.** A Summoner cannot flood another with proposals.
- **Ownership checked at acceptance.** Since the same copy can be offered to several Summoners, only the first accepted trade goes through.