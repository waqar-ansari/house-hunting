import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Row, Select } from "antd";
import React from "react";
import styles from "./agency.module.css";
import Image from "next/image";
import { RiMapPinLine, RiTwitterXFill } from "react-icons/ri";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import agency01 from "@/images/agency-01.png";
import agency02 from "@/images/agency-02.png";
import agency03 from "@/images/agency-03.png";
import agency04 from "@/images/agency-04.png";
import agency05 from "@/images/agency-05.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Pagination from "@/components/Share/Pagination/Pagination";

const AgencyPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/agency-breadcrumb.png",
          title: "Agency List",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Agency",
              link: "/agency",
            },
          ],
        }}
      />
      <section className="ic_section_space">
        <div className="ic_container">
          <Row
            gutter={[
              { lg: 24, md: 20, sm: 20, xs: 20 },
              { lg: 24, md: 20, sm: 20, xs: 20 },
            ]}
          >
            <Col xl={18} lg={24}>
              <div className={styles.ic_agency_left}>
                <div className={`${styles.ic_agency_sort} ic_mb_40`}>
                  <p className="ic_body_color ic_fw_500">
                    Showing 
                    <span className="ic_title_color ic_fw_500">
                      12–16 of 42
                    </span>
                     results
                  </p>
                  <div className={styles.ic_sort_by}>
                    <p className="ic_title_color ic_fw_500">Sort by</p>
                    <Select
                      style={{
                        width: "140px",
                        height: "40px",
                      }}
                      placeholder="Sort by"
                      options={[
                        { value: "popular", label: "Popular" },
                        { value: "recent", label: "Recent" },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <div className={styles.ic_agency_item}>
                    <div className={styles.ic_agency_top}>
                      <div className={styles.ic_agency_avatar}>
                        <Image
                          src={agency01}
                          width={140}
                          height={140}
                          alt="agency"
                        />
                      </div>
                      <div className={styles.ic_agency_info}>
                        <div className="ic_mb_20">
                          <h6 className="ic_title_color ic_fw_600 ic_mb_5">
                            Solid Builders
                          </h6>
                          <p className="ic_title_color">
                            Company Agent at{" "}
                            <span className="ic_primary_color">
                              All American Real Estate
                            </span>
                          </p>
                        </div>
                        <div className={styles.ic_agency_contact}>
                          <Row gutter={[{ lg: 20 }, { lg: 20 }]}>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <RiMapPinLine />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Office Address
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    Jet Propulsion Laboratory
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <FiPhone />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Mobile
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    123-5698-2658
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <HiOutlineMailOpen />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Email
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    info@realtyclan.com
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ic_agency_social_count}>
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
                            <RiTwitterXFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                      <p className="ic_secondary_color">6 Listed Properties</p>
                    </div>
                  </div>
                  <div className={styles.ic_agency_item}>
                    <div className={styles.ic_agency_top}>
                      <div className={styles.ic_agency_avatar}>
                        <Image
                          src={agency02}
                          width={140}
                          height={140}
                          alt="agency"
                        />
                      </div>
                      <div className={styles.ic_agency_info}>
                        <div className="ic_mb_20">
                          <h6 className="ic_title_color ic_fw_600 ic_mb_5">
                            American Inc
                          </h6>
                          <p className="ic_title_color">
                            Company Agent at{" "}
                            <span className="ic_primary_color">
                              All American Real Estate
                            </span>
                          </p>
                        </div>
                        <div className={styles.ic_agency_contact}>
                          <Row gutter={[{ lg: 20 }, { lg: 20 }]}>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <RiMapPinLine />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Office Address
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    Jet Propulsion Laboratory
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <FiPhone />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Mobile
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    123-5698-2658
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <HiOutlineMailOpen />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Email
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    info@realtyclan.com
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ic_agency_social_count}>
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
                            <RiTwitterXFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                      <p className="ic_secondary_color">6 Listed Properties</p>
                    </div>
                  </div>
                  <div className={styles.ic_agency_item}>
                    <div className={styles.ic_agency_top}>
                      <div className={styles.ic_agency_avatar}>
                        <Image
                          src={agency03}
                          width={140}
                          height={140}
                          alt="agency"
                        />
                      </div>
                      <div className={styles.ic_agency_info}>
                        <div className="ic_mb_20">
                          <h6 className="ic_title_color ic_fw_600 ic_mb_5">
                            Best Real Estate Agent
                          </h6>
                          <p className="ic_title_color">
                            Company Agent at{" "}
                            <span className="ic_primary_color">
                              All American Real Estate
                            </span>
                          </p>
                        </div>
                        <div className={styles.ic_agency_contact}>
                          <Row gutter={[{ lg: 20 }, { lg: 20 }]}>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <RiMapPinLine />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Office Address
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    Jet Propulsion Laboratory
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <FiPhone />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Mobile
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    123-5698-2658
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <HiOutlineMailOpen />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Email
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    info@realtyclan.com
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ic_agency_social_count}>
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
                            <RiTwitterXFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                      <p className="ic_secondary_color">6 Listed Properties</p>
                    </div>
                  </div>
                  <div className={styles.ic_agency_item}>
                    <div className={styles.ic_agency_top}>
                      <div className={styles.ic_agency_avatar}>
                        <Image
                          src={agency04}
                          width={140}
                          height={140}
                          alt="agency"
                        />
                      </div>
                      <div className={styles.ic_agency_info}>
                        <div className="ic_mb_20">
                          <h6 className="ic_title_color ic_fw_600 ic_mb_5">
                            Muri Retailers Inc
                          </h6>
                          <p className="ic_title_color">
                            Company Agent at{" "}
                            <span className="ic_primary_color">
                              All American Real Estate
                            </span>
                          </p>
                        </div>
                        <div className={styles.ic_agency_contact}>
                          <Row gutter={[{ lg: 20 }, { lg: 20 }]}>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <RiMapPinLine />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Office Address
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    Jet Propulsion Laboratory
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <FiPhone />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Mobile
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    123-5698-2658
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <HiOutlineMailOpen />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Email
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    info@realtyclan.com
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ic_agency_social_count}>
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
                            <RiTwitterXFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                      <p className="ic_secondary_color">6 Listed Properties</p>
                    </div>
                  </div>
                  <div className={styles.ic_agency_item}>
                    <div className={styles.ic_agency_top}>
                      <div className={styles.ic_agency_avatar}>
                        <Image
                          src={agency05}
                          width={140}
                          height={140}
                          alt="agency"
                        />
                      </div>
                      <div className={styles.ic_agency_info}>
                        <div className="ic_mb_20">
                          <h6 className="ic_title_color ic_fw_600 ic_mb_5">
                            Company Slogan
                          </h6>
                          <p className="ic_title_color">
                            Company Agent at{" "}
                            <span className="ic_primary_color">
                              All American Real Estate
                            </span>
                          </p>
                        </div>
                        <div className={styles.ic_agency_contact}>
                          <Row gutter={[{ lg: 20 }, { lg: 20 }]}>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <RiMapPinLine />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Office Address
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    Jet Propulsion Laboratory
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <FiPhone />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Mobile
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    123-5698-2658
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className={styles.ic_contact}>
                                <div className={styles.ic_icon}>
                                  <HiOutlineMailOpen />
                                </div>
                                <div className={styles.ic_content}>
                                  <h6 className="body_s ic_title_color ic_fw_500">
                                    Email
                                  </h6>
                                  <p className="ic_title_color body_s">
                                    info@realtyclan.com
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ic_agency_social_count}>
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
                            <RiTwitterXFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                      <p className="ic_secondary_color">6 Listed Properties</p>
                    </div>
                  </div>
                </div>
                <Pagination />
              </div>
            </Col>
            <Col xl={6} lg={24}>
              <div className={`${styles.ic_agent_right} ic_mb_20`}>
                <div className={styles.ic_agent_search}>
                  <h4 className="ic_title_color ic_mb_25"> Agent Search</h4>
                  <div className={styles.ic_agent_search_input}>
                    <div className={styles.ic_item}>
                      <input type="text" placeholder="Agent’s name" />
                    </div>
                    <div className={styles.ic_item}>
                      <Select
                        style={{
                          width: "100%",
                          height: "45px",
                        }}
                        placeholder="All Categories"
                        options={[
                          { value: "1", label: "Category 1" },
                          { value: "2", label: "Category 2" },
                          { value: "3", label: "Category 3" },
                        ]}
                      />
                    </div>
                    <div className={styles.ic_item}>
                      <Select
                        style={{
                          width: "100%",
                          height: "45px",
                        }}
                        placeholder="Location"
                        options={[
                          { value: "1", label: "Location 1" },
                          { value: "2", label: "Location 2" },
                          { value: "3", label: "Location 3" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.ic_latest_listing}>
                  <h4 className="ic_title_color ic_mb_25">Latest Listings</h4>
                  <div className={styles.ic_latest_listing_item}>
                    <div className={styles.ic_latest_listing_thumb}>
                      <Image src={propertyImg1} alt="property" />
                    </div>
                    <div className={styles.ic_latest_listing_content}>
                      <h6>Ready Home</h6>
                      <p className="ic_secondary_color body_s ">
                        <RiMapPinLine />
                        4517 Washington
                      </p>
                      <p className="body_s ic_fw_500 ic_primary_color">
                        $750.00
                      </p>
                    </div>
                  </div>
                  <div className={styles.ic_latest_listing_item}>
                    <div className={styles.ic_latest_listing_thumb}>
                      <Image src={propertyImg2} alt="property" />
                    </div>
                    <div className={styles.ic_latest_listing_content}>
                      <h6>Ready Home</h6>
                      <p className="ic_secondary_color body_s ">
                        <RiMapPinLine />
                        4517 Washington
                      </p>
                      <p className="body_s ic_fw_500 ic_primary_color">
                        $750.00
                      </p>
                    </div>
                  </div>
                  <div className={styles.ic_latest_listing_item}>
                    <div className={styles.ic_latest_listing_thumb}>
                      <Image src={propertyImg3} alt="property" />
                    </div>
                    <div className={styles.ic_latest_listing_content}>
                      <h6>Ready Home</h6>
                      <p className="ic_secondary_color body_s ">
                        <RiMapPinLine />
                        4517 Washington
                      </p>
                      <p className="body_s ic_fw_500 ic_primary_color">
                        $750.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AgencyPage;
