import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c3b2irk",
      "template_sr26qqg",
      form.current,
      "vDeiUvIuurd--Zwt4"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Liên Lạc</h5>
      <h2>Trò chuyện với tôi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vnntruong1510@gmail.com</h5>
            <a
              href="mailto:vnntruong1510@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Gửi tin nhắn
            </a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <a
              href="https://www.facebook.com/nhatruongne/"
              target="_blank"
              rel="noreferrer"
            >
              Gửi tin nhắn
            </a>
          </article>

          <article className="contact__option">
            <FaInstagramSquare className="contact__option-icon" />
            <h4>Instagram</h4>
            <a
              href="https://www.instagram.com/ntruong1510/"
              target="_blank"
              rel="noreferrer"
            >
              Gửi tin nhắn
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Tên của bạn" required />
          <input
            type="email"
            name="name"
            placeholder="Email của bạn"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Tin nhắn"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Gửi tin nhắn
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
