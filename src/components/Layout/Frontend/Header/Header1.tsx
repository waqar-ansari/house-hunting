"use client";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { RiCloseCircleLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import AuthModal from "@/components/Frontend/Auth/AuthModal";

const Header1 = () => {
  //Component state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  //toggle dropdown
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  //get pathname
  const pathname = usePathname();
  //handle modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //sticky  header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".ic_header_wrap");
      header?.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  //active path

  const activePath = (path: string) => {
    if (pathname === path) {
      return styles.active;
    } else {
      return "";
    }
  };

  return (
    <>
      <div
        className={`${styles.ic_mobile_menu_overlay} ${
          menuOpen && styles.active
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>
      {/* Login Registration Modal */}
      <AuthModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <div
        className={`${styles.ic_header_wrapper} ${styles.ic_header1_wrapper}  ic_header_wrap`}
      >
        <div className="ic_container">
          <div className={styles.ic_header_wrap}>
            <div className={styles.ic_brand}>
              <Link href="/">
                <Image
                  src="/logo/logo.png"
                  alt="RealtyClan"
                  width={180}
                  height={40}
                />
              </Link>
            </div>
            <div
              className={`${styles.ic_header_menu} ${menuOpen && styles.open}`}
            >
              <div className={styles.ic_mobile_logo_close}>
                <div className={styles.ic_logo}>
                  <Image
                    src="/logo/logo-primary.png"
                    alt="RealtyClan"
                    width={180}
                    height={40}
                  />
                </div>
                <button
                  className={styles.ic_menu_close}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <RiCloseCircleLine />
                </button>
              </div>
              <ul className={styles.ic_navbar_nav}>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="#"
                    className={`${styles.ic_nav_link} ${activePath("/")}`}
                    onClick={() => toggleDropdown("home")}
                  >
                    Home
                  </Link>
                  <ul
                    className={`${styles.ic_dropdown_menu} ${
                      activeDropdown === "home" ? styles.active : ""
                    }`}
                  >
                    <li>
                      <Link href="/">Home 1</Link>
                    </li>
                    <li>
                      <Link href="/home-2">Home 2</Link>
                    </li>
                    <li>
                      <Link href="/home-3">Home 3</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="/about"
                    className={`${styles.ic_nav_link} ${activePath("/about")}`}
                  >
                    About
                  </Link>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="#"
                    className={`${styles.ic_nav_link} ${activePath(
                      "/listing"
                    )}`}
                    onClick={() => toggleDropdown("listing")}
                  >
                    Listing
                  </Link>
                  <ul
                    className={`${styles.ic_dropdown_menu} ${
                      activeDropdown === "listing" ? styles.active : ""
                    }`}
                  >
                    <li>
                      <Link href="/listing">Listing Grid</Link>
                    </li>
                    <li>
                      <Link href="/listing-list">Listing List</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="#"
                    className={`${styles.ic_nav_link}`}
                    onClick={() => toggleDropdown("pages")}
                  >
                    Pages
                  </Link>
                  <ul
                    className={`${styles.ic_dropdown_menu} ${
                      activeDropdown === "pages" ? styles.active : ""
                    }`}
                  >
                    <li>
                      <Link href="/add-listing">Add Listing</Link>
                    </li>
                    <li>
                      <Link href="/listing/details">Listing Details</Link>
                    </li>
                    <li>
                      <Link href="/agent">Agent</Link>
                    </li>
                    <li>
                      <Link href="/agent/details">Agent Details</Link>
                    </li>
                    <li>
                      <Link href="/blog/details">Blog Details</Link>
                    </li>
                    <li>
                      <Link href="/compare">Compare</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link href="/agency">Agency</Link>
                    </li>
                    <li>
                      <Link href="/agency/details">Agency Details</Link>
                    </li>
                    <li>
                      <Link href="/not-found">404 page</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="#"
                    className={`${styles.ic_nav_link} ${activePath("/blog")}`}
                    onClick={() => toggleDropdown("blog")}
                  >
                    Blog
                  </Link>
                  <ul
                    className={`${styles.ic_dropdown_menu} ${
                      activeDropdown === "blog" ? styles.active : ""
                    }`}
                  >
                    <li>
                      <Link href="/blog">Blog Grid</Link>
                    </li>
                    <li>
                      <Link href="/blog-2">Blog List</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="/contact"
                    className={`${styles.ic_nav_link} ${activePath(
                      "/contact"
                    )}`}
                  >
                    Contact
                  </Link>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="#"
                    className={styles.ic_nav_link}
                    onClick={showModal}
                  >
                    <LuUser /> Login/Register
                  </Link>
                </li>
                <li className={styles.ic_nav_item}>
                  <Link
                    href="/dashboard"
                    className={`${styles.ic_nav_link} ic_btn ic_btn_xl`}
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.ic_mobile_menu_open}>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <SlMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
