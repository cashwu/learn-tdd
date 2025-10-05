const Money = require("./money");

class Portfolio {
    money;

    constructor() {
        this.money = [];
    }

    add(...money) {
        this.money = this.money.concat(money);
    }

    evaluate(currency) {
        let failures = [];
        let total = this.money.reduce((sum, money) => {
            let convertAmount = this.convert(money, currency);

            if (convertAmount === undefined) {
                failures.push(money.currency + "->" + currency);
                return sum;
            }

            return sum + convertAmount;
        }, 0);

        if (!failures.length) {
            return new Money(total, currency);
        }

        throw new Error("Currency conversion failed for: " + failures.join(", "));
    }

    convert(money, currency) {

        let exchangeRates = new Map();
        exchangeRates.set("EUR->USD", 1.2);
        exchangeRates.set("USD->KRW", 1100);

        if (money.currency === currency) {
            return money.amount;
        }
        let key = money.currency + "->" + currency;

        let rate = exchangeRates.get(key);

        if (rate === undefined) {
            return undefined
        }

        return money.amount * rate;
    }
}

module.exports = Portfolio;
