/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
// 使用二分查找
// 1. 二分后必定有一边是有序的
// 2. target在有序部分则继续二分查找直到找到
// 3. target在无序部分中查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length || 0
    if (!nums) ruturn -1
    if (n === 1) return (nums[0] ===  target) ? 0 : -1
    let l = 0
    let r = n - 1
    while(l < r) {
        let mid = (l + r) / 2
        if (nums[mid] === target) return mid
        // 左半部分有序，在左边查找
        if (nums[0] <= nums[mid]) {
            if (target === nums[0]) return 0
            if(target > nums[0] && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else { // 右半边有序
            if (target === nums[n-1]) return (n-1)
            if (target > nums[mid] && target < nums[n - 1]) {
                l = mid + 1
            } else {
                r = mid -1
            }
        }
    }
    return -1;
};
// @lc code=end

