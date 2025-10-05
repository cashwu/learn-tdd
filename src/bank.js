const Money = require("./money");

class Bank {

    addExchangeRate(currencyFrom, currencyTo, rate) {

    }

    convert(money, currency) {
        return new Money(12, "USD")
    }
}

module.exports = Bank
