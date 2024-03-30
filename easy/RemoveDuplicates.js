// 83. Remove Duplicates from Sorted List
// Easy
// Topics
// Companies
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
    if(head == null || head.next == null)
        return head;

    let arr = head;
    while( arr != null && arr.next != null){
        
        if(arr.val == arr.next.val){
            arr.next = arr.next.next;
        }
        else{
            arr = arr.next; 
        }
    }
    return head;  
};

let head = [1,1,2];
console.log(deleteDuplicates(head))