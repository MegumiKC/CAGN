
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let cur = head;
    let len = 0;
    while (cur) {
        len++;
        cur = cur.next;
    }
    cur = dummy;
    for(let i = 0; i<len-n;i++){
        cur = (cur as ListNode).next
    }
    (cur as ListNode).next = (cur?.next?.next as ListNode)
    return dummy.next
};

// head = [1,2,3]
const head: ListNode = {
    val: 1,
    next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
}
const n = 2

console.log(removeNthFromEnd(head, 2));
export{}