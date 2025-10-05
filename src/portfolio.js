const Money = require("./money");

class Portfolio {
    money;

    constructor() {
        this.money = [];
    }

    add(...money) {
        this.money = this.money.concat(money);
    }

    evaluate(bank, currency) {
        let failures = [];
        let total = this.money.reduce((sum, money) => {

            try {
                let convertAmount = bank.convert(money, currency);
                return sum + convertAmount.amount;
            } catch (e) {
                failures.push(e.message);
                return sum;
            }

        }, 0);

        if (!failures.length) {
            return new Money(total, currency);
        }

        throw new Error("Currency conversion failed for: " + failures.join(", "));
    }
}

module.exports = Portfolio;
