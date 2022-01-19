var mapSvg;
var mapWidth;
var mapHeight;

var lineSvg;
var lineWidth;
var lineHeight;
var lineMargin;

var scatterSvg;
var scatterWidth;
var scatterHeight;

var zoomLevel;
var zoom;
var scatterZoom;

var year_select;
var yearSelect;
var ySelect;
var yearData;
var country;

var lineChartData = [];
var currentCountry;

const countryList = {
  AFG: "Afghanistan",
  AGO: "Angola",
  ALB: "Albania",
  ARE: "United Arab Emirates",
  ARG: "Argentina",
  ARM: "Armenia",
  ATA: "Antarctica",
  ATF: "French Southern and Antarctic Lands",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BDI: "Burundi",
  BEL: "Belgium",
  BEN: "Benin",
  BFA: "Burkina Faso",
  BGD: "Bangladesh",
  BGR: "Bulgaria",
  BHS: "The Bahamas",
  BIH: "Bosnia and Herzegovina",
  BLR: "Belarus",
  BLZ: "Belize",
  BOL: "Bolivia",
  BRA: "Brazil",
  BRN: "Brunei",
  BTN: "Bhutan",
  BWA: "Botswana",
  CAF: "Central African Republic",
  CAN: "Canada",
  CHE: "Switzerland",
  CHL: "Chile",
  CHN: "China",
  CIV: "Ivory Coast",
  CMR: "Cameroon",
  COD: "Democratic Republic of the Congo",
  COG: "Republic of the Congo",
  COL: "Colombia",
  CRI: "Costa Rica",
  CUB: "Cuba",
  "-99": "Northern Cyprus",
  CYP: "Cyprus",
  CZE: "Czech Republic",
  DEU: "Germany",
  DJI: "Djibouti",
  DNK: "Denmark",
  DOM: "Dominican Republic",
  DZA: "Algeria",
  ECU: "Ecuador",
  EGY: "Egypt",
  ERI: "Eritrea",
  ESP: "Spain",
  EST: "Estonia",
  ETH: "Ethiopia",
  FIN: "Finland",
  FJI: "Fiji",
  FLK: "Falkland Islands",
  FRA: "France",
  GAB: "Gabon",
  GBR: "United Kingdom",
  GEO: "Georgia",
  GHA: "Ghana",
  GIN: "Guinea",
  GMB: "Gambia",
  GNB: "Guinea Bissau",
  GNQ: "Equatorial Guinea",
  GRC: "Greece",
  GRL: "Greenland",
  GTM: "Guatemala",
  GUY: "Guyana",
  HND: "Honduras",
  HRV: "Croatia",
  HTI: "Haiti",
  HUN: "Hungary",
  IDN: "Indonesia",
  IND: "India",
  IRL: "Ireland",
  IRN: "Iran",
  IRQ: "Iraq",
  ISL: "Iceland",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JOR: "Jordan",
  JPN: "Japan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KGZ: "Kyrgyzstan",
  KHM: "Cambodia",
  KOR: "South Korea",
  OSA: "Kosovo",
  KWT: "Kuwait",
  LAO: "Laos",
  LBN: "Lebanon",
  LBR: "Liberia",
  LBY: "Libya",
  LKA: "Sri Lanka",
  LSO: "Lesotho",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  LVA: "Latvia",
  MAR: "Morocco",
  MDA: "Moldova",
  MDG: "Madagascar",
  MEX: "Mexico",
  MKD: "Macedonia",
  MLI: "Mali",
  MMR: "Myanmar",
  MNE: "Montenegro",
  MNG: "Mongolia",
  MOZ: "Mozambique",
  MRT: "Mauritania",
  MWI: "Malawi",
  MYS: "Malaysia",
  NAM: "Namibia",
  NCL: "New Caledonia",
  NER: "Niger",
  NGA: "Nigeria",
  NIC: "Nicaragua",
  NLD: "Netherlands",
  NOR: "Norway",
  NPL: "Nepal",
  NZL: "New Zealand",
  OMN: "Oman",
  PAK: "Pakistan",
  PAN: "Panama",
  PER: "Peru",
  PHL: "Philippines",
  PNG: "Papua New Guinea",
  POL: "Poland",
  PRI: "Puerto Rico",
  PRK: "North Korea",
  PRT: "Portugal",
  PRY: "Paraguay",
  QAT: "Qatar",
  ROU: "Romania",
  RUS: "Russia",
  RWA: "Rwanda",
  ESH: "Western Sahara",
  SAU: "Saudi Arabia",
  SDN: "Sudan",
  SDS: "South Sudan",
  SEN: "Senegal",
  SLB: "Solomon Islands",
  SLE: "Sierra Leone",
  SLV: "El Salvador",
  ABV: "Somaliland",
  SOM: "Somalia",
  SRB: "Republic of Serbia",
  SUR: "Suriname",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SWE: "Sweden",
  SWZ: "Swaziland",
  SYR: "Syria",
  TCD: "Chad",
  TGO: "Togo",
  THA: "Thailand",
  TJK: "Tajikistan",
  TKM: "Turkmenistan",
  TLS: "East Timor",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Turkey",
  TWN: "Taiwan",
  TZA: "United Republic of Tanzania",
  UGA: "Uganda",
  UKR: "Ukraine",
  URY: "Uruguay",
  USA: "United States",
  UZB: "Uzbekistan",
  VEN: "Venezuela",
  VNM: "Vietnam",
  VUT: "Vanuatu",
  PSE: "West Bank",
  YEM: "Yemen",
  ZAF: "South Africa",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
};
// A variable to store the world map data
var worldData;
var year15, year16, year17, year18, year19, year20; //year data

