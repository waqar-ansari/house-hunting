"use client";
import { Col, Row } from "antd";
import styles from "./rentproperties.module.css";
import { FiMapPin } from "react-icons/fi";
import { MdFullscreen } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";
import Image from "next/image";
import avatarImg from "@/images/avater.png";
import rentalPropertiesImg1 from "@/images/rent-left.png";
import rentalPropertiesImg2 from "@/images/rent-right.png";
import Slider from "react-slick";

const RentProperties = () => {
  //   slider settings
  const sliderSettings = {
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="ic_section_space ic_rent_properties_slider">
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
            <div>
              <Row gutter={24}>
                <Col lg={18}>
                  <div className={styles.ic_rent_properties_item}>
                    <div className={styles.ic_rent_properties_left}>
                      <div className={styles.ic_properties_thumbnail}>
                        <Image
                          src={rentalPropertiesImg1}
                          className="ic_img_fluid"
                          alt="property"
                        />
                      </div>
                    </div>
                    <div className={styles.ic_rent_properties_right}>
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
                          <h6 className="ic_fw_600 ic_primary_color">
                            $750.00
                          </h6>
                        </div>
                        <div className={styles.ic_description}>
                          <p className="body_s ic_body_color">
                            Here are two listings displayed with the featured
                            property shortcode, which you can use when you have
                            some special properties to present...
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
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    className={`${styles.ic_rent_item_right_img} ic_flex_center`}
                  >
                    <Image src={rentalPropertiesImg2} alt="img" />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={18}>
                  <div className={styles.ic_rent_properties_item}>
                    <div className={styles.ic_rent_properties_left}>
                      <div className={styles.ic_properties_thumbnail}>
                        <Image
                          src={rentalPropertiesImg1}
                          className="ic_img_fluid"
                          alt="property"
                        />
                      </div>
                    </div>
                    <div className={styles.ic_rent_properties_right}>
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
                          <h6 className="ic_fw_600 ic_primary_color">
                            $750.00
                          </h6>
                        </div>
                        <div className={styles.ic_description}>
                          <p className="body_s ic_body_color">
                            Here are two listings displayed with the featured
                            property shortcode, which you can use when you have
                            some special properties to present...
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
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    className={`${styles.ic_rent_item_right_img} ic_flex_center`}
                  >
                    <Image src={rentalPropertiesImg2} alt="img" />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={18}>
                  <div className={styles.ic_rent_properties_item}>
                    <div className={styles.ic_rent_properties_left}>
                      <div className={styles.ic_properties_thumbnail}>
                        <Image
                          src={rentalPropertiesImg1}
                          className="ic_img_fluid"
                          alt="property"
                        />
                      </div>
                    </div>
                    <div className={styles.ic_rent_properties_right}>
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
                          <h6 className="ic_fw_600 ic_primary_color">
                            $750.00
                          </h6>
                        </div>
                        <div className={styles.ic_description}>
                          <p className="body_s ic_body_color">
                            Here are two listings displayed with the featured
                            property shortcode, which you can use when you have
                            some special properties to present...
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
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    className={`${styles.ic_rent_item_right_img} ic_flex_center`}
                  >
                    <Image src={rentalPropertiesImg2} alt="img" />
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

export default RentProperties;
