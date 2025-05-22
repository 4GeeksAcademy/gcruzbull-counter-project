import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { Card } from './components/Card';

let sec, sec2, min, min2, hour, hour2
sec = sec2 = min = min2 = hour = hour2 = 0

setInterval(() => {
  if (sec == 10) {
    sec2++
    sec = 0
  }
  if (sec2 == 6) {
    min++
    sec = sec2 = 0
  }
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home sec={sec} sec2={sec2} min={min} min2={min2} hour={hour} hour2={hour2}  />
  </React.StrictMode>,
)
  sec++
}, 100);  // interval corresponde a milisegundos. 1000 = 1 seg
