const s = 'the sky is blue'

function regTrim(s:string) {
    return s.split(/\s+/).filter(item=>item.length>0)
}

function reverseWords(s: string): string {
    let wordList = s.split(/\s+/).filter(item=>item.length>0)
    for(let index =0;index<wordList.length/2;index++){
        const temp = wordList[index];
        wordList[index] = wordList[wordList.length-index-1];
        wordList[wordList.length-index-1] = temp;
    }
    return wordList.join(' ')
};

console.log(reverseWords(s));
export {}


