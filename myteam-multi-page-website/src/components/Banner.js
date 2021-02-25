import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-wrapper">
                <h2>Ready to get started?</h2>
                <Link to="/contact" className="btn btn-primary-light">contact us</Link>
            </div>
        </div>
    )
}

export default Banner;