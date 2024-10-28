// 网上肯定有原题，我例子都没给gpt，gpt用的例子就是题目给的例子，你改一下代码命名和逻辑这些
function groupAnagrams(strs) {
    const anagramMap = {};

    for (const str of strs) {
        // 将字符串排序，并作为对象的键
        const sortedStr = str.split('').sort().join('');
        
        // 如果键不存在，则初始化一个空数组
        if (!anagramMap[sortedStr]) {
            anagramMap[sortedStr] = [];
        }
        
        // 将原始字符串添加到对应的数组中
        anagramMap[sortedStr].push(str);
    }

    // 返回所有组合的异位词
    return Object.values(anagramMap);
}

// 示例用法
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);

