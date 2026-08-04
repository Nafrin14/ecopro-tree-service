function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">


        {/* Company */}
        <div className="footer-column">

          <h3>
            EcoPro Tree Service
          </h3>

          <p>
            Professional tree care services keeping your property
            safe, healthy, and beautiful all year round.
          </p>

        </div>



        {/* Quick Links */}
        <div className="footer-column">

          <h4>
            Quick Links
          </h4>

          <ul>

            <li>
              <a href="/">
                Home
              </a>
            </li>

            <li>
              <a href="#about">
                About Us
              </a>
            </li>

            <li>
              <a href="#services">
                Services
              </a>
            </li>

            <li>
              <a href="#testimonials">
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>

          </ul>

        </div>



        {/* Services */}
        <div className="footer-column">

          <h4>
            Services
          </h4>

          <ul>

            <li>Tree Removal</li>

            <li>Tree Trimming</li>

            <li>Tree Pruning</li>

            <li>Stump Grinding</li>

            <li>Emergency Service</li>

          </ul>

        </div>



        {/* Contact */}
        <div className="footer-column">

          <h4>
            Contact Us
          </h4>

          <ul>

            <li>
              📍 276 Baraga St, Buffalo
            </li>

            <li>
              📞 716-526-8741
            </li>

            

            <li>
              🕒 Available 24/7
            </li>

          </ul>

        </div>


      </div>



      {/* Bottom Legal + Copyright */}
      <div className="footer-bottom">


        <div className="footer-legal">

          <a href="/privacy">
            Privacy Policy
          </a>

          <span>
            |
          </span>

          <a href="/terms">
            Terms & Conditions
          </a>

        </div>



        <p>
          © {currentYear} EcoPro Tree Service. All Rights Reserved.
        </p>


      </div>


    </footer>
  );
}


export default Footer;