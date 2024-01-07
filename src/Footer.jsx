import React from 'react'
import "./footer.css";
import github from '../companyLogo/github.svg';
import linkedin from '../companyLogo/linkedin.svg';
import discord from '../companyLogo/discord.svg';

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className='footer-container d-flex mb-5'>
                <ul>
                    <li >Company</li>
                    <li>About us</li>
                    <li>Pricing</li>
                    <li>Contact us</li>
                    <li>Features</li>
                    
                </ul>
                <ul>
                    <li>Product</li>
                    <li>Figma design system</li>
                    <li>Ios kit</li>
                    <li>Android kit</li>
                    <li>Wireframe</li>
                    
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Templates</li>
                    <li>Landing pages</li>
                    <li>Documentation</li>
                    <li>Comp library</li>
                    
                </ul>
                <ul>
                    <li>Legal</li>
                    <li>Privacy policy</li>
                    <li>Terms & Conditions</li>
                    <li>Disclaimer</li>
                    <li>Affiliate programme</li>
                    
                </ul>
                <ul>
                    <li>Support</li>
                    <li>Help centre</li>
                    <li>Raise ticket</li>
                    <li>Report</li>
                    <li>Refund</li>
                    
                </ul>

            </div>

            <div className='footer-brand mb-3'>
                <div className='brand d-flex justify-content-center mb-3'> 
                <img src={github} height="30px" alt="github" />
                <img src={linkedin} height="30px" alt="linkedin" />
                <img src={discord} height="30px" alt="discord" />
                </div>
                <p> &copy; 2023 Mode UI Inc. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
