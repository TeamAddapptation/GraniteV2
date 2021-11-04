# Heatmap

A heat map is a visualization of a data matrix where values are represented as colors.

All heatmap cells are based on a 0-100 scale. Color ranges are based on a tenth scale. 

## Unique ID and Function Call

The HTML must include the unique ID for Granite to append the heatmap to the DOM.

```html
<div id="granite-heatmap-demo"></div>
```

Sample function call:

```js
graniteHeatmap(jsonBlock, jsonTheme);
```

## JSON Block
```js
const jsonBlock = {
  id: "granite-heatmap-demo",
  feature: "heatmap",
  options: {
    tooltip: true,
    color: "#3BD870",
    add_row: false,
  },
  records: [
    {
      type: "header",
      background: "#FFFFFF",
      children: [
        { value: "" },
        { value: "Data Quality" },
        { value: "Outreach" },
        { value: "Conversions", formula: true },
        { value: "Header", formula: true },
        { value: "Header", formula: true },
        { value: "Header", formula: true },
        { value: "Score", fixed_width: "50px" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        {
          value: "<a href='/employeeScorecard.html'>Sarah Jay</a>",
          show_value: true,
        },
        { value: 75, heat_value: true },
        { value: 93, heat_value: true },
        { value: 71, heat_value: true },
        { value: 92, heat_value: true },
        { value: 12, heat_value: true },
        { value: 91, heat_value: true },
        { value: 96, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Billy Sathe", show_value: true },
        { value: 78, heat_value: true },
        { value: 47, heat_value: true },
        { value: 80, heat_value: true },
        { value: 76, heat_value: true },
        { value: 34, heat_value: true },
        { value: 91, heat_value: true, tooltip_html: "<p>HTML Tooltip</p>" },
        { value: 13, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Quinten Lotus", show_value: true },
        { value: 10, heat_value: true },
        { value: 93, heat_value: true },
        { value: 72, heat_value: true },
        { value: 92, heat_value: true },
        { value: 28, heat_value: true },
        { value: 81, heat_value: true },
        { value: 89, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Bella Fox", show_value: true },
        { value: 33, heat_value: true },
        { value: 21, heat_value: true },
        { value: 27, heat_value: true },
        { value: 98, heat_value: true },
        { value: 12, heat_value: true },
        { value: 41, heat_value: true },
        { value: 93, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Parker Ramey", show_value: true },
        { value: 94, heat_value: true },
        { value: 81, heat_value: true },
        { value: 63, heat_value: true },
        { value: 72, heat_value: true },
        { value: 32, heat_value: true },
        { value: 5, heat_value: true },
        { value: 77, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Lily Kim", show_value: true },
        { value: 43, heat_value: true },
        { value: 54, heat_value: true },
        { value: 92, heat_value: true },
        { value: 36, heat_value: true },
        { value: 82, heat_value: true },
        { value: 87, heat_value: true },
        { value: 77, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "David Therrien", show_value: true },
        { value: 13, heat_value: true },
        { value: 24, heat_value: true },
        { value: 12, heat_value: true },
        { value: 12, heat_value: true },
        { value: 100, heat_value: true },
        { value: 57, heat_value: true },
        { value: 19, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Jessica Raye", show_value: true },
        { value: 13, heat_value: true },
        { value: 64, heat_value: true },
        { value: 32, heat_value: true },
        { value: 12, heat_value: true },
        { value: 14, heat_value: true },
        { value: 57, heat_value: true },
        { value: 23, heat_value: true, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Jennifer Lemos", show_value: true },
        { value: 100, heat_value: true },
        { value: 44, heat_value: true },
        { value: 42, heat_value: true },
        { value: 52, heat_value: true },
        { value: 70, heat_value: true },
        { value: 77, heat_value: true },
        { value: 97, heat_value: true, show_value: true },
      ],
    },
  ],
};
```

## Tooltip

In order to active tooltips you must set the boolean attribute ```tooltip``` to ```TRUE``` at the options level.

At the records level the attribute ```tooltip_html``` holds any HTML you'd like display in the the tooltip

```js
{
  options: {
    tooltip: true,
  },
  records: [
    {
      type: "row",
      background: "",
      children: [
        { value: 91, heat_value: true, tooltip_html: "<p>HTML Tooltip</p>" },
      ],
     }
  ],
};
```

