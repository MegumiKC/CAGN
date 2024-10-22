/**
 * 找出和大于等于 target 的长度最小的子数组的长度
 * @param {number} target - 目标和
 * @param {number[]} nums - 输入数组
 * @return {number} - 长度最小的子数组的长度
 */
function minSubArrayLen(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLength = Infinity;
  
    while (right < nums.length) {
      sum += nums[right];
      right++;
  
      while (sum >= target) {
        minLength = Math.min(minLength, right - left);
        sum -= nums[left];
        left++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  // 示例
  const target = 7;
  const nums = [2, 3, 1, 2, 4, 3];
  console.log(minSubArrayLen(target, nums)); // 输出: 2
  