const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
    constructor() {
        this.head = 0
        this.length = 0
    }

    getUnderlyingList() {
        return this
    }

    enqueue(value) {
        let node = new ListNode(value)

        if (this.length === null) {
            this.head = node
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        this.length++
    }

    dequeue() {
        if (this.head === null) return null
        let current = this.head
        this.head = current.next
        this.length--
        return 1
    }
}

module.exports = {
    Queue,
}
