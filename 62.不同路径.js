/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

 // 方法一： 动态规划，两维数组
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) {
        return 1
    }
    // 初始化数组
    const array = []
    for (let i = 0; i < m; i++) array[i] = new Array()
    // 将除目标外最后一列置为1
    for (let i = 0; i < m - 1; i++) array[i][n - 1] = 1
    // 将除目标外最后一行置为1
    for (let i = 0; i < n - 1; i++) array[m - 1][i] = 1

    for (let i = m - 2; i >= 0; i --) 
        for (let j = n - 2; j >= 0; j--) 
            array[i][j] = array[i][j+1] + array[i+1][j]
            
    return array[0][0]

};

 // 方法二： 动态规划，优化成一维数组
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) {
        return 1
    }
    // 初始化数组
    const array = []
    for (let i = 0; i < m; i++) array[i] = new Array()
    // 将除目标外最后一列置为1
    for (let i = 0; i < m - 1; i++) array[i][n - 1] = 1
    // 将除目标外最后一行置为1
    for (let i = 0; i < n - 1; i++) array[m - 1][i] = 1

    for (let i = m - 2; i >= 0; i --) 
        for (let j = n - 2; j >= 0; j--) 
            array[i][j] = array[i][j+1] + array[i+1][j]

    return array[0][0]

};
// @lc code=end

