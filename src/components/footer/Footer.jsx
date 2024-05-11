import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Alif R.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Tentang saya</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portofolio saya</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Pelayanan saya</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/aliframadhan.27" className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://api.whatsapp.com/send?text=&phone=6281215316353" className="footer__social-link" target="_blank">
                <i className="bx bxl-whatsapp"></i>
            </a>

            <a href="https://www.linkedin.com/in/aliframadhan27" className="footer__social-link" target="_blank">
                <i className="bx bxl-linkedin"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Alif Ramadhan. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer