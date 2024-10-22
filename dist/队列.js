class ArrayQueue {
    constructor() {
      this.queue = [];
    }
    // 入队
    enqueue(value) {
      return this.queue.push(value);
    }
    // 出队
    dequeue() {
      return this.queue.shift();
    }
    // 取队头元素
    peek() {
      return this.queue[0];
    }
    // 判断队列是否为空
    isEmpty() {
      return this.queue.length === 0;
    }
    // 取队列有多少个元素
    size() {
      return this.queue.length;
    }
    // 清空队列
    clear() {
      this.queue = [];
    }
  }
  
  class ObjectQueue {
    constructor() {
      this.queue = {};
      this.end = -1;
      this.front = -1;
    }
     // 入队
    enqueue(value) {
      if (this.front === -1) {
        this.front++;
      }
      this.queue[++this.end] = value;
    }
    // 出队
    dequeue() {
      if (!this.isEmpty()) {
        const res = this.queue[this.front];
        delete this.queue[this.front++];
        return res;
      }
      return null;
    }
    // 取队头元素
    peek() {
      if (!this.isEmpty()) {
        return this.queue[this.front];
      }
      return null;
    }
    // 判断队列是否为空
    isEmpty() {
      return this.front > this.end;
    }
    // 取队列有多少个元素
    size() {
      return this.end - this.front + 1;
    }
    // 清空队列
    clear() {
      this.queue = {};
      this.front = -1;
      this.end = -1;
    }
  }
  