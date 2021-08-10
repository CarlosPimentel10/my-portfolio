import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Mobile App Design",
      desc:
        "I have good mobile design skills, ready to deliver a good service to you. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",

      a: "https://www.figma.com/proto/rJnb39KhEdW6lVU6zlzPtS/ElectricityCalculatorApp?node-id=9%3A0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=9%3A0",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Web Design",
      desc:
        "You can find some of my projects of web design and development in the link below.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      a: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwifqaTc5ZzyAhV0QhUIHbFBDjcQFnoECAgQAw&url=http%3A%2F%2Fwww.pensartes.com%2F&usg=AOvVaw0Ps0hb4We8E60jdjJfnEyv",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "As web designer I have learnt top industry prototyping tools which I use to give you the best design experience for your brand and make a strong statement in the market.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.a} target="_blank" rel="noreferrer"><span>Project</span></a>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="550" height="450"
                  alt="mac computer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}