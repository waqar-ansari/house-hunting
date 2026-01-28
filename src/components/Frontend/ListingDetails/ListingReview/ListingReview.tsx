import { Col, Row } from "antd";
import Image from "next/image";
import styles from "./listing-review.module.css";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import avatar from "@/images/avatar.png";

const ListingReview = () => {
  return (
    <div className="ic_mb_40">
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
          <h6 className="ic_title_color">Write Your Review</h6>
        </div>
        <div className={styles.ic_reply_form}>
          <form action="#">
            <p className="body_s ic_body_color ic_mb_20">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className={`${styles.ic_rating_add} ic_mb_20`}>
              <p className="ic_title_color">Rating *</p>
              <div className={styles.ic_rating_star}>
                <button className={styles.active}>
                  <RiStarFill />
                </button>
                <button>
                  <RiStarFill />
                </button>
                <button>
                  <RiStarFill />
                </button>
                <button>
                  <RiStarFill />
                </button>
                <button>
                  <RiStarFill />
                </button>
              </div>
            </div>
            <Row
              gutter={[
                { lg: 24, md: 20, sm: 20, xs: 20 },
                { lg: 24, md: 20, sm: 20, xs: 20 },
              ]}
            >
              <Col xs={24}>
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
              <Col sm={12} xs={24}>
                <div className={styles.ic_form_group}>
                  <label
                    htmlFor="name"
                    className="ic_title_color body_s ic_fw_500"
                  >
                    Name *
                  </label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
              </Col>
              <Col sm={12} xs={24}>
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
                <button className="ic_btn ic_btn_lg">Submit Review</button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingReview;
