import treeTrimming from "../assets/images/tree_trimming.jpg";
import treeRemoval from "../assets/images/tree_removal.jpg";
import stumpGrinding from "../assets/images/stump_grinding.jpg";
import emergencyService from "../assets/images/emergency_service.jpg";


const SERVICES = [
  {
    image: treeRemoval,
    title: "Tree Removal",
    desc: "Safe, efficient removal of hazardous or unwanted trees of any size.",
  },
  {
    image: treeTrimming,
    title: "Tree Trimming",
    desc: "Shape and maintain healthy growth with precise crown trimming.",
  },
  {
    image: stumpGrinding,
    title: "Stump Grinding",
    desc: "Complete stump removal leaving your yard clean and ready to use.",
  },
  {
    image: emergencyService,
    title: "Emergency Service",
    desc: "24/7 rapid response for storm damage and fallen tree emergencies.",
  },
];


function Services() {
  return (
   <section id="services" className="services-section">
      <div className="section-inner">

        <p className="section-eyebrow">
          What we do
        </p>

        <h2 className="section-heading">
          Our Tree Care Services
        </h2>

        <p className="section-sub">
          From routine maintenance to emergency removals — we handle it all
          with certified expertise and care.
        </p>


        <div className="services-grid">

          {SERVICES.map((s) => (

            <div key={s.title} className="service-card">


              <div className="service-card__image">

                <img 
                  src={s.image}
                  alt={s.title}
                />

              </div>


              <h3 className="service-card__title">
                {s.title}
              </h3>


              <p className="service-card__desc">
                {s.desc}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}


export default Services;