const map = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
]);
let number = 1994;
let maxRomanNumberCount = 0;
let transValue:any[] = [];
function transNumToRoman(number:any) {
    while (number > 0) {
        map.forEach((value, key) => {
            if (number >= value) {
                maxRomanNumberCount = Math.floor(number / value);
                number -= maxRomanNumberCount * value;
                Array.from({ length: maxRomanNumberCount }).forEach(_ => {
                    transValue.push(key);
                });
            }
        });
    }
    return transValue.join('');
}
console.log(transNumToRoman(number));
export{}
