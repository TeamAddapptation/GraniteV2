import "./questions.css";
import graniteForm from "../../graniteFunctions/graniteForm.js";
import { themeLight } from "../../jsonSamples/theme.js";
import { welcomeFormJson } from "./formJson.js";

graniteForm(welcomeFormJson, themeLight);

const next = document.getElementById("g__next_btn");
const stepOne = document.querySelector(".required-strategy");
const radioBtns = stepOne.querySelectorAll("input");
let StrategyValue = "";

next.setAttribute("disabled", true);
radioBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    next.disabled = false;
    StrategyValue = btn.value;
  });
});
