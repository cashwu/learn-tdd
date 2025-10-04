class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    divide(divisor) {
        return new Money(this.amount / divisor, this.currency);
    }
}

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
            return sum + money.amount;
        }, 0);

        return new Money(total, currency);
    }
}

module.exports = {Money, Portfolio};
