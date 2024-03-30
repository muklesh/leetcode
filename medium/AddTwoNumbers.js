// 2. Add Two Numbers
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1, l2) {

    const head = new ListNode(0)
    let hd = head
    let carry = 0
    let sum = 0

    while (l1 || l2 || carry) {
        const l1Value = l1?.val || 0
        const l2Value = l2?.val || 0
        
        sum = l1Value + l2Value + carry
        carry = Math.floor(sum / 10)
        hd.next = new ListNode(sum - carry * 10)
        
        hd = hd.next
        l1 = l1?.next
        l2 = l2?.next
    }
    
    return head.next
};

let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];

console.log(addTwoNumbers(l1,l2));