// 用Set可以不用维护一个List，Set本身是有序的
class LRUSet {
  maxCache: number;
  Set: Set<string>;
  List: Array<string>;
  constructor(maxCache: number) {
    this.maxCache = maxCache;
    this.Set = new Set();
    this.List = [];
  }
  // set函数，lru里没有且cache未满就添加，cache已满就删除最久未访问的url
  set(url: string) {
    if (this.Set.has(url)) {
      this.Set.delete(url);
      this.List.splice(
        this.List.findIndex((item) => item == url),
        1
      );
    } else {
      if (this.Set.size >= this.maxCache) {
        this.Set.delete(this.List.shift() as string);
      }
    }
    this.Set.add(url);
    this.List.push(url);
    return url;
  }
  // get函数，返回url，并调用set方法，将get的url更新为最新访问的页面
  get(url: string) {
    if (this.Set.has(url)) {
      this.set(url);
      return url;
    } else {
      return null;
    }
  }
  // delete函数，删除LRUSet里的页面
  delete(url: string) {
    if (this.Set.has(url)) {
      this.Set.delete(url);
      this.List.splice(
        this.List.findIndex((item) => item == url),
        1
      );
      return url;
    }
    return null;
  }
  // clear函数，清空LRUSet里的页面
  clear() {
    this.Set.clear();
    this.List = [];
  }
}

const myLRU = new LRUSet(3);
myLRU.set("page1");
myLRU.set("page2");
myLRU.set("page3");
myLRU.set("page4");
myLRU.get("page2");
myLRU.set("page5");
console.log(myLRU);
