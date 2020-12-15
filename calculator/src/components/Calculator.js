import React, { Component } from 'react';
import {observer} from 'mobx-react';

import CalcButton from './CalcButton';
import store from "../store";
import '../App.css';

class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <div className='calculator-results'>
                    <div className='myOutputDisplay'>{this.props.store.outputDisplayValue}</div>
                </div>
                <div className='calculator-keys'>
                    <button className='clear' onClick={() => this.props.store.clearCalculation()}>C</button>
                    <CalcButton value="/" htmlCode="247" additionalClass="operator" store={store}/>

                    <CalcButton value={7} additionalClass="numeric" store={store}/>
                    <CalcButton value={8} additionalClass="numeric" store={store}/>
                    <CalcButton value={9} additionalClass="numeric" store={store}/>
                    <CalcButton value='*' htmlCode="215" additionalClass="operator" store={store}/>

                    <CalcButton value={4} additionalClass="numeric" store={store}/>
                    <CalcButton value={5} additionalClass="numeric" store={store}/>
                    <CalcButton value={6} additionalClass="numeric" store={store}/>
                    <CalcButton value='-' htmlCode="8722" additionalClass="operator" store={store}/>

                    <CalcButton value={1} additionalClass="numeric" store={store}/>
                    <CalcButton value={2} additionalClass="numeric" store={store}/>
                    <CalcButton value={3} additionalClass="numeric" store={store}/>
                    <CalcButton value='+' htmlCode="43" additionalClass="operator" store={store}/>

                    <CalcButton value={0} additionalClass="zero" store={store}/>
                    <CalcButton value='=' htmlCode="61" additionalClass="equal" store={store}/>
                </div>
            </div>
        );
    }
}

export default observer(Calculator);
