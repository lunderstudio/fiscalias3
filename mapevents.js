
function init() {
  am4core.useTheme(am4themes_animated);

  var chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.dragGrip.disabled = true;
  chart.seriesContainer.inert = false;
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in 

  chart.geodata = am4geodata_mexicoLow;
  chart.projection = new am4maps.projections.Miller();

  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}:  \n \t {value.value.formatNumber('#')}/12";
  polygonTemplate.tooltipHTML = `<div style="font-size: 12px; font-family: "Roboto"; padding-bottom: 0;">
  <p style="margin-bottom: 5px;"><strong>{name}</p>
  <small>Resultado {Resultados}</small>
  <p style="margin-bottom: 5px;"><strong style="color:blue">{value.value.formatNumber('#')}/12</strong><small> Indicadores de autonomia</small></p>
  <p style="margin-bottom: 5px;"><strong style="color:#27AE60">{CombateCorrupción}</strong><small> Resolución de carpetas en favor <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;del combate a la corrupción</small></p>
  <p style="margin-bottom: 5px;"><strong style="color:#E74C3C">{NoCombateCorrupción}</strong><small> Resolución de carpetas que no <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;combaten a la corrupción</small></p>
  <p style="margin-bottom: 5px;"><strong>{Monto}</strong><small> Monto recuperado</small></p>
</div>`;
  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: am4core.color("#fff7e5"),
    max: am4core.color("#ffb100")
  });
  polygonSeries.useGeodata = true;

  //disable zoom
  chart.chartContainer.wheelable = false;
  chart.seriesContainer.events.disableType("doublehit");
  chart.chartContainer.background.events.disableType("doublehit");
  // add heat legend 
  var legendContainer = am4core.create("legenddiv", am4core.Container);
  legendContainer.width = am4core.percent(100);
  // add heat legend
  var heatLegend = legendContainer.createChild(am4maps.HeatLegend);
  heatLegend.valign = "bottom";
  heatLegend.align = "center";
  heatLegend.width = am4core.percent(75);
  heatLegend.series = polygonSeries;
  heatLegend.orientation = "horizontal";
  heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
  polygonSeries.mapPolygons.template.events.on("over", event => {
    handleHover(event.target);
  });

  polygonSeries.mapPolygons.template.events.on("hit", event => {
    let estad_name = event.target.dataItem._dataContext.name;
    select_estado(estad_name);
    handleHover(event.target);
  });

  function handleHover(mapPolygon) {
    if (!isNaN(mapPolygon.dataItem.value)) {
      heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
    } else {
      heatLegend.valueAxis.hideTooltip();
    }
  }

  polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
  polygonSeries.mapPolygons.template.events.on("out", event => {
    heatLegend.valueAxis.hideTooltip();
  });
  // data 
  polygonSeries.data = datos_tootltip_22;
}

init();