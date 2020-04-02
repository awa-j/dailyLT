### 中等难度

#### 289. 生命游戏 - m - [link](https://leetcode-cn.com/problems/game-of-life/)

```
/**
 * 暴力拆解，已[x,y]为原点，周围八个点 x-1 x x+1 | y-1 y y+1 判断
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let tmp = [...board.map((e) => {
        return [...e];
    })];
    tmp.forEach((item, index) => {
        let tmp2 = [];
        item.forEach((e, xIndex) => {
            let x = index;
            let y = xIndex;
            let totalValue = [];
            if (tmp[x-1]) {
                typeof tmp[x-1][y-1] !== 'undefined' && totalValue.push(tmp[x-1][y-1]);
                typeof tmp[x-1][y] !== 'undefined' && totalValue.push(tmp[x-1][y]);
                typeof tmp[x-1][y+1] !== 'undefined' && totalValue.push(tmp[x-1][y+1]);
            }
            if (tmp[x]) {
                typeof tmp[x][y-1] !== 'undefined' && totalValue.push(tmp[x][y-1]);
                typeof tmp[x][y+1] !== 'undefined' && totalValue.push(tmp[x][y+1]);
            }
            if (tmp[x+1]) {
                typeof tmp[x+1][y-1] !== 'undefined' && totalValue.push(tmp[x+1][y-1]);
                typeof tmp[x+1][y] !== 'undefined' && totalValue.push(tmp[x+1][y]);
                typeof tmp[x+1][y+1] !== 'undefined' && totalValue.push(tmp[x+1][y+1]);
            }
            let valEqualOne = totalValue.filter(i => i === 1).length;
            let val = e;
            (valEqualOne < 2 || valEqualOne > 3) && (val = 0);
            (valEqualOne === 2 || valEqualOne === 3) && (e === 1) && (val = 1);
            valEqualOne === 3 && (val = 1);
            tmp2.push(val);
            board[x][y] = val;
        });
    });
};

```
