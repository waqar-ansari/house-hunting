import { Col, Row } from "antd";
import styles from "./banner.module.css";
import Link from "next/link";
import bannerImg from "@/images/banner-2.png";
import Image from "next/image";
import Search from "../../Home/Banner/Search";

const Banner = () => {
  return (
    <div className={styles.banner_area}>
      <div className={styles.banner_img}>
        <Image src={bannerImg} alt="RealtyClan" />
      </div>
      <div className="ic_container position_relative">
        <Row>
          <Col lg={12}>
            <div className={styles.banner_content}>
              <h6 className={`ic_secondary_color ${styles.sub_title}`}>
                Real Estate Agency
              </h6>
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
              <div className={styles.ic_banner_info}>
                <div className={styles.ic_info_item}>
                  <h5 className="ic_secondary_color">1800+</h5>
                  <p className="ic_body_color">Complete Projects</p>
                </div>
                <div className={styles.ic_info_item}>
                  <h5 className="ic_secondary_color">250+</h5>
                  <p className="ic_body_color">Experts Worker</p>
                </div>
                <div className={styles.ic_info_item}>
                  <h5 className="ic_secondary_color">126+</h5>
                  <p className="ic_body_color">Award Winning</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.search_wrap}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Banner;
