//Variable global Pie Resolucion de Carpetas.
let myPieChartResolution;
function pieChartResolucion() {

    //Labels
    var _sin_respuesta = 'Sin Respuesta.';
    var _cambate = 'Resolución de carpetas en combate a corrupción.';
    var _no_combate = 'Resolución de carpetas que no combaten la corrupción.';

    //Color Pie
    var _combate_color = '#27AE60'; //green
    var _no_combate_color = '#E74C3C'; //red
    var _sin_respuesta_color = '#FEF9E7'; //grey

    var _num_combate = Math.floor(info_estado.TotalCambate.replace("%", ""));
    var _num_nocombate = Math.floor(info_estado.TotalNoCombate.replace("%", ""));
    var _sum_sin_respuesta = 100 - (_num_combate + _num_nocombate);

    //Configuracion Char Resolucione de carpetas
    var grapharea = document.getElementById("ChartResolucion");

    //Si la chart existe la destruye antes de volverlo a usar.
    if (this.myPieChartResolution)
        this.myPieChartResolution.destroy();

    //Crea de nuevo el Chart
    this.myPieChartResolution = new Chart(grapharea, {
        type: 'pie',
        data: {
            labels: [_no_combate, _cambate, _sin_respuesta],
            datasets: [{
                // label: 'My First Dataset',
                data: [_num_combate, _num_nocombate, _sum_sin_respuesta],
                backgroundColor: [_combate_color, _no_combate_color, _sin_respuesta_color],
                hoverOffset: 4
            }]
        },
    });
}