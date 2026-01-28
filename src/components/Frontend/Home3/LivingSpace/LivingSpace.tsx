"use client";
import React, { useState } from "react";
import styles from "./livingspace.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import sketchImg from "@/images/sketch-property.png";
import Link from "next/link";

const LivingSpace = () => {
  const [apartmentTab, setApartmentTab] = useState<string>("deluxePortion");
  const handleTab = (tab: string): void => {
    setApartmentTab(tab);
  };
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <div className={styles.ic_living_space_main}>
          <Row gutter={24} align="middle">
            <Col lg={12}>
              <div
                className={`ic_sec_heading ${styles.ic_living_space_header_left}`}
              >
                <p className="ic_sub_title">Apartment Sketch</p>
                <h2 className="ic_title ic_title_color ">
                  Explore Our Beautiful Living Spaces
                </h2>
                <p className="ic_des ic_body_color">
                  Highlight the best of your properties by using the List
                  Category shortcode.
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${styles.ic_apartment_sketch_tab} ic_mb_40`}>
                <button
                  onClick={() => handleTab("deluxePortion")}
                  className={
                    apartmentTab === "deluxePortion" ? styles.active : ""
                  }
                >
                  Deluxe Portion
                </button>
                <button
                  onClick={() => handleTab("penthouse")}
                  className={apartmentTab === "penthouse" ? styles.active : ""}
                >
                  Penthouse
                </button>
                <button
                  onClick={() => handleTab("garden")}
                  className={apartmentTab === "garden" ? styles.active : ""}
                >
                  Top Garden
                </button>
                <button
                  onClick={() => handleTab("doubleHeight")}
                  className={
                    apartmentTab === "doubleHeight" ? styles.active : ""
                  }
                >
                  Double Height
                </button>
                <button
                  onClick={() => handleTab("studio")}
                  className={apartmentTab === "studio" ? styles.active : ""}
                >
                  The Studio
                </button>
              </div>
            </Col>
          </Row>
          {apartmentTab === "deluxePortion" && (
            <div className={styles.ic_apartment_sketch_tab_content}>
              <Row
                justify={"space-between"}
                gutter={[{ lg: 24 }, { lg: 24 }]}
                align={"middle"}
              >
                <Col lg={12}>
                  <div className={styles.ic_left_content}>
                    <div className={`${styles.ic_title} ic_mb_30`}>
                      <h4 className="ic_title_color ic_mb_16">
                        Deluxe Portion
                      </h4>
                      <p className="ic_body_color">
                        Quisque ultricies eros vel laoreet malesuada. Phasellus
                        aliquam augue elit, nec porttitor purus fringilla ac.
                        Suspendisse ac ex pharetra, semper orci at, porttitor
                        purus. Duis fringilla dolor ut ante sagittis
                        condimentum.
                      </p>
                    </div>
                    <div className={`${styles.ic_info_box} ic_mb_40`}>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Total Area
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          2400 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bedroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          140 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bathroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          40 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Belcony
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          Allowed
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500 ${styles.ic_left_text}`}>
                          Lounge
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          650 Sq.ft
                        </p>
                      </div>
                    </div>
                    <div className={styles.ic_living_space_btn}>
                      <Link href="#" className="ic_btn ic_btn_xl">
                        Find Properties
                      </Link>
                      <div className={styles.ic_price_main}>
                        <span className="ic_fw_500">Price : </span>
                        <span className={styles.ic_price}>$2,269.00</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={10}>
                  <div className={styles.ic_sketch_img}>
                    <Image
                      src={sketchImg}
                      className="ic_img_fluid"
                      alt="sketch"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}
          {apartmentTab === "penthouse" && (
            <div className={styles.ic_apartment_sketch_tab_content}>
              <Row
                justify={"space-between"}
                gutter={[{ lg: 24 }, { lg: 24 }]}
                align={"middle"}
              >
                <Col lg={12}>
                  <div className={styles.ic_left_content}>
                    <div className={`${styles.ic_title} ic_mb_30`}>
                      <h4 className="ic_title_color ic_mb_16">Penthouse</h4>
                      <p className="ic_body_color">
                        Quisque ultricies eros vel laoreet malesuada. Phasellus
                        aliquam augue elit, nec porttitor purus fringilla ac.
                        Suspendisse ac ex pharetra, semper orci at, porttitor
                        purus. Duis fringilla dolor ut ante sagittis
                        condimentum.
                      </p>
                    </div>
                    <div className={`${styles.ic_info_box} ic_mb_40`}>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Total Area
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          2400 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bedroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          140 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bathroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          40 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Belcony
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          Allowed
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500 ${styles.ic_left_text}`}>
                          Lounge
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          650 Sq.ft
                        </p>
                      </div>
                    </div>
                    <div className={styles.ic_living_space_btn}>
                      <Link href="#" className="ic_btn ic_btn_xl">
                        Find Properties
                      </Link>
                      <div className={styles.ic_price_main}>
                        <span className="ic_fw_500">Price : </span>
                        <span className={styles.ic_price}>$2,269.00</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={10}>
                  <div className={styles.ic_sketch_img}>
                    <Image
                      src={sketchImg}
                      className="ic_img_fluid"
                      alt="sketch"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}
          {apartmentTab === "garden" && (
            <div className={styles.ic_apartment_sketch_tab_content}>
              <Row
                justify={"space-between"}
                gutter={[{ lg: 24 }, { lg: 24 }]}
                align={"middle"}
              >
                <Col lg={12}>
                  <div className={styles.ic_left_content}>
                    <div className={`${styles.ic_title} ic_mb_30`}>
                      <h4 className="ic_title_color ic_mb_16">Top Garden</h4>
                      <p className="ic_body_color">
                        Quisque ultricies eros vel laoreet malesuada. Phasellus
                        aliquam augue elit, nec porttitor purus fringilla ac.
                        Suspendisse ac ex pharetra, semper orci at, porttitor
                        purus. Duis fringilla dolor ut ante sagittis
                        condimentum.
                      </p>
                    </div>
                    <div className={`${styles.ic_info_box} ic_mb_40`}>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Total Area
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          2400 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bedroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          140 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bathroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          40 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Belcony
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          Allowed
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500 ${styles.ic_left_text}`}>
                          Lounge
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          650 Sq.ft
                        </p>
                      </div>
                    </div>
                    <div className={styles.ic_living_space_btn}>
                      <Link href="#" className="ic_btn ic_btn_xl">
                        Find Properties
                      </Link>
                      <div className={styles.ic_price_main}>
                        <span className="ic_fw_500">Price : </span>
                        <span className={styles.ic_price}>$2,269.00</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={10}>
                  <div className={styles.ic_sketch_img}>
                    <Image
                      src={sketchImg}
                      className="ic_img_fluid"
                      alt="sketch"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}
          {apartmentTab === "doubleHeight" && (
            <div className={styles.ic_apartment_sketch_tab_content}>
              <Row
                justify={"space-between"}
                gutter={[{ lg: 24 }, { lg: 24 }]}
                align={"middle"}
              >
                <Col lg={12}>
                  <div className={styles.ic_left_content}>
                    <div className={`${styles.ic_title} ic_mb_30`}>
                      <h4 className="ic_title_color ic_mb_16">Double Height</h4>
                      <p className="ic_body_color">
                        Quisque ultricies eros vel laoreet malesuada. Phasellus
                        aliquam augue elit, nec porttitor purus fringilla ac.
                        Suspendisse ac ex pharetra, semper orci at, porttitor
                        purus. Duis fringilla dolor ut ante sagittis
                        condimentum.
                      </p>
                    </div>
                    <div className={`${styles.ic_info_box} ic_mb_40`}>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Total Area
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          2400 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bedroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          140 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bathroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          40 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Belcony
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          Allowed
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500 ${styles.ic_left_text}`}>
                          Lounge
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          650 Sq.ft
                        </p>
                      </div>
                    </div>
                    <div className={styles.ic_living_space_btn}>
                      <Link href="#" className="ic_btn ic_btn_xl">
                        Find Properties
                      </Link>
                      <div className={styles.ic_price_main}>
                        <span className="ic_fw_500">Price : </span>
                        <span className={styles.ic_price}>$2,269.00</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={10}>
                  <div className={styles.ic_sketch_img}>
                    <Image
                      src={sketchImg}
                      className="ic_img_fluid"
                      alt="sketch"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}
          {apartmentTab === "studio" && (
            <div className={styles.ic_apartment_sketch_tab_content}>
              <Row
                justify={"space-between"}
                gutter={[{ lg: 24 }, { lg: 24 }]}
                align={"middle"}
              >
                <Col lg={12}>
                  <div className={styles.ic_left_content}>
                    <div className={`${styles.ic_title} ic_mb_30`}>
                      <h4 className="ic_title_color ic_mb_16">The Studio</h4>
                      <p className="ic_body_color">
                        Quisque ultricies eros vel laoreet malesuada. Phasellus
                        aliquam augue elit, nec porttitor purus fringilla ac.
                        Suspendisse ac ex pharetra, semper orci at, porttitor
                        purus. Duis fringilla dolor ut ante sagittis
                        condimentum.
                      </p>
                    </div>
                    <div className={`${styles.ic_info_box} ic_mb_40`}>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Total Area
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          2400 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bedroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          140 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Bathroom
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          40 Sq.ft
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500  ${styles.ic_left_text}`}>
                          Belcony
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          Allowed
                        </p>
                      </div>
                      <div className={styles.ic_item}>
                        <p className={`ic_fw_500 ${styles.ic_left_text}`}>
                          Lounge
                        </p>
                        <span className={styles.ic_line}></span>
                        <p className={`ic_fw_500  ${styles.ic_right_text}`}>
                          650 Sq.ft
                        </p>
                      </div>
                    </div>
                    <div className={styles.ic_living_space_btn}>
                      <Link href="#" className="ic_btn ic_btn_xl">
                        Find Properties
                      </Link>
                      <div className={styles.ic_price_main}>
                        <span className="ic_fw_500">Price : </span>
                        <span className={styles.ic_price}>$2,269.00</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={10}>
                  <div className={styles.ic_sketch_img}>
                    <Image
                      src={sketchImg}
                      className="ic_img_fluid"
                      alt="sketch"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LivingSpace;
