/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//  方法二：迭代
var preorderTraversal = function(root) {
    if(root) {
        const resutl = []
        const arr = [root]
        while(arr.length > 0) {
            
        } 
    }
    return []
};

//  方法一：递归
var preorderTraversal = function(root) {
    if(root) {
        return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
    }
    return []
};
// @lc code=end

