#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int can_balance_disk_usage(int num_disks, vector<int>& capacities, vector<int>& ratios, int total_data, int n) {
    // Helper function to simulate the writing strategy
    auto simulate_strategy = [&](int strategy) {
        vector<int> usages(num_disks, 0);
        int remaining_data = total_data;
        
        while (remaining_data > 0) {
            for (int i = 0; i < n; i++) {
                if (remaining_data <= 0) break;

                int disk_index;
                if (strategy == 1) {  // Round Robin
                    disk_index = (accumulate(usages.begin(), usages.end(), 0) / 4) % num_disks;
                } else if (strategy == 2) {  // Highest Remaining Space First
                    disk_index = max_element(usages.begin(), usages.end(),
                        [&](int a, int b) {
                            return capacities[&a - &usages[0]] - a < capacities[&b - &usages[0]] - b;
                        }) - usages.begin();
                } else if (strategy == 3) {  // Proportional Round Robin
                    int total_ratios = accumulate(ratios.begin(), ratios.end(), 0);
                    int weighted_index = 0;
                    for (int j = 0; j < num_disks; j++) {
                        weighted_index += ratios[j];
                        if (weighted_index > i) {
                            disk_index = j;
                            break;
                        }
                    }
                }

                if (usages[disk_index] + 4 <= capacities[disk_index]) {
                    usages[disk_index] += 4;
                    remaining_data -= 4;
                }
            }
        }

        // Calculate the final usage ratios
        vector<double> final_ratios(num_disks);
        for (int i = 0; i < num_disks; i++) {
            final_ratios[i] = static_cast<double>(usages[i]) / capacities[i];
        }
        return final_ratios;
    };

    int balanced_count = 0;

    for (int strategy = 1; strategy <= 3; strategy++) {
        vector<double> final_ratios = simulate_strategy(strategy);
        if (all_of(final_ratios.begin(), final_ratios.end(),
                   [&](double r) { return fabs(final_ratios[0] - r) < 1e-6; })) {
            balanced_count++;
        }
    }

    return balanced_count;
}

int main() {
    // 示例输入
    int num_disks = 3;
    vector<int> capacities = {64, 64, 64};
    vector<int> ratios = {1, 1, 1};
    int total_data = 12;
    int n = 3;

    int result = can_balance_disk_usage(num_disks, capacities, ratios, total_data, n);
    cout << result << endl;  // 输出存在的策略数量

    return 0;
}
