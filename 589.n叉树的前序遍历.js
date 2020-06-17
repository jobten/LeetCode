/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    var res = []
    recursion(root)
    function recursion(root) {
        if (!root) return
        res.push(root.val)
        for (var i = 0; i < root.children.length; i++) {
            recursion(root.children[i])
        }
    }
    return res
};
// @lc code=end

