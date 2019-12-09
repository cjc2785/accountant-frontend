import 'bootstrap/dist/css/bootstrap.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

//import jquery from 'jquery'
//window.$ = window.jQuery = jquery


import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


import App from './components/App.js'

ReactDom.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'))
