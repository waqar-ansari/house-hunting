import { Modal } from "antd";
import styles from "./auth.module.css";
import { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

//props type
interface ModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
const AuthModal: React.FC<ModalProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  //component state
  const [authTab, setAuthTab] = useState<string>("signIn");
  return (
    <div>
      <Modal
        title={<h6 className="ic_title_color">Welcome to RealtyClan</h6>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <div className={styles.ic_auth_modal_body}>
          <div className={`${styles.ic_auth_tab} ic_mb_30`}>
            <button
              className={`body_s ic_fw_500 ${
                authTab === "signIn" && styles.active
              }`}
              onClick={() => setAuthTab("signIn")}
            >
              Sign in
            </button>
            <button
              className={`body_s ic_fw_500 ${
                authTab === "register" && styles.active
              }`}
              onClick={() => setAuthTab("register")}
            >
              Register
            </button>
          </div>
          <div className={styles.ic_auth_form_wrap}>
            {authTab === "signIn" && <SignIn />}
            {authTab === "register" && <Register />}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AuthModal;
