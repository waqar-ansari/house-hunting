import { Checkbox } from "antd";
import styles from "./auth.module.css";
import Link from "next/link";

const SignIn = () => {
  return (
    <form>
      <div className={styles.ic_form_group}>
        <label htmlFor="userName" className="body_s ic_title_color">
          User name
        </label>
        <input type="text" id="userName" placeholder="Enter name" />
      </div>
      <div className={styles.ic_form_group}>
        <label htmlFor="password" className="body_s ic_title_color">
          Password
        </label>
        <input type="password" id="password" placeholder="Enter password" />
      </div>
      <div className={`${styles.ic_form_group} ${styles.ic_check_forgot}`}>
        <Checkbox>
          <p className="body_s ic_title_color">Keep me sign in</p>
        </Checkbox>
        <Link href="#" className="body_s ic_title_color">
          Forgot your password?
        </Link>
      </div>
      <div className={styles.ic_submit_btn}>
        <button type="submit" className="ic_btn ic_btn_xl">
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
