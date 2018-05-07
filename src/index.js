import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import taskReducers from './reducers/tasks';
import TodoApp from './conteinars/TodoApp';

const store = createStore(taskReducers);

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
