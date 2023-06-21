import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Giới thiệu</h5>
      <h2>Nhật Trường</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Kinh nghiệm</h5>
              <small>Các kiến thức được học ở trường</small>
            </article>

            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Kinh nghiệm</h5>
              <small>Các kiến thức được học ở trường</small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Project</h5>
              <small>2</small>
            </article>
          </div>
          <p>
            Kinh nghiệm ít nhưng có tinh thần học hỏi và cố gắng trong công
            việc, vui vẻ và nhanh hòa nhập với môi trường xung quanh.
          </p>

          <a href="#contact" className="btn btn-primary">
            Trò chuyện
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
