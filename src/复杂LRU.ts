// 双向链表
class DoubleLinkList {
  key: string;
  value: any;
  pre: DoubleLinkList | null;
  next: DoubleLinkList | null;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}
// 没有必要用双向链表做LRU，用Map就能实现
