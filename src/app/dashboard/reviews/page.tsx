"use client";
import Pagination from "@/components/Share/Pagination/Pagination";
import styles from "./reviews.module.css";
import avatar1 from "@/images/avatar-01.png";
import avatar2 from "@/images/avatar-02.png";
import avatar3 from "@/images/avatar-03.png";
import avatar4 from "@/images/avatar-04.png";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ReviewsPage = () => {
  return (
    <div>
      <h5 className="ic_mb_20 ic_fw_600 ic_title_color">All Reviews</h5>
      <div className="ic_dashboard_card">
        <div className={styles.ic_reviews_wrapper}>
          <div className={styles.ic_reviews_item}>
            <div className={styles.ic_reviews_header}>
              <Image src={avatar1} alt="user" width={44} height={44} />
              <h6 className="ic_title_color">Miles, Esther</h6>
              <p className="body_s ic_body_color">3 days ago</p>
            </div>
            <div className={styles.ic_reviews_description}>
              <p className="ic_body_color">
                RealtyClan was an incredible experience! From the start, they
                were attentive, professional, and genuinely cared about helping
                me find the perfect home. They guided me through every step of
                the buying process and answered all of my questions with
                patience and expertise. Thanks to their market knowledge and
                negotiation skills, I was able to purchase my dream home within
                my budget. I highly recommend them to anyone looking for a
                dedicated and trustworthy real estate agent
              </p>
            </div>
            <div className={styles.ic_reviews}>
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
          <div className={styles.ic_reviews_item}>
            <div className={styles.ic_reviews_header}>
              <Image src={avatar2} alt="user" width={44} height={44} />
              <h6 className="ic_title_color">Wade Warren</h6>
              <p className="body_s ic_body_color">3 days ago</p>
            </div>
            <div className={styles.ic_reviews_description}>
              <p className="ic_body_color">
                RealtyClan was an incredible experience! From the start, they
                were attentive, professional, and genuinely cared about helping
                me find the perfect home. They guided me through every step of
                the buying process and answered all of my questions with
                patience and expertise. Thanks to their market knowledge and
                negotiation skills, I was able to purchase my dream home within
                my budget. I highly recommend them to anyone looking for a
                dedicated and trustworthy real estate agent
              </p>
            </div>
            <div className={styles.ic_reviews}>
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
          <div className={styles.ic_reviews_item}>
            <div className={styles.ic_reviews_header}>
              <Image src={avatar3} alt="user" width={44} height={44} />
              <h6 className="ic_title_color">Henry, Arthur</h6>
              <p className="body_s ic_body_color">3 days ago</p>
            </div>
            <div className={styles.ic_reviews_description}>
              <p className="ic_body_color">
                RealtyClan was an incredible experience! From the start, they
                were attentive, professional, and genuinely cared about helping
                me find the perfect home. They guided me through every step of
                the buying process and answered all of my questions with
                patience and expertise. Thanks to their market knowledge and
                negotiation skills, I was able to purchase my dream home within
                my budget. I highly recommend them to anyone looking for a
                dedicated and trustworthy real estate agent
              </p>
            </div>
            <div className={styles.ic_reviews}>
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
          <div className={styles.ic_reviews_item}>
            <div className={styles.ic_reviews_header}>
              <Image src={avatar4} alt="user" width={44} height={44} />
              <h6 className="ic_title_color">Nguyen, Shane</h6>
              <p className="body_s ic_body_color">3 days ago</p>
            </div>
            <div className={styles.ic_reviews_description}>
              <p className="ic_body_color">
                RealtyClan was an incredible experience! From the start, they
                were attentive, professional, and genuinely cared about helping
                me find the perfect home. They guided me through every step of
                the buying process and answered all of my questions with
                patience and expertise. Thanks to their market knowledge and
                negotiation skills, I was able to purchase my dream home within
                my budget. I highly recommend them to anyone looking for a
                dedicated and trustworthy real estate agent
              </p>
            </div>
            <div className={styles.ic_reviews}>
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
