function About() {

  const stats = [
    {
      value:"15+",
      label:"Years Experience"
    },
    {
      value:"2400+",
      label:"Trees Serviced"
    },
    {
      value:"98%",
      label:"Happy Clients"
    },
    {
      value:"24/7",
      label:"Emergency Support"
    }
  ];


  return (
    <section className="about-section" id="about">

      <div className="about-wrapper">

        <span className="about-tag">
          ABOUT ECOPRO TREE SERVICE
        </span>


        <h2>
          Professional Tree Care
          <br/>
          <span>You Can Depend On</span>
        </h2>


        <p className="about-description">
          EcoPro Tree Service provides reliable tree removal, trimming,
          stump grinding, and emergency tree care solutions. 
          Our experienced team focuses on safety, quality, and customer
          satisfaction for every project.
        </p>



        <div className="about-features">

          <div className="feature-card">
            <div className="feature-icon">
              ✓
            </div>

            <div>
              <h3>
                Certified Experts
              </h3>

              <p>
                Skilled professionals with years of tree care experience.
              </p>
            </div>

          </div>



          <div className="feature-card">

            <div className="feature-icon">
              ✓
            </div>

            <div>
              <h3>
                Safe Service
              </h3>

              <p>
                Advanced equipment and safety-first approach.
              </p>
            </div>

          </div>



          <div className="feature-card">

            <div className="feature-icon">
              ✓
            </div>

            <div>
              <h3>
                Affordable Price
              </h3>

              <p>
                Quality tree services with transparent pricing.
              </p>
            </div>

          </div>


        </div>



        <div className="about-stats">

          {
            stats.map((item)=>(
              <div className="stat-box" key={item.label}>

                <h3>
                  {item.value}
                </h3>

                <p>
                  {item.label}
                </p>

              </div>
            ))
          }

        </div>


      </div>

    </section>
  )
}


export default About;