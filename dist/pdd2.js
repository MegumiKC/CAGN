function findLastChild(arr,distance){
 let index = 0;
 while(arr.length>1){
    index = (index+distance-1)%arr.length;
    arr.splice(index,1)
 }
 return arr[0]
}

const arr = Array.from({length:30},(_,index)=>index+1)
console.log(findLastChild(arr,3));
