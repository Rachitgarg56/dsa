
const stack = [1,3,2,5,4];

function reverseStack(stack) {
    const queue = [];
    while (stack.length) {
        queue.push(stack.pop());
    }
    while (queue.length) {
        stack.push(queue.shift());
    }
}

reverseStack(stack);

// base case
// decision
// state upate
// recursive call
// backtracking
