import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Row } from "antd";
import styles from "./contact.module.css";
import contactInfoIcon1 from "@/images/contact-info-01.png";
import contactInfoIcon2 from "@/images/contact-info-02.png";
import contactInfoIcon3 from "@/images/contact-info-03.png";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailOpenLine,
  RiMapPinLine,
  RiTwitterLine,
} from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/contact-breadcrumb.png",
          title: "Contact Us",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Contact Us",
              link: "/contact",
            },
          ],
        }}
      />
      {/* contact area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row
            justify={"center"}
            gutter={[
              { lg: 24, md: 16, sm: 16, xs: 16 },
              { lg: 24, md: 16, sm: 16, xs: 16 },
            ]}
          >
            <Col md={8} sm={12} xs={24}>
              <div className={styles.ic_contact_info_item}>
                <div className={`${styles.ic_icon} ic_mb_20`}>
                  <Image src={contactInfoIcon1} alt="icon" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_secondary_color ic_mb_10">Contact Sales</h4>
                  <p>
                    <a
                      href="mailto:sales@RealtyClan.com"
                      className="ic_body_color"
                    >
                      sales@RealtyClan.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+01 598 245 5687" className="ic_body_color">
                      +01 598 245 5687
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={8} sm={12} xs={24}>
              <div className={styles.ic_contact_info_item}>
                <div className={`${styles.ic_icon} ic_mb_20`}>
                  <Image src={contactInfoIcon2} alt="icon" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_secondary_color ic_mb_10">Contact Rents</h4>
                  <p>
                    <a
                      href="mailto:sales@RealtyClan.com"
                      className="ic_body_color"
                    >
                      sales@RealtyClan.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+01 598 245 5687" className="ic_body_color">
                      +01 598 245 5687
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={8} sm={12} xs={24}>
              <div className={styles.ic_contact_info_item}>
                <div className={`${styles.ic_icon} ic_mb_20`}>
                  <Image src={contactInfoIcon3} alt="icon" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_secondary_color ic_mb_10">Contact Buy</h4>
                  <p>
                    <a
                      href="mailto:sales@RealtyClan.com"
                      className="ic_body_color"
                    >
                      sales@RealtyClan.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+01 598 245 5687" className="ic_body_color">
                      +01 598 245 5687
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="ic_section_space_bottom">
        <div className={styles.ic_contact_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279991722!2d-74.1444877707482!3d40.69763123338159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720417047962!5m2!1sen!2sbd"
            width="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="ic_container">
          <div className={styles.ic_get_in_touch_wrap}>
            <div className={styles.ic_title}>
              <h4 className="ic_title_color">Get in touch</h4>
            </div>
            <div className={styles.ic_get_in_touch_form_info_wrap}>
              <div className={styles.ic_get_in_touch_form}>
                <form action="#">
                  <Row
                    gutter={[
                      { xl: 24, lg: 20, md: 16, sm: 16, xs: 16 },
                      { xl: 24, lg: 20, md: 16, sm: 16, xs: 16 },
                    ]}
                  >
                    <Col lg={12} md={12} sm={12} xs={24}>
                      <div className={styles.ic_form_group}>
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={24}>
                      <div className={styles.ic_form_group}>
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={24}>
                      <div className={styles.ic_form_group}>
                        <label htmlFor="number">Phone *</label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter your number"
                        />
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={24}>
                      <div className={styles.ic_form_group}>
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="Enter your subject"
                        />
                      </div>
                    </Col>
                    <Col xs={24}>
                      <div className={styles.ic_form_group}>
                        <label htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          placeholder="Type a message"
                        ></textarea>
                      </div>
                    </Col>
                    <Col xs={24}>
                      <button type="submit" className="ic_btn ic_btn_lg">
                        Submit Message
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
              <div className={styles.ic_get_in_touch_info}>
                <div>
                  <div className={styles.ic_info_item}>
                    <h6 className="ic_fw_600 ic_white_color">Address</h6>
                    <p>
                      <RiMapPinLine />
                      <span className="ic_white_color">
                        Brooklyn, New York, United States
                      </span>
                    </p>
                  </div>
                  <div className={styles.ic_info_item}>
                    <h6 className="ic_fw_600 ic_white_color">Phone</h6>
                    <p>
                      <IoCallOutline />
                      <a href="tel:+0124-4565789" className="ic_white_color">
                        +0124-4565789
                      </a>
                    </p>
                  </div>
                  <div className={styles.ic_info_item}>
                    <h6 className="ic_fw_600 ic_white_color">Email</h6>
                    <p>
                      <RiMailOpenLine />
                      <a
                        href="mailto:Info@dreamhome.com"
                        className="ic_white_color"
                      >
                        Info@dreamhome.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className={styles.ic_social_share}>
                  <h6 className="ic_fw_600 ic_white_color">Follow us</h6>
                  <ul>
                    <li>
                      <Link href="#">
                        <RiFacebookFill />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <RiLinkedinFill />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <RiInstagramLine />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <RiTwitterLine />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
