const buttonCalc = document.querySelector('#calculateBtn')

class Calculator {
  constructor() {
    this.num1 = document.querySelector('#num1')
    this.num2 = document.querySelector('#num2')
    this.result = document.querySelector('#result')
    this.operation = document.querySelector('#operation')

    // document.querySelector('#calculateBtn').addEventListener('click', () => {
    //     this.compute()
    //   })
  }

  compute() {
    if (this.operation.value === "add") {
      this.add()
    } else if (this.operation.value === "subtract") {
      this.subtract()
    } else if (this.operation.value === "multiply") {
      this.multiply()
    } else if (this.operation.value === "divide") {
      this.divide()
    }
  }

  add() {
    this.result.innerHTML = Number(this.num1.value) + Number(this.num2.value)
  }

  subtract() {
    this.result.innerHTML = Number(this.num1.value) - Number(this.num2.value)
  }

  multiply() {
    this.result.innerHTML = Number(this.num1.value) * Number(this.num2.value)
  }

  divide() {
    this.result.innerHTML = Number(this.num1.value) / Number(this.num2.value)
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const calculator = new Calculator()
// })

buttonCalc.addEventListener('click', () => {
  const calculator = new Calculator()
  calculator.compute()
})