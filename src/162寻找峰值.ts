function findPeakElement(nums: number[]): number {
    let[left,right] = [0,nums.length-1]
    while(left<right){
        const i = (left+right) >>1
        if(nums[i]>nums[i+1]){
            right = i; 
        }else{
            left = i+1
        }
    }
    return left
};