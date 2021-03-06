export const welcomeFormJson = {
  id: "sign-up-questions",
  options: {
    title: "",
    addapptation_action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Submit",
    cancel_label: "Cancel",
    max_width: "600px",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    default_picklists: true,
    activate_recaptcha: false,
    auto_superscript: false,
    autosave: false,
    // Design
    field_bkg_color: "#4b4b4b",
    field_border_color: "#4b4b4b",
    field_border_width: "",
    // Step
    form_type: "step",
    show_steps: false,
    step_prev_text: "Back",
    step_next_text: "Continue",
    indicator_spacing: "5",
    indicator_color: "#C4C4C4",
    indicator_color_active: "#5D50E6",
    next_bkg_color_hover: "#7c72e6",
    next_font_color_hover: "#ffffff",
    // Section Attributes
    section_font_size: "",
    section_icon_size: "",
    section_font_color: "",
    section_background: "",
    section_line_width: "",
  },
  records: [
    {
      id: "Text & Icon Settings",
      title: "Text & Icon Settings",
      g_type: "step",
      required: true,
      collapsed: true,
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      children: [
        {
          id: "amb-strategy",
          name: "amb-strategy",
          title:
            "Does your company currently use an account based marketing strategy?",
          g_type: "radio",
          radio_style: "button",
          required: false,
          options: "Yes,No",
          value: "",
          dependency_not_blank: false,
          dependency_values: "",
          dependency_field: "",
          length: null,
          classes: "required-strategy",
        },
        {
          id: "improve",
          name: "improve",
          title: "What part of the ABM process would you like to improve?",
          g_type: "radio",
          radio_style: "button",
          options: "Prospecting,Pipeline Velocity,Up Sell/Cross Sell",
          required: false,
          value: "",
          dependency_not_blank: false,
          dependency_values: "Yes",
          dependency_field: "amb-strategy",
          length: null,
          classes: "a__top-space",
        },
      ],
    },
    {
      id: "design section",
      title: "Design Settings",
      g_type: "step",
      collapsed: true,
      children: [
        {
          id: "likeToSee",
          name: "likeToSee",
          title: "What Score would you like to see?",
          g_type: "radio",
          radio_style: "button",
          required: false,
          options:
            "Lead Score, Contact Score, Data Quality Score, RFM Score, Other",
          value: "",
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
      ],
    },
    {
      id: "design section",
      title: "Design Settings",
      g_type: "step",
      collapsed: true,
      children: [
        {
          id: "nameEmailHeader",
          name: "nameEmailHeader",
          title: "Request your score ",
          g_type: "header",
          required: false,
          value: "",
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "fullName",
          name: "fullName",
          title: "",
          g_type: "text",
          required: false,
          placeholder: "Full Name",
          value: "",
          inline_field: false,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "nameEmailHeader",
          name: "nameEmailHeader",
          title: "",
          g_type: "email",
          required: false,
          placeholder: "Email",
          value: "",
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
          classes: "a__field-space",
        },
      ],
    },
  ],
};
