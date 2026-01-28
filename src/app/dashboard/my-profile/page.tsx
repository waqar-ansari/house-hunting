import ProfileInformation from "@/components/Dashboard/MyProfile/ProfileInformation/ProfileInformation";
import styles from "./profile.module.css";
import SocialMedia from "@/components/Dashboard/MyProfile/SocialMedia/SocialMedia";
import ChangePassword from "@/components/Dashboard/MyProfile/ChangePassword/ChangePassword";

const MyProfilePage = () => {
  return (
    <>
      <div className="ic_dashboard_card ic_mb_24">
        <div className={styles.ic_title}>
          <h5 className=" ic_fw_600 ic_title_color">Profile Information</h5>
        </div>
        <ProfileInformation />
      </div>
      <div className="ic_dashboard_card ic_mb_24">
        <div className={styles.ic_title}>
          <h5 className=" ic_fw_600 ic_title_color">Social Media</h5>
        </div>
        <SocialMedia />
      </div>
      <div className="ic_dashboard_card ic_mb_24">
        <div className={styles.ic_title}>
          <h5 className=" ic_fw_600 ic_title_color">Change password</h5>
        </div>
        <ChangePassword />
      </div>
    </>
  );
};

export default MyProfilePage;
