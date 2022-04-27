const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    bank = []

    push(elem) {
        this.bank.push(elem)
        return this.bank
    }

    pop() {
        let lastValue = this.bank[this.bank.length - 1]
        this.bank.pop()
        return lastValue
    }

    peek() {
        return this.bank[this.bank.length - 1]
    }
}

module.exports = {
    Stack,
}
