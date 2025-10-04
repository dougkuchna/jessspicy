import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="footer-top-area">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                  <img src="../images/main-logo.png" alt="logo" />
                  <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <a href="mailto:">yourinfo@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="footer-bottom">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-md-4 col-sm-6">
              <div className="payment-method d-flex">
                <p>Payment options:</p>
                <div className="card-wrap ps-2">
                  <img src="../images/visa.jpg" alt="visa" />
                  <img src="../images/mastercard.jpg" alt="mastercard" />
                  <img src="../images/paypal.jpg" alt="paypal" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="copyright">
                <p>© {new Date().getFullYear()} Jess Spicy Stuff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
