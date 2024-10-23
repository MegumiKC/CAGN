function longestConsecutive(nums: number[]): number {
    const mySet = new Set(nums)
    let longestSequence = 0;
    mySet.forEach(item=>{
        if(!mySet.has(item-1)){
            let cur = item;
            let curSequence = 1
            while(mySet.has(cur+1)){
                cur = cur+1
                curSequence +=1
            }
            longestSequence = Math.max(curSequence,longestSequence)
        }
    })
    return longestSequence
};
export{}