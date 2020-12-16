import {observable, decorate, computed, action} from 'mobx';
import {updateCalculationLogic} from '../utils';

const initialCalculatorState = {
    operand_1: 0,
    operand_2: null,
    current_operand: undefined,
    math_operation: null,
};

class Store {
    // @observable TODO-TODO
    calculator = initialCalculatorState;

    setCalculator(payload){
        this.calculator = payload;
    }

    updateCalculation(inputValue, currentOperand = 0, operation = "+", operand1, operand2){
        const newCalcState = updateCalculationLogic({currentOperand, inputValue, operand1, operand2, operation});

        this.setCalculator(newCalcState);
    }

    clearCalculation(){
        this.setCalculator(initialCalculatorState);
    }

    get outputDisplayValue() {
        return this.calculator.math_operation ? this.calculator.current_operand : this.calculator.operand_1;
    }
}

Store = decorate(Store, {
    calculator: observable,
    outputDisplayValue: computed,
    clearCalculation: action,
    updateCalculation: action,
});

export default new Store();
