import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'mobx-react';

import store from './store';

import Calculator from "./components/Calculator";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Calculator store={store}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

