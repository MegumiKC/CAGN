const words = '   fly me   to   the moon  '

function  lengthOfLastWord(strings:string) {
    const reg = / +/;
    const strArray = strings.split(reg);
    return strArray.filter(item=>item)
}

console.log(lengthOfLastWord(words));
export{}