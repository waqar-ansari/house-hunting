"use client";
import { Col, Row } from "antd";
import styles from "./rental-properties.module.css";
import { FiMapPin } from "react-icons/fi";
import { MdFullscreen } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";
import Image from "next/image";
import avatarImg from "@/images/avater.png";
import rentalPropertiesImg1 from "@/images/rental-properties.png";
import rentalPropertiesImg2 from "@/images/rental-properties-02.png";
import Slider from "react-slick";

const RentalProperties = () => {
  //slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col lg={12}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">For Rent</p>
              <h2 className="ic_title ic_title_color ">Rental Properties</h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_rental_properties_slider_wrap}>
          <Slider {...sliderSettings}>
            <div className={styles.ic_rental_properties_item}>
              <Row align={"middle"}>
                <Col xl={12} lg={8} md={11} sm={24} xs={24}>
                  <div className={styles.ic_properties_thumbnail}>
                    <Image
                      src={rentalPropertiesImg1}
                      className="ic_img_fluid"
                      alt="property"
                    />
                  </div>
                </Col>
                <Col xl={12} lg={16} md={13} sm={24} xs={24}>
                  <div className={styles.ic_properties_content}>
                    <div className={styles.ic_top_info}>
                      <span className={`${styles.ic_type} body_s `}>
                        for rent
                      </span>
                      <p
                        className={`${styles.ic_location} body_s ic_title_color`}
                      >
                        <FiMapPin />
                        6391 Elgin St. Celina
                      </p>
                      <h5
                        className={`h5_2 ic_title_color ic_fw_600 ${styles.ic_title}`}
                      >
                        Jacks Restaurant For rent
                      </h5>
                      <h6 className="ic_fw_600 ic_primary_color">$750.00</h6>
                    </div>
                    <div className={styles.ic_description}>
                      <p className="body_s ic_body_color">
                        Here are two listings displayed with the featured
                        property shortcode, which you can use when you have some
                        special properties to present...
                      </p>
                    </div>
                    <div className={styles.ic_info}>
                      <p className="body_s ic_title_color">
                        <MdFullscreen />
                        2110 Sqft
                      </p>
                      <p className="body_s ic_title_color">
                        <FaBed />2 Beds
                      </p>
                      <p className="body_s ic_title_color">
                        <FaBath />1 Baths
                      </p>
                    </div>
                    <div className={styles.ic_properties_user}>
                      <div className={styles.ic_avatar}>
                        <Image
                          src={avatarImg}
                          alt="avatar"
                          width={46}
                          height={46}
                        />
                      </div>
                      <div className={styles.ic_content}>
                        <p className="ic_fw_600 ic_title_color">Benjamin</p>
                        <a
                          href="mailto:benjamin@gmail.com"
                          className="ic_secondary_color"
                        >
                          benjamin@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.ic_rental_properties_item}>
              <Row align={"middle"}>
                <Col xl={12} lg={8} md={11} sm={24} xs={24}>
                  <div className={styles.ic_properties_thumbnail}>
                    <Image
                      src={rentalPropertiesImg2}
                      className="ic_img_fluid"
                      alt="property"
                    />
                  </div>
                </Col>
                <Col xl={12} lg={16} md={13} sm={24} xs={24}>
                  <div className={styles.ic_properties_content}>
                    <div className={styles.ic_top_info}>
                      <span className={`${styles.ic_type} body_s `}>
                        for rent
                      </span>
                      <p
                        className={`${styles.ic_location} body_s ic_title_color`}
                      >
                        <FiMapPin />
                        6391 Elgin St. Celina
                      </p>
                      <h5
                        className={`h5_2 ic_title_color ic_fw_600 ${styles.ic_title}`}
                      >
                        Gorgeous Apartment
                      </h5>
                      <h6 className="ic_fw_600 ic_primary_color">$750.00</h6>
                    </div>
                    <div className={styles.ic_description}>
                      <p className="body_s ic_body_color">
                        Here are two listings displayed with the featured
                        property shortcode, which you can use when you have some
                        special properties to present...
                      </p>
                    </div>
                    <div className={styles.ic_info}>
                      <p className="body_s ic_title_color">
                        <MdFullscreen />
                        2110 Sqft
                      </p>
                      <p className="body_s ic_title_color">
                        <FaBed />2 Beds
                      </p>
                      <p className="body_s ic_title_color">
                        <FaBath />1 Baths
                      </p>
                    </div>
                    <div className={styles.ic_properties_user}>
                      <div className={styles.ic_avatar}>
                        <Image
                          src={avatarImg}
                          alt="avatar"
                          width={46}
                          height={46}
                        />
                      </div>
                      <div className={styles.ic_content}>
                        <p className="ic_fw_600 ic_title_color">Benjamin</p>
                        <a
                          href="mailto:benjamin@gmail.com"
                          className="ic_secondary_color"
                        >
                          benjamin@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RentalProperties;
