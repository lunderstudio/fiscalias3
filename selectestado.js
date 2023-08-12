function select_estado(idEstado) {
    let info_estado = estado_lista.find(x => x.Entidad === idEstado)

    document.getElementById("idEntidad").innerText = info_estado.Entidad;
    document.getElementById("IdDenuncias").innerText = info_estado.Denuncias;
    document.getElementById("idInvestigaciones").innerText = info_estado.Investigaciones;
    document.getElementById("idCarpetas").innerText = info_estado.Carpetas;
    document.getElementById("idImputaciones").innerText = info_estado.Imputaciones;
    document.getElementById("idVinculaciones").innerText = info_estado.Vinculaciones;
    document.getElementById("idSentencias").innerText = info_estado.Sentencias;
    document.getElementById("idTotalCombate").innerText = info_estado.TotalCambate;
    document.getElementById("idJudicialización").innerText = info_estado.Judicialización;
    document.getElementById("idCriterios").innerText = info_estado.Criterio;
    document.getElementById("idControversias").innerText = info_estado.Controversias;
    document.getElementById("idSuspencion").innerText = info_estado.Suspensiónes;
    document.getElementById("idProcedimiento").innerText = info_estado.Procedimiento;
    document.getElementById("idReparacion").innerText = info_estado.Reparaciónes;
    document.getElementById("idTotalNoCombate").innerText = info_estado.TotalNoCombate;
    document.getElementById("idArchivo").innerText = info_estado.Archivos;
    document.getElementById("idAcccionPenal").innerText = info_estado.NoAcciónPenal;
    document.getElementById("idAbstenciones").innerText = info_estado.Abstenciones;
    document.getElementById("idPresupuesto").innerText = info_estado.Presupuesto;
    document.getElementById("idMonto").innerText = info_estado.Montos;
  }

