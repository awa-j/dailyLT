### 链表

#### 206 - 反转链表 - e - [link](https://leetcode-cn.com/problems/reverse-linked-list/submissions/)

```
/**
 * 链表：一种物理存储结构上非连续，非顺序的存
 * 储结构，数据元素的逻辑顺序是通过链表中的指
 * 针链接次序实现的
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var newHead = null;
    while(head != null) {
        var tmp = head.next;
        head.next = newHead;
        newHead = head;
        head = tmp;
    }
    return newHead;
};


```