import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                        <span> About my services</span> You will get amazing services related to wedding photoshot and cinematography at amzaming prices. Provides wedding albums and DvD for your special wedding shoots.
                    </p>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p> (+88) 01303110524</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="/"> jannatul15-12149@diu.edu.bd</a></p>
                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                    <h2> CreativeEyes Photography<span> logo</span></h2>
                    <p class="menu">
                        <a href="/home"> Home</a> |
                        <a href="/about"> About</a> |
                        <a href="/services"> Services</a> |
                        <a href="/"> Portfolio</a> |
                        <a href="/"> News</a> |
                        <a href="/"> Contact</a>
                    </p>
                    <p class="name"> CreativeEyes Photography &copy; {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;