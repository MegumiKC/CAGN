// Javascript实现个带并发限制的异步调度器，保证同时最多运行2个任务
class Scheduler {
    constructor(){
        this.queue = []
        this.max = 2;
        this.curTaskNum = 0;
    }
    async add(fn) {
        if(this.curTaskNum>=this.max){
            await new Promise((resolve)=>{
                this.queue.push(resolve)
            })
        }
        this.curTaskNum++;
        const result = await fn()
        this.curTaskNum--;
        this.queue.length&&this.queue.shift()()
        return result
    }
}

const timeout = (time) => new Promise((resolve) => {
    setTimeout(resolve, time);
});

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(()=>timeout(time)).then(() => {
        console.log(order);
    })
};

addTask(4000, 4)
addTask(2000, 2)
addTask(3000, 3)
addTask(900, 1)