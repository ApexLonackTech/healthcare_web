import React from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import Style from "./menucheckout.module.scss";
import {
  ShoppingCartOutlined,
  ClearOutlined,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import Button from "../Button/Button/Button";

function MenuCheckOut(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    // <div className={Style.menuCheckOut}>
    //   <a className={props.border ? Style.border : ""}>
    //     <div className={Style.menuBack + " l_p_b l_w"}>
    //       <ShoppingCartOutlined />
    //       <span className={Style.cartTotal}>14</span>
    //     </div>
    //     <div style={props.style} className={Style.action_layout + " l_r_b d_t"}>
    //       <div className={Style.headerCart}>
    //         <span className={Style.headTitle}>Item(s) in your Cart</span>
    //         <span className={Style.headTotal}>₦5,500</span>
    //       </div>

    //       <li>
    //         <ShoppingBasketOutlined sx={{ color: "#545be8", marginRight: 2 }} />{" "}
    //         Practice Exams | AWS Certified Solutions Architect Associate{" "}
    //         <ClearOutlined />
    //       </li>
    //       <hr />
    //       <li>
    //         <ShoppingBasketOutlined sx={{ color: "#545be8", marginRight: 2 }} />
    //         Practice Exams | AWS Certified Solutions Architect Associate{" "}
    //         <ClearOutlined />
    //       </li>
    //       <hr />
    //       <Button style={{ backgroundColor: "#545be8" }} label="Checkout" />
    //     </div>
    //   </a>
    // </div>
    <div className="demo-inline-spacing px-4">
      <div className="d-flex align-items-center justify-content-center btn-group">
     
        <button
          type="button"
          className="btn btn-icon rounded-pill dropdown-toggle hide-arrow"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
           <ShoppingCartOutlined />
          <b className="" >14</b>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
        <div className="">

        </div>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              Separated link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuCheckOut;
