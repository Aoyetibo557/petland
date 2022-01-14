import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaSnapchatGhost } from "react-icons/fa";



function Footer() {
    return (
        <div className='footer'>
            
            <div>

            </div>
            <div className='footer__bottom'>
                <p>&copy;2022 O.A.G_Studios. All trademarks are owned by O.A.G Media.</p>
                <div>
                    <FaFacebookF className='footer__icon' />
                    <FaTwitter className='footer__icon'  />
                    <FaSnapchatGhost className='footer__icon'  />

                </div>
            </div>
        </div>
    )
}

export default Footer
