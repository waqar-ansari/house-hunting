import React from "react";
import { RiCalendar2Line, RiSearchLine } from "react-icons/ri";
import styles from "./blog-sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import recentPostImg1 from "@/images/recent-post-01.png";
import recentPostImg2 from "@/images/recent-post-02.png";
import recentPostImg3 from "@/images/recent-post-03.png";

const BlogSidebar = () => {
  return (
    <div className={styles.ic_blog_right}>
      <div className={styles.ic_blog_search}>
        <h5 className="h5_2 ic_title_color ic_fw_600 ic_mb_20">Search</h5>
        <div className={styles.ic_search_input}>
          <form action="#" className={styles.ic_form}>
            <input type="search" placeholder="Search here" />
            <button type="submit">
              <RiSearchLine />
            </button>
          </form>
        </div>
      </div>
      <div
        className={`${styles.ic_blog_categories} ${styles.ic_blog_right_item}`}
      >
        <h5 className="h5_2 ic_title_color ic_fw_600">Categories</h5>
        <ul>
          <li>
            <Link href="#">
              <span>Privacy</span>
              <span>(1)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Properties</span>
              <span>(5)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Technology</span>
              <span>(2)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Tips</span>
              <span>(1)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Uncategorized</span>
              <span>(1)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.ic_recent_post} ${styles.ic_blog_right_item}`}>
        <h5 className="h5_2 ic_title_color ic_fw_600">Recent Posts</h5>
        <div className={styles.ic_recent_post_item_wrap}>
          <div className={styles.ic_recent_post_item}>
            <div className={styles.ic_thumb}>
              <Link href="#">
                <Image src={recentPostImg1} alt="recent post" />
              </Link>
            </div>
            <div className={styles.ic_content}>
              <h6>
                <Link href="#" className="h6 ic_title_color">
                  These are the top 7 hotels in...
                </Link>
              </h6>
              <p className="body_s">
                <RiCalendar2Line />
                March 1, 2023
              </p>
            </div>
          </div>
          <div className={styles.ic_recent_post_item}>
            <div className={styles.ic_thumb}>
              <Link href="#">
                <Image src={recentPostImg2} alt="recent post" />
              </Link>
            </div>
            <div className={styles.ic_content}>
              <h6>
                <Link href="#" className="ic_title_color h6">
                  These are the top 7 hotels in...
                </Link>
              </h6>
              <p className="body_s">
                <RiCalendar2Line />
                March 1, 2023
              </p>
            </div>
          </div>
          <div className={styles.ic_recent_post_item}>
            <div className={styles.ic_thumb}>
              <Link href="#">
                <Image src={recentPostImg3} alt="recent post" />
              </Link>
            </div>
            <div className={styles.ic_content}>
              <h6>
                <Link href="#" className="ic_title_color h6">
                  These are the top 7 hotels in...
                </Link>
              </h6>
              <p className="body_s">
                <RiCalendar2Line />
                March 1, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.ic_related_tgs} ${styles.ic_blog_right_item}`}>
        <h5 className="h5_2 ic_title_color ic_fw_600">Tags</h5>

        <div className={styles.ic_related_tags_item_wrap}>
          <Link href="#">Ads</Link>
          <Link href="#">Properties</Link>
          <Link href="#">Home</Link>
          <Link href="#">Fashion</Link>
          <Link href="#">Tips</Link>
          <Link href="#">Lifestyle</Link>
          <Link href="#">Advertisement</Link>
          <Link href="#">Business</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
