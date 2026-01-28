"use client";
import avatar from "@/images/avatar-01.png";
import avatar2 from "@/images/avatar-02.png";
import avatar3 from "@/images/avatar-03.png";
import avatar4 from "@/images/avatar-04.png";
import avatar5 from "@/images/avatar-05.png";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { HiMiniClock, HiMiniMinusCircle } from "react-icons/hi2";
import { IoChevronBack, IoPaperPlaneOutline } from "react-icons/io5";
import styles from "./message.module.css";

const Message = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleMessageSidebarHandle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`ic_dashboard_card ${styles.ic_padding_0}`}>
      <div className={styles.ic_message_wrap}>
        <div
          className={`${styles.ic_message_sidebar} ${
            isActive ? styles.is_active : ""
          }`}
        >
          <div className={styles.ic_top_user}>
            <div className={styles.ic_avatar}>
              <Image src={avatar} alt="User" width={48} height={48} />
              <span className={`${styles.ic_status} ${styles.active}`}>
                <GoDotFill />
              </span>
            </div>
            <button className={styles.ic_back}>
              <IoChevronBack />
            </button>
          </div>
          <div className={styles.ic_message_search}>
            <input type="text" placeholder="Search Contact…" />
            <FiSearch />
          </div>
          <div className={styles.ic_message_list_wrap}>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.active}`}>
                    <GoDotFill />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Arlene McCoy
                  </h6>
                  <p className="body_s ic_fw_700 ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">just now</p>
                <GoDotFill />
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar2} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.inActive}`}>
                    <HiMiniMinusCircle />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Ralph Edwards
                  </h6>
                  <p className="body_s  ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">15 min</p>
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar3} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.away}`}>
                    <HiMiniClock />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Cameron Williamson
                  </h6>
                  <p className="body_s  ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">15 min</p>
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar4} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.active}`}>
                    <GoDotFill />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Arlene McCoy
                  </h6>
                  <p className="body_s ic_fw_700 ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">just now</p>
                <GoDotFill />
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar5} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.inActive}`}>
                    <HiMiniMinusCircle />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Ralph Edwards
                  </h6>
                  <p className="body_s  ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">15 min</p>
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar3} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.away}`}>
                    <HiMiniClock />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Cameron Williamson
                  </h6>
                  <p className="body_s  ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">15 min</p>
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.active}`}>
                    <GoDotFill />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Arlene McCoy
                  </h6>
                  <p className="body_s ic_fw_700 ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">just now</p>
                <GoDotFill />
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar2} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.inActive}`}>
                    <HiMiniMinusCircle />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Ralph Edwards
                  </h6>
                  <p className="body_s  ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">15 min</p>
              </div>
            </div>
            <div
              onClick={handleMessageSidebarHandle}
              className={styles.ic_message_list_item}
            >
              <div className={styles.ic_list_left}>
                <div className={styles.ic_avatar}>
                  <Image src={avatar3} alt="User" width={48} height={48} />
                  <span className={`${styles.ic_status} ${styles.away}`}>
                    <HiMiniClock />
                  </span>
                </div>
                <div className={styles.ic_list_user_name}>
                  <h6 className="body_s ic_fw_700 ic_title_color">
                    Cameron Williamson
                  </h6>
                  <p className="body_s  ic_title_color">
                    Internet Banner Internet Banner Internet Banner
                  </p>
                </div>
              </div>
              <div className={styles.ic_list_time}>
                <p className="body_s ic_body_color">15 min</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ic_message_right}>
          <div className={styles.ic_message_box_top}>
            <div className={styles.ic_avatar_user_name}>
              <div className={styles.ic_avatar}>
                <Image src={avatar} alt="User" width={48} height={48} />
                <span className={`${styles.ic_status} ${styles.active}`}>
                  <GoDotFill />
                </span>
              </div>
              <div className={styles.ic_content}>
                <h6 className="body_s ic_fw_700 ic_title_color">
                  Lewis Simmons
                </h6>
                <p className="body_s ic_body_color">Active</p>
              </div>
              <button
                className={styles.ic_back}
                onClick={handleMessageSidebarHandle}
              >
                <IoChevronBack />
              </button>
            </div>
          </div>
          <div className={styles.ic_message_box_wrap}>
            <div className={styles.ic_message_day_wrap}>
              <div className={styles.ic_message_day_item}>
                <h6 className="body_s ic_fw_600 text_center">
                  October 07, 2024
                </h6>
                <div
                  className={`${styles.ic_send_message} ${styles.ic_message_item}`}
                >
                  <Image src={avatar} alt="User" width={40} height={40} />
                  <div className={styles.ic_send_message_content}>
                    <p className={styles.ic_send_message_con_item}>Hi</p>
                    <p className={styles.ic_send_message_con_item}>
                      Hey, how are you?
                    </p>
                    <div>
                      <p className="body_s ic_fw_500 ic_body_color">1:45pm</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.ic_receive_message} ${styles.ic_message_item}`}
                >
                  <div className={styles.ic_receive_message_item}>
                    <p className="body_s ic_body_color">
                      Lorem ipsum dolor sit amet, consectetur adipisc elit.
                      Donec tempus erat in et. In integer iaculis eu tristique
                      egestas. Tempus enim, sit senectus sit vitae quis velit.
                    </p>
                  </div>
                  <div className={styles.ic_receive_time}>
                    <p className="body_s ic_fw_500 ic_body_color">1:45pm</p>
                  </div>
                </div>
              </div>
              <div className={styles.ic_message_day_item}>
                <h6 className="body_s ic_fw_600 text_center">
                  October 08, 2024
                </h6>
                <div
                  className={`${styles.ic_send_message} ${styles.ic_message_item}`}
                >
                  <Image src={avatar} alt="User" width={40} height={40} />
                  <div className={styles.ic_send_message_content}>
                    <p className={styles.ic_send_message_con_item}>Hi</p>
                    <p className={styles.ic_send_message_con_item}>
                      Hey, how are you?
                    </p>
                    <div>
                      <p className="body_s ic_fw_500 ic_body_color">1:45pm</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.ic_receive_message} ${styles.ic_message_item}`}
                >
                  <div className={styles.ic_receive_message_item}>
                    <p className="body_s ic_body_color">
                      Lorem ipsum dolor sit amet, consectetur adipisc elit.
                      Donec tempus erat in et. In integer iaculis eu tristique
                      egestas. Tempus enim, sit senectus sit vitae quis velit.
                    </p>
                  </div>
                  <div className={styles.ic_receive_time}>
                    <p className="body_s ic_fw_500 ic_body_color">1:45pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ic_send_message_box}>
            <div className={styles.ic_textarea}>
              <textarea
                name="message"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button className={styles.ic_send_btn}>
              <IoPaperPlaneOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
