// 我读反了ransomNote和magazine
function canConstruct(ransomNote: string, magazine: string): boolean {
    [ransomNote,magazine] = [magazine,ransomNote]
    const myMap = new Map();
    for(let i = 0;i<ransomNote.length;i++){
        if(!myMap.has(ransomNote[i])) myMap.set(ransomNote[i],1)
        else myMap.set(ransomNote[i],myMap.get(ransomNote[i])+1)
    }
    for(let j = 0;j<magazine.length;j++){
        if(!myMap.has(magazine[j])) return false
        else{
            myMap.set(magazine[j],myMap.get(magazine[j])-1)
            if(myMap.get(magazine[j])<0){
                return false
            }
        }
    }
    return true
};
export{}