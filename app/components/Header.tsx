import Image from "next/image";
const Header = () => {
    return <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>
        <div className="profile-img">
            <Image width={100} height={100} src="/assets/img/pic.png" alt="" className="img-fluid rounded-circle" />
        </div>
        <a href="index.html" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">Sakib Malik</h1>
        </a>
        <div className="social-links text-center">
            {/* <a href="#" className="twitter" target="_blank"> <i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a> */}
            <a href="https://www.instagram.com/malik_sakib_347" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="https://join.skype.com/invite/vqaFbAi8FGrR" className="google-plus" target="_blank"><i className="bi bi-skype"></i></a>
            <a href="https://www.linkedin.com/in/sakib-malik/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/onesakib" target="_blank" className="linkedin"><i className="bi bi-github"></i></a>
        </div>
        <nav id="navmenu" className="navmenu">
            <ul>
                <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
                <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
                <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
            </ul>
        </nav>
    </header>
}
export default Header;