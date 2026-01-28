import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import styles from "./agent-details.module.css";
import { Col, Row } from "antd";
import agentProfileImg from "@/images/agent-profile.png";
import agentServiceImg from "@/images/add-listing-01.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import InquiryListing from "@/components/Frontend/AgentDetails/InquiryListing/InquiryListing";

const AgentDetails = async ({
  params,
}: {
  params: Promise<{ details: string }>;
}) => {
  //get slug
  const details = (await params).details;
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/agent-details-breadcrumb.png",
          title: "Agent Details",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Agent Details",
              link: `/agent/${details}`,
            },
          ],
        }}
      />
      {/* Agent Details area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <div className={`${styles.ic_personal_info} ic_mb_40`}>
            <Row gutter={{ lg: 24 }}>
              <Col lg={8} md={24} sm={24} xs={24}>
                <div className={styles.ic_personal_info_left}>
                  <Image src={agentProfileImg} alt="profile img" />
                </div>
              </Col>
              <Col lg={16} md={24} sm={24} xs={24}>
                <div className={styles.ic_personal_info_right}>
                  <div className={`${styles.ic_title} ic_mb_30`}>
                    <h5 className="ic_title_color">Szekeres Dalma</h5>
                    <p className="ic_secondary_color">Real Estate Broker</p>
                  </div>
                  <div className={`${styles.ic_description} ic_mb_30`}>
                    <p className="ic_body_color">
                      More than 40 years ago, our company’s namesake, Line
                      Themes, pioneered a revolutionary sales training program
                      for businesses of every size. Today, our proven sales
                      training program has made us a leader in sales and
                      management training.
                    </p>
                  </div>
                  <div
                    className={`${styles.ic_personal_info_contact} ic_mb_40`}
                  >
                    <div className={styles.ic_info_item}>
                      <div className={styles.ic_item}>
                        <h6 className="ic_title_color">Phone:</h6>
                        <p className="ic_body_color">+00 958 746 596</p>
                      </div>
                      <div className={styles.ic_item}>
                        <h6 className="ic_title_color">Positions:</h6>
                        <p className="ic_body_color">Senior Property Seller</p>
                      </div>
                      <div className={styles.ic_item}>
                        <h6 className="ic_title_color">Experience:</h6>
                        <p className="ic_body_color">12 Years</p>
                      </div>
                    </div>
                    <div className={styles.ic_info_item}>
                      <div className={styles.ic_item}>
                        <h6 className="ic_title_color">Email:</h6>
                        <p className="ic_body_color"> Benjamin@gmail.com</p>
                      </div>
                      <div className={styles.ic_item}>
                        <h6 className="ic_title_color">Address:</h6>
                        <p className="ic_body_color">Ave 14th Street San USA</p>
                      </div>
                      <div className={styles.ic_item}>
                        <h6 className="ic_title_color">Practice Area:</h6>
                        <p className="ic_body_color">Property Seller </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ic_social}>
                    <ul>
                      <li>
                        <Link href="#">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaLinkedinIn />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.ic_biography_info}>
            <div className={`${styles.ic_title_description} ic_mb_30`}>
              <h4 className="ic_mb_10 ic_title_color">Biography</h4>
              <p className="ic_body_color">
                More than 40 years ago, our company’s namesake, LineThemes,
                pioneered a revolutionary sales training program for businesses
                of every size. Today, our proven sales training program has made
                us a leader in sales and management training.
              </p>
              <p className="ic_body_color">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt sals ut labore et dolore for magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate sale velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequu ntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem., sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
            <div className={`${styles.ic_agent_service_wrap} ic_mb_30`}>
              <div className={styles.ic_agent_service_item}>
                <div className={`${styles.ic_thumb} ic_mb_16`}>
                  <Image src={agentServiceImg} alt="agent service" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_title_color ic_mb_10">Home buying</h4>
                  <p className="body_s ic_body_color">
                    Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                    sed do eiusmod te mp or{" "}
                  </p>
                </div>
              </div>
              <div className={styles.ic_agent_service_item}>
                <div className={styles.ic_thumb}>
                  <Image src={agentServiceImg} alt="agent service" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_title_color ic_mb_10">Home selling</h4>
                  <p className="body_s ic_body_color">
                    Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                    sed do eiusmod te mp or{" "}
                  </p>
                </div>
              </div>
              <div className={styles.ic_agent_service_item}>
                <div className={styles.ic_thumb}>
                  <Image src={agentServiceImg} alt="agent service" />
                </div>
                <div className={styles.ic_content}>
                  <h4 className="ic_title_color ic_mb_10">Escrow Services</h4>
                  <p className="body_s ic_body_color">
                    Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                    sed do eiusmod te mp or{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.ic_title_description} `}>
              <p className="ic_body_color">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt sals ut labore et dolore for magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate sale velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequu ntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem., sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>
          <div className={styles.ic_agent_inquery}>
            <Row gutter={{ lg: 24 }}>
              <Col lg={16} className="gutter-row">
                <div className={styles.ic_inquiry_left}>
                  <div className={styles.ic_inquery_title}>
                    <h4 className="ic_title_color">Contact for any Inquiry</h4>
                  </div>
                  <div className={styles.ic_inquery_form}>
                    <form action="#">
                      <div className="ic_mb_30">
                        <Row
                          gutter={[
                            { lg: 24, md: 20, sm: 16, xs: 16 },
                            { lg: 24, md: 20, sm: 16, xs: 16 },
                          ]}
                        >
                          <Col className="gutter-row" md={12} sm={12} xs={24}>
                            <div className={styles.ic_form_group}>
                              <label
                                htmlFor="name"
                                className="body_s ic_fw_500 ic_title_color"
                              >
                                Name*
                              </label>
                              <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                              />
                            </div>
                          </Col>
                          <Col className="gutter-row" md={12} sm={12} xs={24}>
                            <div className={styles.ic_form_group}>
                              <label
                                htmlFor="email"
                                className="body_s ic_fw_500 ic_title_color"
                              >
                                Email*
                              </label>
                              <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                              />
                            </div>
                          </Col>
                          <Col className="gutter-row" md={12} sm={12} xs={24}>
                            <div className={styles.ic_form_group}>
                              <label
                                htmlFor="number"
                                className="body_s ic_fw_500 ic_title_color"
                              >
                                Phone*
                              </label>
                              <input
                                type="number"
                                id="number"
                                placeholder="Enter your phone"
                              />
                            </div>
                          </Col>
                          <Col className="gutter-row" md={12} sm={12} xs={24}>
                            <div className={styles.ic_form_group}>
                              <label
                                htmlFor="subject"
                                className="body_s ic_fw_500 ic_title_color"
                              >
                                Subject*
                              </label>
                              <input
                                type="text"
                                id="subject"
                                placeholder="Enter your subject"
                              />
                            </div>
                          </Col>
                          <Col className="gutter-row" xs={24}>
                            <div className={styles.ic_form_group}>
                              <label
                                htmlFor="message"
                                className="body_s ic_fw_500 ic_title_color"
                              >
                                Message*
                              </label>
                              <textarea
                                id="message"
                                placeholder="Type a message"
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <button type="submit" className="ic_btn ic_btn_lg">
                        Submit Message
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
              <Col lg={8} className="gutter-row">
                <div className={styles.ic_inquiry_right}>
                  <InquiryListing />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentDetails;
