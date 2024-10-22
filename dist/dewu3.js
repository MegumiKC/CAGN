function minGroups(n, arr) {
    arr.sort((a, b) => a - b); // 排序成绩数组
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // 没有学生时需要0组

    for (let i = 1; i <= n; i++) {
        // 处理单人组
        dp[i] = Math.min(dp[i], dp[i - 1] + 1);

        // 处理二人组
        if (i >= 2 && arr[i - 1] - arr[i - 2] <= 20) {
            dp[i] = Math.min(dp[i], dp[i - 2] + 1);
        }

        // 处理三人组
        if (i >= 3 && arr[i - 1] - arr[i - 3] <= 10) {
            dp[i] = Math.min(dp[i], dp[i - 3] + 1);
        }
    }

    return dp[n]; // 返回最少的组数
}



// 输入示例
const n = 6;
const arr = [100, 110, 120, 140, 160, 180];
// const n =3;
// const arr = [100,100,100]
console.log(minGroups(n, arr)); // 输出最少组数
