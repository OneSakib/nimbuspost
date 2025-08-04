"use client";

import { useEffect } from "react";
import AOS from "aos";
const SkillsSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        // Dynamically import Waypoint only on client side
        if (typeof window !== "undefined") {
            import("waypoints/lib/noframework.waypoints").then(() => {
                const skillAnimations = document.querySelectorAll(".skills-animation");
                skillAnimations.forEach((item) => {
                    new (window).Waypoint({
                        element: item,
                        offset: "80%",
                        handler: function () {
                            const progressBars = item.querySelectorAll(".progress .progress-bar");
                            progressBars.forEach((el) => {
                                const value = el.getAttribute("aria-valuenow");
                                if (value) {
                                    (el as HTMLElement).style.width = value + "%";
                                }
                            });
                        },
                    });
                });
            });
        }
    }, [])
    return <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Python Developer @Wisdominfosoft | Django | ML | Vue Js</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
                <div className="col-lg-6">
                    <div className="progress">
                        <span className="skill"><span>Python</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>Vue js</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>React JS</span> <i className="val">40%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>NEXT JS</span> <i className="val">40%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="progress">
                        <span className="skill"><span>React JS</span> <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>Html</span> <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>ML</span> <i className="val">55%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>Langchain</span> <i className="val">55%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default SkillsSection;