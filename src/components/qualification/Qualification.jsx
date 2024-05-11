import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
  return (
    <section className="qualification section">
        <h2 className="section__title">Pengalaman</h2>
        <span className="section__subtitle">Timeline pengalaman saya</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Edukasi
                </div>

                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Pengalaman
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Pemain Catur</h3>
                            <span className="qualification__subtitle">Rumah - Purwokerto</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Visual Design</h3>
                            <span className="qualification__subtitle">SMP Telkom - Purwokerto</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">SMK Telkom Purwokerto</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Visual Design</h3>
                            <span className="qualification__subtitle">SMK Telkom - Purwokerto</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UI/UX Design</h3>
                            <span className="qualification__subtitle">Udayana - University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 November
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UI/UX Competition HiLo</h3>
                            <span className="qualification__subtitle">HiLo Teen Design Workshop</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 Desember
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UI/UX Competition</h3>
                            <span className="qualification__subtitle">Gontor - University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 Januari
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification