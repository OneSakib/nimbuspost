import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import "aos/dist/aos.css";
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/css/main.css'
import Loader from "./components/Loader";
import Script from 'next/script';
import Head from "./components/Head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakib Malik | Full Stack Developer | Python, Django, Vue, React, Next.js",
  description: "Sakib Malik is a full stack developer with 3+ years of experience in Python, Django, Vue.js, React, Next.js, FastAPI, and LangChain. Explore projects, skills, and contact info.",
  keywords: "Sakib Malik, Full Stack Developer, Python Developer, Django, Vue.js, React, Next.js, FastAPI, LangChain, Portfolio, Software Engineer, MCA, Developer from Mohali, India",
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Loader />
        <Script id="main-js" src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
