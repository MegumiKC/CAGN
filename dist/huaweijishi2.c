#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int automateDeployment(int N, vector<int>& executionTimes, vector<vector<int>>& dependencies) {
    vector<int> indegree(N, 0);
    vector<vector<int>> dependencyList(N);
    
    // 构建依赖关系和入度数组
    for (int i = 0; i < N; i++) {
        for (int dep : dependencies[i]) {
            if (dep != -1) {
                dependencyList[dep - 1].push_back(i);
                indegree[i]++;
            }
        }
    }

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
    
    // 将所有入度为0的步骤加入优先队列
    for (int i = 0; i < N; i++) {
        if (indegree[i] == 0) {
            minHeap.push({executionTimes[i], i});
        }
    }

    int totalTime = 0;

    while (!minHeap.empty()) {
        vector<int> currentBatch;
        int currentTime = 0;

        // 取出当前所有可以并行执行的步骤
        while (!minHeap.empty()) {
            auto [time, step] = minHeap.top();
            minHeap.pop();
            currentBatch.push_back(step);
            currentTime = max(currentTime, time); // 找到当前批次最长的时间
        }

        totalTime += currentTime; // 更新总时间

        // 更新依赖的步骤
        for (int step : currentBatch) {
            for (int nextStep : dependencyList[step]) {
                indegree[nextStep]--;
                if (indegree[nextStep] == 0) {
                    minHeap.push({executionTimes[nextStep], nextStep});
                }
            }
        }
    }

    return totalTime;
}

int main() {
    // 示例输入
    int N = 5;
    vector<int> executionTimes = {2, 3, 1, 4, 6};
    vector<vector<int>> dependencies = {
        {-1},      // 第1步无依赖
        {1, 2},    // 第2步依赖第1步
        {1, 3},    // 第3步依赖第1步
        {2},       // 第4步依赖第2步
        {3}        // 第5步依赖第3步
    };

    cout << automateDeployment(N, executionTimes, dependencies) << endl; // 输出总时间

    return 0;
}
