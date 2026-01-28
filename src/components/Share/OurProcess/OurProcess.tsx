import { Col, Row } from "antd";
import styles from "./our-process.module.css";
import processImg1 from "@/images/our-process-01.png";
import processImg2 from "@/images/our-process-02.png";
import processImg3 from "@/images/our-process-03.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProcess = () => {
  return (
    <section className="ic_section_space ic_background">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Our Process</p>
              <h2 className="ic_title ic_title_color ">
                We Make Process Simple
              </h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_our_process_wrap}>
          <Row
            gutter={[
              { lg: 24, md: 16, sm: 16, xs: 16 },
              { md: 16, sm: 16, xs: 16 },
            ]}
          >
            <Col lg={8} md={12} sm={24} xs={24} className="gutter-row">
              <div className={styles.ic_our_process_item}>
                <div className="ic_mb_20">
                  <Image src={processImg1} alt="processImg" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_title_color ic_mb_16">Buy a property</h4>
                  <p className="body_s ic_body_color ic_mb_20">
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <Link href="#" className="ic_btn ic_btn_md ic_btn_md_outline">
                    Browse Property
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8} md={12} sm={24} xs={24} className="gutter-row">
              <div className={styles.ic_our_process_item}>
                <div className="ic_mb_20">
                  <Image src={processImg2} alt="processImg" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_title_color ic_mb_16">Rent a Home</h4>
                  <p className="body_s ic_body_color ic_mb_20">
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <Link href="#" className="ic_btn ic_btn_md ic_btn_md_outline">
                    Find a home
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8} md={24} sm={24} xs={24} className="gutter-row">
              <div className={styles.ic_our_process_item}>
                <div className="ic_mb_20">
                  <Image src={processImg3} alt="processImg" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_title_color ic_mb_16">Sell a property</h4>
                  <p className="body_s ic_body_color ic_mb_20">
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <Link href="#" className="ic_btn ic_btn_md ic_btn_md_outline">
                    Find a home
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
