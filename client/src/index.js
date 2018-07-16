import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker'
import App from './App';

import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState());
});


render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
