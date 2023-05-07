import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    // React.StrictMode는 React에서 없엘 기능들을 사용하면 알려주는 component임
    // <App />에 보여주고 싶은 component를 입력하면 됨
)
