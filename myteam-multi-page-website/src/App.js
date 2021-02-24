import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'


const App = () => {
    return (
        <div id="container">
            <Header />
            <ContactPage />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));