import React from 'react'
import Banner from './Banner.js'
import individuals from '../images/icon-person.svg'
import implement from '../images/icon-cog.svg'
import productive from '../images/icon-chart.svg'
import kady from '../images/avatar-kady.jpg'
import aiysha from '../images/avatar-aiysha.jpg'
import arthur from '../images/avatar-arthur.jpg'

const HomePage = () => {

    return (
        <div className="home-page">
            <section className="home-section-1">
                <div className="section-1-wrapper">
                    <h1>Find the <br/>best <span>talent</span></h1>
                    <p>Finding the right people and building high performing teams can 
                        be hard. Most companies aren’t tapping into the abundance of global 
                        talent. We’re about to change that.</p>
                </div>
            </section>
            <section className="home-section-2">
                <div className="home-section-2-wrapper">
                    <h2>Build & manage distributed teams like no one else.</h2>
                    <div className="presentation">
                        <article>
                            <img src={individuals} alt="person"/>
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are 
                                passionate about what they do.</p>
                        </article>
                        <article>
                            <img src={implement} alt="cog wheel"/>
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation meaning 
                                our teams always deliver.</p>
                        </article>
                        <article>
                            <img src={productive} alt="chart"/>
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you manage your 
                                distributed teams.</p>
                        </article>
                    </div>
                </div>
            </section>
            <section className="home-section-3">
                <div className="home-section-3-wrapper">
                    <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                    <div className="testimonials">
                        <figure>
                            <blockquote>“The team perfectly fit the specialized skill set required. They focused 
                                on the most essential features helping us launch the platform eight months 
                                faster than planned.”</blockquote>
                            <figcaption>
                                <cite>Kady Baker</cite>
                                <cite>Product Manager at Bookmark</cite>
                                <img src={kady} alt="Kady's picture"/>
                            </figcaption>  
                        </figure>
                        <figure>
                            <blockquote>“We needed to automate our entire onboarding process. The team came in and 
                                built out the whole journey. Since going live, user retention has gone 
                                through the roof!”</blockquote>
                            <figcaption>
                                <cite>Aiysha Reese</cite>
                                <cite>Founder of Manage</cite>
                                <img src={aiysha} alt="Aiysha's picture"/>
                            </figcaption>
                        </figure>
                        <figure>
                            <blockquote>“Amazing. Our team helped us build an app that delivered a new experience for 
                                hiring a physio. The launch was an instant success with 100k downloads in the 
                                first month.”</blockquote>
                            <figcaption>
                                <cite>Arthur Clarke</cite>
                                <cite>Co-founder of MyPhysio</cite>
                                <img src={arthur} alt="Arthur's picture"/>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <Banner />
        </div>
    )
}

export default HomePage;