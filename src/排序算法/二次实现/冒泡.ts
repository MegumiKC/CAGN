function bulbleSort(list:Array<number>):number[]{
    for(let i =0;i<list.length;i++){
        for(let j = 0;j<list.length-1-i;j++){
            if(list[j+1]<list[j]){
                [list[j+1],list[j]] = [list[j],list[j+1]]
            }
        }
    }
    return list
}

const arr = [1,321,45,1,3,4,2,5,6,3,1,6,2,9,4]
console.log(bulbleSort(arr));
export{}