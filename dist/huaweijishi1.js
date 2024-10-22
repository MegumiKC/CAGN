function shortestCableDistance(m, n, start, end, blocked) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // 标记被阻塞的节点
    for (const [x, y] of blocked) {
        visited[x][y] = true;
    }

    // 检查起点和终点是否可达
    if (visited[start[0]][start[1]] || visited[end[0]][end[1]]) {
        return -1;
    }

    // BFS 初始化
    const queue = [[start, 0]]; // [position, distance]
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [[x, y], dist] = queue.shift();

        // 如果到达目标小区，返回当前距离
        if (x === end[0] && y === end[1]) {
            return dist;
        }

        // 遍历所有方向
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // 检查新位置是否在范围内且未被阻塞且未访问过
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([[nx, ny], dist + 1]);
            }
        }
    }

    // 如果无法到达目标小区，返回-1
    return -1;
}

// 主程序
function main() {
    const m = 11;
    const n =8;
    
    const start = [2,3];
    const end = [7,5];
    
    const blocked = [[2,4],[3,5],[4,4],[5,4],[6,4],[7,4]];
    // const m = 3;
    // const n =3;
    
    // const start = [0,0];
    // const end = [2,2];
    
    // const k = 3;
    // const blocked = [[0,1],[1,1],[2,1]];

    // 计算最短距离
    const result = shortestCableDistance(m, n, start, end, blocked);
    console.log(result);
}

// 启动程序
main();