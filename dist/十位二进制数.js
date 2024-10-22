"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num = 30;
function countIntSum(n) {
    // 遍历获得10到n的所有十位二进制数
    const tenBinaryNumbers = [];
    for (let i = 10; i < n; i++) {
        if (isTenBinary(i)) {
            tenBinaryNumbers.push(i);
        }
    }
    const possibleSums = new Set([0]);
    const newSums = new Set();
    for (const num of tenBinaryNumbers) {
        for (const s of possibleSums) {
            const newSum = s + num;
            if (newSum <= n) {
                newSums.add(newSum);
            }
        }
        newSums.forEach((sum) => possibleSums.add(sum));
    }
    let count = 0;
    for (const sum of possibleSums) {
        if (sum >= 10) {
            count++;
        }
    }
    return count;
}
function isTenBinary(num) {
    return String(num).split('').every(item => item === '0' || item === '1');
}
console.log(countIntSum(num));
