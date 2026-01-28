"use client";
import React from "react";
import partnerLogo1 from "@/images/partner-logo-01.png";
import partnerLogo2 from "@/images/partner-logo-02.png";
import partnerLogo3 from "@/images/partner-logo-03.png";
import partnerLogo4 from "@/images/partner-logo-04.png";
import partnerLogo5 from "@/images/partner-logo-05.png";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./partner.module.css";

const Partner = () => {
  //slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="ic_section_space_bottom">
      <div className="ic_container">
        <Slider {...sliderSettings} className={styles.ic_partner_logo}>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo1} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo2} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo3} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo4} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo5} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo1} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
          <div>
            <div className={styles.ic_partner_logo}>
              <Image src={partnerLogo2} className="ic_img_fluid" alt="logo" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Partner;
