const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

// All buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        // Clear
        if (button.id === "clear") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "";
            return;
        }

        // Backspace
        if (button.id === "backspace") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
            return;
        }

        // Equal
        if (button.id === "equals") {
            calculateResult();
            return;
        }

        // Operators
        if (button.classList.contains("operator")) {
            if (currentInput === "") return;

            previousInput = currentInput;
            operator = value;
            currentInput = "";
            return;
        }

        // Numbers and decimal
        if (
            !isNaN(value) ||
            value === "."
        ) {
            // Prevent multiple decimal points
            if (value === "." && currentInput.includes(".")) {
                return;
            }

            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Calculate result
function calculateResult() {
    if (previousInput === "" || currentInput === "" || operator === "") {
        return;
    }

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
        case "×":
            result = num1 * num2;
            break;

        case "/":
        case "÷":
            if (num2 === 0) {
                display.value = "Error";
                currentInput = "";
                previousInput = "";
                operator = "";
                return;
            }
            result = num1 / num2;
            break;

        default:
            return;
    }

    display.value = result;

    currentInput = result.toString();
    previousInput = "";
    operator = "";
}