function emojiPicker(data) {
  let ar = [
    +data.gdp,
    +data.family,
    +data.life,
    +data.freedom,
    +data.trust,
    +data.generosity,
  ];
  // console.log(ar);
  var max = d3.max(ar);
  // console.log(max);
  if (max === +data.gdp) {
    return "🤑";
  } else if (max === +data.family) {
    return "👨‍👩‍👦";
  } else if (max === +data.life) {
    return "💓";
  } else if (max === +data.freedom) {
    return "🗽";
  } else if (max === +data.trust) {
    return "🏛️";
  } else if (max === +data.generosity) {
    return "🤗";
  } else {
    console.error("emoji didn't work");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initial map setup
  mapSvg = d3.select("#map-svg");
  mapWidth = mapSvg.node().clientWidth;
  mapHeight = mapSvg.node().clientHeight;

  // Initial linechart setup
  lineSvg = d3.select("#line-svg");
  lineWidth = lineSvg.node().clientWidth;
  lineHeight = lineSvg.node().clientHeight;
  lineMargin = { top: 30, right: 20, bottom: 35, left: 50 };

  // Initial ScatterPlot setup
  scatterSvg = d3.select("#scatter-svg");
  scatterWidth = scatterSvg.node().clientWidth;
  scatterHeight = scatterSvg.node().clientHeight;

  ySelect = document.querySelector("#yAttr");
  yearSelect = document.querySelector("#year-input");

  ySelect.addEventListener("change", function () {
    findLineChartData(currentCountry);
    updateLine();
  });
  lineSvg
    .append("text")
    .attr("class", "error")
    .attr("x", lineWidth / 2)
    .attr("y", lineHeight / 2 + lineHeight / 3)
    .attr("alignment-baseline", "middle")
    .attr("font-size", 80)
    .text("⬇️ Select a Country ⬇️");

  //add tooltip
  Promise.all([
    d3.csv("data/2015.csv", (d) => {
      return {
        x: +d["Happiness Score"],
        y: +d["Happiness Score"],
        country: d.Country,
        rank: +d["Happiness Rank"],
        gdp: +d["Economy (GDP per Capita)"],
        family: +d["Family"],
        life: +d["Health (Life Expectancy)"],
        freedom: +d["Freedom"],
        trust: +d["Trust (Government Corruption)"],
        generosity: +d["Generosity"],
        emoji: "",
        score: +d["Happiness Score"],
      };
    }),
    d3.csv("data/2016.csv", (d) => {
      return {
        country: d.Country,
        rank: +d["Happiness Rank"],
        gdp: +d["Economy (GDP per Capita)"],
        family: +d["Family"],
        life: +d["Health (Life Expectancy)"],
        freedom: +d["Freedom"],
        trust: +d["Trust (Government Corruption)"],
        generosity: +d["Generosity"],
        score: +d["Happiness Score"],
        emoji: "",
        x: +d["Happiness Score"],
        y: +d["Happiness Score"],
      };
    }),
    d3.csv("data/2017.csv", (d) => {
      return {
        country: d.Country,
        // region: d.Region,
        rank: +d["Happiness.Rank"],
        gdp: +d["Economy..GDP.per.Capita."],
        family: +d["Family"],
        life: +d["Health..Life.Expectancy."],
        freedom: +d["Freedom"],
        trust: +d["Trust..Government.Corruption."],
        generosity: +d["Generosity"],
        score: +d["Happiness.Score"],
        emoji: "",
        x: +d["Happiness.Score"],
        y: +d["Happiness.Score"],
      };
    }),
    d3.csv("data/2018.csv", (d) => {
      return {
        country: d["Country or region"],
        rank: +d["Overall rank"],
        gdp: +d["GDP per capita"],
        family: +d["Social support"],
        life: +d["Healthy life expectancy"],
        freedom: +d["Freedom to make life choices"],
        trust: +d["Perceptions of corruption"],
        generosity: +d["Generosity"],
        score: +d["Score"],
        emoji: "",
        x: +d["Score"],
        y: +d["Score"],
      };
    }),
    d3.csv("data/2019.csv", (d) => {
      return {
        country: d["Country or region"],
        rank: +d["Overall rank"],
        gdp: +d["GDP per capita"],
        family: +d["Social support"],
        life: +d["Healthy life expectancy"],
        freedom: +d["Freedom to make life choices"],
        trust: +d["Perceptions of corruption"],
        generosity: +d["Generosity"],
        score: +d["Score"],
        emoji: "",
        x: +d["Score"],
        y: +d["Score"],
      };
    }),
    d3.csv("data/2020.csv", (d) => {
      return {
        country: d.Country,
        rank: +d["Rank"],
        gdp: +d["Economy"],
        family: +d["Family"],
        life: +d["Health"],
        freedom: +d["Freedom"],
        trust: +d["Trust"],
        generosity: +d["Generosity"],
        score: +d["Score"],
        emoji: "",
        x: +d["Score"],
        y: +d["Score"],
      };
    }),
    d3.json("data/world.geojson"),
  ]).then(function (data) {
    year15 = data[0];
    year16 = data[1];
    year17 = data[2];
    year18 = data[3];
    year19 = data[4];
    year20 = data[5];
    worldData = data[6];

    getEmojis();
    year_select = year15;
    updateMap();
    // updateLine();
    updateScatter();
  });
});
// Load the world map file

