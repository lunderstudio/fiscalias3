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

    //Crea de nuevo el Chart
    this.myLineChart = new Chart(grapharea, {
        type: 'line',
        data: {
            labels: [_denuncias, _investigaciones, _carpetas, _imputaciones, _vinculaciones, _sentencias],
            datasets: [{
                label: _entidad,
                data: [info_estado.Denuncias, info_estado.Investigaciones, info_estado.Carpetas, info_estado.Imputaciones, info_estado.Vinculaciones, info_estado.Sentencias],
                backgroundColor: '#FCF3CF',
                borderColor: '#F1C40F',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            plugins: {
                //formatea los tooltips de la grafica
                tooltip: {
                    callbacks: {
                        title: (context) => {
                            return context[0].label.replaceAll(',', ' ');
                        }
                    },
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 14
                        },
                    }
                }
            },
            scales: {
                x: {
                    align: 'center',
                },
                y: {
                    //Quita los dlabels del eje x
                    display: false,
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}