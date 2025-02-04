# Fiscalias3

## Explicación del código `chartProcesoInv.js`

Este código define una función `chartProcesoInv` que genera un gráfico de líneas utilizando la biblioteca Chart.js. Aquí tienes un resumen de los pasos que realiza:

1. **Variables y Etiquetas:**
   - Define la variable global `myLineChart`.
   - Establece un objeto `labels` con las etiquetas para los datos del gráfico.

2. **Área del Gráfico:**
   - Selecciona el elemento del DOM con el id `"chartProcesoInv"` que será el área del gráfico.

3. **Destrucción del Gráfico Existente:**
   - Si ya existe un gráfico, lo destruye para evitar superposiciones.

4. **Puntos de Datos:**
   - Crea un array `dataPoints` a partir de la información del estado (`info_estado`), reemplazando cualquier valor 'NR' por -1.

5. **Plugin Personalizado:**
   - Define un plugin personalizado `multiBarLogo` para agregar etiquetas a los puntos de datos en el gráfico.

6. **Creación del Gráfico:**
   - Genera un nuevo gráfico de líneas utilizando Chart.js con las etiquetas y datos definidos.
   - Configura varias opciones del gráfico, incluyendo la responsividad, los plugins (tooltip y leyenda), y las escalas (ejes X e Y).

7. **Configuraciones Adicionales:**
   - Añade el plugin personalizado `multiBarLogo` al gráfico para mostrar los valores en los puntos de datos.

El resultado es un gráfico de líneas que muestra diferentes tipos de datos relacionados con investigaciones, imputaciones, vinculaciones y sentencias.

## Explicación del Código de `chartResolution.js`

El archivo `chartResolution` contiene una función que crea un gráfico circular (pie chart) para mostrar la resolución de carpetas en tres categorías: carpetas en trámite, carpetas en favor del combate y carpetas que no abonan al combate.

#### Desglose del Código

1. **Variable Global**:
    - Se declara una variable global `myPieChartResolution` para almacenar el gráfico y poder manipularlo posteriormente.

2. **Función Principal**:

    - Se define la función principal `pieChartResolucion()` que contiene toda la lógica para crear y renderizar el gráfico.

3. **Etiquetas**:
    - Se definen las etiquetas (`labels`) que serán utilizadas en el gráfico para identificar cada categoría.
    ```javascript
    const labels = {
        sin_respuesta: 'Carpetas en trámite',
        combate: 'Carpetas en favor del combate',
        no_combate: 'Carpetas que no abonan al combate'
    };
    ```

4. **Colores**:
    - Se definen los colores (`colors`) asociados a cada categoría para diferenciarlas visualmente en el gráfico.
    ```javascript
    const colors = {
        combate: '#27AE60', // verde
        no_combate: '#E74C3C', // rojo
        sin_respuesta: '#FCF3CF' // amarillo
    };
    ```

5. **Cálculo de Datos**:
    - Se calculan los valores numéricos (`numCombate`, `numNoCombate` y `sumSinRespuesta`) a partir de los datos proporcionados en `info_estado`.
    ```javascript
    const numCombate = parseInt(info_estado.TotalCambate.replace("%", ""), 10);
    const numNoCombate = parseInt(info_estado.TotalNoCombate.replace("%", ""), 10);
    const sumSinRespuesta = 100 - (numCombate + numNoCombate);
    ```

6. **Área del Gráfico**:
    - Se obtiene el elemento HTML (`ChartResolucion`) donde se renderizará el gráfico.
    ```javascript
    const graphArea = document.getElementById("ChartResolucion");
    ```

7. **Destrucción del Gráfico Existente**:
    - Si ya existe un gráfico previamente creado, se destruye antes de crear uno nuevo.
    ```javascript
    if (myPieChartResolution) myPieChartResolution.destroy();
    ```
    
8. **Creación del Gráfico**:
    - Se utiliza la biblioteca Chart.js para crear un gráfico circular (`pie`) con los datos y configuraciones especificadas.
    - `type`: tipo de gráfico (`pie`).
    - `data`: datos y configuraciones del gráfico, incluyendo etiquetas (`labels`) y datos (`data`).
    - `options`: configuraciones adicionales, como la responsividad y los tooltips personalizados.
    ```javascript
    myPieChartResolution = new Chart(graphArea, {
        type: 'pie',
        data: {
            labels: [labels.combate, labels.no_combate, labels.sin_respuesta],
            datasets: [{
                data: [numCombate, numNoCombate, sumSinRespuesta],
                backgroundColor: [colors.combate, colors.no_combate, colors.sin_respuesta],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: context => `${context.formattedValue}%`
                    }
                }
            }
        }
    });
    ```

## Explicación del Código de `mapevent.js`

El archivo `mapevent.js` contiene una función que inicializa un mapa interactivo y muestra datos específicos utilizando la biblioteca amCharts.

#### Desglose del Código

1. **Función Principal**:
    - Se define la función principal `init()` que contiene toda la lógica para crear y renderizar el mapa.

2. **Aplicar Tema**:
    ```javascript
    am4core.useTheme(am4themes_animated);
    ```
    - Se aplica un tema animado a los gráficos de amCharts.

3. **Crear el Mapa**:
    ```javascript
    const chart = am4core.create("chartdiv", am4maps.MapChart);
    ```
    - Se crea un nuevo mapa y se asigna al elemento HTML con id `chartdiv`.