/* Draw or update the map based on the worldData object
          and the current projection
      */
function updateMap() {
  var tip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .attr("text-anchor", "left")
    .attr("alignment-baseline", "middle");
  const projection = d3
    .geoEquirectangular()
    .fitSize([mapWidth, mapHeight], worldData)
    .translate([mapWidth / 2, mapHeight / 2]);
  const geoPath = d3.geoPath().projection(projection);

  mapSvg
    .selectAll(".country")
    .data(worldData.features)
    .join(
      (enter) => {
        enter
          .append("path")
          .classed("country", true)
          .attr("vector-effect", "non-scaling-stroke")
          .attr("d", geoPath)
          .on("click", function (d) {
            if (
              year15.filter((da) => da.country === countryList[d.id]).length > 0
            ) {
              currentCountry = countryList[d.id];
              updateLine(currentCountry);
            } else {
              clearLineChart(d.country);
            }
          })
          .on("mouseover", function (d) {
            // console.log(`mouseover on ${d.properties.name}`);
            d3.select(this)
              .transition()
              .duration(50)
              .style("stroke-width", 4)
              .style("stroke", "#dc3545")
              .style("fill", "#dc3545");
            tip.transition().duration(0).style("opacity", 1);
            var text;
            var rankMap = year_select.filter(
              (da) => da.country === countryList[d.id]
            );
            if (rankMap.length > 0) {
              text = d.properties.name + "<br>Rank: " + rankMap[0].rank;
            } else {
              text = d.properties.name;
            }
            tip
              .html(text)
              .style("left", d3.event.pageX + 15 + "px")
              .style("top", d3.event.pageY - 35 + "px");
          })
          .on("mousemove", function (d, i) {
            // console.log(`mousemove on ${d.properties.name}`);
            tip.transition().duration(0).style("opacity", 1);
            d3.select(this)
              .transition()
              .duration(50)
              .style("stroke-width", 4)
              .style("stroke", "#dc3545")
              .style("fill", "#dc3545");
            // d3.select(this).classed("highlighted", true);
            var text;
            var rankMap = year_select.filter(
              (da) => da.country === countryList[d.id]
            );

            console.log(rankMap[0]);
            if (rankMap.length > 0) {
              text = d.properties.name + "<br>Rank: " + rankMap[0].rank;
            } else {
              text = d.properties.name;
            }
            tip
              .html(text)
              .style("left", d3.event.pageX + 15 + "px")
              .style("top", d3.event.pageY - 35 + "px");
          })
          .on("mouseout", function (d, i) {
            console.log(`mouseout on ${d.properties.name}`);
            // d3.select(this).classed("highlighted", false);
            d3.select(this)
              .transition()
              .duration(50)
              .style("stroke-width", 1)
              .style("stroke", "black")
              .style("fill", "honeydew");
            tip.transition().duration("0").style("opacity", 0);
          });
      },
      (update) => {
        update.call((update) =>
          update.transition().duration(500).attr("d", geoPath)
        );
      }
    );

  // Add graticules
  let graticule = d3.geoGraticule();
  mapSvg
    .selectAll(".graticule")
    .data(graticule.lines())
    .join(
      (enter) => {
        enter
          .append("path")
          .classed("graticule", true)
          .attr("vector-effect", "non-scaling-stroke")
          .attr("d", geoPath);
      },
      (update) => {
        update.call((update) =>
          update.transition().duration(500).attr("d", geoPath)
        );
      }
    );

  // You can also add border graticule if desired
  //   Note this isn't drawn using joins!
  mapSvg.selectAll(".boundary").remove();
  mapSvg
    .append("path")
    .datum(graticule.outline)
    .attr("class", "boundary")
    .attr("vector-effect", "non-scaling-stroke")
    .style("opacity", 0)
    .attr("d", geoPath)
    .transition()
    .delay(500)
    .style("opacity", 1);

  zoom = d3
    .zoom()
    .scaleExtent([1, 8])
    .translateExtent([
      [0, 0],
      [mapWidth, mapHeight],
    ])
    .on("zoom", onZoom);
  mapSvg.call(zoom); // attach to the svg
}

