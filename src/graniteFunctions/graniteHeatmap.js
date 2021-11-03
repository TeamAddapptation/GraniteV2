export default function graniteHeatmap(json, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  console.log(json);
  const id = json.id;
  const o = json.options;
  const r = json.records;
  const t = jsonTheme;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const graniteDiv = document.getElementById(id);
  /*---------------------------------------------
    Empty the Div
    ---------------------------------------------*/
  graniteDiv.innerHTML = "";
  /*---------------------------------------------
    CSS Attributes
    ---------------------------------------------*/
  let font_style = "hero-new, sans-serif";
  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var scorecardCss = document.createElement("style");
  scorecardCss.id = "g__css_" + id;
  scorecardCss.innerHTML = `
  ${cssId}{
    overflow: auto;
    width: 100%;
  }
  ${cssId} .g__filters-container{
    background: transparent;
    margin: 0 auto;
  }
    ${cssId} #g__${id}{
      font-family: hero-new, sans-serif;
      font-weight: 400;
      font-style: normal;
      background: #ffffff;
      width: 100%;
      margin: 0 auto;
      color: #5D5D5D;
      min-width: 600px;
      table-layout: fixed;
    }
    ${cssId} td,
    ${cssId} tbody {
      text-align: left;
      padding: 8px;
      padding: 15px;
      font-size: 14px;
    }
    ${cssId} tr td{
      border: 1px solid #ffffff;
    }
    ${cssId} tr td a{
      text-decoration: none;
      color: #5D5D5D;
    }
    ${cssId} tr td a:hover{
      color: #A1A1A1;
    }
    ${cssId} tr td.g__col-1 {
      text-align: right;
    }
    ${cssId} tr td.g__data-cell{
      position: relative;
    }
    ${cssId} tr td.g__td-add{
      width: 10px;
      padding: 5px;
      background: #F5F5F5;
    }

    ${cssId} tr.g__row{
      border: 0px solid #EAEAEA;
    }
    ${cssId} th{
      position: relative;
      padding: 10px;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      transition: all 0.5s ease;
    }
    ${cssId} th:hover{
      background:#F5F5F5;
    }
    ${cssId} thead tr{
      background: transparent;
      font-size: 1rem;
    }
    /* ----------
    Tooltip
    ---------- */
    .g__data-cell:hover .g__heatmap-tooltip{
      opacity: 1;
      display: block;
    }
    .g__heatmap-tooltip {
      opacity: 0;
      position: absolute;
      top: 20px;
      right: 50%;
      width: 200px;
      background: #ffffff;
      padding: 15px;
      z-index: 5;
      border: 1px solid #EAEAEA;
      border-radius: 5px;
      transition: all 0.5s ease;
  }
  /* ----------
    Formula Dropdown
    ---------- */
    ${cssId} th .g__header-dropdown{
    position: absoliute;
    right: 0;
    top: 10px;
    opacity: 0;
    float: right;
    font-size: 14px;
    transition: all 0.5s ease;
    }
    ${cssId} th:hover .g__header-dropdown{
      opacity: 1;
      }
    ${cssId} .g__formulas-menu{
      opacity: 0;
      display:none;
      position: absolute;
      top: 40px;
      right: 0;
      width: 200px;
      background: #fff;
      z-index: 10;
      border: 0.5px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 15px;
      transition: all 0.5s ease;
    }
    ${cssId} .g__formulas-menu.g__formulas-active{
      display: block;
      opacity: 1;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list{
      list-style-type: none;
      margin: 0;
      padding:0;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list{
      list-style-type: none;
      margin: 0;
      padding:0;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list li{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list li h4{
      font-size: 14px;
      font-weight: normal;
      margin: 5px 0;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list li p{
      font-size: 10px;
      margin: 8px 0;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list li a{
      font-size: 12px;
      text-decoration: none;
      color: #5D5D5D;
    }
    ${cssId} .g__formulas-menu ul.g__formulas-list li a:hover{
      color: #101010;
    }
    @media (max-width: 768px) {
      ${cssId} [data-col-num="0"] {
        width: 100px;
      }
      ${cssId} th{
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
      `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(scorecardCss);
  /*---------------------------------------------
    Main Build
    ---------------------------------------------*/
  let rowCount;
  // Row Count
  for (let i = 0; i < r.length; i++) {
    if (r[i].type === "row") {
      rowCount = r[i].children.length;
      break;
    }
  }

  // Main table container
  let table = document.createElement("table");
  table.classList.add("animate__animated");
  table.classList.add("animate__fadeIn");
  table.id = "g__" + id;
  graniteDiv.appendChild(table);

  // Table body
  const tbody = document.createElement("tbody");
  let rowArr = [];
  // Record loop and build
  r.forEach((r, index) => {
    let type = r.type;

    switch (type) {
      case "header":
        const thead = document.createElement("thead");
        r.background ? (thead.style.background = r.background) : "";
        let headerRow = document.createElement("tr");
        r.children.forEach((cell, index) => {
          const th = document.createElement("th");
          !!cell.value ? th.setAttribute("data-org-value", cell.value) : "";
          !!cell.align_text ? (th.style.textAlign = cell.align_text) : "";
          !!cell.fixed_width ? (th.style.width = cell.fixed_width) : "";
          th.setAttribute("data-col-num", index);
          th.innerHTML = cell.value;
          if (cell.formula) {
            const icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-sort-down g__header-dropdown");
            th.appendChild(icon);
            const formulasContainer = document.createElement("div");
            formulasContainer.classList.add("g__formulas-menu");
            const formulasList = document.createElement("ul");
            formulasList.classList.add("g__formulas-list");
            const dataOptions = [
              "Neglected Opportunities",
              "Won deals ($)",
              "Lost deals ($)",
              "Pipeline owned ($)",
              "Quota attainment",
            ];
            dataOptions.forEach((option, index) => {
              const listItem = document.createElement("li");
              if (index === 0) {
                listItem.innerHTML = `<h4>Formulas</h4> <a href="/conversionFormulas.html">Edit</a>`;
              } else {
                listItem.innerHTML = `<p>${option}</p> <input class="g__formulas-checkbox" type="checkbox">`;
              }

              formulasList.appendChild(listItem);
            });
            formulasContainer.appendChild(formulasList);
            th.appendChild(formulasContainer);

            icon.addEventListener("click", () => {
              formulasContainer.classList.toggle("g__formulas-active");
            });
          }
          headerRow.appendChild(th);
        });
        if (o.add_row) {
          const addRowHeader = document.createElement("th");
          addRowHeader.classList.add("g__td-add-header");
          addRowHeader.style.width = "50px";
          addRowHeader.innerHTML = "<i class='fal fa-plus'></i>";
          headerRow.appendChild(addRowHeader);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);
        break;
      case "row":
        rowArr.push(index);
        let tr = document.createElement("tr");
        tr.classList.add("g__row");
        r.background ? (tr.style.background = r.background) : "";
        r.children.forEach((cell, index) => {
          const td = document.createElement("td");
          if (index === 0) {
            td.classList.add("g__col-1");
          }
          if (cell.heat_value) {
            td.classList.add("g__data-cell");
            td.style.backgroundColor = colorIndicator(o, cell);
            if (cell.tooltip_html) {
              const tooltip = document.createElement("div");
              tooltip.classList.add("g__heatmap-tooltip");
              tooltip.innerHTML = `${cell.tooltip_html}`;
              td.appendChild(tooltip);
            }
          }
          if (cell.show_value) {
            td.innerHTML = cell.value;
          }
          if (cell.show_value && cell.heat_value) {
            td.style.color = totalFontColor(o, cell);
            td.style.textAlign = "center";
          }
          td.setAttribute("data-org-value", cell.value);
          tr.appendChild(td);
        });
        if (o.add_row) {
          const addRow = document.createElement("td");
          addRow.classList.add("g__td-add");
          addRow.style.width = "50px";
          tr.appendChild(addRow);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);
        break;
    }
  });

  graniteDiv.appendChild(table);
  /*---------------------------------------------
    Linear Color Map
    ---------------------------------------------*/

  function roundDown(num, precision) {
    num = parseFloat(num);
    if (!precision) return num.toLocaleString();

    return (Math.floor(num / precision) * precision).toLocaleString() / 100;
  }

  function shadeHexColor(color, percent) {
    var f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = (f >> 8) & 0x00ff,
      B = f & 0x0000ff;
    return (
      "#" +
      (
        0x1000000 +
        (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
      )
        .toString(16)
        .slice(1)
    );
  }
  /*---------------------------------------------
    Functions
    ---------------------------------------------*/

  function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function colorIndicator(o, cell) {
    let colorPercent = 1 - roundDown(cell.value, 10);
    let bkgColor = shadeHexColor(o.color, colorPercent);
    return bkgColor;
  }
  function totalFontColor(o, cell) {
    let opacity = roundDown(cell.value, 10);
    let fontColor = shadeHexColor(o.color, opacity);
    return fontColor;
  }
}
