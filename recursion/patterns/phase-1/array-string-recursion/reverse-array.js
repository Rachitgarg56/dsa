const nums = [1,2,3,4,5];

function reverseArr(arr) {
    function recursiveReverse(arr, l, r) {
        if (l >= r) return;
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        recursiveReverse(arr, l+1, r-1);
    }
    recursiveReverse(arr, 0, arr.length-1);
}

reverseArr(nums);
console.log(nums);

// base case
// decision
// state update
// recursive call
// backtracking
