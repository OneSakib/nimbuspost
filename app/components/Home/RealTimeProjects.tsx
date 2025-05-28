"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import Image from "next/image";
const RealTimeProjects = () => {
    const portfolioRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="portfolio" className="portfolio section light-background" ref={portfolioRef}>
        <div className="container section-title" data-aos="fade-up">
            <h2>Projects</h2>
            <p>I have build some projects</p>
        </div>
        <div className="container">
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/kashwork.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>KashWork</h4>
                                <p>Kashwork is a professional platform developed to manage digital jobs and freelance work. It offers businesses and individuals a space to collaborate, manage tasks, and streamline workflows. I contributed to both frontend (Vue.js) and backend (Django), focusing on performance, usability, and seamless user interaction.</p>
                                <div className="tech-stack">
                                    <span className="tags">Python (Django)</span>
                                    <span className="tags">Vue.js</span>
                                </div>
                                <p>Live Site: <a href="https://kashwork.com" target="_blank">kashwork.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/negls.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Negls</h4>
                                <p>Negls is an employee analysis platform designed to provide insights into employee profiles. Users can view individual employee details, understand their roles, and evaluate performance metrics. The goal of this platform is to help companies make informed hiring and HR decisions.</p>
                                <div className="tech-stack">
                                    <span className="tags">Python (Django)</span>
                                </div>
                                <p>Live Site: <a href="https://negls.com" target="_blank">negls.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/ailocalexpert.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>AI LocalExpert</h4>
                                <p>AI LocalExpert is a smart chatbot app designed to automate customer support. Users can enter their website URL, and the app will crawl the site, extract content, and use it to power a conversational chatbot. After embedding a provided script on their site, users enable real-time, content-aware AI conversations powered by OpenAI.</p>
                                <div className="tech-stack">
                                    <span className="tags">React.js</span>
                                    <span className="tags">Nest.js</span>
                                    <span className="tags">OpenAI Agents</span>
                                </div>
                                <p>Live Site: <a href="https://ailocalexpert.co/" target="_blank">ailocalexpert.co</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/milk_atm.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>MILK ATM</h4>
                                <p>MILK ATM is a dairy management system for tracking daily milk transactions. It allows dairy owners to register clients, record daily milk distribution, and review sales statistics. I developed this app to simplify dairy record-keeping and improve transparency in milk distribution.</p>
                                <div className="tech-stack">
                                    <span className="tags">Python (DRF )</span>
                                    <span className="tags">React.js</span>
                                </div>
                                <p>Live Site: <a href="https://app.ajay-verma.in" target="_blank">app.ajay-verma.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default RealTimeProjects;