const Footer = () => {
  return (
    <footer className="tmp-footer footer-style-default variation-two position-relative">
      <div className="footer-top pt--0">
        <div className="container pb--80">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-message-and-form">
                <p className="colophon">
                  Corpox is powered by{" "}
                  <a
                    target="_blank"
                    href="https://themeforest.net/user/inversweb"
                  >
                    InversWeb
                  </a>
                  .
                </p>
                <div className="footer-form-wrap">
                  <h4>
                    Keep up to date on <a href="#">InversWeb</a>
                  </h4>

                  <p>with our hand-crafted newsletter</p>

                  <form id="#" action="#">
                    <div className="input-group tmponhover">
                      <input type="email" placeholder="Email Here" required />
                    </div>
                    <button className="tmp-btn btn-primary">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <div className="logo">
                  <a href="index.html">
                    <img
                      className="logo-light"
                      src="assets/images/logo/logo.png"
                      alt="Corporate Logo"
                    />
                    <img
                      className="logo-dark"
                      src="assets/images/logo/logo-dark.png"
                      alt="Corporate Logo"
                    />
                  </a>
                </div>
                <p className="subtitle mt--30">
                  If you want to create a corporate template you can purshace
                  now our Corpex template.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <h4 className="title">Company</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <a href="pricing-white.html">Pricing</a>
                    </li>
                    <li>
                      <a href="tab-white.html">Tab Styles</a>
                    </li>
                    <li>
                      <a href="service-white.html">Service</a>
                    </li>
                    <li>
                      <a href="social-share-white.html">Social</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <h4 className="title">Resources</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <a href="team-white.html">Team</a>
                    </li>
                    <li>
                      <a href="testimonial-white.html">Testimonial</a>
                    </li>
                    <li>
                      <a href="service-white.html">Service</a>
                    </li>
                    <li>
                      <a href="timeline-white.html">Timeline</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="tmp-footer-widget">
                <h4 className="title">Stay With Us.</h4>
                <div className="inner">
                  <h6 className="subtitle">
                    10000+ trusted clients are subscribe Us around the world
                  </h6>
                  <ul className="social-icon social-default justify-content-start">
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
              </div>
            </div>
          </div>
        </div>
        <div className="bg-line-animatoin-area-global"></div>
      </div>
      {/*   Start Copy Right Area   */}
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <a href="privacy-policy-white.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms And Condition</a>
                  </li>
                  <li>
                    <a href="contact-white.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text">
                  All Right © Corpox <span id="year"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   End Copy Right Area   */}
      <div className="shape-area wow move-right" data-wow-offset="250">
        <img src="assets/images/shape/02.png" alt="consulting_business" />
      </div>
    </footer>
  );
};

export default Footer;
