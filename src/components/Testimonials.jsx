function Testimonials() {
  const reviews = [
    {
      quote: "EcoPro removed a 50-foot oak that was leaning over our roof. The crew was fast, safe, and left our yard spotless.",
      author: "Sarah M.",
      location: "Austin, TX",
      rating: 5,
    },
    {
      quote: "Best tree trimming service in the area. They shaped our trees beautifully and their pricing was completely transparent.",
      author: "David L.",
      location: "Round Rock, TX",
      rating: 5,
    },
    {
      quote: "Emergency storm cleanup done right. They showed up within two hours and handled a massive fallen branch effortlessly.",
      author: "Marcus K.",
      location: "Cedar Park, TX",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-inner">
        <p className="section-eyebrow">What clients say</p>
        <h2 className="section-heading">Trusted by Homeowners</h2>
        <p className="section-sub">
          Here is what our satisfied customers have to say about our work.
        </p>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars" aria-label={`${r.rating} out of 5 stars`}>
                {"★".repeat(r.rating)}
              </div>
              <blockquote className="testimonial-quote">"{r.quote}"</blockquote>
              <div className="testimonial-author">
                <strong>{r.author}</strong>
                <span>{r.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
