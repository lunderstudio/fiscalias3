//Variable global Chart Object
let myLineChart;
function chartProcesoInv() {
    // LABELS
    var _entidad = info_estado.Entidad;
    var _denuncias = ['Denuncias', 'recibidas'];
    var _investigaciones = ['Investigaciones de', ' oficio inicadas'];
    var _carpetas = ['Carpetas de', 'Investigación', 'abiertas'];
    var _imputaciones = ['Formaularios de', 'imputaciones'];
    var _vinculaciones = ['Vinculaciones a', 'proceso'];
    var _sentencias = ['Sentencias', 'condenatorias'];

    //Configuracion Char Proceso de Investigacion
    var grapharea = document.getElementById("chartProcesoInv");

    //Si la chart existe la destruye antes de volverlo a usar.
    if (this.myLineChart)
        this.myLineChart.destroy();

    // Datos de la grafica
    var _datapoints = [info_estado.Denuncias, info_estado.Investigaciones, info_estado.Carpetas, info_estado.Imputaciones, info_estado.Vinculaciones, info_estado.Sentencias];
    _datapoints = _datapoints.map(function(dato){
        console.log(dato);
        if(dato === 'NR'){
          dato = -1;
        }
        return dato;
      });

    //Agrega los labels 
    const multiBarLogo = {
        id: 'multiBarLogo',
        afterDatasetDraw(chart, args, options) {
            const { ctx } = chart;
            ctx.save();
            for (let index = 0; index < _datapoints.length; index++) {
                ctx.font = "12px Roboto bold";
                ctx.fillText(_datapoints[index], chart.getDatasetMeta(0).data[index].x - (19.22 / 2), chart.getDatasetMeta(0).data[index].y - 9);
            }
        }
    }

    //Crea de nuevo el Chart
    this.myLineChart = new Chart(grapharea, {
        type: 'line',
        data: {
            labels: [_denuncias, _investigaciones, _carpetas, _imputaciones, _vinculaciones, _sentencias],
            datasets: [{
                label: _entidad,
                data: _datapoints,
                backgroundColor: '#FCF3CF',
                borderColor: '#F1C40F',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                // formatea los tooltips de la grafica
                tooltip: {
                    callbacks: {
                        title: (context) => {
                            return context[0].label.replaceAll(',', ' ');
                        },
                    },
                },
                legend: {
                    display: true,
                    labels: {
                        color: 'black',
                        // This more specific font property overrides the global property
                        font: {
                            size: 14,
                        },
                        // text: 'Armando'
                    },
                    onClick: () => { },
                }
            },
            scales: {
                x: {
                    ticks: {
                        align: 'center',
                        beginAtZero: true,
                        gace: '5%'
                    }
                },
                y: {
                    //Quita los dlabels del eje x
                    display: true,
                    ticks: {
                        color: 'white',
                        beginAtZero: true,
                    },
                    grid: {
                        display: false
                    }
                }
            }
        },
        plugins: [multiBarLogo]
    });
}