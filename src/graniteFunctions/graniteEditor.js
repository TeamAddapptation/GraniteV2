export default function graniteEditor(jsonBlock, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;

  /*---------------------------------------------
    Check Alignment & Set Mode
    ---------------------------------------------*/
  let granite_div = document.getElementById(id);
  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }

  /*---------------------------------------------
    CSS
    ---------------------------------------------*/
  var textCss = document.createElement("style");
  textCss.innerHTML = `
    /*---------------------------------------------
    No Records
    ---------------------------------------------*/
    ${cssId} {

    }

    @media only screen and (max-width: 768px) {
      }
    `;
  document.head.appendChild(textCss);

  const thumbContainer = document.createElement("form");
  thumbContainer.classList.add("g__form-editor");

  r.forEach((r) => {});

  /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
  granite_div.appendChild(thumbContainer);
}
