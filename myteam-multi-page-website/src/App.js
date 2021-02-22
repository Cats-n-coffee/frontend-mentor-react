import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
    return (
        <div id="container">
            <Header />
            <HomePage />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));