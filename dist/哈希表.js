//封装哈希表类
class hashTable {
    constructor(length) {
        this.storage = []
        this.count = 0//计算已经存储的元素个数
        //装填因子：loadFactor > 0.75时需要扩容；loadFactor < 0.25时需要减少容量
        this.limit = length//初始长度

    }

    // 哈希函数
    hashFunc(str, size) {
        //1.定义hashCode变量
        let hashCode = 0

        //2.霍纳法则，计算hashCode的值
        //cats -> Unicode编码
        for (let i = 0; i < str.length; i++) {
            // str.charCodeAt(i)//获取某个字符对应的unicode编码
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        //3.取余操作
        let index = hashCode % size
        return index
    }

    // 插入&修改操作
    put(key, value) {
        //1.根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2.根据index取出对应的bucket
        let bucket = this.storage[index]

        //3.判断该bucket是否为null
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }

        //4.判断是否是修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                tuple[1] = value
                return//不用返回值
            }
        }

        //5.进行添加操作
        bucket.push([key, value])
        // 如果要存储键值对类型  bucket.push({key:key,value:value})
        this.count += 1

        // 6.判断是否进行扩容
        if (this.count > this.limit * 0.75) {
            this.resize(this.limit * 2)
        }

    }

    //获取操作
    get(key) {
        //1.根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2.根据index获取对应的bucket
        let bucket = this.storage[index]

        //3.判断bucket是否等于null
        if (bucket == null) {
            return null
        }

        //4.有bucket，那么就进行线性查找
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {//tuple[0]存储key，tuple[1]存储value
                return tuple[1]
            }
        }

        //5.依然没有找到，那么返回null
        return null
    }

    // 删除操作
    remove(key) {
        //1.根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2.根据index获取对应的bucket
        let bucket = this.storage[index]

        //3.判断bucket是否为null
        if (bucket == null) {
            return null
        }

        //4.有bucket,那么就进行线性查找并删除
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                bucket.remove(i)
                this.count -= 1
                return tuple[1]
            }
        }

        //5.如果删除了元素判断是否需要缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
            this.resize(Math.floor(this.limit / 2))
        }

        //6.依然没有找到，返回null
        return null
    }

    // hashTable是否为空
    isEmpty() {
        return this.count == 0
    }

    // hashTable大小
    size() {
        return this.count
    }

    //哈希表扩容
    resize(newLimit) {
        //1.保存旧的storage数组内容
        let oldStorage = this.storage

        //2.重置所有的属性
        this.storage = []
        this.count = 0
        this.limit = newLimit

        //3.遍历oldStorage中所有的bucket
        for (let i = 0; i < oldStorage.length; i++) {
            //3.1.取出对应的bucket
            const bucket = oldStorage[i];

            //3.2.判断bucket是否为null
            if (bucket == null) {
                continue
            }

            //3.3.bucket中有数据，就取出数据重新插入
            for (let j = 0; j < bucket.length; j++) {
                const tuple = bucket[j];
                this.put(tuple[0], tuple[1])//插入数据的key和value
            }
        }
    }

}