# Decks

A deck is a set of cards from the collection that a Summoner uses in a match. Only valid decks can be played.

## Deck constraints

- **DECK-01** A deck has exactly 30 cards (`DECK_SIZE`).
- **DECK-02** A deck can hold at most these copies of the same card:

  | Rarity | Copies of the same card | Parameter |
  | --- | --- | --- |
  | Captive | 3 | `MAX_COPIES_CAPTIVE` |
  | Conscript | 3 | `MAX_COPIES_CONSCRIPT` |
  | Soldier | 2 | `MAX_COPIES_SOLDIER` |
  | Champion | 1 | `MAX_COPIES_CHAMPION` |
  | Elect | 1 | `MAX_COPIES_ELECT` |
  | Wanderer | 1 | `MAX_COPIES_WANDERER` |

- **DECK-03** A deck can hold at most these cards of each rarity:

  | Rarity | Cards per deck | Parameter |
  | --- | --- | --- |
  | Captive | no limit | – |
  | Conscript | no limit | – |
  | Soldier | 8 | `MAX_PER_DECK_SOLDIER` |
  | Champion | 3 | `MAX_PER_DECK_CHAMPION` |
  | Elect | 2 | `MAX_PER_DECK_ELECT` |
  | Wanderer | 1 | `MAX_PER_DECK_WANDERER` |

- **DECK-04** A deck can hold at most 15 cards of the same elemental faction (`MAX_PER_FACTION`).
- **DECK-05** A deck can hold only cards the Summoner owns and can play, in no more copies than the Summoner owns. A Wanderer in the memory archive cannot be played.

## Validity

- **DECK-06** A deck is valid when it meets DECK-01 to DECK-05.
- **DECK-07** The server checks validity every time a deck changes and before every match.
- **DECK-08** A deck becomes invalid when it no longer meets the constraints: for example when a traded card leaves it with more copies than the Summoner owns, or when a Wanderer in it leaves.
- **DECK-09** An invalid deck cannot be used until the Summoner fixes it.

## Saved decks

- **DECK-10** A Summoner can save more than one deck. `[TBD]` Maximum number of saved decks.

## Starter deck

- **DECK-11** At registration every Summoner receives the same starter deck.
- **DECK-12** The starter deck is valid, holds cards of all six elemental factions and no Wanderer card. Its cards are listed in [card-set.md](card-set.md).

## Defense deck

- **DECK-13** A Summoner can choose one of their decks as defense deck. Only one defense deck is active at a time, and it can be changed at any moment.
- **DECK-14** The defense deck is the deck the system uses when another Summoner attacks in Ranked. Without a valid defense deck a Summoner can neither attack nor be attacked in Ranked (see [game-modes.md](game-modes.md)).
- **DECK-15** If the defense deck becomes invalid, the Summoner stays out of Ranked until they fix it or choose another valid deck.

## Rationale

- **At least two factions per deck.** With half a deck per faction at most, every deck mixes factions, and choosing which ones is part of the strategy.
- **Limits on rare cards.** Most of a deck is made of common cards, so a Summoner with a small collection can still compete.
- **Same starter deck for everyone.** Every Summoner starts from the same point, with no luck involved.
- **Defense deck for Ranked.** In Ranked a Summoner chooses whom to attack; a defense deck makes sure they can be attacked too.