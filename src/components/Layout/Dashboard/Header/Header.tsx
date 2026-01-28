import userImg from "@/images/user.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "./header.module.css";
import Link from "next/link";

interface HeaderProps {
  isCollapse: boolean;
  handleSidebarHandle: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSidebarHandle, isCollapse }) => {
  return (
    <header
      className={`${styles.ic_header_wrapper} ${
        isCollapse ? styles.ic_collapsed : ""
      }`}
    >
      <div className={styles.ic_header_left}>
        <div className={styles.ic_menu_collapse_btn}>
          <Image
            src="/logo/logo-primary.png"
            alt="logo"
            width={170}
            height={40}
            className={styles.ic_header_logo}
          />
          <button onClick={handleSidebarHandle}>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <div className={styles.ic_header_right}>
        <div className={styles.ic_user}>
          <Image src={userImg} alt="user" width={42} height={42} />
          <span className="ic_fw_500 ic_body_color">Richard Jack</span>
        </div>
        <div className={styles.ic_add_listing}>
          <Link href="/">
            <button className="ic_btn ic_btn_xl">Home</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
