import {FaInstagram, FaFacebookSquare , FaLinkedin } from "react-icons/fa"

function Footer(){
    return(
        <div className="footer">
            <div className="footer-left">
                <div className="logo-image">
                    <img className="logo" src="./logo.png" alt="logo" />
                </div>
                <div className="logo-text">
                    <p>Webinar</p>
                    <p>Pros LLC</p>
                </div>
            </div>
            <div className="footer-right">
                <div className="social-icons">
                    <FaFacebookSquare  className="icons"/>
                    <FaInstagram className="icons" />
                    <FaLinkedin className="icons" />
                </div>
                <div className="footer-text">
                    <p>Thank you for registering! For inquiries and updates.</p>
                    <p>follow us at @webinarprosLLC on our social media accounts</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;