import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Nhat Truong",
    review: "Dễ dàng sử dụng, giao diện thân thiện.",
  },
  {
    avatar: AVT2,
    name: "Nhat Truong",
    review: "Dễ dàng sử dụng, giao diện thân thiện.",
  },
  {
    avatar: AVT3,
    name: "Nhat Truong",
    review: "Dễ dàng sử dụng, giao diện thân thiện.",
  },
  {
    avatar: AVT4,
    name: "Nhat Truong",
    review: "Dễ dàng sử dụng, giao diện thân thiện.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Đánh giá của người sử dụng</h5>
      <h2>Đánh giá</h2>

      <Swiper
        className="container testimonials__container"
        modules={Pagination}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="review" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
