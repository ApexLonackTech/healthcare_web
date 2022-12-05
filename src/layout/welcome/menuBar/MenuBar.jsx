import { Close, Menu, ShoppingCartOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Action from "../../../components/Action/Action";
import MenuCheckOut from "../../../components/MenuCheckout/MenuCheckOut";
import Style from "./menubar.module.scss";

function MenuBar(props) {
  const [menu, setMenu] = React.useState(false);
  const menuShow = () => {
    setMenu(menu ? false : true);
    document.querySelector(".menu").classList.toggle("active");
  };

  return (
    <div className={Style.menubar}>
      <div className={Style.logoContainer}>
        <Image width={30} height={30} src="/Logo.png" loading="lazy" />
        <span className={Style.title}>Health Practitioner</span>
      </div>
      <div className={Style.mobileNav}>
        <a className={Style.mobIcon} onClick={menuShow}>
          {!menu && <Menu fontSize="large" />}
          {menu && <Close fontSize="large" />}
        </a>
      </div>
      <div className={Style.menu_row}>
        <ul className={Style.menu}>
          <Link href={"/"}>
            <a className={[Style.list]}>
              <li>Home</li>
            </a>
          </Link>

          <a className={Style.list}>
            <li>Course</li>
          </a>
          {/* <a className={Style.list}>
            <li>About</li>
          </a>
          <a className={Style.list}>
            <li>Article</li>
          </a>
          <a className={Style.list}>
            <li>Contact</li>
          </a> */}

          <div className={Style.noAuthenticate}>
            <Link href={"/auth/login"}>
              <a className={Style.login}>Log In</a>
            </Link>
            <Link href={"/auth/register"}>
              <a className={Style.register}>Register</a>
            </Link>
          </div>
        </ul>
        <div className={Style.noAuthenticate}>
          <Link href={"/auth/login"}>
            <a className={Style.login}>Log In</a>
          </Link>
          <Link href={"/auth/register"}>
            <a className={Style.register}>Register</a>
          </Link>
        </div>
        <MenuCheckOut />
      </div>
    </div>
  );
}

export default MenuBar;
