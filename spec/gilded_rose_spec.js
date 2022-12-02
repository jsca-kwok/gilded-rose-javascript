describe("Gilded Rose", function () {
  it("should do something", function () {
    update_quality();
  });
});

describe("Update quality", function () {
  it("changes dexterity vest quality", function () {
    expect(items[0].sell_in).toBe(9);
    expect(items[0].quality).toBe(19);
  });
  it("changes aged brie quality", function () {
    expect(items[1].sell_in).toBe(1);
    expect(items[1].quality).toBe(1);
  });
  it("changes elixir of the mongoose quality", function () {
    expect(items[2].sell_in).toBe(4);
    expect(items[2].quality).toBe(6);
  });
  it("does not change sulfuras quality", function () {
    expect(items[3].sell_in).toBe(0);
    expect(items[3].quality).toBe(80);
  });
  it("changes backstage passes quality", function () {
    expect(items[4].sell_in).toBe(14);
    expect(items[4].quality).toBe(21);
  });
  // it("changes conjured mana cake quality", function () {
  //   expect(items[5].sell_in).toBe(2);
  //   expect(items[5].quality).toBe(4);
  // });
});
