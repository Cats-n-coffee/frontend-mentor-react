import React from 'react'
import individuals from '../images/icon-person.svg'
import implement from '../images/icon-cog.svg'
import productive from '../images/icon-chart.svg'

const ContactPage = () => {
    return ( 
        <div className="contact-page">
            <div className="contact-wrapper">
                <section className="contact-text">
                    <h2>Contact</h2>
                    <h3>Ask us about</h3>
                    <ul>
                        <li><img src={ individuals } alt="person icon"/><span>The quality of our talent network</span></li>
                        <li><img src={ implement } alt="cog icon"/><span>Usage & implementation of our software</span></li>
                        <li><img src={ productive } alt="chart icon"/><span>How we help drive innovation</span></li>
                    </ul>
                </section>
                <section className="contact-form">
                    <form>
                        <div className="form-element">
                            <input type="text" id="name" placeholder="Name"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-element">
                            <input type="email" id="email" placeholder="Email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-element">
                            <input type="text" id="company" placeholder="Company"/>
                            <label htmlFor="company">Company</label>
                        </div>
                        <div className="form-element">
                            <input type="text" id="title" placeholder="Title"/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-element">
                            <textarea id="message" rows="4" placeholder="Message"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">submit</button>
                    </form>
                </section>
            </div>
        </div>
     );
}
 
export default ContactPage;