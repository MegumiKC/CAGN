function maxColoredCharacters(n, q, s, queries) {
    let result = [];

    // 遍历每个查询区间 [l, r]
    for (let query of queries) {
        let [l, r] = query;
        l--;  // 转为 0-based index
        r--;

        let count = 0;  // 记录染色的字符数
        let previousColored = false;  // 标记前一个字符是否被染色

        for (let i = l; i <= r; i++) {
            if (s[i] === '0') {
                count++;  // 字符 '0' 可以直接染色
                previousColored = false;  // '0' 不影响下一个字符
            } else if (s[i] === '1' && !previousColored) {
                count++;  // 染色 '1'
                previousColored = true;  // 标记 '1' 已被染色，防止连续 '1'
            } else {
                previousColored = false;  // 当前字符不能染色，跳过
            }
        }

        result.push(count);  // 记录当前查询的结果
    }

    return result;
}

// 输入处理
const n = 8;  // 字符串长度
const q = 2;   // 询问次数
const s = "01011111";  // 字符串
const queries = [
    [2, 5],   // 查询区间 [1, 5]
    [1, 8]  
];

// 输出结果
const res = maxColoredCharacters(n, q, s, queries);
console.log(res.join('\n'));  // 每行输出一个查询的结果
