import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { ContextProvider } from './SocketContext'
import { BrowserRouter } from 'react-router-dom'

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