//Zoom function with boundary scaling

function onZoom() {
  zoomLevel = d3.event.transform.k;
  mapSvg.selectAll(".country").attr("transform", d3.event.transform);
  mapSvg.selectAll(".graticule").attr("transform", d3.event.transform);
  mapSvg.selectAll(".boundary").attr("transform", d3.event.transform);
}

//Reset Zoom to original
function resetZoom() {
  mapSvg
    .transition()
    .duration(500)
    .call(zoom.transform, d3.zoomIdentity)
    .end()
    .then(() => {
      updateMap();
    });
}

function clearLineChart(country) {
  lineSvg.selectAll("*").remove();
  lineSvg
    .append("text")
    .attr("class", "error")
    .attr("x", lineWidth / 2)
    .attr("y", lineHeight / 2)
    .attr("alignment-baseline", "middle")
    .attr("font-size", 80)
    .text("⚠️No Data⚠️");
  lineSvg
    .append("text")
    .attr("class", "error")
    .attr("x", lineWidth / 2)
    .attr("y", lineHeight / 2 + (lineHeight + 30) / 3)
    .attr("alignment-baseline", "middle")
    .attr("font-size", 50)
    .text("⬇️ Select a Different Country ⬇️");
}

function findLineChartData(country) {
  lineChartData = [];
  if (ySelect.value === "Happiness Rank") {
    year15.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.rank);
      }
    });
    year16.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.rank);
      }
    });
    year17.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.rank);
      }
    });
    year18.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.rank);
      }
    });
    year19.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.rank);
      }
    });
    year20.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.rank);
      }
    });
  } else if (ySelect.value === "GDP") {
    year15.forEach(function (d) {
      // console.log(d.country);
      if (d.country === country) {
        lineChartData.push(d.gdp);
      }
    });
    year16.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.gdp);
      }
    });
    year17.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.gdp);
      }
    });
    year18.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.gdp);
      }
    });
    year19.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.gdp);
      }
    });
    year20.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.gdp);
      }
    });
  } else if (ySelect.value === "Freedom") {
    year15.forEach(function (d) {
      // console.log(d.country);
      if (d.country === country) {
        lineChartData.push(d.freedom);
      }
    });
    year16.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.freedom);
      }
    });
    year17.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.freedom);
      }
    });
    year18.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.freedom);
      }
    });
    year19.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.freedom);
      }
    });
    year20.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.freedom);
      }
    });
  } else if (ySelect.value === "Generosity") {
    year15.forEach(function (d) {
      // console.log(d.country);
      if (d.country === country) {
        lineChartData.push(d.generosity);
      }
    });
    year16.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.generosity);
      }
    });
    year17.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.generosity);
      }
    });
    year18.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.generosity);
      }
    });
    year19.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.generosity);
      }
    });
    year20.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.generosity);
      }
    });
  } else if (ySelect.value === "Trust") {
    year15.forEach(function (d) {
      // console.log(d.country);
      if (d.country === country) {
        lineChartData.push(d.trust);
      }
    });
    year16.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.trust);
      }
    });
    year17.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.trust);
      }
    });
    year18.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.trust);
      }
    });
    year19.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.trust);
      }
    });
    year20.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.trust);
      }
    });
  } else if (ySelect.value === "Family") {
    year15.forEach(function (d) {
      // console.log(d.country);
      if (d.country === country) {
        lineChartData.push(d.family);
      }
    });
    year16.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.family);
      }
    });
    year17.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.family);
      }
    });
    year18.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.family);
      }
    });
    year19.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.family);
      }
    });
    year20.forEach(function (d) {
      if (d.country === country) {
        lineChartData.push(d.family);
      }
    });
  }
}

