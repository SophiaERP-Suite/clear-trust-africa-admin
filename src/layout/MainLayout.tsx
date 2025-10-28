import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../assets/main/css/vendor/bootstrap.min.css";
import "../assets/main/css/plugins/animation.css";
import "../assets/main/css/plugins/feature.css";
import "../assets/main/css/plugins/magnify.min.css";
import "../assets/main/css/plugins/slick.css";
import "../assets/main/css/plugins/slick-theme.css";
import "../assets/main/css/plugins/lightbox.css";
import "../assets/main/css/plugins/odometer.css";
import "../assets/main/css/stylea3ca.css";
import { useEffect } from "react";
import feather from "feather-icons";

const MainLayout = () => {
  useEffect(() => {
    feather.replace();

    const scriptUrls = [
      "/assets/main/js/vendor/jquery.min.js",
      "/assets/main/js/vendor/bootstrap.min.js",
      "/assets/main/js/vendor/waypoint.min.js",
      "/assets/main/js/vendor/wow.min.js",
      "/assets/main/js/vendor/feather.min.js",
      "/assets/main/js/vendor/sal.min.js",
      "/assets/main/js/plugins/gsap.js",
      "/assets/main/js/plugins/scrolltigger.js",
      "/assets/main/js/plugins/splittext.js",
      "/assets/main/js/vendor/masonry.js",
      "/assets/main/js/vendor/imageloaded.js",
      "/assets/main/js/vendor/magnify.min.js",
      "/assets/main/js/vendor/lightbox.js",
      "/assets/main/js/vendor/slick.min.js",
      "/assets/main/js/vendor/easypie.js",
      "/assets/main/js/vendor/text-type.js",
      "/assets/main/js/vendor/jquery-one-page-nav.js",
      "/assets/main/js/plugins/smoothscroll.js",
      "/assets/main/js/plugins/odometer.js",
      "/assets/main/js/plugins/jaralax.js",
      "/assets/main/js/plugins/scroll-elements.js",
      "/assets/main/js/main.js",
    ];

    // Load all scripts sequentially
    const loadScriptsSequentially = async () => {
      for (const src of scriptUrls) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.defer = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }
      console.log("✅ All scripts loaded");
    };

    loadScriptsSequentially();

    return () => {
      scriptUrls.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) script.remove();
      });
    };
  }, []);

  return (
    <div className="active-light-mode">
      <Header />

      <main className="page-wrapper">
        <Outlet />
      </main>

      <Footer />

      <div className="scrollbar-v show-on-scroll"></div>
      <div className="float-text show-on-scroll">
        <span>
          <a href="#">Scroll to top</a>
        </span>
      </div>

      <div id="anywhere-home" className="bghide"></div>

      {/* sidebar desktop */}
      <div className="inverweb-side-bar-close">
        <div className="shape-right-top">
          <img src="/assets/main/images/banner/shape-it-1.svg" alt="" />
        </div>
        <button className="close-icon-menu tmponhover">
          <i className="feather-x"></i>
        </button>
        <div className="logo-side">
          <a href="index.html">
            <img
              className="logo-light"
              src="/assets/main/images/logo/logo.png"
              alt="Corporate Logo"
            />
            <img
              className="logo-dark"
              src="/assets/main/images/logo/logo-dark.png"
              alt="Corporate Logo"
            />
          </a>
        </div>
        <div className="side-info">
          <div className="contact-list">
            <h4>Office Address</h4>
            <p>
              456/B, Madison Avenue Kora Road
              <br /> New York, NY 10022
            </p>
          </div>
          <div className="contact-list">
            <h4>Phone Number</h4>
            <a href="tel:+8801712345678">+0989 7876 9865 9</a>
            <a href="tel:+8801712345678">+(090) 8765 86543 85</a>
          </div>
          <div className="contact-list">
            <h4>Email Address</h4>
            <a href="mailto:info@yourdomain.com">info@example.com</a>
            <a href="mailto:info@yourdomain.com">example.mail@hum.com</a>
          </div>
        </div>

        <div className="row g-3 mt--15" id="animated-lightbox2">
          <a
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            href="/assets/main/images/portfolio/portfolio-01.jpg"
          >
            <div className="tmp-gallery icon-center">
              <div className="thumbnail">
                <img
                  className="radius-small"
                  src="/assets/main/images/portfolio/portfolio-01.jpg"
                  alt="Corporate Image"
                />
              </div>
              <div className="video-icon">
                <div className="btn-default rounded-player sm-size">
                  <span>
                    <i className="feather-zoom-in"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            href="/assets/main/images/portfolio/portfolio-02.jpg"
          >
            <div className="tmp-gallery icon-center">
              <div className="thumbnail">
                <img
                  className="radius-small"
                  src="/assets/main/images/portfolio/portfolio-02.jpg"
                  alt="Corporate Image"
                />
              </div>
              <div className="video-icon">
                <div className="btn-default rounded-player sm-size">
                  <span>
                    <i className="feather-zoom-in"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            href="/assets/main/images/portfolio/portfolio-03.jpg"
          >
            <div className="tmp-gallery icon-center">
              <div className="thumbnail">
                <img
                  className="radius-small"
                  src="/assets/main/images/portfolio/portfolio-03.jpg"
                  alt="Corporate Image"
                />
              </div>
              <div className="video-icon">
                <div className="btn-default rounded-player sm-size">
                  <span>
                    <i className="feather-zoom-in"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            href="/assets/main/images/portfolio/portfolio-04.jpg"
          >
            <div className="tmp-gallery icon-center">
              <div className="thumbnail">
                <img
                  className="radius-small"
                  src="/assets/main/images/portfolio/portfolio-04.jpg"
                  alt="Corporate Image"
                />
              </div>
              <div className="video-icon">
                <div className="btn-default rounded-player sm-size">
                  <span>
                    <i className="feather-zoom-in"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            href="/assets/main/images/portfolio/portfolio-05.jpg"
          >
            <div className="tmp-gallery icon-center">
              <div className="thumbnail">
                <img
                  className="radius-small"
                  src="/assets/main/images/portfolio/portfolio-05.jpg"
                  alt="Corporate Image"
                />
              </div>
              <div className="video-icon">
                <div className="btn-default rounded-player sm-size">
                  <span>
                    <i className="feather-zoom-in"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            href="/assets/main/images/portfolio/portfolio-06.jpg"
          >
            <div className="tmp-gallery icon-center">
              <div className="thumbnail">
                <img
                  className="radius-small"
                  src="/assets/main/images/portfolio/portfolio-06.jpg"
                  alt="Corporate Image"
                />
              </div>
              <div className="video-icon">
                <div className="btn-default rounded-player sm-size">
                  <span>
                    <i className="feather-zoom-in"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <ul className="social-icon social-default justify-content-start mt--30">
          <li>
            <a href="https://www.facebook.com/">
              <i className="feather-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="feather-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="feather-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkdin.com/">
              <i className="feather-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* sidebar desktop end */}
    </div>
  );
};

export default MainLayout;
