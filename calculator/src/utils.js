export const badResult = 'ошибка';

export const calc = (operation, a=0, b=0) => {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? badResult : a / b;
        default:
            return b || a;
    }
};

export const updateCalculationLogic = ({inputValue, currentOperand = 0, operation/* = "+"*/, operand1, operand2}) => {
    if (currentOperand === badResult) {
        currentOperand = 0;
        operand1 = 0;
    }
    let updateCurrentOperand = currentOperand ? currentOperand : 0;
    let newMathOperation = operation;
    let updateOperand_1 = operand1;
    let updateOperand_2 = operand2;

    if (typeof inputValue === "number") {
        updateCurrentOperand = Number(`${currentOperand}` + inputValue);
        if (operation == null) {
            updateOperand_1 = updateCurrentOperand;
        } else {
            if (updateOperand_2 === null) {
                updateCurrentOperand = inputValue;
            }
            updateOperand_2 = updateCurrentOperand;
        }
    } else {
        if (inputValue === '=') {
            updateCurrentOperand = calc(operation, operand1, operand2);
            updateOperand_1 = updateCurrentOperand;
            updateOperand_2 = null;
            newMathOperation = null;
        } else {
            newMathOperation = inputValue;
            updateOperand_1 = updateCurrentOperand;
            updateOperand_2 = null;
        }
    }

    return {
        current_operand: updateCurrentOperand,
        math_operation: newMathOperation,
        operand_1: updateOperand_1,
        operand_2: updateOperand_2,
    };
};
