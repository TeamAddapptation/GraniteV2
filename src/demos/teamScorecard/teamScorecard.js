import "../../templates/dashboard/dashboardStyles.css";
import "./teamScorecard.css";

import { theme } from "../../templates/dashboard/dashboard.js";
import graniteScorecard from "../../graniteFunctions/graniteScorecard";
import graniteTabs from "../../graniteFunctions/graniteTabs";

const teamScorecard = {
  id: "team-scorecard",
  feature: "scorecard",
  options: {
    type: "scorecard",
    padding: "15px",
    margin: "0",
    bkg_img: "",
    bkg_size: "",
    bkg_repeat: "",
    bkg_position: "center",
    bkg_color: "",
  },
  records: [
    {
      type: "header",
      background: "#ffffff",
      children: [
        { value: "Name" },
        { value: "Manager / Supervisor" },
        { value: "Task Completed" },
        { value: "Donors Touched" },
        { value: "Rasied Towards Goal" },
        { value: "Meetings Held" },
        { value: "Comments" },
        { value: "Donors w/o Activity Mo" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Sarah Jones</a>" },
        { value: "Russel Robinson" },
        { value: 65 },
        {
          value: 106,
        },
        { value: 4 },
        { value: 3 },
        { value: 106 },
        { value: 97, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Jeremy Smith</a>" },
        { value: "Diane Scar" },
        { value: 26 },
        {
          value: 48,
        },
        { value: 5 },
        { value: 5 },
        { value: 48 },
        { value: 95, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Jack Mehringer</a>" },
        { value: "Russel Robinson" },
        { value: 15 },
        {
          value: 184,
        },
        { value: 23 },
        { value: 1 },
        { value: 184 },
        { value: 91, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Jill Bakalar</a>" },
        { value: "Melissa Jurkoic" },
        { value: 56 },
        {
          value: 38,
        },
        { value: 11 },
        { value: 2 },
        { value: 38 },
        { value: 85, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Larry Kim</a>" },
        { value: "Carla Vanderhoof" },
        { value: 9 },
        {
          value: 45,
        },
        { value: 12 },
        { value: 5 },
        { value: 45 },
        { value: 82, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Katherine Gervase</a>" },
        { value: "Melissa Jurkoic" },
        { value: 11 },
        {
          value: 65,
        },
        { value: 14 },
        { value: 3 },
        { value: 65 },
        { value: 75, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Sally Stone</a>" },
        { value: "Eric Hobson" },
        { value: 38 },
        {
          value: 25,
        },
        { value: 9 },
        { value: 6 },
        { value: 25 },
        { value: 71, format: "custom", symbol: "%" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "<a href='employeeScorecard.html'>Thomas Walkey</a>" },
        { value: "Russel Robinson" },
        { value: 19 },
        {
          value: 11,
        },
        { value: 16 },
        { value: 4 },
        { value: 11 },
        { value: 68, format: "custom", symbol: "%" },
      ],
    },
  ],
};
graniteScorecard(teamScorecard, theme);

/*------------------------
Sidebar Menu
-------------------------*/
let scoreCardSidebar = {
  id: "a__scorecard-sidebar",
  options: {
    g_style: "block",
    id: "a__sidebar-template",
    g_align_tabs: "left",
    g_font_size: "16",
    g_font_color: "#5d5d5d",
    g_font_hover_color: "#a4a4a4",
    g_icon_size: "",
    g_step_number_color: "",
    g_title_size: "20px",
    g_title_color: "",
    g_description_size: "12px",
    g_description_color: "",
    g_highlight_color: "#5D50E6",
    g_background_color: "#ffffff",
    g_background_active_color: "#F7F6FE",
    g_background_hover_color: "#F7F6FE",
    g_align: "left",
    g_align_icon: "flex-start",
    g_direction: true,
    g_padding: "10px 40px",
    g_margin: "0",
    g_border_width: "",
    g_border_color: "red",
    g_border_radius: "",
    g_full_width: true,
    padding_top: "0",
    padding_bottom: "0",
    margin_top: "0",
    margin_bottom: "0",
    g_classes: "",
    g_cursor_disabled: false,
    g_action: "hash_builder",
  },
  records: [
    {
      name: "Team Scorecard",
      desc: "",
      icon: "",
      href: "/teamScorecard.html",
    },
    {
      name: "Employee Scorecard",
      desc: "",
      href: "/employeeScorecard.html",
    },
  ],
};
graniteTabs(scoreCardSidebar, theme);
