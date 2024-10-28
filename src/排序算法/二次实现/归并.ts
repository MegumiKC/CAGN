function merge(left:number[],right:number[]){
    let result = []
    while(left.length>0&&right.length>0){
        if(left[0]>right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    while(left.length){
        result.push(left.shift())
    }
    while(right.length){
        result.push(right.shift())
    }
    return result
}

function mergeSort(list:number[]):any[]{
    if(list.length<=1){
        return list
    }
    const midIndex = Math.ceil(list.length/2)
    let left = list.slice(0,midIndex)
    let right = list.slice(midIndex)
    return merge(mergeSort(left),mergeSort(right))
}

export{}