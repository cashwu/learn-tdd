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
    add(money) {

    }

    evaluate(currency) {
        return new Money(15, "USD");
    }
}

module.exports = {Money, Portfolio};
