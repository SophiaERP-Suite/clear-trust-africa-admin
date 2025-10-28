import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <div className="active-light-mode">
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 "
          />
          <meta name="theme-style-mode" content="1 " />

          <title>Alpha Check</title>
          {/* Favicon */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/main/images/favicon.png "
          />

          {/* google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com/ " />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap"
            rel="stylesheet "
          />

          {/* google fonts end*/}
        </Helmet>

        <Header />

        <main className="page-wrapper">
          <Outlet />
        </main>

        <Footer />

        <div id="buy-now" className="show-on-scroll">
          <a
            className="btn-buy"
            href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866"
            target="_blank"
          >
            Buy on{" "}
            <img
              src="/assets/main/main/images/demo/envato.png"
              className=""
              alt=""
            />
          </a>
        </div>

        <div className="tmp-search-input-area">
          <div className="container">
            <div className="search-input-inner">
              <form action="#" className="input-div tmponhover">
                <input
                  id="searchInput1"
                  className="search-input"
                  type="text"
                  placeholder="🔎 Search products, topics, or #tags"
                  required
                />
                <button>
                  {/* <img src="/assets/main/main/images/icons/search.svg" alt="" /> */}
                  <i className="feather-search"></i>
                </button>
              </form>
              <div className="popular-keyword">
                <h4 className="title">Popular Tag :</h4>
                <div className="tag-wrapper">
                  <a
                    className="tmp-btn btn-border btn-small radius-round"
                    href="#"
                  >
                    Service
                  </a>
                  <a
                    className="tmp-btn btn-border btn-small radius-round"
                    href="#"
                  >
                    Business
                  </a>
                  <a
                    className="tmp-btn btn-border btn-small radius-round"
                    href="#"
                  >
                    Consultancy
                  </a>
                </div>
              </div>
              <div className="row g-5 service-wrapper mt--10 mt_md--10 mt_sm--0">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 sal-animate">
                  <div
                    className="card-box card-style-1 text-left tmponhover"
                    // @ts-expect-error/style
                    style={{ "--x": "270px", "--y": "7px" }}
                  >
                    <div className="inner">
                      <div className="image">
                        <a href="#">
                          <img
                            src="/assets/main/main/images/services/serviice-01.jpg"
                            alt="card Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title mb--20">
                          <a href="#">Awarded Design</a>
                        </h4>
                        <div className="discover-btn">
                          <a
                            className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">See More</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 sal-animate">
                  <div
                    className="card-box card-style-1 text-left tmponhover"
                    // @ts-expect-error/style
                    style={{ "--x": "12px", "--y": "31px" }}
                  >
                    <div className="inner">
                      <div className="image">
                        <a href="#">
                          <img
                            src="/assets/main/main/images/services/serviice-02.jpg"
                            alt="card Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title mb--20">
                          <a href="#">Design &amp; Creative</a>
                        </h4>
                        <div className="discover-btn">
                          <a
                            className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">See More</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 sal-animate">
                  <div
                    className="card-box card-style-1 text-left tmponhover"
                    // @ts-expect-error/style
                    style={{ "--x": "15px", "--y": "99px" }}
                  >
                    <div className="inner">
                      <div className="image">
                        <a href="#">
                          <img
                            src="/assets/main/main/images/services/serviice-03.jpg"
                            alt="card Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title mb--20">
                          <a href="#">App Development</a>
                        </h4>
                        <div className="discover-btn">
                          <a
                            className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">See More</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 sal-animate">
                  <div
                    className="card-box card-style-1 text-left tmponhover"
                    // @ts-expect-error/style
                    style={{ "--x": "15px", "--y": "99px" }}
                  >
                    <div className="inner">
                      <div className="image">
                        <a href="#">
                          <img
                            src="/assets/main/main/images/services/serviice-04.jpg"
                            alt="card Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title mb--20">
                          <a href="#">UI/UX Design</a>
                        </h4>
                        <div className="discover-btn">
                          <a
                            className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">See More</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="close" className="search-close-icon tmponhover">
            <img src="/assets/main/main/images/icons/close.png" alt="" />
          </div>
          <div className="bg-text">consultancy</div>
        </div>

        <div className="scrollbar-v show-on-scroll"></div>
        <div className="float-text show-on-scroll">
          <span>
            <a href="#">Scroll to top</a>
          </span>
        </div>

        {/* sidebar desktop */}
        <div className="inverweb-side-bar-close">
          <div className="shape-right-top">
            <img src="/assets/main/main/images/banner/shape-it-1.svg" alt="" />
          </div>
          <button className="close-icon-menu tmponhover">
            <i className="feather-x"></i>
          </button>
          <div className="logo-side">
            <a href="index.html">
              <img
                className="logo-light"
                src="/assets/main/main/images/logo/logo.png"
                alt="Corporate Logo"
              />
              <img
                className="logo-dark"
                src="/assets/main/main/images/logo/logo-dark.png"
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
              href="/assets/main/main/images/portfolio/portfolio-01.jpg"
            >
              <div className="tmp-gallery icon-center">
                <div className="thumbnail">
                  <img
                    className="radius-small"
                    src="/assets/main/main/images/portfolio/portfolio-01.jpg"
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
              href="/assets/main/main/images/portfolio/portfolio-02.jpg"
            >
              <div className="tmp-gallery icon-center">
                <div className="thumbnail">
                  <img
                    className="radius-small"
                    src="/assets/main/main/images/portfolio/portfolio-02.jpg"
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
              href="/assets/main/main/images/portfolio/portfolio-03.jpg"
            >
              <div className="tmp-gallery icon-center">
                <div className="thumbnail">
                  <img
                    className="radius-small"
                    src="/assets/main/main/images/portfolio/portfolio-03.jpg"
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
              href="/assets/main/main/images/portfolio/portfolio-04.jpg"
            >
              <div className="tmp-gallery icon-center">
                <div className="thumbnail">
                  <img
                    className="radius-small"
                    src="/assets/main/main/images/portfolio/portfolio-04.jpg"
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
              href="/assets/main/main/images/portfolio/portfolio-05.jpg"
            >
              <div className="tmp-gallery icon-center">
                <div className="thumbnail">
                  <img
                    className="radius-small"
                    src="/assets/main/main/images/portfolio/portfolio-05.jpg"
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
              href="/assets/main/main/images/portfolio/portfolio-06.jpg"
            >
              <div className="tmp-gallery icon-center">
                <div className="thumbnail">
                  <img
                    className="radius-small"
                    src="/assets/main/main/images/portfolio/portfolio-06.jpg"
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

        {/* JS
============================================ */}
        <script src="../assets/main/js/vendor/jquery.min.js" defer></script>
        <script src="../assets/main/js/vendor/bootstrap.min.js" defer></script>
        <script src="../assets/main/js/vendor/waypoint.min.js" defer></script>
        <script src="../assets/main/js/vendor/wow.min.js" defer></script>

        <script src="../assets/main/js/vendor/feather.min.js" defer></script>
        <script src="../assets/main/js/vendor/sal.min.js" defer></script>

        {/* gsap animation start */}
        <script src="../assets/main/js/plugins/gsap.js" defer></script>
        <script src="../assets/main/js/plugins/scrolltigger.js" defer></script>
        <script src="../assets/main/js/plugins/splittext.js" defer></script>
        {/* gsap animation end */}

        <script src="../assets/main/js/vendor/masonry.js" defer></script>
        <script src="../assets/main/js/vendor/imageloaded.js" defer></script>
        <script src="../assets/main/js/vendor/magnify.min.js" defer></script>
        <script src="../assets/main/js/vendor/lightbox.js" defer></script>
        <script src="../assets/main/js/vendor/slick.min.js" defer></script>
        <script src="../assets/main/js/vendor/easypie.js" defer></script>
        <script src="../assets/main/js/vendor/text-type.js" defer></script>
        <script
          src="../assets/main/js/vendor/jquery-one-page-nav.js"
          defer
        ></script>

        <script src="../assets/main/js/plugins/smoothscroll.js" defer></script>

        <script src="../assets/main/js/plugins/odometer.js" defer></script>

        <script src="../assets/main/js/plugins/jaralax.js" defer></script>
        <script
          src="../assets/main/js/plugins/scroll-elements.js"
          defer
        ></script>

        {/* Main JS */}
        <script src="../assets/main/js/main.js" defer></script>
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
