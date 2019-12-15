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