function canSumToZero(x:any,nums:any){
    function backtrack(target:any,index:any) {
        if(target ===0){
            return true;
        }
        if (target<0||index>=nums.length){
            return false;
        }
        if(backtrack(target,index+1)){
            return true;
        }
        if(backtrack(target-nums[index],index)){
            return true;
        }
        return false;
    }
    return backtrack(x,0);
}

function isTenBinary(num: number) {
    return String(num).split('').every(item => item === '0' || item === '1');
}

function countTenBinarySumNumbers(x:any){
    if(x<10){
        return 0;
    }
    const tenBinaryNumbers = [];
    for(let i =10;i<=x;i++){
        if(isTenBinary(i)){
            tenBinaryNumbers.push(i)
        }
    }
    const temp = [];
    for(let i =1;i<=x;i++){
        if(canSumToZero(i,tenBinaryNumbers)){
            temp.push(i)
        }
    }
    return temp.length
}
console.log(countTenBinarySumNumbers(30));
export{}
