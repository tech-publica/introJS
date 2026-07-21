# Lesson 3: Private Fields, Getters, and Setters

## Learning goals

By the end of this lesson, students should be able to:

- declare a private instance field with `#`;
- explain the difference between public and private fields;
- expose private state through getter and setter accessors;
- validate changes before updating private state;
- compare JavaScript privacy and accessors with their Java equivalents.

## Private fields: Java and JavaScript

In Java, privacy is declared with an access modifier:

```java
class BankAccount {
    private double balance;
}
```

In JavaScript, a private field is declared and accessed with a `#` name:

```js
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
}
```

`balance` and `#balance` are different names. Private fields must be declared in
the class body and can only be referenced inside that class. Trying to write
`account.#balance` outside the class is a syntax error, not merely an undefined
value.

JavaScript's traditional underscore convention, such as `_balance`, does not
create privacy. It is only a message to other programmers.

## Getters and setters

Java commonly exposes methods such as `getBalance()` and `setBalance(value)`.
JavaScript supports those ordinary methods too, but accessor syntax lets a method
be used with property notation:

```js
get balance() {
  return this.#balance;
}

set balance(value) {
  // Validate before assigning to this.#balance.
}
```

The caller writes:

```js
console.log(account.balance); // calls the getter
account.balance = 200;        // calls the setter
```

Although these expressions look like direct field access, the getter and setter
code runs. A getter without a setter creates a read-only public interface for
that property.

Run the demonstration:

```sh
node js/oo/03-private-fields-and-accessors/demo.js
```

## Exercise

Complete `exercise.js` by creating a `Temperature` class:

- store the Celsius value in a private `#celsius` field;
- expose a `celsius` getter and setter;
- reject values below absolute zero (`-273.15` Celsius);
- expose a read-only `fahrenheit` getter;
- use `(celsius * 9) / 5 + 32` for the conversion.

Then compare your implementation with `solution.js`.

## Main takeaway

Java uses access modifiers and usually exposes explicit getter/setter methods.
JavaScript uses `#` for language-enforced private fields and can expose methods
as property-like accessors with `get` and `set`.

