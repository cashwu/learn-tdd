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
        let total = this.money.reduce((sum, money) => {
            return sum + this.convert(money, currency);
        }, 0);

        return new Money(total, currency);
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
            throw new Error();
        }

        return money.amount * rate;
    }
}

module.exports = Portfolio;
