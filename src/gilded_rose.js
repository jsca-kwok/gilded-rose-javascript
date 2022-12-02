function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

function change_quality(item, quality_change) {
  item.quality += quality_change;
  return item;
}

function change_sell_in(item, sell_in_change) {
  item.sell_in += sell_in_change;
  return item;
}

const does_age_well = (item) => {
  return (
    item === "Aged Brie" || item === "Backstage passes to a TAFKAL80ETC concert"
  );
};

// TO DO
function is_legendary(item) {
  return item === "Sulfuras, Hand of Ragnaros";
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (!does_age_well(items[i].name)) {
      if (items[i].quality > 0) {
        if (items[i].name != "Sulfuras, Hand of Ragnaros") {
          items[i] = change_quality(items[i], -1);
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i] = change_quality(items[i], 1);
        if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i] = change_quality(items[i], 1);
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i] = change_quality(items[i], 1);
            }
          }
        }
      }
    }
    if (items[i].name != "Sulfuras, Hand of Ragnaros") {
      items[i] = change_sell_in(items[i], -1);
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != "Aged Brie") {
        if (items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
          if (
            items[i].quality > 0 &&
            items[i].name != "Sulfuras, Hand of Ragnaros"
          ) {
            items[i] = change_quality(items[i], -1);
          }
        } else {
          items[i] = change_quality(items[i], items[i].quality);
        }
      } else {
        if (items[i].quality < 50) {
          items[i] = change_quality(items[i], 1);
        }
      }
    }
  }
}
