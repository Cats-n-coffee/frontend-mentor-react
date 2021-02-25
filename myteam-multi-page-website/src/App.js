import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/main.scss'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScrollToTop'


function App() {

    return (
        <Router>
            <ScrollToTop />
            <div id="container">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));