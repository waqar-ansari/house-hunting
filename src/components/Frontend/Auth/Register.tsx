import styles from "./auth.module.css";

const Register = () => {
  return (
    <form>
      <div className={styles.ic_form_group}>
        <label htmlFor="userName" className="body_s ic_title_color">
          User name
        </label>
        <input type="text" id="userName" placeholder="Enter name" />
      </div>
      <div className={styles.ic_form_group}>
        <label htmlFor="email" className="body_s ic_title_color">
          Email
        </label>
        <input type="email" id="email" placeholder="Enter email" />
      </div>
      <div className={styles.ic_form_group}>
        <label htmlFor="password" className="body_s ic_title_color">
          Password
        </label>
        <input type="password" id="password" placeholder="Enter password" />
      </div>
      <div className={styles.ic_form_group}>
        <label htmlFor="confirmPassword" className="body_s ic_title_color">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Enter confirm password"
        />
      </div>
      <div className={styles.ic_submit_btn}>
        <button type="submit" className="ic_btn ic_btn_xl">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
