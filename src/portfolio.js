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
        if (money.currency === currency) {
            return money.amount;
        }

        return money.amount * 1.2;
    }
}

module.exports = Portfolio;
