import {
  Close,
  Dashboard,
  HowToReg,
  Menu,
  ShoppingCartOutlined,
  VpnKey,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Action from "../../../components/Action/Action";
import MenuCheckOut from "../../../components/MenuCheckout/MenuCheckOut";
import { AuthContext } from "../../../context/auth/ApiContext";
import Style from "./menubar.module.scss";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function MenuBar(props) {
  const [menu, setMenu] = React.useState(false);
  const { user } = React.useContext(AuthContext);
  const { loader,handleCloseLoader } = props;
  const menuShow = () => {
    setMenu(menu ? false : true);
    document.querySelector(".menu").classList.toggle("active");
  };

  return (
    // <div className={Style.menubar}>
    //   <div className={Style.logoContainer}>
    //     <Image width={30} height={30} src="/Logo.png" loading="lazy" />
    //     <span className={Style.title}>Health Practitioner</span>
    //   </div>
    //   <div className={Style.mobileNav}>
    //     <a className={Style.mobIcon} onClick={menuShow}>
    //       {!menu && <Menu fontSize="large" />}
    //       {menu && <Close fontSize="large" />}
    //     </a>
    //   </div>
    //   <div className={Style.menu_row}>
    //     <ul className={Style.menu}>
    //       <Link href={"/"}>
    //         <a className={[Style.list]}>
    //           <li>Home</li>
    //         </a>
    //       </Link>

    //       <a className={Style.list}>
    //         <li>Course</li>
    //       </a>
    //       {/* <a className={Style.list}>
    //         <li>About</li>
    //       </a>
    //       <a className={Style.list}>
    //         <li>Article</li>
    //       </a>
    //       <a className={Style.list}>
    //         <li>Contact</li>
    //       </a> */}

    //       <div className={Style.noAuthenticate}>
    //         <Link href={"/auth/login"}>
    //           <a className={Style.login}>Log In</a>
    //         </Link>
    //         <Link href={"/auth/register"}>
    //           <a className={Style.register}>Register</a>
    //         </Link>
    //       </div>
    //     </ul>
    //     <div className={Style.noAuthenticate}>
    //       <Link href={"/auth/login"}>
    //         <a className={Style.login}>Log In</a>
    //       </Link>
    //       <Link href={"/auth/register"}>
    //         <a className={Style.register}>Register</a>
    //       </Link>
    //     </div>
    //     <MenuCheckOut />
    //   </div>
    // </div>
    <nav className="navbar navbar-example navbar-expand-lg navbar-dark bg-default card">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center justify-content-center"
          href="javascript:void(0)"
        >
          <Image width={30} height={30} src="/Logo.png" loading="lazy" />
          <b className="m-1 text-dark">Health Practitioner</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex" onsubmit="return false">
            {/* <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            {/* <MenuCheckOut /> */}
            {!user && (
              <Link href={"/auth/login"}>
                <button className="btn btn-large btn-primary">
                  <b>
                    <HowToReg /> Login/Register
                  </b>
                </button>
              </Link>
            )}
            {user && (
              <Link href={"/student/home"}>
                <button className="btn btn-large btn-primary">
                  <b>
                    <Dashboard />
                    My Dashboard
                  </b>
                </button>
              </Link>
            )}
          </form>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
        onClick={handleCloseLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </nav>
  );
}

export default MenuBar;
