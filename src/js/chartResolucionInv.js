// Variable global Pie Resolucion de Carpetas.
let myPieChartResolution;

function pieChartResolucion() {
    // Labels
    const labels = {
        sin_respuesta: 'Carpetas en trámite',
        combate: 'Carpetas en favor del combate',
        no_combate: 'Carpetas que no abonan al combate'
    };

    // Colors
    const colors = {
        combate: '#27AE60', // green
        no_combate: '#E74C3C', // red
        sin_respuesta: '#FCF3CF' // yellow
    };

    const numCombate = parseInt(info_estado.TotalCambate.replace("%", ""), 10);
    const numNoCombate = parseInt(info_estado.TotalNoCombate.replace("%", ""), 10);
    const sumSinRespuesta = 100 - (numCombate + numNoCombate);

    const graphArea = document.getElementById("ChartResolucion");

    // Destroy the chart if it exists
    if (myPieChartResolution) myPieChartResolution.destroy();

    // Create the Chart
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
}
