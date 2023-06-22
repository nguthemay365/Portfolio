import React from "react";
import "./services.css";
import { BsCheckAll } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>Một số điều khác</h5>
      <h2>Về tôi</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Pen & Paper</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Font Awesome</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Design</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Github</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Codekit</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Terminal</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Github</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mentor</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Các dự án tự thực hiện</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Kinh nghiệm tự đúc kết</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Các dự án tự thực hiện</p>
            </li>
            <li>
              <BsCheckAll className="service__list-icon" />
              <p>Các dự án tự thực hiện</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
