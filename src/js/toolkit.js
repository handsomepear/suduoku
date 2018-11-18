// 工具包

const matrixToolKit = {
    makeRow(v = 0) {
        const array = new Array(9)
        array.fill(v)
        return array
    },

    makeMatrix(v = 0) {
        // return Array.from({ length: 9 }).map(() => makeRow(v))
        // Array.from 是一个将伪数组生成数组的一个方法 第二个参数是一个map函数 下面写法与上面等价 效率更高
        return Array.from({ length: 9 }, () => this.makeRow(v))
    },

    /**
     * Fisher-Yates 洗牌算法
     */
    shuffle(array) {
        const endIndex = array.length - 2
        for (let i = 0; i < endIndex; i++) {
            var j = i + Math.floor(Math.random() * (array.length - i))
            // 交换位置
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }
}

module.exports = matrixToolKit
