import heapq

def solve(N, M, countries, roads):
    # 定义一个非常大的数作为无穷大
    INF = float('inf')
    
    # 图的表示，graph[i]存储所有与城市i相邻的城市以及相关的长度和花费
    graph = [[] for _ in range(N + 1)]
    
    # 初始化图
    for u, v, w, c in roads:
        graph[u].append((v, w, c))
        graph[v].append((u, w, c))
    
    # 定义距离和花费表, distance[i][0]表示不使用跨国公路到达i的最短距离
    # distance[i][1]表示使用了一次跨国公路到达i的最短距离
    distance = [[INF, INF] for _ in range(N + 1)]
    cost = [[INF, INF] for _ in range(N + 1)]
    
    # 起点为城市1，初始距离为0，初始花费为0，不使用跨国公路
    distance[1][0] = 0
    cost[1][0] = 0
    
    # 优先队列，元素是(当前距离, 当前城市, 是否已经使用了跨国公路, 当前花费)
    pq = [(0, 1, 0, 0)]  # 初始从城市1开始
    
    while pq:
        dist, city, used_bridge, curr_cost = heapq.heappop(pq)
        
        # 如果已经找到到达该城市的更优路径，则跳过
        if dist > distance[city][used_bridge]:
            continue
        
        # 遍历相邻城市
        for next_city, road_dist, road_cost in graph[city]:
            next_dist = dist + road_dist
            next_cost = curr_cost + road_cost
            next_used_bridge = used_bridge
            
            # 判断是否是跨国公路
            if countries[city - 1] != countries[next_city - 1]:
                # 如果已经使用过跨国公路，则不能再走跨国公路
                if used_bridge == 1:
                    continue
                # 更新为已经使用跨国公路
                next_used_bridge = 1
            
            # 如果新的路径更短，或者距离相同但花费更少，更新路径
            if next_dist < distance[next_city][next_used_bridge] or \
               (next_dist == distance[next_city][next_used_bridge] and next_cost < cost[next_city][next_used_bridge]):
                distance[next_city][next_used_bridge] = next_dist
                cost[next_city][next_used_bridge] = next_cost
                heapq.heappush(pq, (next_dist, next_city, next_used_bridge, next_cost))
    
    # 终点是城市N，需要使用了跨国公路才能到达
    if distance[N][1] == INF:
        print(-1)
    else:
        print(distance[N][1], cost[N][1])

# 输入部分
if __name__ == "__main__":
    N = int(input())  # 城市数量
    M = int(input())  # 公路数量
    countries = input().strip()  # 国家归属
    roads = []
    for _ in range(M):
        u, v, w, c = map(int, input().split())
        roads.append((u, v, w, c))
    
    solve(N, M, countries, roads)
