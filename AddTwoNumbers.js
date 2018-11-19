// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var dummyHead = new ListNode(0);
  var p = l1,
    q = l2,
    curr = dummyHead;
  var carry = 0;
  while (p != null || q != null) {
    var x = p ? p.val : 0;
    var y = q ? q.val : 0;
    var sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
};

// Complexity analysis: https://leetcode.com/articles/add-two-numbers/
