### 二叉树

#### 226. 翻转二叉树 - e - [link](https://leetcode-cn.com/problems/invert-binary-tree/)

```
/**
 * 递归就完事了，但是别忘了极端情况的兼容，比如输入[],别问我为什么知道。。。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null || (root.left === null && root.right === null)) {
        return root;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    if (root.left !== null) {
        invertTree(root.left);
    }
    if (root.right !== null) {
        invertTree(root.right);
    }
    return root;
};
```

#### 108 - 将有序数组转换为二叉搜索树 - e - [link](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)
```

/**
 * 平衡二叉树简单说就是 左子树 < 中间值 < 右子树
 * 以中间值来分，左边为左子树，右边为右子树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null;
    }
    // 获取中间值
    let len = parseInt(nums.length / 2);
    let node = new TreeNode(nums[len]);
    node.left = sortedArrayToBST(nums.slice(0, len));
    node.right = sortedArrayToBST(nums.slice(len + 1));
    
    return node;
};
```

#### 965 - 单值二叉树 - e - [link](https://leetcode-cn.com/problems/univalued-binary-tree/)
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 树的 递归就完事了。。。
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let val = root.val;
    let result = true;
    let fn = (n) => {
        if(n.val !== val) result = false
        if(n.left && result) {
            fn(n.left);
        }
        if(n.right && result) {
            fn(n.right);
        }
    }
    fn(root);
    return result;
};
```