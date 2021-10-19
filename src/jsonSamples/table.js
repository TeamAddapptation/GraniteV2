export const tableData = {
  id: "table-demo",
  feature: "table",
  options: {
    type: "table",
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
      background: "#FAFAFA",
      children: [
        { value: "Contact" },
        { value: "Score", sort: true },
        { value: "Date" },
        { value: "status" },
        { value: "View In" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Anvil International" },
        { value: 8, format: "score" },
        { value: "2020-01-25" },
        { value: "pending" },
        {
          value:
            "<div class='g__arrow-link'><i class='fal fa-arrow-right'></i></div>",
          text_align: "center",
        },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Liquid PC" },
        { value: 4, format: "score" },
        { value: "2019-06-05" },
        { value: "complete" },
        {
          value:
            "<div class='g__arrow-link'><i class='fal fa-arrow-right'></i></div>",
          text_align: "center",
        },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Ford Motors" },
        { value: 4, format: "score" },
        { value: "2021-08-11" },
        { value: "pending" },
        {
          value:
            "<div class='g__arrow-link'><i class='fal fa-arrow-right'></i></div>",
          text_align: "center",
        },
      ],
    },
  ],
};
