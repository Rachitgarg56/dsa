const nums = [1,2,3,4,5];

function findSum(arr) {
    function recursiveSum(arr, idx, sum) {
        if (idx > arr.length-1) return sum;
        return recursiveSum(arr, idx+1, sum + arr[idx]);
    }
    return recursiveSum(arr, 0, 0);
}

console.log(findSum(nums));

// base case
// decision
// state update
// recursive call
// backtracking 
