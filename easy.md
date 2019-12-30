### 每日一题

#### 1025 - 除数博弈 - e - [链接](https://leetcode-cn.com/problems/divisor-game/)
```
/**
 * 多带几个数字进去试试如果数字是奇数，
 * 只能选择1，最后的结果就是谁得2谁赢
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    if (N === 1) {
        return false;
    }
    return N % 2 === 0;
};
```
#### 1207 - 独一无二的出现次数 - e - [linl](https://leetcode-cn.com/problems/unique-number-of-occurrences/submissions/)

```
/**
 * 先获取去重后的数组
 * 再获取出原数组中重复出现数字的次数
 * 判断次数是否出现一样的即可
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let clearArr = [];
    let tmp = [];
    let final = true;
    clearArr = arr.filter((item, idx) => arr.indexOf(item) === idx);
    clearArr.forEach((e) => {
        tmp.push(arr.filter(el => el === e).length);
    });
    tmp.forEach((e, idx) => {
        tmp.indexOf(e) !== idx && (final = false);
    })
    return final;
};
```

#### 1237 - 找出给定方程的正整数解 - e - [linl](https://leetcode-cn.com/problems/find-positive-integer-solution-for-a-given-equation/)

```
// 考虑到时间复杂度的问题，采用双指针法，是的复杂度为O(n)
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
let findSolution = function(customfunction, z) {
    let res = [];
    let y = 1000;
    let x = 1;
    while (x < 1001 && y >= 1) {
        let tmp = customfunction.f(x, y);
        if (tmp < z) {
            x++;
        } else if (tmp > z) {
            y--;
        } else {
            res.push([x, y]);
            y--;
        }
    }
    
    return res;
};
```

#### 1217 - 玩筹码 - e - [linl](https://leetcode-cn.com/problems/play-with-chips/)

```
/**
 * @param {number[]} chips
 * @return {number}
 * 数组里的值代表筹码的坐标，也就是算奇偶数，哪个少输出哪个的长度
 */
var minCostToMoveChips = function(chips) {
    let odd = [];
    let even = [];
    even = chips.filter(e => e % 2 === 0);
    odd = chips.filter(e => e % 2 !== 0);
    return even.length > odd.length ? odd.length : even.length;
};
```