import { Col, Row } from "antd";
import React from "react";
import styles from "./category.module.css";
import categoryImg1 from "@/images/category-01.png";
import categoryImg2 from "@/images/category-02.png";
import categoryImg3 from "@/images/category-03.png";
import categoryImg4 from "@/images/category-04.png";
import categoryImg5 from "@/images/category-05.png";
import categoryImg6 from "@/images/category-06.png";
import categoryImg7 from "@/images/category-07.png";
import categoryImg8 from "@/images/category-08.png";
import Image from "next/image";

const Category = () => {
  return (
    <section className={`ic_section_space ${styles.ic_category_area}`}>
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Category</p>
              <h2 className="ic_title ic_title_color ">Choose Your Category</h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode. You can list specific properties categories, types,
                cities, areas.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[
            { lg: 24, md: 20, sm: 16, xs: 16 },
            { lg: 24, md: 20, sm: 16, xs: 16 },
          ]}
        >
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg1} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">House</h5>
                  <p className="ic_white_color">2 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg2} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Apartments</h5>
                  <p className="ic_white_color">3 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg3} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Condos</h5>
                  <p className="ic_white_color">5 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg4} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Duplexes</h5>
                  <p className="ic_white_color">7 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg5} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Offices</h5>
                  <p className="ic_white_color">6 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg6} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Villas</h5>
                  <p className="ic_white_color">10 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg7} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Buildings</h5>
                  <p className="ic_white_color">11 Listings</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <div className={styles.ic_category_item}>
              <div className={styles.ic_category_thumbnail}>
                <Image src={categoryImg8} alt="RealtyClan" />
                <div className={styles.ic_category_content}>
                  <h5 className="ic_white_color">Family</h5>
                  <p className="ic_white_color">2 Listings</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Category;
