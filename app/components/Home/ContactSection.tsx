"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AOS from "aos";
import { ContactForm } from "@/app/types/global";

const ContactSection = () => {
    try {
        fetch('/api/log-visitor')
    }
    catch (err) {
        console.log("api error visitor", err)
    }
    const [form, setForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus('Message sent!');
            setForm({ name: '', email: '', subject: '', message: '' });
        } else {
            setStatus('Failed to send message.');
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
                <div className="col-lg-5">
                    <div className="info-wrap">
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>HE 1217, Phase 5 Mohali, Punjab</p>
                            </div>
                        </div>
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p><a href="tel:+918954664647">+91 8954664647</a></p>
                            </div>
                        </div>
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p><a href="mailto:maliksakib347@gmail.com">maliksakib347@gmail.com</a></p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709325235!2d76.6883122770574!3d30.732254422147673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1739707753499!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-lg-7">
                    <form method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <label htmlFor="name-field" className="pb-2">Your Name</label>
                                <input type="text" name="name" id="name-field" className="form-control" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email-field" className="pb-2">Your Email</label>
                                <input type="email" className="form-control" name="email" id="email-field" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="subject-field" className="pb-2">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject-field" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="message-field" className="pb-2">Message</label>
                                <textarea className="form-control" name="message" rows={10} id="message-field" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
                            </div>
                            <p>{status}</p>
                            <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    </section>
}
export default ContactSection;