// Line chart
// TODO: - Rewrite function to use enter, update, exit paradigm,
//       - Increase different types of data available for viz
function updateLine() {
  // Placeholder country until graphs are linked
  // country = "Sweden";
  var lineInnerWidth = lineWidth - lineMargin.left - lineMargin.right;
  var lineInnerHeight = lineHeight - lineMargin.top - lineMargin.bottom;

  // Clear graph
  lineSvg.selectAll("*").remove();

  console.log("Draw the chart of " + country);

  findLineChartData(currentCountry);
  var maxVal = d3.max(lineChartData);
  console.log(maxVal);
  console.log(lineChartData);
  // Set x axis
  var x = d3.scaleLinear().domain([2015, 2020]).range([0, lineInnerWidth]);

  // Set y axis
  var y = d3.scaleLinear().domain([0, maxVal]).range([lineInnerHeight, 0]);

  // Add x axis labels every 10 years with text
  const g = lineSvg
    .append("g")
    .attr("transform", `translate(${lineMargin.left},${lineMargin.top})`);
  // Add y axis
  yAxis = g
    .append("g")
    // .attr("transform", "translate(0, 0)")
    .call(
      d3.axisLeft(y).tickSize(-lineWidth + lineMargin.left + lineMargin.right)
    )
    .attr("stroke", "gray")
    .attr("fill", "gray")
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .attr("stroke", "gray")
        .attr("stroke-dasharray", "5, 10")
    );

  g.append("g")
    .attr("transform", "translate(0," + lineInnerHeight + ")")
    .attr("stroke", "gray")
    .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")))
    .call((g) => g.select(".domain").attr("stroke", "gray"));

  // console.log("Appending line");

  // Draw line
  g.append("path")
    .datum(lineChartData)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d, i) {
          // console.log("x: " + x(i + 2015));
          return x(i + 2015); //No need to do +50 here
        })
        .y(function (d) {
          // console.log("y: " + y(d));
          return y(d);
        })
        .curve(d3.curveMonotoneX)
    );

  // Append axis labels
  g.append("text")
    .attr("class", "axis-label")
    .attr("fill", "gray")
    .attr("transform", "rotate(-90)")
    .attr("y", -33)
    .attr("x", -lineInnerHeight / 2)
    .attr("text-anchor", "middle")
    .text(ySelect.value);
  var titleText;
  if (
    ySelect.value == "Freedom" ||
    ySelect.value == "Trust" ||
    ySelect.value == "Family" ||
    ySelect.value == "Generosity"
  ) {
    titleText = ySelect.value + " in " + currentCountry;
  } else {
    titleText = ySelect.value + " of " + currentCountry;
  }
  g.append("text")
    .attr("class", "axis-label")
    .attr("fill", "gray")
    .attr("y", -10)
    .attr("x", lineInnerWidth / 2)
    .attr("text-anchor", "middle")
    .text(titleText);

  g.append("text")
    .attr("class", "axis-label")
    .style("fill", "gray")
    .attr("text-anchor", "middle")
    .attr("x", lineInnerWidth / 2)
    .attr("y", lineInnerHeight + 30)
    .text("Year");
}

