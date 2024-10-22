const ratings: Array<number> = [1, 2, 87, 87, 87, 2, 1];
const n = ratings.length;
let left = new Array(n).fill(1);
let right = new Array(n).fill(1);
let count = 0;
let leftCount = 0;
let rightCount = 0;

function distributeCandy(ratings: Array<number>) {
    // 左遍历
    for (let i = n - 2; i > -1; i--) {
        if (ratings[i] > ratings[i + 1]) {
            left[i] = left[i + 1] + 1;
        }
    }
    // 右遍历
    for (let j = 1; j < n; j++) {
        if (ratings[j] > ratings[j-1]) {
            right[j] = right[j - 1] + 1;
        }
    }
    ratings.forEach((item,index)=>{
        item = left[index]>right[index]?left[index]:right[index];
        count += item;
    })
    return count;
}

console.log(distributeCandy(ratings));
export{}