estado_lista =  [
    {
      "Entidad": "Aguascalientes Armando",
      "Denuncias": "117",
      "Investigaciones": "2",
      "Carpetas": "117",
      "Imputaciones": "18",
      "Vinculaciones": "18",
      "Sentencias": "2",
      "Judicialización": "3",
      "Criterio": "23",
      "Controversias": "3",
      "Suspensiónes": "0",
      "Procedimiento": "0",
      "Reparaciónes": "2",
      "TotalCambate": "26%",
      "Archivos": "9",
      "NoAcciónPenal": "23",
      "Abstenciones": "9",
      "TotalNoCombate": "35%",
      "Presupuesto": "$16,779,612.00",
      "Montos": "$21,866,669.43"
    },
    {
      "Entidad": "Campeche",
      "Denuncias": "528",
      "Investigaciones": "528",
      "Carpetas": "528",
      "Imputaciones": "11",
      "Vinculaciones": "10",
      "Sentencias": "0",
      "Judicialización": "31",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "5",
      "Procedimiento": "0",
      "Reparaciónes": "1",
      "TotalCambate": "7%",
      "Archivos": "77",
      "NoAcciónPenal": "14",
      "Abstenciones": "9",
      "TotalNoCombate": "19%",
      "Presupuesto": "$23,418,060.00",
      "Montos": "$580,000.00"
    },
    {
      "Entidad": "Coahuila",
      "Denuncias": "207",
      "Investigaciones": "40",
      "Carpetas": "207",
      "Imputaciones": "39",
      "Vinculaciones": "38",
      "Sentencias": "0",
      "Judicialización": "39",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "10",
      "Procedimiento": "0",
      "Reparaciónes": "4",
      "TotalCambate": "26%",
      "Archivos": "0",
      "NoAcciónPenal": "62",
      "Abstenciones": "0",
      "TotalNoCombate": "30%",
      "Presupuesto": "$127,057,088.93",
      "Montos": "$8,152,155.96"
    },
    {
      "Entidad": "Colima",
      "Denuncias": "852",
      "Investigaciones": "0",
      "Carpetas": "852",
      "Imputaciones": "10",
      "Vinculaciones": "9",
      "Sentencias": "1",
      "Judicialización": "10",
      "Criterio": "1",
      "Controversias": "0",
      "Suspensiónes": "2",
      "Procedimiento": "1",
      "Reparaciónes": "10",
      "TotalCambate": "3%",
      "Archivos": "17",
      "NoAcciónPenal": "19",
      "Abstenciones": "19",
      "TotalNoCombate": "6%",
      "Presupuesto": "$18,289,184.00",
      "Montos": "NR"
    },
    {
      "Entidad": "Chiapas",
      "Denuncias": "0",
      "Investigaciones": "0",
      "Carpetas": "0",
      "Imputaciones": "0",
      "Vinculaciones": "0",
      "Sentencias": "0",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Chihuahua",
      "Denuncias": "166",
      "Investigaciones": "0",
      "Carpetas": "166",
      "Imputaciones": "8",
      "Vinculaciones": "5",
      "Sentencias": "3",
      "Judicialización": "8",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "1",
      "Procedimiento": "3",
      "Reparaciónes": "0",
      "TotalCambate": "7%",
      "Archivos": "0",
      "NoAcciónPenal": "13",
      "Abstenciones": "1",
      "TotalNoCombate": "8%",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Ciudad de México",
      "Denuncias": "255",
      "Investigaciones": "255",
      "Carpetas": "255",
      "Imputaciones": "13",
      "Vinculaciones": "20",
      "Sentencias": "0",
      "Judicialización": "0",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "0",
      "Procedimiento": "0",
      "Reparaciónes": "0",
      "TotalCambate": "0%",
      "Archivos": "150",
      "NoAcciónPenal": "41",
      "Abstenciones": "3",
      "TotalNoCombate": "76%",
      "Presupuesto": "NA",
      "Montos": "NR"
    },
    {
      "Entidad": "Durango",
      "Denuncias": "490",
      "Investigaciones": "0",
      "Carpetas": "490",
      "Imputaciones": "63",
      "Vinculaciones": "30",
      "Sentencias": "0",
      "Judicialización": "96",
      "Criterio": "0",
      "Controversias": "5",
      "Suspensiónes": "2",
      "Procedimiento": "1",
      "Reparaciónes": "6",
      "TotalCambate": "22%",
      "Archivos": "6",
      "NoAcciónPenal": "25",
      "Abstenciones": "5",
      "TotalNoCombate": "7%",
      "Presupuesto": "$66,239,375.00",
      "Montos": "$867,934.48"
    },
    {
      "Entidad": "Guanajuato",
      "Denuncias": "165",
      "Investigaciones": "165",
      "Carpetas": "165",
      "Imputaciones": "16",
      "Vinculaciones": "8",
      "Sentencias": "1",
      "Judicialización": "19",
      "Criterio": "0",
      "Controversias": "14",
      "Suspensiónes": "2",
      "Procedimiento": "9",
      "Reparaciónes": "3",
      "TotalCambate": "28%",
      "Archivos": "6",
      "NoAcciónPenal": "86",
      "Abstenciones": "1",
      "TotalNoCombate": "56%",
      "Presupuesto": "$39,878,407.56",
      "Montos": "$2,371,800.00"
    },
    {
      "Entidad": "Guerrero",
      "Denuncias": "61",
      "Investigaciones": "61",
      "Carpetas": "61",
      "Imputaciones": "0",
      "Vinculaciones": "0",
      "Sentencias": "0",
      "Judicialización": "0",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "0",
      "Procedimiento": "0",
      "Reparaciónes": "0",
      "TotalCambate": "0%",
      "Archivos": "1",
      "NoAcciónPenal": "11",
      "Abstenciones": "1",
      "TotalNoCombate": "21%",
      "Presupuesto": "NA",
      "Montos": "NR"
    },
    {
      "Entidad": "Hidalgo",
      "Denuncias": "1059",
      "Investigaciones": "1059",
      "Carpetas": "503",
      "Imputaciones": "31",
      "Vinculaciones": "37",
      "Sentencias": "21",
      "Judicialización": "13",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "15",
      "Procedimiento": "4",
      "Reparaciónes": "0",
      "TotalCambate": "6%",
      "Archivos": "2",
      "NoAcciónPenal": "239",
      "Abstenciones": "0",
      "TotalNoCombate": "48%",
      "Presupuesto": "$34,151,665.00",
      "Montos": "$988,637,060.90"
    },
    {
      "Entidad": "Jalisco",
      "Denuncias": "2517",
      "Investigaciones": "0",
      "Carpetas": "2517",
      "Imputaciones": "37",
      "Vinculaciones": "37",
      "Sentencias": "3",
      "Judicialización": "152",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "21",
      "Procedimiento": "3",
      "Reparaciónes": "24",
      "TotalCambate": "8%",
      "Archivos": "366",
      "NoAcciónPenal": "20",
      "Abstenciones": "785",
      "TotalNoCombate": "47%",
      "Presupuesto": "$190,720,981.00",
      "Montos": "NR"
    },
    {
      "Entidad": "México",
      "Denuncias": "8629",
      "Investigaciones": "8904",
      "Carpetas": "8629",
      "Imputaciones": "638",
      "Vinculaciones": "210",
      "Sentencias": "48",
      "Judicialización": "638",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "27",
      "Procedimiento": "19",
      "Reparaciónes": "1",
      "TotalCambate": "8%",
      "Archivos": "3261",
      "NoAcciónPenal": "3",
      "Abstenciones": "373",
      "TotalNoCombate": "42%",
      "Presupuesto": "$791,525,193.84",
      "Montos": "NR"
    },
    {
      "Entidad": "Michoacán",
      "Denuncias": "295",
      "Investigaciones": "295",
      "Carpetas": "295",
      "Imputaciones": "25",
      "Vinculaciones": "12",
      "Sentencias": "6",
      "Judicialización": "32",
      "Criterio": "0",
      "Controversias": "10",
      "Suspensiónes": "1",
      "Procedimiento": "1",
      "Reparaciónes": "1",
      "TotalCambate": "15%",
      "Archivos": "32",
      "NoAcciónPenal": "86",
      "Abstenciones": "8",
      "TotalNoCombate": "43%",
      "Presupuesto": "$21,871,901.00",
      "Montos": "$20,191.14"
    },
    {
      "Entidad": "Morelos",
      "Denuncias": "0",
      "Investigaciones": "0",
      "Carpetas": "0",
      "Imputaciones": "0",
      "Vinculaciones": "0",
      "Sentencias": "0",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Nayarit",
      "Denuncias": "0",
      "Investigaciones": "0",
      "Carpetas": "0",
      "Imputaciones": "0",
      "Vinculaciones": "0",
      "Sentencias": "0",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Nuevo León",
      "Denuncias": "213",
      "Investigaciones": "10",
      "Carpetas": "3253",
      "Imputaciones": "45",
      "Vinculaciones": "23",
      "Sentencias": "5",
      "Judicialización": "45",
      "Criterio": "1",
      "Controversias": "0",
      "Suspensiónes": "7",
      "Procedimiento": "1",
      "Reparaciónes": "*",
      "TotalCambate": "2%",
      "Archivos": "927",
      "NoAcciónPenal": "17",
      "Abstenciones": "19",
      "TotalNoCombate": "30%",
      "Presupuesto": "NA",
      "Montos": "NR"
    },
    {
      "Entidad": "Oaxaca",
      "Denuncias": "NR",
      "Investigaciones": "NR",
      "Carpetas": "NR",
      "Imputaciones": "NR",
      "Vinculaciones": "NR",
      "Sentencias": "NR",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Baja California",
      "Denuncias": "NR",
      "Investigaciones": "NR",
      "Carpetas": "NR",
      "Imputaciones": "NR",
      "Vinculaciones": "NR",
      "Sentencias": "NR",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Baja California Sur",
      "Denuncias": "NR",
      "Investigaciones": "NR",
      "Carpetas": "NR",
      "Imputaciones": "NR",
      "Vinculaciones": "NR",
      "Sentencias": "NR",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Puebla",
      "Denuncias": "1844",
      "Investigaciones": "51",
      "Carpetas": "2968",
      "Imputaciones": "81",
      "Vinculaciones": "74",
      "Sentencias": "8",
      "Judicialización": "105",
      "Criterio": "0",
      "Controversias": "11",
      "Suspensiónes": "7",
      "Procedimiento": "2",
      "Reparaciónes": "3",
      "TotalCambate": "4%",
      "Archivos": "16",
      "NoAcciónPenal": "1727",
      "Abstenciones": "7",
      "TotalNoCombate": "59%",
      "Presupuesto": "$79,394,339.66",
      "Montos": "NR"
    },
    {
      "Entidad": "Querétaro",
      "Denuncias": "157",
      "Investigaciones": "0",
      "Carpetas": "157",
      "Imputaciones": "46",
      "Vinculaciones": "67",
      "Sentencias": "26",
      "Judicialización": "35",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "23",
      "Procedimiento": "26",
      "Reparaciónes": "3",
      "TotalCambate": "55%",
      "Archivos": "1",
      "NoAcciónPenal": "46",
      "Abstenciones": "10",
      "TotalNoCombate": "36%",
      "Presupuesto": "$48,109,802.49",
      "Montos": "$14,874,337.00"
    },
    {
      "Entidad": "Quintana Roo",
      "Denuncias": "1355",
      "Investigaciones": "97",
      "Carpetas": "1355",
      "Imputaciones": "139",
      "Vinculaciones": "119",
      "Sentencias": "10",
      "Judicialización": "139",
      "Criterio": "124",
      "Controversias": "32",
      "Suspensiónes": "52",
      "Procedimiento": "4",
      "Reparaciónes": "3",
      "TotalCambate": "26%",
      "Archivos": "0",
      "NoAcciónPenal": "360",
      "Abstenciones": "3",
      "TotalNoCombate": "27%",
      "Presupuesto": "$133,506,405.00",
      "Montos": "$1,913,432,554.53"
    },
    {
      "Entidad": "San Luis Potosí",
      "Denuncias": "507",
      "Investigaciones": "0",
      "Carpetas": "331",
      "Imputaciones": "16",
      "Vinculaciones": "7",
      "Sentencias": "0",
      "Judicialización": "15",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "1",
      "Procedimiento": "0",
      "Reparaciónes": "1",
      "TotalCambate": "5%",
      "Archivos": "25",
      "NoAcciónPenal": "85",
      "Abstenciones": "14",
      "TotalNoCombate": "37%",
      "Presupuesto": "$5,071,058.42",
      "Montos": "NR"
    },
    {
      "Entidad": "Sinaloa",
      "Denuncias": "32",
      "Investigaciones": "2",
      "Carpetas": "31",
      "Imputaciones": "1",
      "Vinculaciones": "1",
      "Sentencias": "2",
      "Judicialización": "1",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "2",
      "Procedimiento": "0",
      "Reparaciónes": "0",
      "TotalCambate": "10%",
      "Archivos": "7",
      "NoAcciónPenal": "20",
      "Abstenciones": "14",
      "TotalNoCombate": "132%",
      "Presupuesto": "NA",
      "Montos": "$2,000,000.00"
    },
    {
      "Entidad": "Sonora",
      "Denuncias": "504",
      "Investigaciones": "0",
      "Carpetas": "492",
      "Imputaciones": "40",
      "Vinculaciones": "40",
      "Sentencias": "8",
      "Judicialización": "75",
      "Criterio": "1",
      "Controversias": "0",
      "Suspensiónes": "2",
      "Procedimiento": "0",
      "Reparaciónes": "1",
      "TotalCambate": "16%",
      "Archivos": "14",
      "NoAcciónPenal": "155",
      "Abstenciones": "13",
      "TotalNoCombate": "37%",
      "Presupuesto": "$183,949,351.00",
      "Montos": "$81,012.22"
    },
    {
      "Entidad": "Tabasco",
      "Denuncias": "152",
      "Investigaciones": "0",
      "Carpetas": "152",
      "Imputaciones": "33",
      "Vinculaciones": "29",
      "Sentencias": "14",
      "Judicialización": "22",
      "Criterio": "2",
      "Controversias": "0",
      "Suspensiónes": "3",
      "Procedimiento": "14",
      "Reparaciónes": "13",
      "TotalCambate": "36%",
      "Archivos": "1",
      "NoAcciónPenal": "0",
      "Abstenciones": "13",
      "TotalNoCombate": "9%",
      "Presupuesto": "NR",
      "Montos": "$2,350,000.00"
    },
    {
      "Entidad": "Tamaulipas",
      "Denuncias": "804",
      "Investigaciones": "0",
      "Carpetas": "804",
      "Imputaciones": "40",
      "Vinculaciones": "39",
      "Sentencias": "4",
      "Judicialización": "39",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "10",
      "Procedimiento": "0",
      "Reparaciónes": "1",
      "TotalCambate": "6%",
      "Archivos": "4",
      "NoAcciónPenal": "255",
      "Abstenciones": "59",
      "TotalNoCombate": "40%",
      "Presupuesto": "$1,856,157.93",
      "Montos": "NR"
    },
    {
      "Entidad": "Tlaxcala",
      "Denuncias": "1051",
      "Investigaciones": "1047",
      "Carpetas": "1047",
      "Imputaciones": "31",
      "Vinculaciones": "19",
      "Sentencias": "75",
      "Judicialización": "90",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "5",
      "Procedimiento": "0",
      "Reparaciónes": "5",
      "TotalCambate": "10%",
      "Archivos": "4",
      "NoAcciónPenal": "12",
      "Abstenciones": "11",
      "TotalNoCombate": "3%",
      "Presupuesto": "$29,114,433.77",
      "Montos": "NR"
    },
    {
      "Entidad": "Veracruz",
      "Denuncias": "0",
      "Investigaciones": "0",
      "Carpetas": "0",
      "Imputaciones": "0",
      "Vinculaciones": "0",
      "Sentencias": "0",
      "Judicialización": "NR",
      "Criterio": "NR",
      "Controversias": "NR",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "NR",
      "Archivos": "NR",
      "NoAcciónPenal": "NR",
      "Abstenciones": "NR",
      "TotalNoCombate": "NR",
      "Presupuesto": "NR",
      "Montos": "NR"
    },
    {
      "Entidad": "Yucatán",
      "Denuncias": "337",
      "Investigaciones": "1",
      "Carpetas": "260",
      "Imputaciones": "20",
      "Vinculaciones": "37",
      "Sentencias": "0",
      "Judicialización": "12",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "0",
      "Procedimiento": "0",
      "Reparaciónes": "7",
      "TotalCambate": "7%",
      "Archivos": "33",
      "NoAcciónPenal": "61",
      "Abstenciones": "1",
      "TotalNoCombate": "37%",
      "Presupuesto": "NA",
      "Montos": "NR"
    },
    {
      "Entidad": "Zacatecas",
      "Denuncias": "1007",
      "Investigaciones": "0",
      "Carpetas": "1007",
      "Imputaciones": "44",
      "Vinculaciones": "19",
      "Sentencias": "6",
      "Judicialización": "59",
      "Criterio": "0",
      "Controversias": "0",
      "Suspensiónes": "12",
      "Procedimiento": "2",
      "Reparaciónes": "8",
      "TotalCambate": "8%",
      "Archivos": "307",
      "NoAcciónPenal": "1",
      "Abstenciones": "185",
      "TotalNoCombate": "49%",
      "Presupuesto": "$21,072,498.86",
      "Montos": "NR"
    },
    {
      "Entidad": "Federal",
      "Denuncias": "4566",
      "Investigaciones": "0",
      "Carpetas": "4803",
      "Imputaciones": "6",
      "Vinculaciones": "6",
      "Sentencias": "0",
      "Judicialización": "83",
      "Criterio": "2",
      "Controversias": "36",
      "Suspensiónes": "NR",
      "Procedimiento": "NR ",
      "Reparaciónes": "NR",
      "TotalCambate": "3%",
      "Archivos": "0",
      "NoAcciónPenal": "450",
      "Abstenciones": "147",
      "TotalNoCombate": "12%",
      "Presupuesto": "$233,531,300.00",
      "Montos": "$8,277,485.52"
    }
  ];