4. **Configuraciones Iniciales del Mapa**:
    ```javascript
    chart.dragGrip.disabled = true;
    chart.seriesContainer.inert = false;
    chart.hiddenState.properties.opacity = 0; // creates initial fade-in
    chart.geodata = am4geodata_mexicoLow;
    chart.projection = new am4maps.projections.Miller();
    ```
    - Se establecen configuraciones iniciales como deshabilitar el arrastre, establecer la opacidad inicial y la proyección del mapa.

5. **Serie de Polígonos**:
    ```javascript
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    const polygonTemplate = polygonSeries.mapPolygons.template;
    ```
    - Se crea una serie de polígonos que representarán las áreas geográficas en el mapa.

6. **Plantilla de Polígonos y Tooltips**:
    ```javascript
    polygonTemplate.tooltipText = "{name}: \n\t {value.value.formatNumber('#')}/12";
    polygonTemplate.tooltipHTML = `...`;
    ```
    - Se define la plantilla de los polígonos y el contenido del tooltip que aparecerá al pasar el cursor sobre cada área geográfica.

7. **Reglas de Calor**:
    ```javascript
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: am4core.color("#fff7e5"),
        max: am4core.color("#ffb100")
    });
    polygonSeries.useGeodata = true;
    ```
    - Se añaden reglas de calor para colorear las áreas en función de sus valores.

8. **Deshabilitar Zoom y Eventos**:
    ```javascript
    chart.chartContainer.wheelable = false;
    chart.seriesContainer.events.disableType("doublehit");
    chart.chartContainer.background.events.disableType("doublehit");
    ```
    - Se deshabilitan ciertas interacciones como el zoom y los eventos de doble clic.

9. **Agregar Leyenda de Calor**:
    ```javascript
    const legendContainer = am4core.create("legenddiv", am4core.Container);
    legendContainer.width = am4core.percent(100);
    const heatLegend = legendContainer.createChild(am4maps.HeatLegend);
    heatLegend.valign = "bottom";
    heatLegend.align = "center";
    heatLegend.width = am4core.percent(75);
    heatLegend.series = polygonSeries;
    heatLegend.orientation = "horizontal";
    heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
    ```
    - Se crea una leyenda de calor que explica los colores utilizados en el mapa.

10. **Manejadores de Eventos**:
    ```javascript
    polygonSeries.mapPolygons.template.events.on("over", event => handleHover(event.target));
    polygonSeries.mapPolygons.template.events.on("hit", event => {
        const estadName = event.target.dataItem.dataContext.name;
        select_estado(estadName);
        handleHover(event.target);
    });
    polygonSeries.mapPolygons.template.events.on("out", () => heatLegend.valueAxis.hideTooltip());
    ```
    - Se añaden manejadores de eventos para interacciones como pasar el cursor y hacer clic en las áreas del mapa.

11. **Función de Manejo de Hover**:
    ```javascript
    function handleHover(mapPolygon) {
        const value = mapPolygon.dataItem.value;
        if (!isNaN(value)) {
            heatLegend.valueAxis.showTooltipAt(value);
        } else {
            heatLegend.valueAxis.hideTooltip();
        }
    }
    ```

12. **Datos del Mapa**:
    ```javascript
    polygonSeries.data = datos_tootltip_22;
    ```
    - Se asignan los datos que serán visualizados en el mapa.

## Explicación del Código de `selectestado.js`

El archivo `selectestado.js` se encarga de manejar la selección del estado y el año, así como de actualizar la información y los gráficos en la interfaz de usuario basada en la selección.

#### Desglose del Código

1. **Variables Globales**:
    ```javascript
    let estado_lista = [];
    let info_estado = {};
    ```
    - Se declaran dos variables globales: `estado_lista` para almacenar la lista de estados y `info_estado` para almacenar la información del estado seleccionado.

2. **Preparación del Documento**:
    ```javascript
    $(document).ready(function () {
        // Remover el estado y año seleccionados
        localStorage.removeItem("_estado");
        // Establecer el año inicial a 2022
        const año_seleccionado = $('input[name=años]:checked', '#radio_box_años').val();
        añoSeleccionado(año_seleccionado);

        $('#radio_box_años').change(function () {
            const selected_año = $("input[name='años']:checked").val();
            añoSeleccionado(selected_año);
        });
    });
    ```
    - Se espera a que el documento esté listo, luego se elimina el estado almacenado en `localStorage` y se establece el año inicial como 2022. También se configura un manejador de eventos para cambiar el año cuando el usuario selecciona un año diferente.

3. **Función `añoSeleccionado`**:
    ```javascript
    function añoSeleccionado(id_año) {
        estado_lista = datos_estados[id_año];
        // Al cambiar el año, se retorna al estado federal.
        const _estado = localStorage.getItem("_estado");
        select_estado(_estado || 'Federal');
    }
    ```
    - Esta función actualiza `estado_lista` con los datos del año seleccionado y llama a `select_estado` para cargar la información del estado almacenado o del estado federal por defecto.

4. **Función `select_estado`**:
    ```javascript
    function select_estado(idEstado) {
       ....
    }
    ```
    - Esta función actualiza `info_estado` con la información del estado seleccionado y actualiza los gráficos y los elementos de la interfaz de usuario con los datos correspondientes del estado seleccionado.

5. **Actualización de Gráficos**:
    - Se llaman a las funciones `chartProcesoInv()` y `pieChartResolucion()` para actualizar los gráficos basados en la nueva selección de estado.
