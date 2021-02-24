import React from 'react'
import Banner from './Banner'
import teamData from '../teamData'
import TeamMembers from './TeamMembers'
import logoGadgets from '../images/logo-gadgets-now.png'
import logoJakarta from '../images/logo-jakarta-post.png'
import logoTechRadar from '../images/logo-tech-radar.png'
import logoGuardian from '../images/logo-the-guardian.png'
import logoVerge from '../images/logo-the-verge.png'

const AboutPage = () => {
    
    return (
        <div className="about-page">
            <div className="about-section-1">
                <div className="section-1-wrapper">
                    <h1>About</h1>
                    <p>We help companies build dynamic teams made up of top global talent. 
                        Using our network of passionate professionals we drive innovation 
                        and deliver incredible outcomes. Talented, diverse teams shape the 
                        best products and experiences. We’ll bring those teams to you.</p>
                </div>
            </div>
            <div className="about-section-2">
                <div className="about-section-2-wrapper">
                    <h2>Meet the directors</h2>
                    <div className="team-members">
                        { teamData.map((member, index) => {
                            return (
                                <TeamMembers 
                            member={ member }
                            key={ index }/>
                            )
                        }) }
                    </div>
                </div>
            </div>
            <div className="about-section-3">
                <div className="about-section-3-wrapper">
                    <h2>Some of our clients</h2>
                    <div className="clients">
                        <img src={ logoVerge } alt="logo the verge"/>
                        <img src={ logoJakarta } alt="logo the jakarta post"/>
                        <img src={ logoGuardian } alt="logo the guardian"/>
                        <img src={ logoTechRadar } alt="logo tech radar"/>
                        <img src={ logoGadgets } alt="logo gadgets now"/>
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    )
}

export default AboutPage;