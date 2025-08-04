"use client";

import { useEffect } from "react";

const Loader = () => {
    useEffect(() => {
        const preloader = document.querySelector("#preloader");
        if (preloader) {
            preloader.remove();
        }

        if (typeof window !== "undefined") {
            const scrollTop = document.querySelector(".scroll-top") as HTMLElement;

            const toggleScrollTop = () => {
                if (scrollTop) {
                    if (window.scrollY > 100) {
                        scrollTop.classList.add("active");
                    } else {
                        scrollTop.classList.remove("active");
                    }
                }
            };

            // Run once on mount
            toggleScrollTop();

            // Listen to scroll events
            window.addEventListener("scroll", toggleScrollTop);

            // Cleanup event listener on unmount
            return () => {
                window.removeEventListener("scroll", toggleScrollTop);
            };
        }
    }, []);

    return (
        <div>
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
            <div id="preloader"></div>
        </div>
    );
};

export default Loader;
