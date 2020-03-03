import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../src/modules/reducer'

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        margin:0px;
    }
    a{
        text-decoration-line: none;
        color: unset;
    }
    `


const store = createStore(reducer)

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <GlobalStyle/>
    <Component {...pageProps} />
  </Provider>
)

export default App