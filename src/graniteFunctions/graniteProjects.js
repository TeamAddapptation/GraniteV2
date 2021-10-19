export default function graniteProjects(jsonBlock, jsonTheme) {
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
    ${cssId} .g__project-container{
        display: flex;
        flex-wrap: wrap;
    }
    ${cssId} .g__project-cont{
      display: flex;
      justify-content:center;
      align-items: center;
      padding: 15px;
      background: #FFFFFF;
      border: 1px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }
    ${cssId} .g__project-thumb{
      background: #FFFFFF;
      border: 1px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      margin: 15px 50px 15px 0;
    }
    ${cssId} .g__project-img-cont{
      width: 200px;
      height: 200px;
      padding: 15px
    }
    ${cssId} .g__project-details{
      border-top: 1px solid #eaeaea;
      padding: 15px
    }
    ${cssId} .g__name{
      font-family: Hero New;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      color: #5d5d5d;
      margin: 0;
    }
    ${cssId} .g__edit-date{
      font-family: Hero New;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 14px;
      color: #bcbcbc;
      margin: 0;
    }
    ${cssId} .g__img-cont img{
      width: 100%;
      height: auto;
    }
    ${cssId} a{
      text-decoration: none;
    }

    @media only screen and (max-width: 768px) {
      }
    `;
  document.head.appendChild(textCss);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("g__project-container");

  r.forEach((r) => {
    const project = document.createElement("a");
    if (r.project_link) {
      project.href = r.project_link || "#";
    }
    project.classList.add("g__project-thumb");

    const imgCont = document.createElement("div");
    imgCont.classList.add("g__project-img-cont");
    if (r.bkg_color) {
      imgCont.style.backgroundColor = r.bkg_color;
    }
    if (r.img) {
      const thumbImg = document.createElement("img");
      thumbImg.classList.add("g__project-img");
      thumbImg.src = r.img || "";
      imgCont.appendChild(thumbImg);
    }
    project.appendChild(imgCont);

    const detailsCont = document.createElement("div");
    detailsCont.classList.add("g__project-details");
    project.appendChild(detailsCont);

    const projectName = document.createElement("p");
    projectName.classList.add("g__name");
    projectName.innerHTML = r.desc;
    detailsCont.appendChild(projectName);

    const lastEdited = document.createElement("p");
    lastEdited.classList.add("g__edit-date");
    lastEdited.innerHTML = r.edit_date;
    detailsCont.appendChild(lastEdited);

    projectContainer.appendChild(project);
  });

  /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
  granite_div.appendChild(projectContainer);
}
