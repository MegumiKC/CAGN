// 处理超长字符串会超时
function findSubstring(s: string, words: string[]): number[] {
    const len = words[0].length;
    const wordsLen = words.length;
    let subStringLen = wordsLen*len
    const result = [];
    let left = 0;
    let n = 0;
    let wordsCopy = Array.from(words)
    while(left+subStringLen<=s.length){
        const str = s.substr(left+n*len,len)
        if(wordsCopy.find(item=>item==str)){
            wordsCopy[wordsCopy.findIndex(item=>item==str)] = '';
            n++;
            console.log('n',n,'arr',wordsCopy);
        }else{
            left++;
            n = 0;
            wordsCopy = Array.from(words)
        }
        if(n==words.length){
            result.push(left);
            left++;
            n = 0;
            wordsCopy = Array.from(words)
        }
    }
    return result
};
const s = "aaa";
const words = ["a","a"]
console.log(findSubstring(s,words));

export{}