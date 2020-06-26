/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
// 方法二: 排序并取n/2下标
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort()
    return nums[parseInt(nums.length/2)]
};
// 方法一: 使用hash存储, key为num, value为出现的次数
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         const value = map.get(element) || 0
//         map.set(element, value+1)
//         if (value + 1 > nums.length/2) {
//             return element
//         }
//     }
// };
// @lc code=end

