const s = "nitin";

function checkPalindrome(str) {
    function recursiveCheck(str, l, r) {
        if (l >= r) return true;
        if (str[l] != str[r]) return false;
        return recursiveCheck(str, l+1, r-1);
    }
    return recursiveCheck(str, 0, str.length-1);
}

console.log(checkPalindrome(s));

// base case
// decision
// state update
// recursive call
// backtracking (optional)
