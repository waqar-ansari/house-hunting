import { Col, Row } from "antd";
import styles from "./about.module.css";
import settingIcon from "@/images/setting-icon.png";
import aboutImg from "@/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <div className={`${styles.ic_about_top} ic_section_space_bottom`}>
          <Row>
            <Col lg={10} md={24} sm={24} xs={24}>
              <div className={styles.ic_about_left}>
                <div className={styles.ic_image_bg}></div>
                <div className={styles.ic_about_img}>
                  <Image src={aboutImg} className="ic_img_fluid" alt="about" />
                </div>
              </div>
            </Col>
            <Col lg={14} md={24} sm={24} xs={24}>
              <div className={styles.ic_about_right}>
                <div className="ic_sec_heading">
                  <p className="ic_sub_title">About Us</p>
                  <h2 className="ic_title ic_title_color ">
                    Our Long-Standing Experience
                  </h2>
                  <p className="ic_des ic_body_color">
                    Welcome to Dream Home. A brand-new community featuring
                    sophisticated apartment residences and stylish amenities in
                    one of L.A.’s most energetic locations. From beachside to
                    cityside or poolside to fireside, this is where lifestyle
                    and location are in perfect alignment.
                  </p>
                </div>
                <div className={styles.ic_list_experience}>
                  <div className={styles.ic_list}>
                    <ul>
                      <li className="ic_title_color">
                        Live Music Cocerts at Luviana
                      </li>
                      <li className="ic_title_color">
                        Our SecretIsland Boat Tour is Just for You
                      </li>
                      <li className="ic_title_color">
                        publishing packages and web page editors
                      </li>
                      <li className="ic_title_color">
                        Nemo enim ipsam voluptatem quia voluptas
                      </li>
                      <li className="ic_title_color">
                        Exploring the Wonders of the Amazon Rainforest
                      </li>
                    </ul>
                  </div>
                  <div className={styles.ic_experience}>
                    <div className={styles.ic_content}>
                      <div className={`${styles.ic_title_icon} ic_mb_30`}>
                        <Image src={settingIcon} alt="icon" />
                        <h3 className="ic_title_color ic_fw_700">25+</h3>
                      </div>
                      <div className={styles.ic_bottom_title}>
                        <h6 className="ic_title_color">Years of Experience</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.ic_about_counter}>
          <div className={styles.ic_counter_item}>
            <h3 className="h3_2 ic_secondary_color">1800+</h3>
            <p className="body_s ic_title_color">Completed Projects</p>
          </div>
          <div className={styles.ic_counter_item}>
            <h3 className="h3_2 ic_secondary_color">150+</h3>
            <p className="body_s ic_title_color"> Experts Worker</p>
          </div>
          <div className={styles.ic_counter_item}>
            <h3 className="h3_2 ic_secondary_color">1200+</h3>
            <p className="body_s ic_title_color"> Clients Are Happy</p>
          </div>
          <div className={styles.ic_counter_item}>
            <h3 className="h3_2 ic_secondary_color">126+</h3>
            <p className="body_s ic_title_color"> Award Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
