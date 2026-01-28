import Image from "next/image";
import styles from "./recent-message.module.css";
import avatar1 from "@/images/avatar-01.png";
import avatar2 from "@/images/avatar-02.png";
import avatar3 from "@/images/avatar-03.png";

const RecentMessage = () => {
  return (
    <div>
      <h5 className="ic_mb_20 ic_fw_600 ic_title_color">Recent Messages</h5>
      <div className={styles.ic_recent_message_wrap}>
        <div className={styles.ic_recent_message_item}>
          <div className={styles.ic_message_header}>
            <Image src={avatar1} alt="user" width={44} height={44} />
            <h6 className="ic_title_color">Arlene McCoy</h6>
            <p className="body_s ic_body_color">3 days ago</p>
          </div>
          <div className={styles.ic_message_description}>
            <p className="ic_body_color">
              A real estate client can be a buyer, seller, investor, or renter
              seeking services related to property transactions. Understanding
              the client’s needs, preferences,
            </p>
          </div>
        </div>
        <div className={styles.ic_recent_message_item}>
          <div className={styles.ic_message_header}>
            <Image src={avatar2} alt="user" width={44} height={44} />
            <h6 className="ic_title_color">Wade Warren</h6>
            <p className="body_s ic_body_color">3 days ago</p>
          </div>
          <div className={styles.ic_message_description}>
            <p className="ic_body_color">
              A real estate client can be a buyer, seller, investor, or renter
              seeking services related to property transactions. Understanding
              the client’s needs, preferences,
            </p>
          </div>
        </div>
        <div className={styles.ic_recent_message_item}>
          <div className={styles.ic_message_header}>
            <Image src={avatar3} alt="user" width={44} height={44} />
            <h6 className="ic_title_color">Jenny Wilson</h6>
            <p className="body_s ic_body_color">3 days ago</p>
          </div>
          <div className={styles.ic_message_description}>
            <p className="ic_body_color">
              A real estate client can be a buyer, seller, investor, or renter
              seeking services related to property transactions. Understanding
              the client’s needs, preferences,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentMessage;
