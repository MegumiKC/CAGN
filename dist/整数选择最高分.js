// function maxScore(n, k) {
//     // dp[i][j] 表示从 1 到 i 选 j 个数的最大积分
//     let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

//     // 填充 dp 数组
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= Math.min(i, k); j++) {
//             // 如果 i 没有被选中，积分等于 dp[i-1][j] （继承上一轮的积分）
//             dp[i][j] = dp[i - 1][j];

//             // 如果 i 被选中，且 i-1 没有被选，积分加 1
//             if (i === 1) {
//                 // 第一个数被选，没有 i-1 的问题，直接积分加 1
//                 dp[i][j] = Math.max(dp[i][j], 1);
//             } else {
//                 // 如果 j > 0，且可以选 i, i-1 没有被选，则积分加 1
//                 if (j - 1 >= 0) {
//                     dp[i][j] = Math.max(dp[i][j], dp[i - 2][j - 1] + 1);
//                 }
//             }
//         }
//     }

//     return dp[n][k];
// }

// function maxScore(n, k) {
//     // 使用一维数组来降低空间复杂度
//     let dp = Array.from({ length: k + 1 }, () => 0);

//     // 填充 dp 数组
//     for (let i = 1; i <= n; i++) {
//         let prev = 0; // 用于存储上一行的 dp[0]
//         for (let j = 1; j <= Math.min(i, k); j++) {
//             let temp = dp[j]; // 保存当前行的 dp[j]
//             // 如果 i 没有被选中，积分等于 dp[j] （继承上一轮的积分）
//             dp[j] = dp[j - 1] > 0 ? dp[j - 1] : 0;

//             // 如果 i 被选中，且 i-1 没有被选，积分加 1
//             if (i === 1) {
//                 // 第一个数被选，没有 i-1 的问题，直接积分加 1
//                 dp[j] = Math.max(dp[j], 1);
//             } else {
//                 // 如果 j > 0，且可以选 i, i-1 没有被选，则积分加 1
//                 if (j - 1 >= 0) {
//                     dp[j] = Math.max(dp[j], prev + 1);
//                 }
//             }
//             prev = temp; // 更新 prev 为当前行的 dp[j]
//         }
//     }

//     return dp[k];
// }

function maxScore(n, k) {
    // 初始化两个数组，current 表示当前轮次的状态，previous 表示上一轮的状态
    let current = Array(k + 1).fill(0);
    let previous = Array(k + 1).fill(0);

    // 填充 dp 数组
    for (let i = 1; i <= n; i++) {
        // 复制 current 到 previous，为下一轮做准备
        [current, previous] = [previous, current];

        for (let j = 1; j <= Math.min(i, k); j++) {
            // 如果 i 没有被选中，积分等于 previous[j]（继承上一轮的积分）
            current[j] = previous[j];

            // 如果 i 被选中，且 i-1 没有被选，积分加 1
            if (i === 1) {
                // 第一个数被选，没有 i-1 的问题，直接积分加 1
                current[j] = Math.max(current[j], 1);
            } else {
                // 如果可以选 i, i-1 没有被选，则积分加 1
                if (j - 1 >= 0) {
                    current[j] = Math.max(current[j], (i > 1 ? previous[j - 1] : 0) + 1);
                }
            }
        }
    }

    return current[k];
}

// 测试
console.log(maxScore(5, 3));  // 输出最终积分结果



// 测试
console.log(maxScore(1, 1)); // 输出最终积分结果
