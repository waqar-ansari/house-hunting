import { Col, Row } from "antd";
import blogImg1 from "@/images/blog.png";
import blogImg2 from "@/images/blog2.png";
import ArticlesItem from "@/components/Share/ArticlesItem/ArticlesItem";
import Link from "next/link";
import styles from "./latestarticles.module.css";
import { FaArrowRight } from "react-icons/fa6";

const LatestArticles = () => {
  return (
    <section className={`ic_section_space ${styles.ic_latest_articles}`}>
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Articles</p>
              <h2 className="ic_title ic_title_color ">Our Latest articles</h2>
              <p className="ic_des ic_body_color">
                Dive into our collection of fresh insights and industry updates.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[
            { lg: 24, md: 16 },
            { lg: 24, md: 16, sm: 16, xs: 16 },
          ]}
        >
          <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
            <ArticlesItem
              articlesInfo={{
                id: "1",
                thumbnail: blogImg1,
                title:
                  "Smile with Confidence: Expert Advice from Your Trusted ",
                author: "Apartments",
              }}
            />
          </Col>
          <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
            <ArticlesItem
              articlesInfo={{
                id: "1",
                thumbnail: blogImg2,
                title:
                  "Smile with Confidence: Expert Advice from Your Trusted ",
                author: "Hospitality",
              }}
            />
          </Col>
          <Col className="gutter-row" lg={8} md={24} sm={24} xs={24}>
            <div className={styles.ic_latest_articles_right}>
              <div className={`ic_mb_20 ${styles.ic_content}`}>
                <div className={`${styles.ic_author_date} ic_mb_10`}>
                  <p className="body_s ic_title_color">Modern Houses</p>
                </div>
                <h5 className={`ic_fw_600 ic_title_color ic_mb_20`}>
                  <Link href={``} className="ic_fw_600 ic_title_color h5">
                    Smile with Confidence: Expert Advice from Your Trusted
                  </Link>
                </h5>
                <div className={` ${styles.ic_more_articles_btn}`}>
                  <Link
                    href={``}
                    className={`ic_btn ic_btn_sm  ic_mb_20 ${styles.ic_read_more_btn}`}
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className={`ic_mb_20 ${styles.ic_content}`}>
                <div className={`${styles.ic_author_date} ic_mb_10`}>
                  <p className="body_s ic_title_color">Modern Houses</p>
                </div>
                <h5 className={`ic_fw_600 ic_title_color ic_mb_20`}>
                  <Link href={``} className="ic_fw_600 ic_title_color h5">
                    Smile with Confidence: Expert Advice from Your Trusted
                  </Link>
                </h5>
                <div className={` ${styles.ic_more_articles_btn}`}>
                  <Link
                    href={``}
                    className={`ic_btn ic_btn_sm  ic_mb_20 ${styles.ic_read_more_btn}`}
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className={`ic_mb_20 ${styles.ic_content}`}>
                <div className={`${styles.ic_author_date} ic_mb_10`}>
                  <p className="body_s ic_title_color">Modern Houses</p>
                </div>
                <h5 className={`ic_fw_600 ic_title_color ic_mb_20`}>
                  <Link href={``} className="ic_fw_600 ic_title_color h5">
                    Smile with Confidence: Expert Advice from Your Trusted
                  </Link>
                </h5>
                <div className={` ${styles.ic_more_articles_btn}`}>
                  <Link
                    href={``}
                    className={`ic_btn ic_btn_sm  ic_mb_20 ${styles.ic_read_more_btn}`}
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LatestArticles;
