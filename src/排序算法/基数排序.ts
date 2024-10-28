function radixSort(list: number[]) {
    let counter: any = Array.from({ length: 10 }, () => []);
    let max = list[0];
    list.forEach((item) => {
        if (item > max) max = item;
    });
    let maxDistLength = max.toString().length;
    for (let i = 0; i < maxDistLength; i++) {
        for (let j = 0; j < list.length; j++) {
            let bucket = getDigit(list[j], i + 1);
            if (bucket == -1) {
                counter[0].push(list[j]);
            } else {

                counter[bucket].push(list[j]);
            }
        }
        console.log(counter);
        let index = 0;
        for (let a = 0; a < counter.length; a++) {
            while (counter[a].length !== 0) {
                list[index++] = counter[a].shift();
            }
        }
    }
    return list;
}
const list = [
    24, 23125, 121, 541, 5, 7, 1, 1, 3, 1, 51, 3125, 12, 10, 30, 764, 9, 60, 66,
    98, 188,
];
console.log(radixSort(list));
export { };

function getDigit(num: number, position: number) {
    const absNum = Math.abs(num);
    const numDigitLength = Math.floor(Math.log10(absNum)) + 1;
    if (position < 0 || position > numDigitLength) {
        return -1;
    }
    return Math.floor(absNum / Math.pow(10, position - 1)) % 10;
}
