class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined 
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operaton]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandandTextElement = document.querySelector('[data-previous-operand]')
const currentOperatorandTextElement = document.querySelector('[data-current-operand]')
    
const calculator = new Calculator(previousOperandandTextElement, currentOperatorandTextElement)

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
       calculator.appendNumber(button.innerText)
       calculator.updateDisplay()
   })
})