const nums = [1,2,3,4,5];
const nums1 = [];
const nums2 = [5];
const nums3 = [1,2];
const nums4 = [2,1];

function checkSorted(arr) {
    const n = arr.length;
    if (n === 0 || n === 1) return true;
    if (n === 2 && arr[1] >= arr[0]) return true; 
    function recursiveCheck(arr,idx) {
        if ((arr[idx] < arr[idx-1]) || (arr[idx+1] < arr[idx])) {
            return false;
        }
        if (idx === arr.length-2) return true;
        return recursiveCheck(arr, idx+1);
    }
    return recursiveCheck(arr,1);
}

console.log(checkSorted(nums));
console.log(checkSorted(nums1));
console.log(checkSorted(nums2));
console.log(checkSorted(nums3));
console.log(checkSorted(nums4));

// base case
// decision
// state update
// recursive call
// backtracking
