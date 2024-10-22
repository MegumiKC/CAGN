const dic = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}
function transNum(s: any) {
    // const sList = s.split("");
    // let integer = 0;
    // sList.forEach((item: any) => {
    //     integer += dic[item];
    // })
    // for (let i = 0; i < sList.length; i++) {
    //     if (dic[sList[i]] < dic[sList[i + 1]]) {
    //         integer += dic[sList[i + 1]] - dic[sList[i]];
    //     }
    //     else {
    //         integer += dic[sList[i]];
    //     }
    // }
    // return integer
}

console.log(transNum("III"));

export { }