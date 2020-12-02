import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect} from 'react-redux';

import App from './App';
import calculatorReducer from './reducers';

let store = createStore(
    calculatorReducer,
    applyMiddleware(thunk),
);

const ConnectedApp = connect((state) => {
    console.log('ConnectedApp state: ', state);
    return state;
})(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

