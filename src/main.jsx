import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoList from './Componets/TodoList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    < TodoList/>
  </React.StrictMode>,
)
