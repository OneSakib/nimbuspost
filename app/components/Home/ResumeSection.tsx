"use client";

import { useEffect } from "react";
import AOS from "aos";
const ResumeSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>As a dedicated software developer with expertise in Python, I specialize in building robust applications using frameworks like Django, along with front-end technologies such as React.js, Vue.js, and Nuxt.js. I also have hands-on experience deploying Django applications on AWS EC2, ensuring reliable hosting, and utilizing Docker for containerization.</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Sumary</h3>

                    <div className="resume-item pb-0">
                        <h4>Sakib Malik</h4>
                        <p><em>Python Developer</em></p>
                        <ul>
                            <li>Sahranpur, India</li>
                            <li><a href="tel:+918954664647">+91 8954664647</a></li>
                            <li><a href="mailto:maliksakib347@gmail.com">maliksakib347@gmail.com</a></li>
                        </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                        <h4>Master of Computer Application</h4>
                        <h5>2020 - 2022</h5>
                        <p><em>Dev Bhoomi Group Of Institutions, Sahranpur</em></p>
                        <p>Acquired strong theoretical and practical knowledge in software development, database systems, web technologies, and project management. Successfully completed multiple projects, including a self-driven final project showcasing full-stack capabilities.</p>
                    </div>

                    <div className="resume-item">
                        <h4>Bachelor of Computer Application</h4>
                        <h5>2017 - 2020</h5>
                        <p><em>Ramoot College Of Education, Saharanpur</em></p>
                        <p>Developed foundational knowledge in programming, data structures, computer networks, and software engineering.</p>
                    </div>

                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                        <h4>Python Developer</h4>
                        <h5>2022 - Present</h5>
                        <p><em>Mohali, Punjab </em></p>
                        <ul>
                            <li>Over 3 years of hands-on experience in developing full-stack web applications using Python, Django, Django Rest Framework (DRF), and Nuxt.js.</li>
                            <li>Developed RESTful APIs, integrated third-party services, and implemented secure user authentication and authorization flows.</li>
                            <li>Designed scalable and efficient backend systems with PostgreSQL and MySQL, focusing on performance and data integrity.</li>
                            <li>Created dynamic frontend interfaces using Nuxt.js, ensuring fast load times and responsive design.</li>
                            <li>Led end-to-end development of multiple client and in-house projects, including:</li>
                            <ul>
                                <li>✅ <a href="https://kashwork.com">Kashwork</a> – E-commerce solution with real-time features</li>
                                <li>✅ <a href="https://negls.com">Negls</a> – Job portal and freelancing platform, fraud Employee Detection.</li>
                                <li>✅ <a href="https://ailocalexpert.co">AiLocalExpert</a> – AI-powered Support Chatbot.</li>
                            </ul>
                            <li>Deployed applications using Docker, Nginx, and AWS, and configured CI/CD pipelines for production workflows.</li>
                            <li>Collaborated closely with designers, QA teams, and clients to gather requirements, deliver features, and ensure project success.</li>
                            <li>Provided mentorship and code reviews for junior developers.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </section>
}
export default ResumeSection;