import avatar1 from "@/images/avatar-01.png";
import avatar2 from "@/images/avatar-02.png";
import avatar3 from "@/images/avatar-03.png";
import avatar4 from "@/images/avatar-04.png";
import avatar5 from "@/images/avatar-05.png";
import avatar6 from "@/images/avatar-06.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./recent-activites.module.css";
const RecentActivites = () => {
  return (
    <div>
      <h5 className="ic_mb_20 ic_fw_600 ic_title_color">Recent Activities</h5>
      <div className={styles.ic_recent_activites_wrap}>
        <div className={styles.ic_recent_activites_item}>
          <div className={styles.ic_left}>
            <Image src={avatar1} alt="user" width={44} height={44} />
            <div className={styles.ic_content}>
              <p>
                Theresa Webb, <span>Amet minim non deserunt ullamco</span>
              </p>
            </div>
          </div>
          <div className={styles.ic_right}>
            <p className={styles.status}>
              <span className={styles.status_dot}></span>Active
            </p>
            <span className={styles.time}>Just Now</span>
          </div>
        </div>
        <div className={styles.ic_recent_activites_item}>
          <div className={styles.ic_left}>
            <Image src={avatar2} alt="user" width={44} height={44} />
            <div className={styles.ic_content}>
              <p>
                Jane Cooper, <span>Amet minim non deserunt ullamco</span>
              </p>
            </div>
          </div>
          <div className={styles.ic_right}>
            <p className={styles.status}>
              <span className={styles.status_dot}></span>Active
            </p>
            <span className={styles.time}>Just Now</span>
          </div>
        </div>
        <div className={styles.ic_recent_activites_item}>
          <div className={styles.ic_left}>
            <Image src={avatar3} alt="user" width={44} height={44} />
            <div className={styles.ic_content}>
              <p>
                Ralph Edwards, <span>Amet minim non deserunt ullamco</span>
              </p>
            </div>
          </div>
          <div className={styles.ic_right}>
            <p className={styles.status}>
              <span className={styles.status_dot}></span>Active
            </p>
            <span className={styles.time}>Just Now</span>
          </div>
        </div>
        <div className={styles.ic_recent_activites_item}>
          <div className={styles.ic_left}>
            <Image src={avatar4} alt="user" width={44} height={44} />
            <div className={styles.ic_content}>
              <p>
                Albert Flores, <span>Amet minim non deserunt ullamco</span>
              </p>
            </div>
          </div>
          <div className={styles.ic_right}>
            <p className={styles.status}>
              <span className={styles.status_dot}></span>Active
            </p>
            <span className={styles.time}>Just Now</span>
          </div>
        </div>
        <div className={styles.ic_recent_activites_item}>
          <div className={styles.ic_left}>
            <Image src={avatar5} alt="user" width={44} height={44} />
            <div className={styles.ic_content}>
              <p>
                Jane Cooper, <span>Amet minim non deserunt ullamco</span>
              </p>
            </div>
          </div>
          <div className={styles.ic_right}>
            <p className={styles.status}>
              <span className={styles.status_dot}></span>Active
            </p>
            <span className={styles.time}>Just Now</span>
          </div>
        </div>
        <div className={styles.ic_recent_activites_item}>
          <div className={styles.ic_left}>
            <Image src={avatar6} alt="user" width={44} height={44} />
            <div className={styles.ic_content}>
              <p>
                Esther Howard, <span>Amet minim non deserunt ullamco</span>
              </p>
            </div>
          </div>
          <div className={styles.ic_right}>
            <p className={styles.status}>
              <span className={styles.status_dot}></span>Active
            </p>
            <span className={styles.time}>Just Now</span>
          </div>
        </div>
      </div>
      <div className={styles.ic_view_all}>
        <Link href="#" className="ic_btn ic_btn_lg">
          See More
        </Link>
      </div>
    </div>
  );
};

export default RecentActivites;
