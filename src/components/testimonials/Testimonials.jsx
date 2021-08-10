import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Abraham Sylvester",
      title: "Software Engineer",
      img:
        "/assets/abraham_sylvester.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "I have worked on some projects with Carlos and he has proven to be: a very creative, dedicated and hardworker designer and web developer.",
    },
    {
      id: 2,
      name: "Carla Pascoal",
      title: "Mining Engineer | Entrepreneur",
      img:
        "assets/carla_pascoal.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "I have had the opportunity to work with Carlos, as he made a wordpress for my geosciences women association, as well as, quality graphic design for my business page. ",
      featured: true,
    },
    {
      id: 3,
      name: "EPIE PROMISE NGOLEPIE",
      title: "Founder/CEO at Hefarcam",
      img:
        "assets/epie_promise.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "After working with Carlos, I would always comeback to him for his great creativity both in web design and software development as a whole. Very good work ethics and delivered more than I expected!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}