function getEmojis() {
  year15.forEach((d) => (d.emoji = emojiPicker(d)));
  year16.forEach((d) => (d.emoji = emojiPicker(d)));
  year17.forEach((d) => (d.emoji = emojiPicker(d)));
  year18.forEach((d) => (d.emoji = emojiPicker(d)));
  year19.forEach((d) => (d.emoji = emojiPicker(d)));
  year20.forEach((d) => (d.emoji = emojiPicker(d)));
}

function updateScatter() {
  scatterSvg.selectAll("*").remove();
  var year = document.getElementById("year-input").value;

  if (year == "2015") {
    year_select = year15;
  } else if (year == "2016") {
    year_select = year16;
    // console.log(year_select);
  } else if (year == "2017") {
    year_select = year17;
  } else if (year == "2018") {
    year_select = year18;
  } else if (year == "2019") {
    year_select = year19;
  } else if (year == "2020") {
    year_select = year20;
  }
  year_select.forEach((d) => (d.x = d.score));
  year_select.forEach((d) => (d.y = d.score)); // fixes the year forward and year back problem

  var x = d3.scaleLinear().domain([1, 8]).range([0, 800]);
  var xAxis = scatterSvg
    .append("g")
    .attr("transform", "translate(70, 380)")
    .call(d3.axisBottom(x));

  scatterSvg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "translate(450, 420)")
    .style("text-anchor", "middle")
    .text("Happiness Score");
  scatterSvg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "translate(450, 20)")
    .style("text-anchor", "middle")
    .text("Happiness Scores in The World");

  var y = d3.scaleLinear().domain([1, 8]).range([380, 20]);
  var yAxis = scatterSvg
    .append("g")
    .attr("transform", "translate(70,0)")
    .call(d3.axisLeft(y));

  scatterSvg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", -200)
    .attr("text-anchor", "middle")
    .text("Happiness Score");

  d3.select(".tooltip2").remove(); //removes old tooltips to make year change work
  var tip2 = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip2")
    .style("opacity", 0)
    .attr("text-anchor", "left")
    .attr("alignment-baseline", "middle")
    .html("<div id='radTip'></div>");

  var r = 11;
  var cR = 1.4;

  const sim = d3
    .forceSimulation(year_select)
    .force(
      "x",
      d3.forceX((d) => x(d.x))
    )
    .force(
      "y",
      d3.forceY((d) => y(d.y))
    )
    .force("collide", d3.forceCollide(r + cR).iterations(8));

  for (let i = 0; i < 100; i++) sim.tick();
  sim.stop();

  var points = scatterSvg
    .append("g")
    .selectAll(".symbol")
    .data(year_select)
    .enter()
    .append("text")
    .attr("class", "symbol")
    .attr("transform", (d) => `translate(${d.x + 20},${d.y + 20})`)
    .html(function (d, i) {
      return d.emoji;
    })
    .on("click", function (d) {
      currentCountry = d.country;
      updateLine(currentCountry);
    })
    .on("mouseover", function (d) {
      // console.log(d);
      d3.select(this)
        .raise()
        .transition()
        .duration(50)
        .style("font-size", "36px");

      tip2.transition().duration(0).style("opacity", 1);
      tip2
        .style("left", d3.event.pageX - 250 + "px")
        .style("top", d3.event.pageY - 250 + "px");
      radialChart(tip2, d);
    })
    .on("mousemove", function (d) {
      d3.select(this)
        .raise()
        .transition()
        .duration(50)
        .style("font-size", "36px");
      tip2.transition().duration(0).style("opacity", 1);
      tip2
        .style("left", d3.event.pageX - 250 + "px")
        .style("top", d3.event.pageY - 250 + "px");
      radialChart(tip2, d);
    })
    .on("mouseout", function (d) {
      d3.select(this).lower().style("font-size", "16px");
      d3.select(this)
        .lower()
        .transition()
        .duration(50)
        .style("font-size", "16px");
      tip2.transition().duration(0).style("opacity", 0);
    });
}

