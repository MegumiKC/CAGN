const gas: Array<number> = [1, 2, 3, 4, 5];
const cost: Array<number> = [3, 4, 5, 1, 2];

function gasStation(gas: Array<number>, cost: Array<number>): any {
    const n = gas.length;
    let i = 0;
    while (i<n) {
        let sumGas = 0;
        let sumCost = 0;
        let cnt = 0;
        while (cnt<n) {
            const j = (i+cnt)%n;
            sumGas+=gas[j];
            sumCost+=cost[j];
            if(sumCost>sumGas){
                break;
            }
            cnt++;
        }
        if(cnt ==n){
            return i;
        }else{
            i=i+cnt+1;
        }
    }
    return -1;
};

console.log(gasStation(gas,cost));
export {}