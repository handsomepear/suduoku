### 数独游戏

#### 项目目录

```
|-- sudoku
    |-- README.md
    |-- gulpfile.js
    |-- package-lock.json
    |-- package.json
    |-- webpack.config.js
    |-- yarn.lock
    |-- js
    |   |-- index.js                页面入口及事件绑定
    |   |-- core                    `算法及数据结构相关的脚本`
    |   |   |-- checker.js          工具方法集
    |   |   |-- generator.js        生成数独解决方案
    |   |   |-- sudoku.js           生成数独游戏
    |   |   |-- toolkit.js          工具方法集
    |   |-- ui                      `页面相关的脚本`
    |       |-- grid.js             生成九宫格
    |       |-- popupnumbers.js     处理弹出的操作面板
    |-- less
        |-- main.less
```