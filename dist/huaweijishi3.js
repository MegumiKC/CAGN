function canBalanceDiskUsage(numDisks, capacities, ratios, totalData, n) {
    // Helper function to simulate the writing strategy
    function simulateStrategy(strategy) {
        const usages = new Array(numDisks).fill(0);
        let remainingData = totalData;

        while (remainingData > 0) {
            for (let i = 0; i < n; i++) {
                if (remainingData <= 0) break;

                let diskIndex;
                if (strategy === 1) {  // Round Robin
                    diskIndex = Math.floor((usages.reduce((a, b) => a + b, 0) / 4)) % numDisks;
                } else if (strategy === 2) {  // Highest Remaining Space First
                    diskIndex = usages.reduce((maxIndex, usage, currentIndex) => {
                        return (capacities[maxIndex] - usages[maxIndex] < capacities[currentIndex] - usage) ? currentIndex : maxIndex;
                    }, 0);
                } else if (strategy === 3) {  // Proportional Round Robin
                    let totalRatios = ratios.reduce((a, b) => a + b, 0);
                    let weightedIndex = 0;
                    for (let j = 0; j < numDisks; j++) {
                        weightedIndex += ratios[j];
                        if (weightedIndex > i) {
                            diskIndex = j;
                            break;
                        }
                    }
                }

                if (usages[diskIndex] + 4 <= capacities[diskIndex]) {
                    usages[diskIndex] += 4;
                    remainingData -= 4;
                }
            }
        }

        // Calculate the final usage ratios
        return usages.map((usage, index) => usage / capacities[index]);
    }

    let balancedCount = 0;

    for (let strategy = 1; strategy <= 3; strategy++) {
        const finalRatios = simulateStrategy(strategy);
        if (finalRatios.every(r => Math.abs(finalRatios[0] - r) < 1e-6)) {
            balancedCount++;
        }
    }

    return balancedCount;
}

// 示例输入
const numDisks = 3;
const capacities = [64, 64, 64];
const ratios = [1, 1, 1];
const totalData = 12;
const n = 3;

const result = canBalanceDiskUsage(numDisks, capacities, ratios, totalData, n);
console.log(result);  // 输出存在的策略数量
