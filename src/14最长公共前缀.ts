function longestCommonPrefix(strs:string[]){
    let maxPrefix = 0;
    let maxCommonPrefix:string[] = [];
    if(strs.length<=1){
        return '';
    }
    else{
        const strArr1 = strs[0].split('');
        const strArr2 = strs[1].split('');
        strArr1.forEach((item,index)=>{
            if(item === strArr2[index]){
                maxPrefix ++;
                maxCommonPrefix.push(item)
            }
        });
        strs.forEach(item=>{
            let itemArr = item.split('');
            for(let i =0;i<maxPrefix;i++){
                if(itemArr[i]!==maxCommonPrefix[i]){
                    maxCommonPrefix.splice(i);
                    break;
                }
            }
        })
        return maxCommonPrefix.join('');
    }

}

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));