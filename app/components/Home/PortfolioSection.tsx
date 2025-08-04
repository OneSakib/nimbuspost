"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import Image from "next/image";
const PortfolioSection = () => {
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
            <h2>Featured Projects</h2>
            <p>A selection of my recent work showcasing my technical capabilities and problem-solving skills.</p>
        </div>
        <div className="container">
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/e-commerce.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>E-commerce Platform</h4>
                                <p>A scalable and secure online store with seamless payment integration, inventory tracking, and CMS-driven content management.</p>
                                <div className="tech-stack">
                                    <span className="tags">Django</span>
                                    <span className="tags">HTML</span>
                                    <span className="tags">CSS</span>
                                    <span className="tags">JavaScript</span>
                                    <span className="tags">Razorpay (Payment Gateway)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/yt-analyzer.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>YouTube Video Analyzer</h4>
                                <p>Advanced tool to extract and visualize video performance metrics, keyword insights, and metadata for content optimization.</p>
                                <div className="tech-stack">
                                    <span className="tags">Flask</span>
                                    <span className="tags">YouTube API</span>
                                    <span className="tags">React JS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/insta-analyzer.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Instagram Profile Analyzer</h4>
                                <p>Insightful dashboard to monitor engagement rates, follower trends, and profile health using real-time Instagram data.</p>
                                <div className="tech-stack">
                                    <span className="tags">Flask</span>
                                    <span className="tags">Instagram API</span>
                                    <span className="tags">React JS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/custom-cb.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Custom Chatbot</h4>
                                <p>Business-specific chatbot designed to handle user queries, automate workflows, and enhance customer engagement.</p>
                                <div className="tech-stack">
                                    <span className="tags">Flask</span>
                                    <span className="tags">Langchain</span>
                                    <span className="tags">RAG</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/ai-cb.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>AI Chatbot</h4>
                                <p>Conversational AI assistant powered by GPT to deliver dynamic, context-aware interactions for customer service and support.</p>
                                <div className="tech-stack">
                                    <span className="tags">Flask</span>
                                    <span className="tags">OpenAI</span>
                                    <span className="tags">Langchain</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/career-portal.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Career Portal</h4>
                                <p>Full-featured job portal supporting role-based access, application workflows, resume uploads, and admin dashboards.</p>
                                <div className="tech-stack">
                                    <span className="tags">Flask</span>
                                    <span className="tags">PostgreSQL</span>
                                    <span className="tags">React JS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/matrimonial.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Matrimonial Web & Mobile App</h4>
                                <p>Modern matchmaking platform featuring profile creation, partner suggestions, and in-app communication tools.</p>
                                <div className="tech-stack">
                                    <span className="tags">Django Rest Framework</span>
                                    <span className="tags">Websocket</span>
                                    <span className="tags">React JS</span>
                                    <span className="tags">React Native</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/face-recognition.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Face Recognition</h4>
                                <p>Secure login and identity verification system using facial recognition technology and real-time camera input.</p>
                                <div className="tech-stack">
                                    <span className="tags">Python</span>
                                    <span className="tags">OpenCV</span>
                                    <span className="tags">Flask</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/dance-comp.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Dance Competition App</h4>
                                <p>Interactive event management app for registrations, public voting, and live result tracking for competitions.</p>
                                <div className="tech-stack">
                                    <span className="tags">Django Rest Framework</span>
                                    <span className="tags">React Native</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/web-cb.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web Chatbot</h4>
                                <p>Seamlessly embedded support assistant for websites, trained on FAQs and capable of guiding user flows.</p>
                                <div className="tech-stack">
                                    <span className="tags">Python</span>
                                    <span className="tags">Langchain</span>
                                    <span className="tags">Flask</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/pos.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>POS App</h4>
                                <p>Mobile point-of-sale solution with billing, order management, and digital receipt generation for retail use.</p>
                                <div className="tech-stack">
                                    <span className="tags">Django Rest Framework</span>
                                    <span className="tags">React Native</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/v-c.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Random Video Chat Web App</h4>
                                <p>Real-time anonymous video chat platform enabling instant user connections using peer-to-peer architecture.</p>
                                <div className="tech-stack">
                                    <span className="tags">Django</span>
                                    <span className="tags">Websocket</span>
                                    <span className="tags">WebRTC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                        <div className="portfolio-content h-100">
                            <Image width={500} height={500} src="/assets/img/portfolio/web-scrape.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web Scrapers</h4>
                                <p>Automated data extraction tools tailored for structured scraping of dynamic and static web content.</p>
                                <div className="tech-stack">
                                    <span className="tags">Python</span>
                                    <span className="tags">Requests</span>
                                    <span className="tags">BeautifulSoup</span>
                                    <span className="tags">Selenium</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default PortfolioSection;