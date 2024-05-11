import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Pelayanan</h2>
        <span className="section__subtitle">Apa yang saya tawarkan</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">UI/UX <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    
                        <h3 className="services__modal-title">UI/UX Design</h3>
                        <p className="services__modal-description">Bergerak sebagai frontend sekaligus UI/UX dalam tim
                        dan beraspirasi mendapatkan kualitas yang diharapkan pada pengerjaan projek-projeknya.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Saya kembangkan keinginan anda</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Interface yang menarik</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Revisi hingga terpuaskan</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Web <br/> Design</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    
                        <h3 className="services__modal-title">Web Design</h3>
                        <p className="services__modal-description">Berpengalaman dalam pengerjaan sejumlah projek web design
                        menggunakan Figma.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Animation Design</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">UX Priority</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Revisi hingga terpuaskan</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Graphic <br/> Design</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    
                        <h3 className="services__modal-title">Graphic Design</h3>
                        <p className="services__modal-description">Selain programming, saya memiliki ketertarikan
                        dalam bidang visual design yaitu graphic design</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Logo design</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Graphic design</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Revisi hingga terpuaskan</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services