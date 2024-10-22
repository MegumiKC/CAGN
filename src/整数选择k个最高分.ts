function maxScore(n:any, k:any) {
    // dp[i][j] 表示从 1 到 i 选 j 个数的最大积分
    let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

    // 填充 dp 数组
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, k); j++) {
            // 如果 i 没有被选中，积分等于 dp[i-1][j] （继承上一轮的积分）
            dp[i][j] = dp[i - 1][j];

            // 如果 i 被选中，且 i-1 没有被选，积分加 1
            if (i === 1) {
                // 第一个数被选，没有 i-1 的问题，直接积分加 1
                dp[i][j] = Math.max(dp[i][j], 1);
            } else {
                // 如果 j > 0，且可以选 i, i-1 没有被选，则积分加 1
                if (j - 1 >= 0) {
                    dp[i][j] = Math.max(dp[i][j], dp[i - 2][j - 1] + 1);
                }
            }
        }
    }

    return dp[n][k];
}


// 测试
console.log(maxScore(4, 2)); // 输出最终积分结果
export{}
