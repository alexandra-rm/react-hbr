import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCalculation } from '../actions';

class CalcButton extends Component {
    render() {
        return (
            <button
                className={`calc-input ${this.props.additionalClass} ${this.props.math_operation === this.props.value ? 'current-operation' : null}`}
                onClick={() => this.props.updateCalculation(this.props.value, this.props.current_operand, this.props.math_operation, this.props.operand_1, this.props.operand_2)}>
                {this.props.htmlCode ? String.fromCharCode(this.props.htmlCode) : this.props.value}
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCalculation: (inputValue, currentOperand, operation, operand1, operand2) => dispatch(updateCalculation(inputValue, currentOperand, operation, operand1, operand2))
});

const mapStateToProps = (state) => ({
    current_operand: state.current_operand,
    math_operation: state.math_operation,
    operand_1: state.operand_1,
    operand_2: state.operand_2,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalcButton);
