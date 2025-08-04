import Script from 'next/script';

export default function Head() {
    return (
        <>
            <title>Sakib Malik | Full Stack Developer</title>
            <meta
                name="description"
                content="Sakib Malik is a full stack developer with 3+ years of experience in Python, Django, Vue.js, React, FastAPI, and LangChain."
            />
            <meta
                name="keywords"
                content="Sakib Malik, Full Stack Developer, Python Developer, Django, Vue.js, React.js, Next.js, FastAPI, LangChain, Portfolio, Software Engineer, Developer from Mohali"
            />
            <meta property="og:title" content="Sakib Malik | Full Stack Developer" />
            <meta
                property="og:description"
                content="Explore Sakib Malik’s projects built with Django, Vue, React, and more."
            />
            <meta property="og:url" content="https://sakibmalik.vercel.app" />
            <meta
                property="og:image"
                content="https://sakibmalik.vercel.app/profile.jpg"
            />
            <Script id="schema-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Sakib Malik",
                        url: "https://sakibmalik.vercel.app",
                        image: "https://sakibmalik.vercel.app/assets/img/pic.png",
                        jobTitle: "Full Stack Developer",
                        worksFor: {
                            "@type": "Organization",
                            name: "Freelance / Remote",
                        },
                        alumniOf: {
                            "@type": "CollegeOrUniversity",
                            name: "MCA Graduate",
                        },
                        sameAs: [
                            "https://github.com/onesakib",
                            "https://www.linkedin.com/in/sakib-malik/",
                            "https://join.skype.com/invite/vqaFbAi8FGrR",
                            "https://www.instagram.com/malik_sakib_347"
                        ],
                        knowsAbout: [
                            "Python", "Django", "Vue.js", "React.js", "Next.js", "Nuxt.js",
                            "FastAPI", "LangChain", "Flask", "Docker", "Kubernetes", "AWS", "ML", "Machine Learning"
                        ],
                        description:
                            "Sakib Malik is a full stack developer with 3+ years of experience building modern web applications using Django, Vue, React, FastAPI, and LangChain.",
                        hasPart: [
                            {
                                "@type": "CreativeWork",
                                name: "KashWork",
                                url: "https://kashwork.com",
                                description:
                                    "KashWork is a professional platform to manage digital jobs and freelance work. Built with Django and Vue.js.",
                                creator: {
                                    "@type": "Person",
                                    name: "Sakib Malik",
                                },
                            },
                            {
                                "@type": "CreativeWork",
                                name: "Negls",
                                url: "https://negls.com",
                                description:
                                    "Negls is an e-commerce website built using Django and Vue.js for seamless online shopping experiences.",
                                contributor: {
                                    "@type": "Person",
                                    name: "Sakib Malik",
                                    roleName: "Full Stack Developer"
                                },
                            },
                            {
                                "@type": "CreativeWork",
                                name: "AI Local Expert",
                                url: "https://ailocalexpert.co/",
                                description:
                                    "An AI-powered chatbot tool that crawls a user’s website and builds a conversational assistant using the extracted content. Users can embed the chatbot on their sites for intelligent, real-time support.",
                                contributor: {
                                    "@type": "Person",
                                    name: "Sakib Malik",
                                    roleName: "Full Stack Developer"
                                },
                            },
                            {
                                "@type": "CreativeWork",
                                name: "MILK ATM",
                                url: "https://app.ajay-verma.in",
                                description:
                                    "MILK ATM is a dairy management system for tracking daily milk transactions. It allows dairy owners to register clients, record daily milk distribution, and review sales statistics. I developed this app to simplify dairy record-keeping and improve transparency in milk distribution.",
                                creator: {
                                    "@type": "Person",
                                    name: "Sakib Malik",
                                },
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
