# Packs

Summoners get new cards by opening packs, bought in the Shop with Shards (see [economy.md](economy.md)).

## Pack types

- **PACK-01** There are two types of pack: standard and event.
- **PACK-02** The standard pack is always on sale.
- **PACK-03** An event pack is on sale only during its event. Only one event is active at a time. Each event sets which Wanderer cards its pack can contain.
- **PACK-04** Both types cost 300 Shards (`PACK_PRICE`). Event packs are sold one at a time. `[TBD]` Discounted bundles of packs.

## Contents

- **PACK-05** Every pack holds 5 cards, one for each slot:

  | Slot | Standard pack | Event pack |
  | --- | --- | --- |
  | 1, 2, 3 | Captive 70%, Conscript 30% | Captive 70%, Conscript 30% |
  | 4 | Conscript 75%, Soldier 25% | Conscript 75%, Soldier 25% |
  | 5 | Soldier 84%, Champion 12.5%, Elect 3.5% | Soldier 84%, Champion 11%, Elect 1.5%, Wanderer 3.5% |

  Every pack holds at least one card of Soldier rarity or higher.
- **PACK-06** Once the rarity of a slot is drawn, the card is chosen at random, with the same probability, among the cards of that rarity. In an event pack, a Wanderer is chosen among the Wanderer cards of that event.
- **PACK-07** Duplicates are kept in the collection like any other card (see [cards-and-rarities.md](cards-and-rarities.md)).

## Guarantees

- **PACK-08** If a Summoner has opened 9 packs in a row without a card of Champion rarity or higher, the 10th pack holds one (`GUARANTEE_CHAMPION_PACKS`). This count includes every pack, standard and event.
- **PACK-09** If a Summoner has opened 49 standard packs in a row without an Elect card, the 50th standard pack holds one (`GUARANTEE_ELECT_PACKS`). Only standard packs are counted, and only an Elect found in a standard pack resets the count.
- **PACK-10** If a Summoner has opened 49 event packs in a row without a Wanderer card, the 50th event pack holds one (`GUARANTEE_WANDERER_PACKS`). Only event packs are counted, and only a Wanderer resets the count. The count carries over from one event to the next.
- **PACK-11** A guarantee replaces the card of slot 5. It never adds a card.
- **PACK-12** If more than one guarantee applies to the same pack, the rarest wins: Wanderer, then Elect, then Champion. A Wanderer or an Elect also meet the Champion guarantee.

## Expected results

These values come from simulations, not from rules: they show what the rules above produce on average.

### Standard pack

| Rarity | Cards per pack | Shards per card | € per card | Packs between two (mean / median / 9 in 10 within / longest) | From a guarantee |
| --- | --- | --- | --- | --- | --- |
| Captive | 2.10 | 143 | 0.71 | – | – |
| Conscript | 1.65 | 182 | 0.91 | – | – |
| Soldier | 1.05 | 285 | 1.43 | – | – |
| Champion | 0.156 | 1,924 | 9.62 | 6.3 / 6 / 11 / 41 | 20% |
| Elect | 0.041 | 7,233 | 36.17 | 23.1 / 19 / 50 / 50 | 16% |

### Event pack

| Rarity | Cards per pack | Shards per card | € per card | Packs between two (mean / median / 9 in 10 within / longest) | From a guarantee |
| --- | --- | --- | --- | --- | --- |
| Captive | 2.10 | 143 | 0.71 | – | – |
| Conscript | 1.65 | 182 | 0.91 | – | – |
| Soldier | 1.05 | 285 | 1.42 | – | – |
| Champion | 0.141 | 2,131 | 10.65 | 7.0 / 6 / 13 / 54 | 23% |
| Elect | 0.015 | 20,150 | 100.75 | 56.1 / 40 / 129 / 398 | – |
| Wanderer | 0.041 | 7,232 | 36.16 | 23.1 / 19 / 50 / 50 | 16% |

### How these values were obtained

- **Method:** Monte Carlo simulation of 6,000 Summoners opening 400 packs each, one table per pack type, with every guarantee applied.
- **Shards per card:** pack price divided by the cards of that rarity per pack. It is the cost of any card of that rarity, not of a specific card. € values use the phase 2 conversion, 200 Shards = 1 € (see [economy.md](economy.md)).
- **Packs between two:** distance between two cards of the same rarity. A Champion can be missing for more than 10 packs only if an Elect or a Wanderer reset the count in the meantime.
- **Criteria used to choose the probabilities:**
  - at least 8 rarest cards in 10 come from the draw, not from the guarantee;
  - Elect cards in standard packs and Wanderer cards in event packs cost the same;
  - the event pack gives fewer Champion and Elect cards than the standard pack, so it is never the better buy in every way.
- The values change if a probability or a guarantee changes, and must then be recomputed.

## Rationale

- **Two pack types.** Standard packs give more Champion and Elect cards; event packs trade some of them for the chance of a Wanderer. Neither is always the better buy.
- **Guarantees as a safety net.** Most rare cards come from luck; the guarantees only stop a long streak of bad luck. No Summoner opens 50 packs of a type without its rarest card.
- **Separate counts per pack type.** Opening one type never delays the guarantee of the other.