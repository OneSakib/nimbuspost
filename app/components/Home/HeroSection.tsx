"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import Image from "next/image";
import Typed from "typed.js";

const HeroSection: React.FC = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        // Initialize AOS for animations
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
        const typed = new Typed(typedRef.current, {
            strings: ["Python Developer", "Freelancer", "ML Developer"],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });
        return () => {
            // Destroy typed instance on unmount
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="hero section dark-background">
            <Image
                width={1920}
                height={1080}
                src="/assets/img/hero-bg.webp"
                alt="Hero Background"
                data-aos="fade-in"
                priority
            />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Sakib Malik</h2>
                <p>
                    I&apos;m <span ref={typedRef}></span>
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
