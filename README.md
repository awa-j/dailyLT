# dailyLT
daily leetcode

### leetcode 每日一题
#### 记录格式：
- #题目id
- 题名 
- 难度
    - e - 简单
    - m - 中等
    - h - 困难
- 题目链接
- 题目代码，以及思路

#### demo
292 - Nim游戏 - e - [链接](https://leetcode-cn.com/problems/nim-game/)
``` 
/**
 * 因为可以拿1-3块，如果想要赢意味着最后留下的
 * 一定要是4块才行，由此可得
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 !== 0;
};
```