
function automateDeployment(N, executionTimes, dependencies) {
    const indegree = new Array(N).fill(0);
    const dependencyList = Array.from({ length: N }, () => []);
    
    // 构建依赖关系和入度数组
    for (let i = 0; i < N; i++) {
        const deps = dependencies[i];
        for (const dep of deps) {
            if (dep !== -1) {
                dependencyList[dep - 1].push(i);
                indegree[i]++;
            }
        }
    }

    const minHeap = [];
    
    // 将所有入度为0的步骤加入优先队列
    for (let i = 0; i < N; i++) {
        if (indegree[i] === 0) {
            minHeap.push([executionTimes[i], i]);
        }
    }

    let totalTime = 0;

    // 处理优先队列
    while (minHeap.length) {
        // 计算当前时间段内可以完成的所有步骤
        const currentBatch = [];
        let currentTime = 0;

        // 取出当前所有可以并行执行的步骤
        while (minHeap.length) {
            const [time, step] = minHeap.shift();
            currentBatch.push(step);
            currentTime = Math.max(currentTime, time); // 找到当前批次最长的时间
        }

        totalTime += currentTime; // 更新总时间

        // 更新依赖的步骤
        for (const step of currentBatch) {
            for (const nextStep of dependencyList[step]) {
                indegree[nextStep]--;
                if (indegree[nextStep] === 0) {
                    minHeap.push([executionTimes[nextStep], nextStep]);
                }
            }
        }

        // 重新排序堆
        minHeap.sort((a, b) => a[0] - b[0]);
    }

    return totalTime;
}

// 示例输入
// 示例输入
const N = 4;
const executionTimes = [1,2,3,4];
const dependencies = [
    [2,3],      // 第1步无依赖
    [3],    // 第2步依赖第1步
    [-1],      // 第4步依赖第2步
    [1]        // 第5步依赖第3步
];

console.log(automateDeployment(N, executionTimes, dependencies)); // 输出总时间

