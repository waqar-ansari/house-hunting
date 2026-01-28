import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Checkbox, Col, Row } from "antd";
import styles from "./blog-details.module.css";
import blogDetailsImg from "@/images/blog-details-big.png";
import blogDetailsThumb1 from "@/images/blog-details-thumb-01.png";
import blogDetailsThumb2 from "@/images/blog-details-thumb-02.png";
import blogDetailsThumb3 from "@/images/blog-details-thumb-03.png";
import avatar from "@/images/avatar.png";
import Image from "next/image";
import {
  RiCalendar2Line,
  RiStarFill,
  RiStarLine,
  RiUser3Line,
} from "react-icons/ri";
import Link from "next/link";
import BlogSidebar from "@/components/Share/BlogSidebar/BlogSidebar";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ details: string }>;
}) => {
  //get slug
  //get slug
  const details = (await params).details;
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/blog-details-breadcrumb.png",
          title: "Develop Relationships With Human Resource.",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Blog Details",
              link: `/blog/${details}`,
            },
          ],
        }}
      />
      {/* Blog Details area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row gutter={{ lg: 24 }} justify={"space-between"}>
            <Col xxl={17} xl={17} md={24} sm={24} xs={24}>
              <div className={styles.ic_blog_left}>
                <div className={styles.ic_blog_details_img}>
                  <Image src={blogDetailsImg} alt="details" />
                </div>
                <div className={styles.ic_blog_details_tag}>
                  <div className={styles.ic_blog_details}>
                    <div className={styles.ic_blog_author_comment}>
                      <span>
                        <RiUser3Line />
                        Author
                      </span>
                      <span>
                        <RiCalendar2Line />
                        September 16, 2023
                      </span>
                    </div>
                    <p>
                      You must have ample knowledge about the management process
                      to grow your business. Lorem ipsum dolor sit amet, conse
                      ctetur adipi scing elit. Eget ut adipiscing platea lectus
                      vlit et elementum tristique.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea consequat. Duis aute
                      irure dolor in reprehenderit in sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat.
                    </p>
                    <ul>
                      <li>
                        Nunc, mauris ut in vestibulum. Consectetur phasellus
                        ultrices fusce nibh justo, venenatis, amet. Lectus quam
                        in
                      </li>
                      <li>
                        Most of the designer are very creative to do something ,
                        mauris ut in vestibulum. Consectetur phasellus ultrices
                        fusce nibh justo, venenatis, amet. Lectus quam in
                        lobortis
                      </li>
                      <li>
                        There are two thing is very important in Consectetur
                        phasellus ultrices fusce nibh justo, venenatis, amet.
                        Lectus quam.
                      </li>
                    </ul>
                    <p>
                      You must have ample knowledge about the management process
                      to grow your business. Lorem ipsum dolor sit amet, conse
                      ctetur adipi scing elit. Eget ut adipiscing platea lectus
                      vlit et elementum tristique.
                    </p>
                    <h5 className="h5_2">Four major elements that we offer:</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea consequat. Duis aute
                      irure dolor in reprehenderit in sed quia non numquam eius
                      modi tempora incidunt ut labore.
                    </p>
                    <ul>
                      <li>Scientific skills for getting a better result</li>
                      <li>Communication skills to getting in touch</li>
                      <li>A career overview opportunity available</li>
                      <li>A good work environment for work</li>
                    </ul>
                    <Row
                      gutter={[
                        { lg: 24, md: 20, sm: 16 },
                        { lg: 24, md: 20, sm: 16 },
                      ]}
                      justify={"center"}
                    >
                      <Col md={12} sm={12} xs={24}>
                        <Image src={blogDetailsThumb1} alt="blog details" />
                      </Col>
                      <Col md={12} sm={12} xs={24}>
                        <Image src={blogDetailsThumb2} alt="blog details" />
                        <Image src={blogDetailsThumb3} alt="blog details" />
                      </Col>
                    </Row>
                    <h5 className="h5_2">Setting the mood with incense</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore
                      magnam aliquam quaerat.
                    </p>
                    <div className={styles.ic_blog_quote}>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                    <h5 className="h5_2">
                      How to Be Successful in Real Estate Investment
                    </h5>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Cras maximus fermentum
                      lacus, sit amet semper nulla feugiat et. Pellentesque
                      porttitor pharetra efficitur. Quisque convallis massa
                      orci, vel sagittis metus consectetur nec. Duis sit amet
                      consequat ligula, ac pellentesque elit. Aliquam erat
                      volutpat. Integer consectetur blandit neque at pharetra.
                      In sem elit, iaculis sed interdum et, maximus venenatis
                      sem. Vivamus scelerisque mi eget sem suscipit, vitae
                      euismod purus porta. Vestibulum sollicitudin sit amet nunc
                      at sodales. Donec scelerisque bibendum molestie. Ut non
                      commodo mi. Suspendisse fringilla ipsum eget sollicitudin
                      vehicula. In efficitur neque placerat nisl ultricies
                      semper. Ut sollicitudin hendrerit urna non varius. In ac
                      quam venenatis, pulvinar felis sed, condimentum ipsum.
                    </p>
                  </div>
                  <div className={styles.ic_blog_related_tag}>
                    <p className="ic_fw_500 ic_title_color">Tagged:</p>
                    <ul>
                      <li>
                        <Link href="#">Ads</Link>
                      </li>
                      <li>
                        <Link href="#">Properties</Link>
                      </li>
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.ic_customer_reviews}>
                <div className={`${styles.ic_title} ic_mb_20`}>
                  <h4 className="ic_title_color ic_mb_20">Customer Reviews</h4>
                  <h6 className="ic_title_color">1 Reviews</h6>
                </div>
                <div className={styles.ic_blog_comment}>
                  <div className={styles.ic_avatar}>
                    <Image src={avatar} alt="avatar" />
                  </div>
                  <div className={styles.ic_content}>
                    <h6 className="ic_title_color">
                      Hena Sinha-
                      <span className="ic_secondary_color">25 March 2023</span>
                    </h6>
                    <span className={styles.ic_review_icon}>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarLine />
                    </span>
                    <p className="ic_body_color ic_mb_20">
                      {`There are many variations of passages of Lorem Ipsum
                      available, but many the majority have thank you suffered
                      alteration in some form, by injected humour, or randomised
                      words which don't look.`}
                    </p>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
              <div className={styles.ic_leave_replay}>
                <div className={styles.ic_title}>
                  <h6 className="ic_title_color">Leave A Reply</h6>
                </div>
                <div className={styles.ic_reply_form}>
                  <form action="#">
                    <p className="body_s ic_body_color ic_mb_20">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <Row
                      gutter={[
                        { lg: 24, md: 20, sm: 16, xs: 16 },
                        { lg: 24, md: 20, sm: 16, xs: 16 },
                      ]}
                    >
                      <Col md={24} sm={24} xs={24}>
                        <div className={styles.ic_form_group}>
                          <label
                            htmlFor="comment"
                            className="ic_title_color body_s ic_fw_500"
                          >
                            Comment *
                          </label>
                          <textarea
                            id="comment"
                            placeholder="Type a comment"
                          ></textarea>
                        </div>
                      </Col>
                      <Col md={12} sm={12} xs={24}>
                        <div className={styles.ic_form_group}>
                          <label
                            htmlFor="name"
                            className="ic_title_color body_s ic_fw_500"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                          />
                        </div>
                      </Col>
                      <Col md={12} sm={12} xs={24}>
                        <div className={styles.ic_form_group}>
                          <label
                            htmlFor="email"
                            className="ic_title_color body_s ic_fw_500"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                          />
                        </div>
                      </Col>
                      <Col xs={24}>
                        <Checkbox>
                          <p className="body_s ic_body_color">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </p>
                        </Checkbox>
                      </Col>
                      <Col xs={24}>
                        <button className="ic_btn ic_btn_lg">
                          Post A Comment
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={7} md={24} sm={24} xs={24}>
              <BlogSidebar />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
