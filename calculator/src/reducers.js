import { UPDATE_CALCULATION_STATE, CLEAR_ALL } from './constants';

const initialState = {
    operand_1: 0,
    operand_2: null,
    current_operand: undefined,
    math_operation: null,
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CALCULATION_STATE:
            return {
                calculation: action.payload.calculation,
                current_operand: action.payload.current_operand,
                math_operation: action.payload.math_operation,
                operand_1: action.payload.operand_1,
                operand_2: action.payload.operand_2,
                result: action.payload.result
            };
        case CLEAR_ALL:
            return initialState;
        default:
            return state;
    }
};

export default calculatorReducer;
