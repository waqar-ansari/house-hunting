import Link from "next/link";
import styles from "./cta.module.css";

const Cta = () => {
  return (
    <section className={`${styles.ic_cta_area} ic_bg_img`}>
      <div className="ic_container">
        <div className={styles.ic_cta_wrapper}>
          <div className={styles.ic_cta_content}>
            <span className={styles.ic_sub_title}>Contact Us Today</span>
            <h3 className="ic_white_color ic_mb_40">
              Looking to Buy a new property or Sell an existing one? Dream home
              provides an awesome solution!
            </h3>
          </div>
          <div className={styles.ic_cta_btn}>
            <button className="ic_btn ic_btn_lg">Submit property</button>
            <Link
              href="#"
              className={`ic_btn ic_btn_lg ${styles.ic_contact_btn}`}
            >
              Contact now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
