"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words = '   fly me   to   the moon  ';
function lengthOfLastWord(strings) {
    const reg = / +/;
    const strArray = strings.split(reg);
    return strArray.filter(item => item);
}
console.log(lengthOfLastWord(words));
