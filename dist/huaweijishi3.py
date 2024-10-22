def can_balance_disk_usage(num_disks, capacities, ratios, total_data, n):
    def simulate_strategy(strategy):
        usages = [0] * num_disks
        remaining_data = total_data
        
        while remaining_data > 0:
            for i in range(n):
                if remaining_data <= 0:
                    break
                
                if strategy == 1:  # Round Robin
                    disk_index = (sum(usages) // 4) % num_disks
                elif strategy == 2:  # Highest Remaining Space First
                    disk_index = max(range(num_disks), key=lambda x: capacities[x] - usages[x])
                elif strategy == 3:  # Proportional Round Robin
                    total_ratios = sum(ratios)
                    weighted_index = 0
                    for j in range(num_disks):
                        weighted_index += ratios[j]  # Write according to the ratio
                        if weighted_index > i:
                            disk_index = j
                            break
                
                if usages[disk_index] + 4 <= capacities[disk_index]:
                    usages[disk_index] += 4
                    remaining_data -= 4

        return [usage / capacity for usage, capacity in zip(usages, capacities)]

    balanced_count = 0
    
    for strategy in range(1, 4):
        final_ratios = simulate_strategy(strategy)
        if all(abs(final_ratios[0] - r) < 1e-6 for r in final_ratios):
            balanced_count += 1

    return balanced_count


# 示例输入
num_disks = 3
capacities = [128, 64, 32]
ratios = [1, 1, 1]
total_data = 4
n = 3

result = can_balance_disk_usage(num_disks, capacities, ratios, total_data, n)
print(result)  # 输出存在的策略数量
