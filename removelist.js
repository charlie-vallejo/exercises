/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class LinkedList{

    nodeToRemove(idxRemove, head){
        if(idxRemove == 0){

            return head.next;
        }
        let prev, curr = head, count = 0;
        while(count < idxRemove){
            prev = curr
            curr = curr.next;
            count++
        }
        prev.next = curr.next ? curr.next : null

        return head;
    }

    Size(head){
        let size = 0;
        let node = head;
        while(node){
            size++;
            node = node.next;
        }

        return size
    }
}

var removeNthFromEnd = function(head, n) {
    let list = new LinkedList();
    let idx = list.Size(head) - n;

    head = list.nodeToRemove(idx, head)

    return head;
};