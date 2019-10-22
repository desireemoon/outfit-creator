import React from 'react'

const Footer = () => {
    return(
        <div className="footer-container">
            <div class="social-title">
                <h2 className="footer-header">Connect with the programmers:</h2>
            </div>
            <div className="links">
                {/* UPDATE ICONS LATER */}
                <div class="social"><a href="https://git.generalassemb.ly/desireemoon/outfit-creator"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="font-icon" /></a></div>
                <div class="social"><a href="https://git.generalassemb.ly/desireemoon/outfit-creator"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="font-icon" /></a></div>
                <div class="social"><a href="https://git.generalassemb.ly/desireemoon/outfit-creator"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="font-icon" /></a></div>                                
            </div>
        </div>
    )
}

export default Footer