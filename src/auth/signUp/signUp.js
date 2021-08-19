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
    header_text: "Let’s Get Started",
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

/*------------------------
Login Form
-------------------------*/
const loginForm = {
  id: "sign-up-form",
  options: {
    title: "",
    addapptation_action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "g_sf2dsdsf33",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Create Account",
    cancel_label: "Cancel",
    max_width: "600px",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    activate_recaptcha: false,
    auto_superscript: false,
    autosave: false,
    action: "/",
    // Design
    field_bkg_color: "#FFFFFF",
    field_border_color: "#4b4b4b",
    field_border_width: "",
  },
  records: [
    {
      id: "full-name",
      name: "name",
      title: "",
      g_type: "text",
      required: false,
      options: "",
      value: "",
      placeholder: "Full Name",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "email",
      name: "email",
      title: "",
      g_type: "email",
      required: false,
      options: "",
      value: "",
      placeholder: "Email",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "password",
      name: "password",
      title: "",
      g_type: "password",
      required: false,
      options: "",
      value: "",
      show_password_option: true,
      placeholder: "Password",
      radio_style: "button",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
  ],
};
graniteForm(loginForm, theme);
