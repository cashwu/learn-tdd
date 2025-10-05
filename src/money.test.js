const Money = require("./money");
const Portfolio = require("./Portfolio");


describe("Money", () => {
    beforeEach(() => {
        // Setup code here
    });

    afterEach(() => {
        // Cleanup code here
    });

    it("5 usd x 2 = 10 usd", () => {
        let five = new Money(5, "USD");
        let ten = new Money(10, "USD");
        expect(five.times(2)).toStrictEqual(ten);
    });

    it("10 eur x 2 = 20 eur", () => {
        let tenEuros = new Money(10, "EUR");
        let twenty = new Money(20, "EUR");
        expect(tenEuros.times(2)).toStrictEqual(twenty);
    });

    it("4002 krw / 4 = 1000.5 krw", () => {
        let originalMoney = new Money(4002, "krw");
        let expectedMoneyAfterDivision = new Money(1000.5, "krw");
        expect(originalMoney.divide(4)).toStrictEqual(expectedMoneyAfterDivision);
    });

    it("5 usd + 10 usd = 15 usd", () => {

        let fifteen = new Money(15, "USD");
        let portfolio = new Portfolio();

        portfolio.add(new Money(5, "USD"), new Money(10, "USD"));

        expect(portfolio.evaluate("USD")).toStrictEqual(fifteen);
    });
});
