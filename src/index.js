import React from "react"

import ReactDOM from "react-dom/client"

import App from "./App"

import "./estilos.scss"

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))

/* const App = () => {
    return "Hola Mundo"
}
*/

root.render(<App/>)