// Variable global Chart Object
let myLineChart;

function chartProcesoInv() {
    // LABELS
    const labels = {
        entidad: info_estado.Entidad,
        denuncias: ['Denuncias', 'recibidas'],
        investigaciones: ['Investigaciones de', 'oficio inicadas'],
        carpetas: ['Carpetas de', 'Investigación', 'abiertas'],
        imputaciones: ['Formaularios de', 'imputaciones'],
        vinculaciones: ['Vinculaciones a', 'proceso'],
        sentencias: ['Sentencias', 'condenatorias'],
    };

    const graphArea = document.getElementById("chartProcesoInv");

    // Destroy the chart if it exists
    if (myLineChart) myLineChart.destroy();

    // Data points
    const dataPoints = [
        info_estado.Denuncias,
        info_estado.Investigaciones,
        info_estado.Carpetas,
        info_estado.Imputaciones,
        info_estado.Vinculaciones,
        info_estado.Sentencias
    ].map(dato => dato === 'NR' ? -1 : dato);

    // Custom plugin to add labels
    const multiBarLogo = {
        id: 'multiBarLogo',
        afterDatasetDraw(chart) {
            const { ctx } = chart;
            ctx.save();
            chart.getDatasetMeta(0).data.forEach((dataPoint, index) => {
                ctx.font = "12px Roboto bold";
                ctx.fillText(dataPoints[index], dataPoint.x - 19.22 / 2, dataPoint.y - 9);
            });
        }
    };

    // Create the chart
    myLineChart = new Chart(graphArea, {
        type: 'line',
        data: {
            labels: [
                labels.denuncias,
                labels.investigaciones,
                labels.carpetas,
                labels.imputaciones,
                labels.vinculaciones,
                labels.sentencias
            ],
            datasets: [{
                label: labels.entidad,
                data: dataPoints,
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
                tooltip: {
                    callbacks: {
                        title: context => context[0].label.replaceAll(',', ' '),
                    },
                },
                legend: {
                    display: true,
                    labels: {
                        color: 'white',
                        font: {
                            size: 0,
                        },
                    },
                    onClick: () => { },
                }
            },
            scales: {
                x: {
                    ticks: {
                        align: 'center',
                        beginAtZero: true,
                        grace: '5%',
                    }
                },
                y: {
                    display: true,
                    ticks: {
                        color: 'white',
                        beginAtZero: true,
                    },
                    grid: {
                        display: false,
                    }
                }
            }
        },
        plugins: [multiBarLogo]
    });
}
