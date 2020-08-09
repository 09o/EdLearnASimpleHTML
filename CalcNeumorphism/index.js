new Vue({
  el: '#app',
  data() {
    return {
      equation: '0',
      // 判断是否已输入小数位
      isDecimalAdded: false,
      // 判断是否已经点击加、减、乘、除
      isOperatorAdded: false,
      // 判断是否已经开始输入数字
      isStartd: false,
    }
  },
  methods: {
    // 判断运算符
    isOperator(character) {
      // >-1 代表存在
      // indexOf 返回某个字符串在数组中的指定位置
      return ['+', '-', '×', '÷'].indexOf(character) > -1
    },
    // 当点击运算符或数字
    append(character) {
      if (this.equation === '0' && !this.isOperator(character)) {
        if (character === '.') {
          this.equation += '' + character
          this.isDecimalAdded = true
        } else {
          this.equation = '' + character
        }

        this.isStartd = true
        return
      }

      // if number
      if (!this.isOperator(character)) {
        if (character === '.' && this.isDecimalAdded) {
          return
        }
        if (character === '.') {
          this.isDecimalAdded = true
          this.isOperatorAdded = true
        } else {
          this.isOperatorAdded = false
        }
        this.equation += '' + character
      }

      // added operator
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += '' + character
        this.isDecimalAdded = false
        this.isOperatorAdded = true
      }
    },
    // 点击等号
    calculate() {
      let result = this.equation.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/')

      this.equation = parseFloat(eval(result).toFixed(9)).toString()
      this.isDecimalAdded = false
      this.isOperatorAdded = false
    },
    // 点击正负号
    calculateToggle() {
      if (this.isOperatorAdded || !this.isStartd) {
        return
      }
      this.equation = this.equation + '* -1'
      this.calculate()
    },
    // %
    calculatePercentage() {
      if (this.isOperatorAdded || !this.isStartd) {
        return
      }
      this.equation = this.equation + '* 0.01'
      this.calculate()
    },
    // AC
    clear() {
      // 预设为默认值
      this.equation = '0'
      this.isDecimalAdded = false
      this.isOperatorAdded = false
      this.isStartd = false
    },
  }
})