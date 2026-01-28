"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
import img from "@/images/property-01.png";
import img1 from "@/images/avatar-01.png";
import { FiMapPin } from "react-icons/fi";
import { MdFullscreen } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 2,
    image: img,
    type: "for rent",
    location: "1234 Maple St. Austin",
    title: "Cozy Apartment Downtown",
    price: "$900.00",
    description:
      "A beautiful cozy apartment located in the heart of the city...",
    sqft: "1500 Sqft",
    beds: 3,
    baths: 2,
    avatar: img1,
    agentName: "Alice",
    agentEmail: "alice@gmail.com",
  },
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 1,
    image: img,
    type: "for rent",
    location: "6391 Elgin St. Celina",
    title: "Jacks Restaurant For Rent",
    price: "$750.00",
    description:
      "Here are two listings displayed with the featured property shortcode...",
    sqft: "2110 Sqft",
    beds: 2,
    baths: 1,
    avatar: img1,
    agentName: "Benjamin",
    agentEmail: "benjamin@gmail.com",
  },
  {
    id: 2,
    image: img,
    type: "for rent",
    location: "1234 Maple St. Austin",
    title: "Cozy Apartment Downtown",
    price: "$900.00",
    description:
      "A beautiful cozy apartment located in the heart of the city...",
    sqft: "1500 Sqft",
    beds: 3,
    baths: 2,
    avatar: img1,
    agentName: "Alice",
    agentEmail: "alice@gmail.com",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="ic_container">
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const isNext = index === (activeIndex + 1) % slides.length;

            return (
              <div
                key={slide.id}
                className={
                  isActive
                    ? styles.activeSlide
                    : isNext
                    ? styles.nextSlide
                    : styles.hiddenSlide
                }
              >
                <div className={styles.ic_rent_properties_item}>
                  <div className={styles.ic_rent_properties_left}>
                    <div className={styles.ic_properties_thumbnail}>
                      <Image
                        src={slide.image}
                        className="ic_img_fluid"
                        alt="property"
                      />
                    </div>
                  </div>

                  {isActive && (
                    <div className={styles.ic_rent_properties_right}>
                      <div className={styles.ic_properties_content}>
                        <div className={styles.ic_top_info}>
                          <span className={`${styles.ic_type} body_s`}>
                            {slide.type}
                          </span>
                          <p
                            className={`${styles.ic_location} body_s ic_title_color`}
                          >
                            <FiMapPin />
                            {slide.location}
                          </p>
                          <h5
                            className={`h5_2 ic_title_color ic_fw_600 ${styles.ic_title}`}
                          >
                            {slide.title}
                          </h5>
                          <h6 className="ic_fw_600 ic_primary_color">
                            {slide.price}
                          </h6>
                        </div>
                        <div className={styles.ic_description}>
                          <p className="body_s ic_body_color">
                            {slide.description}
                          </p>
                        </div>
                        <div className={styles.ic_info}>
                          <p className="body_s ic_title_color">
                            <MdFullscreen /> {slide.sqft}
                          </p>
                          <p className="body_s ic_title_color">
                            <FaBed /> {slide.beds} Beds
                          </p>
                          <p className="body_s ic_title_color">
                            <FaBath /> {slide.baths} Baths
                          </p>
                        </div>
                        <div className={styles.ic_properties_user}>
                          <div className={styles.ic_avatar}>
                            <Image
                              src={slide.avatar}
                              alt="avatar"
                              width={46}
                              height={46}
                            />
                          </div>
                          <div className={styles.ic_content}>
                            <p className="ic_fw_600 ic_title_color">
                              {slide.agentName}
                            </p>
                            <a
                              href={`mailto:${slide.agentEmail}`}
                              className="ic_secondary_color"
                            >
                              {slide.agentEmail}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button className={styles.prevButton} onClick={prevSlide}>
          ◀
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slider;
