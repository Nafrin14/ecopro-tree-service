import heroImg from "../assets/images/hero.webp";

function Hero() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior:"smooth"
    });
  };


  return (

    <section className="hero" id="home">

      <div className="hero-container">


        {/* Image Left */}

        <div className="hero-image-box">

          <img 
            src={heroImg}
            alt="EcoPro Tree Service"
          />

        </div>



        {/* Content Right */}

        <div className="hero-content">


          <p className="hero-small">
            Professional Tree Care Service
          </p>



          <h1>
            Expert Tree Care
            <br/>
            For A Safe &
            <span> Beautiful </span>
            Property
          </h1>



          <p className="hero-text">
            EcoPro Tree Service provides reliable tree removal,
            trimming and maintenance services to protect your
            property and keep your landscape beautiful.
          </p>



          <div className="hero-buttons">


            <button onClick={()=>scrollTo("contact")}>
              Get Free Estimate
            </button>


            <button 
              className="outline-btn"
              onClick={()=>scrollTo("services")}
            >
              Our Services
            </button>


          </div>


        </div>


      </div>

    </section>

  )

}


export default Hero;