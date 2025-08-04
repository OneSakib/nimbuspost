"use client";

import { useEffect } from "react";
import AOS from "aos";
const ServicesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>End-to-end development services combining AI, web, mobile, and business automation for modern digital products.</p>
        </div>
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
                    <div>
                        <h4 className="title"><a href="service-details.html" className="stretched-link">Custom Web & Mobile Apps</a></h4>
                        <p className="description">Full-stack web and mobile applications tailored to your business needs, built with React, Django, and FastAPI.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
                    <div>
                        <h4 className="title"><a href="service-details.html" className="stretched-link">E-commerce Development</a></h4>
                        <p className="description">Scalable online store setups with custom checkout, admin dashboards, POS integration, and secure payment gateways.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
                    <div>
                        <h4 className="title"><a href="service-details.html" className="stretched-link">AI & Chatbot Solutions</a></h4>
                        <p className="description">Custom GPT-powered chatbots, video assistants, and intelligent automation tools using OpenAI, FastAPI, and more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
                    <div>
                        <h4 className="title"><a href="service-details.html" className="stretched-link">Location & Tracking Systems</a></h4>
                        <p className="description">Real-time GPS tracking, location history, and geofencing for apps that need live updates or check-in systems.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
                    <div>
                        <h4 className="title"><a href="service-details.html" className="stretched-link">Face Recognition & Image Analysis</a></h4>
                        <p className="description">Facial recognition systems and image/video analyzers using OpenCV and ML models.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                    <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
                    <div>
                        <h4 className="title"><a href="service-details.html" className="stretched-link">Database Design & API Integration</a></h4>
                        <p className="description">Optimized PostgreSQL/MySQL databases, secure RESTful APIs, and seamless third-party service integrations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default ServicesSection;