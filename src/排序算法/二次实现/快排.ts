function quickSort(list:number[]):number[]{
    if(list.length<=1){
        return list
    }
    let pivotIndex = Math.floor(list.length/2)
    let pivot = list.splice(pivotIndex,1)[0]
    const left:number[] = []
    const right:number[] = []
    list.forEach(item=>{
        if(item<=pivot){
            left.push(item)
        }else{
            right.push(item)
        }
    })
    return quickSort(left).concat(pivot,quickSort(right))
}

export{}

