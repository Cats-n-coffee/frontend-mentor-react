import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'


const App = () => {
    return (
        <div id="container">
            <Header />
            <AboutPage />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));