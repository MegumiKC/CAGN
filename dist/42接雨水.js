"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const height = [4, 2, 0, 3, 2, 5];
const n = height.length;
let leftMax = new Array(n).fill(0);
let rightMax = new Array(n).fill(0);
leftMax[0] = height[0];
rightMax[n - 1] = height[n - 1];
function min(a, b) {
    return a > b ? b : a;
}
function max(a, b) {
    return a > b ? a : b;
}
function catchRain(height) {
    let rainCount = 0;
    for (let i = 1; i < n; i++) {
        leftMax[i] = max(leftMax[i - 1], height[i]);
    }
    for (let j = n - 2; j > -1; j--) {
        rightMax[j] = max(rightMax[j + 1], height[j]);
    }
    height.forEach((item, index) => {
        rainCount += min(leftMax[index], rightMax[index]) - item;
    });
    return rainCount;
}
console.log(catchRain(height));
