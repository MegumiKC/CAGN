function strStr(haystack: string, needle: string): number {
    let haystackLen = haystack.length;
    let needleLen = needle.length;
    if(haystack==needle){
        return 0
    }
    for(let i =0;i<=haystackLen-needleLen;i++){
        console.log(haystack.substring(i,i+needleLen));
        if(haystack.substring(i,i+needleLen)==needle){
            return i
        }
    }
    return -1
};
const h = "a"
const n = "a"
console.log(strStr(h,n));
export{}