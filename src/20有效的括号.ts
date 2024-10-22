function isValid(s: string): boolean {
    const sList = s.split('');
    const stack: string[] = [];
    if (sList[0] === ')' || sList[0] === '}' || sList[0] === ']' || sList.length == 1) {
        return false
    }
    for (let i = 0; i < sList.length; i++) {
        let item = sList[i];
        switch (item) {
            case ')':
                if (stack.pop() !== '(') {
                    return false
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false
                }
                break;
            default:
                stack.push(item);
                break;
        }
        if (stack.length > 0) {
            return false
        }
    }
    return true
};
const s = "([)]"
console.log(isValid(s));
export{}