class BankAccount {
    constructor(initialBalance = 0) {
        let _balance = initialBalance;
        //console.log(_balance);

        const isValidAmount = amount => amount > 0;
        //console.log(isValidAmount(-2));
        //console.log(isValidAmount(5));

        this.deposit = function (amount) {
            if (isValidAmount(amount)) {
                _balance += amount;
                console.log(`Deposited $${amount}. New balance: $${_balance}`);
            } else {
                console.log("Invalid deposit amount. Amount must be greater than 0.");
            }
        };

        this.withdraw = function (amount) {
            if (isValidAmount(amount) && amount <= _balance) {
                _balance -= amount;
                console.log(`Withdrew $${amount}. New balance: $${_balance}`);
            } else {
                console.log("Invalid withdrawal amount or insufficient funds.");
            }
        };

        this.viewBalance = function () {
            console.log(`Current balance: $${_balance}`);
        };
    }
}
const account = new BankAccount(1000);
account.viewBalance();
account.deposit(500);
account.withdraw(200);
account.viewBalance();
