import "./signUpStyles.css";

import graniteButton from "../../graniteFunctions/graniteButton.js";
import graniteCode from "../../graniteFunctions/graniteCode.js";
import graniteDivider from "../../graniteFunctions/graniteDivider.js";
import graniteFilter from "../../graniteFunctions/graniteFilter.js";
import graniteForm from "../../graniteFunctions/graniteForm.js";
import graniteGauge from "../../graniteFunctions/graniteGauge.js";
import graniteHeader from "../../graniteFunctions/graniteHeader.js";
import graniteImage from "../../graniteFunctions/graniteImage.js";
import graniteProgressBar from "../../graniteFunctions/graniteProgressBar.js";
import graniteSearch from "../../graniteFunctions/graniteSearch.js";
import graniteSelect from "../../graniteFunctions/graniteSelect.js";
import graniteScorecard from "../../graniteFunctions/graniteScorecard.js";
import graniteText from "../../graniteFunctions/graniteText.js";
/*------------------------
Theme
-------------------------*/
const theme = {
  primary: null,
  secondary: null,
  mode: "midnight",
};
/*------------------------
Reset Header
-------------------------*/
const signUpHeader = {
  id: "sign-up-header",
  name: "Sign Up",
  feature: "header",
  options: {
    header_text: "Sign up",
    text_color: "#000000",
    font_size: "36",
    margin_bottom: "20",
  },
  records: [],
};
graniteHeader(signUpHeader, theme);

/*------------------------
Login SSO Header
-------------------------*/
const loginSsoHeader = {
  id: "login-sso-header",
  name: "Sign in with",
  feature: "header",
  options: {
    header_text: "Sign in with",
    text_color: "#B4B4B4",
    font_size: "16",
    header_size: "h4",
  },
  records: [],
};
graniteHeader(loginSsoHeader, theme);
