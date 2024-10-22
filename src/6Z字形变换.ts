function convert(s: string, numRows: number): string {
    if(s.length<=1||numRows==1){
        return s
    }
    const sList = s.split('');
    let sArray: string[][] = Array.from({ length: numRows }, () => [])
    let i = 0;
    let flag = true;
    let convertS = '';

    sList.forEach(item => {
        if (flag) {
            sArray[i].push(item)
            if (i === numRows - 1) {
                i--;
                flag = false;
            } else {
                i++;
            }
        }
        else {
            sArray[i].push(item)
            if (i === 0) {
                i++;
                flag = true;

            } else {
                i--;
            }
        }
    })
    sArray.forEach(item=>{
        convertS = convertS.concat(item.join(''));
    })
    return convertS
};
console.log(convert("AB", 1))
export {}
