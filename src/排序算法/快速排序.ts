function quickSort(list:any[]):number[]{
    if(list.length<=1){
        return list
    }
    let pivotIndex = Math.floor(list.length/2);
    let pivot = list.splice(pivotIndex,1)[0]
    let left:number[] = [];
    let right:number[] = [];
    list.forEach(item=>{
        if(item<=pivot){
            left.push(item);
        }else{
            right.push(item);
        }
    });
    return quickSort(left).concat([pivot],quickSort(right))
}


const list = [1,3,13,1,6,3,8,2,7,4,2,5,13,414,14114]
const arr = [4,2,1,4,5,6,1,9]
console.log(quickSort(arr));
export{}