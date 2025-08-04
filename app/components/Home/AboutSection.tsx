"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="about" className="about section">

        <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>As a dedicated software developer with expertise in Python, I specialize in building robust applications using frameworks like Django, along with front-end technologies such as React.js, Vue.js, and Nuxt.js. I also have hands-on experience deploying Django applications on AWS EC2, ensuring reliable hosting, and utilizing Docker for containerization.                </p>
            <p>
                In my most recent project, I successfully hosted a Python-based application, kashwork.com, using Docker, showcasing my ability to deploy scalable solutions efficiently.
            </p>
            <p>
                Currently, I am expanding my knowledge in Machine Learning, Deep Learning, and Data Science. While I don’t have industrial experience in these fields yet, I am passionate about building my career as a Machine Learning Developer and eager to apply my skills in Python to solve real-world challenges.
            </p>
            <p>
                I&apos;m excited to contribute to innovative projects and work with teams that leverage cutting-edge technologies in the AI and ML space.
            </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                    <Image width={100} height={100} src="/assets/img/pic.png" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 content">
                    <h2>Python Developer</h2>
                    <p className="fst-italic py-3">
                        Python Developer @Wisdominfosoft | Django | ML | Vue Js
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>25 January 1997</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://sakibmalik.vercel.app">sakibmalik.vercel.app</a></span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+918954664647">+91 8954664647</a></span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span><a href="https://www.google.com/maps/place/Mohali,+India" target="_blank" rel="noopener noreferrer">Mohali, India</a></span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:maliksakib347@gmail.com">maliksakib347@gmail.com</a></span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="py-3">
                        #Python #Django #ReactJS #VueJS #NuxtJS #FullStack #SoftwareDevelopment #AWS #EC2 #Docker #Containerization #ScalableSolutions #MachineLearning #DeepLearning #DataScience #AIDevelopment
                    </p>
                    <a
                        href="/Sakib_Malik_Python_Developer_3_Year_Experience.pdf"
                        download
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Download Resume <i className="bi bi-download ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
}
export default AboutSection;