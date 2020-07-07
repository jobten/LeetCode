/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
// 方法一：从后往前遍历数组
// 1. 小于9，加1
// 2. 等于9，变成0，前一位加1
// 3. 等于10，变成1, 前一位加1
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits.length === 1) {
        if (digits[0] === 9) return [1, 0]
        digits[0]++
        return digits
    }
    let i = digits.length - 1
    let plused = false
    while(i > 0) {
        if(digits[i] < 9) {
            if (plused) plused = false
            else digits[i]++
            break
        } else if (digits[i] === 9 || digits[i] === 10) {
            if (plused) plused = false
            else {
                digits[i] = 0
                digits[i-1]++
                plused = true
            }
        }
        i--
    }
    if (digits[0] === 10) {
        digits[0] = 0
        digits.unshift(1)
    }
    return digits
};
// @lc code=end

