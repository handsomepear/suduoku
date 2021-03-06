// 生成九宫格
const Toolkit = require('../core/toolkit')
const Generator = require('../core/generator')

module.exports = class Grid {
    constructor(container) {
        this._$container = container
    }

    build() {
        const genarator = new Generator()
        console.log(genarator)


        const matrix = Toolkit.matrix.makeMatrix()
        const rowGroupClasses = ['row_g_top', 'row_g_middle', 'row_g_bottom']
        const colGroupClasses = ['col_g_left', 'col_g_center', 'col_g_right']
        const $cells = matrix.map(rowValues =>
            rowValues.map((cellValue, colIndex) => {
                return $('<span />')
                    .addClass(colGroupClasses[colIndex % 3])
                    .text(cellValue)
            })
        )

        const $divArray = $cells.map(($spanArray, rowIndex) => {
            return $('<div />')
                .addClass('row')
                .addClass(rowGroupClasses[rowIndex % 3])
                .append($spanArray)
        })
        this._$container.append($divArray)
    }

    layout() {
        const width = $('span:first', this._$container).width()
        $('span', this._$container)
            .height(width)
            .css({
                'line-height': `${width}px`,
                'font-size': width < 32 ? `${width / 2}px` : ''
            })
    }
}