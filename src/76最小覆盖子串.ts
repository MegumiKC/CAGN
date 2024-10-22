function minWindow(s: string, t: string): string {
    let cntS = Array(128).fill(0);
    let cntT = Array(128).fill(0);
    let left = 0;
    let minLeft = 0;
    let minRight = s.length;
    let flag = false;
    for (const item of t) {
        cntT[item.charCodeAt(0)]++;
    }
    for (let right = 0; right < s.length; right++) {
        cntS[s[right].charCodeAt(0)]++;
        while (cover(cntS, cntT)) {
            flag = true;
            if (right - left < minRight - minLeft) {
                [minRight, minLeft] = [right, left]
            }
            cntS[s[left++].charCodeAt(0)]--;
        }
    }
    return flag ? s.slice(minLeft, minRight + 1) : ""
};

function cover(cntS: number[], cntT: number[]): boolean {
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if (cntS[i] < cntT[i]) return false
    }
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        if (cntS[i] < cntT[i]) return false
    }
    return true
}

const s = "a";
const t = "aa"
console.log(minWindow(s, t));

export{}

