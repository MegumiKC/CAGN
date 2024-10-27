function selectionSort(list:Array<number>):Array<number>{
    for(let i =0;i<list.length;i++){
        let maxValue = list[0];
        let maxIndex = 0;
        let j = 0;
        while(j<list.length-i){
            if(maxValue<list[j]){
                maxValue = list[j];
                maxIndex = j;
            }
            j++;
        }
        [list[j-1],list[maxIndex]] = [list[maxIndex],list[j-1]]
    }
    return list
}

function selectionSortBySmall(list:number[]):number[] {
    for(let i = 0;i<list.length;i++){
        let minIndex = i;
        for(let j = i;j<list.length;j++){
            if(list[j]<list[minIndex]){
                minIndex = j;
            }
        }
        [list[i],list[minIndex]] = [list[minIndex],list[i]]
    }
    return list
}


const arr = [1,2,3,4,1,65,13,6,1,6,46,7,1,3]
console.log(selectionSort(arr));
console.log(selectionSortBySmall(arr));

export{}