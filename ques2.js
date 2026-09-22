class bankAccount {
    static bankInfo() {
        console.log("bank: state bank");
        console.log("banking: Deposit, withdrawal and Balance Management");
    }
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(am) {
        this.balance += am;
    }
    
    withdraw(am) {
        if (am <= this.balance) {
            this.balance -= am;
        } else {
            console.log("insufficient balance");
        }
    }
    displayBalance() {
        console.log("account No:", this.accountNo);
        console.log("holder Name:", this.holderName);
        console.log("balance:", this.balance);
    }
}
let a1 = new bankAccount(101, "Yashvi", 5000);
let a2 = new bankAccount(102, "Riya", 3000);
a1.deposit(100);
a1.withdraw(200);
a1.displayBalance();
a2.deposit(500);
a2.withdraw(400);
a2.displayBalance();

bankAccount.bankInfo();