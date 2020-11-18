import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCalculation, clearCalculation } from '../actions';
import CalcButton from './CalcButton';

class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <div className='calculator-results'>
                    <div className='myOutputDisplay'>{this.props.math_operation ? this.props.current_operand : this.props.operand_1}</div>
                </div>

                <div className='calculator-inputs-row'>
                    <button className='clear' onClick={() => this.props.clearCalculation()}>C</button>
                    <CalcButton value="/" htmlCode="247" additionalClass="operator" />
                </div>
                <div className='calculator-inputs-row'>
                    <CalcButton value={7} />
                    <CalcButton value={8} />
                    <CalcButton value={9} />
                    <CalcButton value='*' htmlCode="215" additionalClass="operator" />
                </div>

                <div className='calculator-inputs-row'>
                    <CalcButton value={4} />
                    <CalcButton value={5} />
                    <CalcButton value={6} />
                    <CalcButton value='-' htmlCode="8722" additionalClass="operator" />
                </div>
                <div className='calculator-inputs-row'>
                    <CalcButton value={1} />
                    <CalcButton value={2} />
                    <CalcButton value={3} />
                    <CalcButton value='+' htmlCode="43" additionalClass="operator" />
                </div>
                <div className='calculator-inputs-row'>
                    <CalcButton value={0} additionalClass="zero" />
                    <CalcButton value='=' htmlCode="61" additionalClass="equal" />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCalculation: (inputValue, currentOperand, operation, operand1, operand2) => dispatch(updateCalculation(inputValue, currentOperand, operation, operand1, operand2)),
    clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
    current_operand: state.current_operand,
    math_operation: state.math_operation,
    operand_1: state.operand_1,
    operand_2: state.operand_2,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
