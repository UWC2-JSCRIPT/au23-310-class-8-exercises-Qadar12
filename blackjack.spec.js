describe("Testing BlackJack Game: dealerShouldDraw function", () => {
  it("Test for hand with 10, 9", () => {
    let dealerHand = [
      { displayVal: "Ten", val: 10, suit: "spades" },
      { displayVal: "Nine", val: 9, suit: "spades" },
    ];

    let result = dealerShouldDraw(dealerHand);
    expect(result).toBe(false);
  });
  it("Test for hand with Ace, 6", () => {
    let dealerHand = [
      { displayVal: "Ace", val: 11, suit: "hearts" },
      { displayVal: "Six", val: 6, suit: "clubs" },
    ];

    let result = dealerShouldDraw(dealerHand);
    expect(result).toBe(true);
  });
  it("Test for hand with 10, 6, Ace", () => {
    let dealerHand = [
      { displayVal: "Ten", val: 10, suit: "diamonds" },
      { displayVal: "Six", val: 6, suit: "hearts" },
      { displayVal: "Ace", val: 11, suit: "hearts" },
    ];
    let result = dealerShouldDraw(dealerHand);
    expect(result).toBe(false);
  });
  it("Test for hand with 2, 4, 2, 5", () => {
    let dealerHand = [
      { displayVal: "Two", val: 2, suit: "diamonds" },
      { displayVal: "Four", val: 4, suit: "hearts" },
      { displayVal: "Two", val: 2, suit: "clubs" },
      { displayVal: "Five", val: 5, suit: "hearts" },
    ];
    let result = dealerShouldDraw(dealerHand);
    expect(result).toBe(true);
  });
});
