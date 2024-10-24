function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;
    let index = nums.length;
    let mid = Math.floor(nums.length/2)
    while(left<=right){
        if(target<=nums[mid]){
            index = mid
            right = mid-1;
        }else{
            left = mid+1;
        }
        mid = Math.floor((left+right)/2);
    }
    return index
};
export{}
