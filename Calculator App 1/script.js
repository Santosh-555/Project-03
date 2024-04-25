class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    (this.previousOperandTextElement = previousOperandTextElement),
      (this.currentOperandTextElement = currentOperandTextElement);
    this.clear();
  }

  clear() {
    (this.currentOperand = ""),
      (this.previousOperand = ""),
      (this.operation = undefined);
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

// getDisplayNumber(number) {
//   const stringNumber = number.toString();
//   const integerDigits = parseFloat(stringNumber.split(".")[0]);
//   const decimalDigits = stringNumber.split(".")[1];
//   let integerDisplay;
//   if (isNaN(integerDigits)) {
//     integerDisplay = "";
//   } else {
//     integerDisplay = integerDigits.toLocaleString("en", {
//       maximumFractionDigits: 0,
//     });
//   }
//   if (decimalDigits != null) {
//     return `${integerDisplay}.${decimalDigits}`;
//   } else {
//     return integerDisplay;
//   }
// }

// This code is a function called `getDisplayNumber`, which takes a number as input and returns a formatted version of that number.

// 1. `const stringNumber = number.toString();`: This line converts the input number into a string. Imagine you have a number written on a piece of paper, and this line turns it into a string of characters.

// 2. `const integerDigits = parseFloat(stringNumber.split(".")[0]);`: Here, the code is splitting the string at the decimal point (if there is one), and taking the part before the decimal point. Then, it converts that part back into a number. Imagine you have a number like "123.45", this line would give you "123".

// 3. `const decimalDigits = stringNumber.split(".")[1];`: This line is similar to the previous one, but instead of taking the part before the decimal point, it takes the part after the decimal point, if there is one. Imagine you have the same number "123.45", this line would give you "45".

// 4. `let integerDisplay;`: Here, the code declares a variable named `integerDisplay` without giving it a value yet. Think of this as preparing a spot to put something later.

// 5. `if (isNaN(integerDigits)) {`: This line checks if the `integerDigits` variable is not a number. If it's not a number (for example, if the input was something like "abc"), then it goes into the if block.

// 6. `integerDisplay = "";`: If the `integerDigits` is not a number, this line sets the `integerDisplay` variable to an empty string. It's like erasing what was there before.

// 7. `else {`: If the `integerDigits` is indeed a number, this line starts the else block.

// 8. `integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });`: Here, the code formats the `integerDigits` number into a more readable form with commas separating thousands. For example, it turns "1000" into "1,000".

// 9. `if (decimalDigits != null) {`: This line checks if there are any decimal digits. If there are, it goes into the if block.

// 10. `return `${integerDisplay}.${decimalDigits}`;`: If there are decimal digits, this line returns the formatted integer part along with the decimal part, separated by a dot. For example, if you had "123.45", this would return "123.45".

// 11. `else {`: If there are no decimal digits, the code goes into the else block.

// 12. `return integerDisplay;`: Here, the code returns just the formatted integer part, without any decimals. For example, if you had "123.00", this would return "123".

// So, in summary, this function takes a number, formats its integer part with commas separating thousands, and optionally includes the decimal part, returning the formatted number as a string.
