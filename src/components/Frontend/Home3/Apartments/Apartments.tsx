"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./apartments.module.css";

import img1 from "@/images/home3-slider1.png";
import img2 from "@/images/home3-slider2.png";
import img3 from "@/images/home3-slider3.png";

const Apartments = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideData = [
    {
      image: img1,
      title: "House",
      description: "3 Listings",
    },
    {
      image: img2,
      title: "Apartments",
      description: "3 Listings",
    },
    {
      image: img3,
      title: "Condos",
      description: "5 Listings",
    },
    {
      image: img1,
      title: "Duplexes",
      description: "7 Listings",
    },
    {
      image: img2,
      title: "Offices",
      description: "6 Listings",
    },
    {
      image: img3,
      title: "Buildings",
      description: "8 Listings",
    },
    {
      image: img1,
      title: "House",
      description: "3 Listings",
    },
    {
      image: img2,
      title: "Apartments",
      description: "3 Listings",
    },
    {
      image: img3,
      title: "Condos",
      description: "5 Listings",
    },
    {
      image: img1,
      title: "Duplexes",
      description: "7 Listings",
    },
    {
      image: img2,
      title: "Offices",
      description: "6 Listings",
    },
    {
      image: img3,
      title: "Buildings",
      description: "8 Listings",
    },
  ];

  return (
    <section className="ic_apartments">
      <div className={styles.ic_apartments_main}>
        <Slider ref={sliderRef} {...settings}>
          {slideData.map((item, index) => (
            <div key={index} className={styles.slideItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.slideImage}
                />
                <div className={styles.overlay}>
                  <h5 className={`h5_2 ${styles.overlayText}`}>{item.title}</h5>
                  <p className="body_s ic_fw_500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Apartments;
