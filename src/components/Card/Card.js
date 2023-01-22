import classes from "./card.module.css";

import logo from "./logo.png";
import TextField from "@mui/material/TextField";
import { collapseClasses } from "@mui/material";
function Card() {
  return (
   <div className={classes.main_wrapper}>
     <div className={classes.card}>
      <div className={classes.left}>
        <div className={classes.top}>
          <h2 className={classes.heading}>Login</h2>
          <p className={classes.desc}>
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
        <div className={classes.bottom}>
          <img src={logo} className={classes.logo_img} />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.right_top}>
          <TextField
            id="standard-basic"
            label="Enter Email/Mobile number"
            variant="standard"
            className={classes.inputStyle}
          />
          <p className={classes.right_to_desc}>
            By continuing, you agree to Flipkart's <span className={classes.link}>Terms of Use </span>and
            <span className={classes.link}> Privacy Policy.</span>
          </p>
          <button className={classes.otp_button}>Request OTP</button>
        </div>

        <div className={classes.right_bottom}>
            <p className={classes.link}>New to Flipkart? Create an account</p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Card;
