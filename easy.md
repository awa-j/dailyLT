### 每日一题

#### 1370. 上升下降字符串 -[链接](https://leetcode-cn.com/problems/increasing-decreasing-string/)
```
/**
 * 反复颠倒排序
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let tmp = s.split('');
    let res = [];
    tmp = tmp.sort((a, b) => a.charCodeAt() - b.charCodeAt()); // 排序
    let fn = (arr, flag) => {
        if (!tmp.length) {
            return;
        }
        let indexNums = [];
        let removeSame = tmp.filter((item, index) => {
            if (tmp.indexOf(item) === index) {
                indexNums.push(index);
            }
            return tmp.indexOf(item) === index;
        });
        res.push(...removeSame);
        indexNums.sort((a, b) => b - a).forEach((e) => {
            tmp.splice(e, 1);
        })
        console.log(indexNums);
        console.log(tmp);
        if (flag === 1) {
            tmp.sort((a, b) => b.charCodeAt() - a.charCodeAt());
            fn(tmp, 2);
        } else {
            tmp.sort((a, b) => a.charCodeAt() - b.charCodeAt());
            fn(tmp, 1);
        }
    }
    fn(tmp, 1);
    
    return res.join('');
};
```

#### 832. 翻转图像 - [链接](https://leetcode-cn.com/problems/flipping-an-image/)
```
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let temp = [];
    let res = [];
    let len = A.length;
    A.forEach((e) => {
        temp.push(e.reverse());
    })
    temp.forEach((e) => {
        let empty = [];
        e.forEach((i) => {
            empty.push(i^1);
        })
        res.push(empty);
    })
    
    return res;
};
```


#### 1304 - 和为零的N个唯一整数 - [链接](https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/)

```
/**
 * 如果是偶数就正负对称来
 * 如果是奇数就多加个0
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = [];
    for (let i = 1; i <= parseInt(n/2); i++) {
        res.push(i, -i);
    }
    n % 2 !== 0 && res.push(0);
    
    return res;
};
```

#### 1025 - 除数博弈 - [链接](https://leetcode-cn.com/problems/divisor-game/)
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
#### 1207 - 独一无二的出现次数 - [linl](https://leetcode-cn.com/problems/unique-number-of-occurrences/submissions/)

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

#### 1237 - 找出给定方程的正整数解 - [linl](https://leetcode-cn.com/problems/find-positive-integer-solution-for-a-given-equation/)

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

#### 1217 - 玩筹码 - [linl](https://leetcode-cn.com/problems/play-with-chips/)

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

#### 762 - 二进制表示中质数个计算置位 - [linl](https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/)

```
// ps: 看评论说，可以直接枚举出20内的质数就行了～
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let judgePrime = (val) => {
    if (val === 1) {
        return false;
    }
    let flag = true;
    for( let i = 2 ; i < val ; i++ ){
        if( val % i === 0 ){
            flag = false;
            break;
        }
    }
    return flag;
};
let countPrimeSetBits = (L, R) => {
    let a = L;
    let res = 0;
    while(a >= L && a <= R) {
        let tmp = a.toString(2);
        let len = tmp.split('').filter(e => +e === 1).length;
        judgePrime(len) && res++;
        a++;
    }
    return res;
};
```