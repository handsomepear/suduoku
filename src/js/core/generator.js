// 生成数独解决方案
const Toolkit = require('../core/toolkit')

class Generator {
    generator(){
        while(!this.internalGenerator()) {
            console.warn('try again')
        }
    }
    internalGenerator() {
        this.matrix = Toolkit.matrix.makeMatrix()
        this.orders = Toolkit.matrix.makeMatrix()
            .map(row => row.map((v, i) => i)) // 填数字
            .map(row => Toolkit.matrix.shuffle(row)) // 打乱
        //Toolkit.matrix.makeRow().every(n => )
        for (let n = 1; n <= 9; n++) {
            if(!this.fillNumber(n)) {
                return false
            }
        }
        return true
    }

    fillNumber(n) {
        return this.fillRow(n, 0)
    }

    fillRow(n, rowIndex) {
        if (rowIndex > 8) {
            return true
        }
        const row = this.matrix[rowIndex]
        // 随机选择列
        const orders = this.orders[rowIndex]
        for (let i = 0; i < 9; i++) {
            const colIndex = orders[i]
            // 如果这个位置已经有值 跳过
            if (row[colIndex]) {
                continue
            }
            // 检查这个位置是否可以填 n
            if (!Toolkit.matrix.checkFillAble(this.matrix, n, rowIndex, colIndex)) {
                continue
            }
            row[colIndex] = n
            // 如果没填进去 就继续去寻找当前行的下一个位置
            if (!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0
                continue
            }
            return true
        }
        return false // 填写失败
    }
}

const generator = new Generator()
generator.generator()
console.log(generator.matrix)
module.exports = Generator
