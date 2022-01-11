import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { ContextProvider } from './SocketContext'
import { BrowserRouter } from 'react-router-dom'

const appJsx = (
  <ContextProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <App />

    </BrowserRouter>
  </ContextProvider>
)

ReactDOM.render(appJsx, document.getElementById('root'))
