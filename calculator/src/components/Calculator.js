import React, { Component } from 'react';
import { connect } from 'react-redux';
import {clearCalculationAction} from '../actions';
import CalcButton from './CalcButton';

class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <div className='calculator-results'>
                    <div className='myOutputDisplay'>{this.props.math_operation ? this.props.current_operand : this.props.operand_1}</div>
                </div>
                <div className='calculator-keys'>
                    <button className='clear' onClick={() => this.props.clearCalculation()}>C</button>
                    <CalcButton value="/" htmlCode="247" additionalClass="operator" />

                    <CalcButton value={7} additionalClass="numeric" />
                    <CalcButton value={8} additionalClass="numeric" />
                    <CalcButton value={9} additionalClass="numeric" />
                    <CalcButton value='*' htmlCode="215" additionalClass="operator" />

                    <CalcButton value={4} additionalClass="numeric" />
                    <CalcButton value={5} additionalClass="numeric" />
                    <CalcButton value={6} additionalClass="numeric" />
                    <CalcButton value='-' htmlCode="8722" additionalClass="operator" />

                    <CalcButton value={1} additionalClass="numeric" />
                    <CalcButton value={2} additionalClass="numeric" />
                    <CalcButton value={3} additionalClass="numeric" />
                    <CalcButton value='+' htmlCode="43" additionalClass="operator" />

                    <CalcButton value={0} additionalClass="zero" />
                    <CalcButton value='=' htmlCode="61" additionalClass="equal" />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearCalculation: () => dispatch(clearCalculationAction())
});

const mapStateToProps = (state) => ({
    current_operand: state.current_operand,
    math_operation: state.math_operation,
    operand_1: state.operand_1,
    operand_2: state.operand_2,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
