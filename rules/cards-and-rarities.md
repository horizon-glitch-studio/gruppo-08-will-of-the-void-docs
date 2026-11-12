# Cards and rarities

Every card is a creature with a faction, a rarity, ATK and DEF. The rarity sets how strong a card is; the faction sets against whom it is worth playing (see [factions.md](factions.md)).

## Rarities

From the most common to the rarest.

| Rarity | Points (ATK + DEF) | Parameter | Who they are |
| --- | --- | --- | --- |
| Captive | 12 | `POINTS_CAPTIVE` | Creatures freed by the Summoner in exchange for their help in the Arena. |
| Conscript | 16 | `POINTS_CONSCRIPT` | Common people who answered the call of the Ship. |
| Soldier | 20 | `POINTS_SOLDIER` | Trained troops sent by the armies of their worlds. |
| Champion | 24 | `POINTS_CHAMPION` | Heroes of their worlds who chose the Ship themselves. |
| Elect | 28 | `POINTS_ELECT` | Gems: rare crystals formed in the core of planets, guides and examples for the other creatures. |
| Wanderer | 32 | `POINTS_WANDERER` | Noble Gases: nobody calls or commands them. They choose which Ship to board and how long to stay. |

Every Gem card is an Elect card and every Noble Gas card is a Wanderer card (see [factions.md](factions.md)). The other rarities hold the six elemental factions.

How many copies of each rarity a deck can hold is in [decks.md](decks.md). Where each rarity is found is in [packs.md](packs.md).

## Card values

- **CARD-01** Every card has a name, a faction, a rarity, an ATK and a DEF.
- **CARD-02** ATK and DEF must be at least 1. There is no other limit.
- **CARD-03** ATK + DEF must equal the points of the card's rarity.
- **CARD-04** The points are an internal rule for card design. The player sees ATK and DEF, never the points.
- **CARD-05** The ATK share of a card is its ATK divided by its points.

## Distribution of the cards

The same rules apply to every faction, elemental and inert.

- **CARD-06** The ATK shares of the cards of a faction must be spread around the center (`ATK_SHARE_CENTER`, 45%), with at least:
  - 60% of the cards within 10 points of the center (`ATK_SHARE_BAND_60`, 35% to 55%);
  - 80% of the cards within 15 points (`ATK_SHARE_BAND_80`, 30% to 60%);
  - 90% of the cards within 20 points (`ATK_SHARE_BAND_90`, 25% to 65%).

  The remaining cards can be anywhere, as long as CARD-02 holds.
- **CARD-07** The average ATK share of all the cards of a faction must be the center. When the values of the cards, which are whole numbers, do not allow it exactly, the difference must be as small as possible.
- **CARD-08** The backoffice checks CARD-02, CARD-03, CARD-06 and CARD-07 whenever a card is created or edited.

## Collection

- **CARD-09** A Summoner can own any number of copies of a card, except Wanderer cards (CARD-11).
- **CARD-10** Copies stay in the collection until they are traded. They are never converted into anything else.

## Wanderer cards

- **CARD-11** A Summoner owns at most one copy of each Wanderer card.
- **CARD-12** A Wanderer stays on board for 7 days (`WANDERER_DURATION_DAYS`) from the moment it is found in a pack. The time left is always visible on the card.
- **CARD-13** If a Summoner finds a Wanderer that is still on board, its time is extended by another 7 days.
- **CARD-14** If a Summoner finds a Wanderer that has already left, it comes back with a new full period.
- **CARD-15** When its time ends, the Wanderer leaves. The card moves to the memory archive with the date it left: visible, not playable. It is never lost.
- **CARD-16** When a Wanderer leaves, every deck that contains it becomes invalid (see [decks.md](decks.md)). Matches already played are not affected.
- **CARD-17** Wanderer cards cannot be traded. Every other rarity can (see [trades.md](trades.md)).

## Rationale

- **Rarity is the only measure of strength.** More points mean a stronger card. Since every faction follows the same distribution, a rarer card is stronger whatever its faction.
- **Enough points for many different cards.** With these totals, cards of the same faction and rarity can have many different splits of ATK and DEF, so a large set does not repeat itself. All values stay whole numbers.
- **Center a little below half.** Cards with slightly more DEF than ATK survive more often, and only a surviving creature generates Energy: matches are livelier and fewer clashes end with both creatures defeated.
- **Same distribution for every faction.** No faction is more aggressive or more defensive than the others, so the advantages weigh the same for everyone (see [factions.md](factions.md)). Inside that distribution, each card can be anything from cautious to reckless.
- **Wanderer cards come and go.** In the lore, Noble Gases belong to no one: they board a Ship for a while, then move on. Their limited stay keeps the strongest cards from piling up in a few collections and makes event packs worth following. The memory archive keeps a trace of every Wanderer that has been on board, so leaving is a moment of the story, not a loss.
- **One copy of each Wanderer.** A second copy would only make sense in a deck, and a deck can hold at most one Wanderer: finding it again extends its stay instead. This also works with the lore.