// import './App.css';
import '../style.css';
import logo from '../images/main-logo.png'
import section1Image from '../images/section1Image.png'
import section3Image1 from '../images/section3Image1.png'
import section3Image2 from '../images/section3Image2.png'
import section4Image from '../images/section4Image.png'
import section5Image1 from '../images/section5Image1.png'
import section5Image2 from '../images/section5Image2.png'
import section5Image3 from '../images/section5Image3.png'
import section5Image4 from '../images/section5Image4.png'
import section7Image1 from '../images/section7Image1.png'

function Home() {

    return (
        <div style={{
            backgroundColor: "#1E1D23", padding: 0, margin: 0,
        }}>


            <header>
                <div className="body shadow">
                    <nav className="navbar navbar-expand-lg navigation-wrap">
                        <div className="container-fluid col-md-12 d-flex align-items-center ">
                            <div className="container-fluid logo col-md-6 align-items-center d-flex">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} height="80px" width="80px" />
                                </a>
                                <span className="logo-text">
                                    Trusted Bitcoin Wallet
                                </span>
                            </div>
                            <div className="container-fluid col-6 align-items-center d-flex nav-options-1">
                                <ul className="navbar-nav ms-auto text-white col-lg-12 nav-options">
                                    <li className="nav-item">
                                        <a className="text-decoration-none fw-bold large nav-link-btn nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="text-decoration-none fw-bold large nav-link-btn nav-link" href="#working">Working</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="text-decoration-none fw-bold large nav-link-btn nav-link" href="#faq">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="text-decoration-none fw-bold large nav-link-btn nav-link" href="#contact">Contact us</a>
                                    </li>
                                    <a href='./login' className='text-decoration-none'>
                                        <button className="login-btn">
                                            Login/Signup
                                        </button>
                                    </a>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- Section 1 --> */}
            < div className="d-flex" >
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="box1">
                            <h1>Welcome to Trusted Bitcoin Wallet</h1>
                            <p>Your trusted secure P2P Crypto Fund Transfer Solution instantly!
                            </p>
                            <div className="mt-4">
                                <a href="./signup" className='text-decoration-none'>
                                    <button className="getstarted-btn">GET STARTED</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="box2">
                            <img src={section1Image} alt="" height="503px" width="760px" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section 2 Counter section --> */}
            < section id="counter" >
                <section className="counter-section">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    $<span id="count1"></span> Bn+
                                </h2>
                                <p>Transactions</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    <span id="count2"></span>+
                                </h2>
                                <p>Users</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    $<span id="count3"></span> Bn+
                                </h2>
                                <p>Withdrawals Today</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    <span id="count4"></span>+
                                </h2>
                                <p>Community Delegates</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section >

            {/* <!-- Section 3 --> */}
            < div className="d-flex" >
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="section3-box1">
                            <img src={section3Image1} alt="" height="560px" width="623px" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="section3-box2">
                            <p className="trusted-wallet">#1 TRUSTED WALLET</p>
                            <h1 className="top-notch-security">Top Notch Security & Trusted By Millions</h1>
                            <p className="we-are-known">We are known for our security and trust among our customers. With a Trust
                                pilot rating of 4.7 stars, we are trusted by millions</p>
                            <img src={section3Image2} alt="" />
                        </div>
                    </div>
                </div>
            </div >

            {/* <!-- Section 4 --> */}
            < div className="d-flex" >
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="section4-box1">
                            <p className="easy">EASY ACCESS AND LOW FEES</p>
                            <h1 className="global">Global Accessibility & Low Transaction Fees</h1>
                            <p className="we-are">We are known for our security and trust among our customers. With a Trust pilot
                                rating of 4.7 stars, we are trusted by millions</p>
                            <a href="#">Explore</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="section4-box2">
                            <img src={section4Image} alt="" height="527px" width="525px" />
                        </div>
                    </div>
                </div>
            </div >

            {/* <!-- Section 5 --> */}
            < div className="d-flex" >
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="section5 ">
                            <h5 className="featured">FEATURED ON</h5>
                            <div className="section5-images">
                                <img src={section5Image1} alt="" width="158px" height="58px" />
                                <img src={section5Image2} alt="" width="141px" height="22px" />
                                <img src={section5Image3} alt="" width="57px" height="31px" />
                                <img src={section5Image4} alt="" width="96px" height="25px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* <!-- section 6 --> */}
            < div className="section6" >
                <p>TESTIMONIALS</p>
                <h1>Read What Others <br /> Have To Say <br /></h1>
            </div >

            {/* <!-- section 7 --> */}
            < div className="d-flex" >
                <div className="container-fluid">
                    <div className="container d-flex">
                        <div className="profile-card">
                            <div className="profile-img">
                                <img src={section7Image1} alt="CEO Image" />
                            </div>
                            <div className="profile-description">
                                <h1>OLIVIA COLE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque
                                    mi, inmalesuada felis malesuada vel.</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-img">
                                <img src={section7Image1} alt="CEO Image" />
                            </div>
                            <div className="profile-description">
                                <h1>OLIVIA COLE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque
                                    mi, inmalesuada felis malesuada vel.</p>
                            </div>
                        </div>

                        <div className="profile-card">
                            <div className="profile-img">
                                <img src={section7Image1} alt="CEO Image" />
                            </div>
                            <div className="profile-description">
                                <h1>OLIVIA COLE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque
                                    mi, inmalesuada felis malesuada vel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* <!-- section 8 --> */}
            < div className=" section8" >
                <div className="">
                    <a href="./signup" className='text-decoration-none'><p>Create your account</p></a>
                    <h1>Join Local Bitcoin Pay Now</h1>
                </div>
                <a href="./signup" className='text-decoration-none'><button>GET STARTED</button></a>

            </div >
        </div >
    );
}

export default Home;