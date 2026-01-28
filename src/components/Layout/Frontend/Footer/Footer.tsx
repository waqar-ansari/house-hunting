import React from "react";
import styles from "./footer.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiTwitter } from "react-icons/fi";
import { PiEnvelopeOpenThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.ic_footer_area}>
      <div className="ic_container">
        <div className={styles.ic_footer_newsletter}>
          <div className={styles.ic_newsletter_left}>
            <h3 className="h3_2 ic_white_color ic_mb_10">Newsletter</h3>
            <p className="ic_white_color">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
          </div>
          <div className={styles.ic_newsletter_right}>
            <form action="#">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.ic_footer_main}>
          <Row justify={"space-between"}>
            <Col lg={6} md={24} sm={24}>
              <div className={styles.ic_footer_about}>
                <div className="ic_mb_20">
                  <Image
                    src="/logo/logo.png"
                    alt="RealtyClan"
                    width={180}
                    height={40}
                  />
                </div>
                <div className="ic_mb_30">
                  <p className="ic_white_color">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                </div>
                <div className={styles.ic_footer_social}>
                  <ul>
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiTwitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} xs={24}>
              <div className={styles.ic_footer_list}>
                <h5
                  className={`h5_2 ic_fw_600 ic_white_color ${styles.ic_title}`}
                >
                  Company
                </h5>
                <ul>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">All Products</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} xs={24}>
              <div className={styles.ic_footer_list}>
                <h5
                  className={`h5_2 ic_fw_600 ic_white_color ${styles.ic_title}`}
                >
                  Lists by Category
                </h5>
                <ul>
                  <li>
                    <Link href="#">For Sale (12)</Link>
                  </li>
                  <li>
                    <Link href="#">For Rent (6)</Link>
                  </li>
                  <li>
                    <Link href="#">Apartment (11)</Link>
                  </li>
                  <li>
                    <Link href="#">House (8)</Link>
                  </li>
                  <li>
                    <Link href="#">Office (4) </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} xs={24}>
              <div className={styles.ic_footer_list}>
                <h5
                  className={`h5_2 ic_fw_600 ic_white_color ${styles.ic_title}`}
                >
                  Top Cities
                </h5>
                <ul>
                  <li>
                    <Link href="#">Castro</Link>
                  </li>
                  <li>
                    <Link href="#">Haight Ashbury</Link>
                  </li>
                  <li>
                    <Link href="#">New York</Link>
                  </li>
                  <li>
                    <Link href="#">California</Link>
                  </li>
                  <li>
                    <Link href="#">Mexico</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={7} sm={12} xs={24}>
              <div className={styles.ic_footer_list}>
                <h5
                  className={`h5_2 ic_fw_600 ic_white_color ${styles.ic_title}`}
                >
                  Address
                </h5>
                <div className={styles.ic_contact_info}>
                  <p className={styles.ic_item}>
                    <FiMapPin />
                    <span> Brooklyn, New York, United States</span>
                  </p>
                  <Link
                    href="mailto:Info@realtyclan.com"
                    className={styles.ic_item}
                  >
                    <PiEnvelopeOpenThin />
                    <span>Info@dreamhome.com</span>
                  </Link>
                  <Link href="tel:+0124-4565789" className={styles.ic_item}>
                    <IoCallOutline />
                    <span>+0124-4565789</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.ic_footer_copyright}>
        <div className="ic_container">
          <div className={styles.ic_copyright_content}>
            <p className="body_s ic_white_color">
              All Rights Reserved @ RealtyClan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