function radialChart(tip2, pointData) {
  var marginR = { top: 30, right: 0, bottom: 0, left: 0 },
    widthR = 225 - marginR.left - marginR.right,
    heightR = 225 - marginR.top - marginR.bottom,
    innerRadius = 15,
    outerRadius = Math.min(widthR, heightR) / 2; // the outerRadius goes from middle of SVG area to border

  var tSvg = d3.select("#radTip");
  tSvg.selectAll("*").remove();
  tSvg = tSvg
    .append("svg")
    .attr("width", 225)
    .attr("height", 225)
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (widthR / 2 + marginR.left) +
        "," +
        (heightR / 2 + marginR.top) +
        ")"
    );

  var radData = [
    { name: "GDP", value: +pointData.gdp },
    { name: "Freedom", value: +pointData.freedom },
    { name: "Generosity", value: +pointData.generosity },
    { name: "Life", value: +pointData.life },
    { name: "Trust", value: +pointData.trust },
    { name: "Family", value: +pointData.family },
    // { name: "Dystopia Residual", value: +pointData.gdp },
  ];

  //add radial bars
  var xBar = d3
    .scaleBand()
    .range([0, 2 * Math.PI])
    .align(0)
    .domain(radData.map((d) => d.name));

  var yBar = d3.scaleRadial().domain([0, 2]).range([innerRadius, outerRadius]); //gdp, freedom, generosity, etc... values move between 0 and 2

  // console.log(radData);

  tSvg
    .append("g")
    .selectAll("path")
    .data(radData)
    .enter()
    .append("path")
    .attr("fill", "#69b3a2")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius((d) => yBar(+d.value))
        .startAngle((d) => xBar(d.name))
        .endAngle((d) => xBar(d.name) + xBar.bandwidth())
        .padAngle(0.01)
        .padRadius(innerRadius)
    );

  tSvg
    .append("g")
    .selectAll("g")
    .data(radData)
    .enter()
    .append("g")
    .attr("text-anchor", (d) =>
      (+xBar(d.name) + xBar.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
        ? "end"
        : "start"
    )
    .attr("transform", function (d) {
      return (
        "rotate(" +
        (((xBar(d.name) + xBar.bandwidth() / 2) * 180) / Math.PI - 90) +
        ")" +
        "translate(" +
        (yBar(d.value) + 10) +
        ",0)"
      );
    })
    .append("text")
    .text(function (d) {
      return d.name;
    })
    .attr("transform", function (d) {
      return (+xBar(d.name) + xBar.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
        Math.PI
        ? "rotate(180)"
        : "rotate(0)";
    })
    .style("font-size", "11px")
    .attr("alignment-baseline", "middle");

  tSvg
    .append("text")
    .attr("transform", "translate(0,-115)")
    .attr("alignment-baseline", "middle")
    .attr("text-anchor", "middle")
    .text(pointData.country);
}
