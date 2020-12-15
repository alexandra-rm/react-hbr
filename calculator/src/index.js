import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Provider } from 'react-redux';

import App from './App';
import calculatorReducer from './reducers';
import {doCalculationEpic} from './epics';

export const rootEpic = combineEpics(
    doCalculationEpic,
    // otherEpic,
);

const epicMiddleware = createEpicMiddleware();

// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
// todo https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

applyMiddleware(epicMiddleware);

let store = createStore(
    calculatorReducer,
    composeEnhancers(
     applyMiddleware(epicMiddleware)
    ),
);
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

