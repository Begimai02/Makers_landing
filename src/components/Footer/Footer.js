import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <p>© 2021 Makers</p>
                <div className="footer_info_icons">
                    <a href="https://www.facebook.com/makerskg/" target="_blank"><div className="info_icon"><i class="fab fa-facebook-f"></i></div></a>
                    <a href="https://www.instagram.com/makerskg/" target="_blank"><div className="info_icon"><i class="fab fa-instagram"></i></div></a>
                    <a href="https://vk.com/makerskg" target="_blank"><div className="info_icon"><i class="fab fa-vk"></i></div></a>
                    <a href="https://t.me/makerskg" target="_blank"><div className="info_icon"><i class="fab fa-telegram-plane"></i></div></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;