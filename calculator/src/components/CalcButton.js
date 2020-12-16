import React, { Component } from 'react';
import {observer} from 'mobx-react';

class CalcButton extends Component {

    render() {
        const {calculator} = this.props.store;

        return (
            <button
                className={`calc-input ${this.props.additionalClass} ${calculator.math_operation === this.props.value ? 'current-operation' : null}`}
                onClick={() => this.props.store.updateCalculation(this.props.value, calculator.current_operand, calculator.math_operation, calculator.operand_1, calculator.operand_2)}>
                {this.props.htmlCode ? String.fromCharCode(this.props.htmlCode) : this.props.value}
            </button>
        );
    }
}

export default observer(CalcButton);
