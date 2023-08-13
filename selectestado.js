// Variable Global
var estado_lista = [];

$(document).ready(function () {
  //set initial Año 2022.
  var año_seleccionado = $('input[name=años]:checked', '#radio_box_años').val();
  añoSeleccionado(año_seleccionado);

  $('#radio_box_años').change(function () {
    var selected_año = $("input[name='años']:checked").val();
    añoSeleccionado(selected_año);
  });
});

function añoSeleccionado(id_año){
  this.estado_lista = datos_estados[id_año];
  //Cuando se cambia de año se regresa al estado federal.
  select_estado("Federal");
}

function select_estado(idEstado) {
  var info_estado = this.estado_lista.find(x => x.Entidad === idEstado)

  $("idEntidad").text(info_estado.Entidad);
  $("IdDenuncias").text(info_estado.Denuncias);
  $("idInvestigaciones").text(info_estado.Investigaciones);
  $("idCarpetas").text(info_estado.Carpetas);
  $("idImputaciones").text(info_estado.Imputaciones);
  $("idVinculaciones").text(info_estado.Vinculaciones);
  $("idSentencias").text(info_estado.Sentencias);
  $("idTotalCombate").text(info_estado.TotalCambate);
  $("idJudicialización").text(info_estado.Judicialización);
  $("idCriterios").text(info_estado.Criterio);
  $("idControversias").text(info_estado.Controversias);
  $("idSuspencion").text(info_estado.Suspensiónes);
  $("idProcedimiento").text(info_estado.Procedimiento);
  $("idReparacion").text(info_estado.Reparaciónes);
  $("idTotalNoCombate").text(info_estado.TotalNoCombate);
  $("idArchivo").text(info_estado.Archivos);
  $("idAcccionPenal").text(info_estado.NoAcciónPenal);
  $("idAbstenciones").text(info_estado.Abstenciones);
  $("idPresupuesto").text(info_estado.Presupuesto);
  $("idMonto").text(info_estado.Montos);
}
