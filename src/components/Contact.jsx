function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Left Content */}
        <div className="contact-content">

          <p className="contact-tag">
            Get In Touch
          </p>

          <h2>
            Contact Us
          </h2>

          <p className="contact-text">
            Need professional tree care services? Our experienced team
            provides safe and reliable tree solutions for your property.
          </p>


          <div className="contact-info">

            <div className="contact-item">
              <h4>Phone</h4>
              <p>716-526-8741</p>
            </div>


            


            <div className="contact-item">
              <h4>Service Area</h4>
              <p>276 Baraga St, Buffalo</p>
            </div>

          </div>

        </div>


        {/* GHL Form */}
        <div className="contact-form-box">

          <iframe
            src="https://link.kdlead.com/widget/form/gJYzHh4WgtNTfwJkMdoK"
            id="inline-gJYzHh4WgtNTfwJkMdoK"
            title="Eco Pro Form"
            style={{
              width: "100%",
              height: "885px",
              border: "none",
              overflow: "hidden"
            }}
            scrolling="no"
          ></iframe>

        </div>


      </div>

    </section>
  );
}

export default Contact;