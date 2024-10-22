const list = [1,3,2]
function doubleList(list:any){
    let min= 1e9;
    let max = 0;
    list.forEach((item:any)=>{
        if(item<=min){
            min = item;
            console.log('min被更改了',item);
        }
        if(item>=max){
            max = item;
            console.log('max被更改了',item);
        }
        if(item>min && item<max){
            console.log('输出no',item);
            return false;
        }
    })
    return true
}

console.log(doubleList(list)?'no':'yes');
export{}