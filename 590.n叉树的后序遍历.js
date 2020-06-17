/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return []
    var res = []
    recursion(root)
    function recursion(root) {
        if (!root) return
        for (var i = 0; i < root.children.length; i++) {
            recursion(root.children[i])
        }
        res.push(root.val)
    }
    return res
};

// @lc code=end

