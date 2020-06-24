/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start

// 方法一：暴力法
// 1. 先递归穷举所有组合
// 2. 排除非法的组合
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const resultNum = []
    const generateAll = (currNums, pos) => {
        if (pos === currNums.length) {
            if(valid(currNums)) {
                resultNum.push(currNums)
            }
        } else {
            currNums[pos] = '('
            generateAll(currNums, pos+1)
            currNums[pos] = ')'
            generateAll(currNums, pos+1)
        }
    }
    const valid = () => {
        return true
    }
    generateAll(new Array(2*n).fill(''), 0)
    return resultNum
};
// @lc code=end

