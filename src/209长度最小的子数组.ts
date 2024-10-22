function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let right =0;
    let count = 0;
    let minLength = nums.length+1;
    for(;right<nums.length;right++){
        count+=nums[right];
        while(count>=target){
            minLength = Math.min(minLength,right-left+1)
            count-=nums[left++]
        }
    }
    return minLength<=nums.length?minLength:0
};

const list = [1,4,4]
console.log(minSubArrayLen(4,list));
export{}