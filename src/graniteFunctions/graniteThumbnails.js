export default function graniteThumbnails(jsonBlock, jsonTheme) {
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
    ${cssId} .g__thumb-container{
        display: flex;
        flex-wrap: wrap;
    }
    ${cssId} .g__temp-thumb{
      margin: 15px 50px 15px 0;
    }
    ${cssId} .g__img-cont{
      width: 200px;
      height: 200px;
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
    ${cssId} .g__img-cont i{
      font-size: 70px;
      color: #ffffff;
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

  const thumbContainer = document.createElement("div");
  thumbContainer.classList.add("g__thumb-container");

  r.forEach((r) => {
    const tempThumb = document.createElement("a");
    if (r.thumb_link) {
      tempThumb.href = r.thumb_link || "#";
    }
    tempThumb.classList.add("g__temp-thumb");

    const imgCont = document.createElement("div");
    imgCont.classList.add("g__img-cont");
    if (r.bkg_color) {
      imgCont.style.backgroundColor = r.bkg_color;
    }

    if (r.thumb_img) {
      const thumbImg = document.createElement("img");
      thumbImg.src = r.thumb_img || "";
      imgCont.appendChild(thumbImg);
    }

    if (r.icon) {
      const icon = document.createElement("i");
      icon.setAttribute("class", r.icon);
      imgCont.appendChild(icon);
    }

    tempThumb.appendChild(imgCont);

    if (r.thumb_desc) {
      const thumbDesc = document.createElement("h3");
      thumbDesc.classList.add("a__h3");
      thumbDesc.innerHTML = r.thumb_desc;
      tempThumb.appendChild(thumbDesc);
    }

    thumbContainer.appendChild(tempThumb);
  });

  /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
  granite_div.appendChild(thumbContainer);
}
