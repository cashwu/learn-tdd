const Money = require("./money");

describe("Money", () => {
  beforeEach(() => {
    // Setup code here
  });

  afterEach(() => {
    // Cleanup code here
  });

  it("5 usd x 2 = 10 usd", () => {
    let fiver = new Money(5, "USD");
    let tenner = fiver.times(2);
    expect(tenner.amount).toBe(10);
    expect(tenner.currency).toBe("USD");
  });

  it("10 eur x 2 = 20 eur", () => {
    let tenEuros = new Money(10, "EUR");
    let twentyEuros = tenEuros.times(2);
    expect(twentyEuros.amount).toBe(20);
    expect(twentyEuros.currency).toBe("EUR");
  });

  it("4002 krw / 4 = 1000.5 krw", () => {
    let originalMoney = new Money(4002, "krw");
    let actualMoneyAfterDivision = originalMoney.divide(4);
    let expectedMoneyAfterDivision = new Money(1000.5, "krw");
    expect(actualMoneyAfterDivision).toStrictEqual(expectedMoneyAfterDivision);
  });
});
