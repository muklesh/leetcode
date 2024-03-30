// 67. Add Binary
// Easy
// Topics
// Companies
// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
    let avalue = a;
    let bvalue = b;
    let carry = 0, res = "";
    for(let i = avalue.length-1, j = bvalue.length-1; i >= 0 || j >= 0; i--, j--){
        let sum = Number(avalue[i] || 0) + Number(bvalue[j] || 0) +carry;
        res = (sum % 2) + res;
        carry = sum > 1 ? 1 : 0;
    }
    if(carry) res = '1' + res;
    return res;
};
let a = "11", b = "1";
console.log(addBinary(a,b))