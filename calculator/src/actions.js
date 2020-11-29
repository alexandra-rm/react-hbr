import { DO_CALCULATION, UPDATE_CALCULATION_STATE,  CLEAR_ALL } from './constants';

export const updateCalculationAction = (inputValue, currentOperand = 0, operation = "+", operand1, operand2) => {
    return {
        type: DO_CALCULATION,
        payload: {
            inputValue,
            currentOperand,
            operation,
            operand1,
            operand2,
        }
    };
};

export const updateCalculationStateAction = (data) => {
    return {
        type: UPDATE_CALCULATION_STATE,
        payload: {
            current_operand: data.current_operand,
            math_operation: data.math_operation,
            operand_1: data.operand_1,
            operand_2: data.operand_2,
        }
    };
};

export const clearCalculationAction = () => {
    return {
        type: CLEAR_ALL,
    }
};
