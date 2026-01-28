import Image from "next/image";
import styles from "./not-found.module.css";
import notFoundImg from "@/images/error.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.ic_not_found_wrap}>
      <Image src={notFoundImg} alt="error" />
      <h3 className="ic_title_color">Oops!</h3>
      <p className="ic_body_color">
        There’s nothing here, but if you feel this is an error please let us
        know let us know
      </p>
      <Link href="/" className="ic_btn ic_btn_xl">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
