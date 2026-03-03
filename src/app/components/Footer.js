import React from 'react';
import LogoImg from "../../assets/png/DTS.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">
                       <img src={LogoImg} className='logoImg'/>
                    </div>
                    <div className='footerLinksContainer'>
                        <div className="footer-links">
                            {["About", "Services", "Process", "Clients", "Contact"].map(
                                (link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                    >
                                        {link}
                                    </a>
                                )
                            )}
                        </div>

                        <button
                            className="scroll-top"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            aria-label="Scroll to top"
                        >
                            ↑
                        </button>
                    </div>



                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Dream Tech Studio.
                        All rights reserved.
                    </p>

                    <div className="footer-policy">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;