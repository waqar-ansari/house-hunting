"use client";
import React, { useRef } from "react";
import styles from "./banner.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "@/images/home-3-banner.png";
import img1 from "@/images/home3-slider1.png";
import img2 from "@/images/home3-slider2.png";
import img3 from "@/images/home3-slider3.png";

const Banner = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`ic_section_space ${styles.ic_banner} ic_home3_banner`}>
      <div className="ic_container">
        <div className={styles.ic_banner_main}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className={styles.ic_banner_left}>
                <Image src={img} alt="Banner" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className={styles.banner_content}>
                <h1 className={`ic_title_color ${styles.title}`}>
                  Find Your Dream House by us
                </h1>
                <p className={`ic_body_color ${styles.description}`}>
                  We are recognized for exceeding client expectations and
                  delivering <br /> great results through dedication, ease of
                  process,
                </p>
                <div className={`${styles.banner_btn} ic_mb_40`}>
                  <Link href="#" className="ic_btn ic_btn_xl">
                    Our Services
                  </Link>
                  <Link href="#" className="ic_btn ic_btn_xl">
                    Learn More
                  </Link>
                </div>

                <div className={styles.ic_slider}>
                  <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                      {[img1, img2, img3, img1, img2, img3].map(
                        (image, index) => (
                          <div key={index}>
                            <Image src={image} alt={`slide-${index + 1}`} />
                          </div>
                        )
                      )}
                    </Slider>
                  </div>

                  <div className={styles.ic_slider_custom_btn}>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Slide"
                      className={styles.ic_prev}
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Slide"
                      className={styles.ic_next}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.ic_banner_info}>
          <div className={styles.ic_info_item}>
            <h3 className="">1800+</h3>
            <p className="">Complete Projects</p>
          </div>
          <div className={styles.ic_info_item}>
            <h3 className="">250+</h3>
            <p className="">Experts Worker</p>
          </div>
          <div className={styles.ic_info_item}>
            <h3 className="">580+</h3>
            <p className="">LUXURY HOUSES</p>
          </div>
          <div className={styles.ic_info_item}>
            <h3 className="">126+</h3>
            <p className="">Award Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
