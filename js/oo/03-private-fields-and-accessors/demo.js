class BankAccount {
  #balance;

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = 0;
    this.balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Balance must be a finite number.");
    }

    if (value < 0) {
      throw new RangeError("Balance cannot be negative.");
    }

    this.#balance = value;
  }

  deposit(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
      throw new RangeError("Deposit must be a positive number.");
    }

    this.#balance += amount;
  }

  get summary() {
    return `${this.owner}'s balance is €${this.#balance}.`;
  }
}

const account = new BankAccount("Alice", 100);

console.log(account.summary);
account.deposit(50);
console.log(account.balance);

// Property assignment calls the setter; it does not directly expose #balance.
account.balance = 200;
console.log(account.summary);

try {
  account.balance = -10;
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// `account.#balance` would be a syntax error because #balance is private.

