function lengthOfLongestSubstring(s: string): number {
    let window = new Set()
    let list = Array.from(s)
    let longestLen = 0;
    let left = 0;
    for(let right = 0;right<s.length;right++){
        while(left<=right){
            if(!window.has(list[right])){
                window.add(list[right])
                longestLen = Math.max(window.size,longestLen)
                break;
            }else{
                window.delete(list[left++])
            }
        }
    }
    return longestLen
    
};

const s = 'pwwkew'
console.log(lengthOfLongestSubstring(s));
export{}
