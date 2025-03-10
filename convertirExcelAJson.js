const XLSX = require('xlsx');
const fs = require('fs');
const estados_mexico = require('./src/js/estadosMexico');

// Lee el archivo Excel C:\git\fiscalias3\src\data\fiscalias_2023.xlsx
const workbook = XLSX.readFile('C:/git/fiscalias3/src/data/Resultados_2023.xlsx');

// Selecciona la hoja por nombre
const sheet_resultados = 'Resultados'; // Cambia 'Resultados' por el nombre de la hoja que deseas leer
const sheet_autonomia = 'Autonomía'; // Cambia 'Autonomia' por el nombre de la hoja que deseas leer
const resultados_2023 = workbook.Sheets[sheet_resultados];
const autonomia_2023 = workbook.Sheets[sheet_autonomia];

// Convierte la hoja a JSON, comenzando desde la fila 2
const sheetToJson = (sheet, range) => XLSX.utils.sheet_to_json(sheet, { range });
let resultados_json = sheetToJson(resultados_2023, 1);
let autonomia_json = sheetToJson(autonomia_2023, 0);

const transformValue = (value) => 
    value === undefined 
    ? "0" : value === -1 
    ? "NR" : value.toString();

const transformCurrency = (value) =>
    value === undefined 
        ? "NA" : value === -1 || value === "NR"
        ? "NR" : value === 0
        ? "$0.00" : parseFloat(value)
        .toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

const transformItem = (value) =>
    value === undefined 
    ? "NA" : value === "0%" 
    ?  value.toString() : value === 0 
    ? "0%" : (parseFloat(value) * 100).toFixed(0) + '%'; 

let transformedData = resultados_json.reduce((acc, row) => {
    const year = row["Año"];
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push({
        "Entidad": row["Entidad"].trim() || "",
        "Denuncias": transformValue(row["Denuncias_recibidas"]),
        "Investigaciones": transformValue(row["Investigaciones_de_Oficio"]),
        "Carpetas": transformValue(row["Carpetas_de_investigación_abiertas"]),
        "Imputaciones": transformValue(row["Formulaciones_de_imputación"]),
        "Vinculaciones": transformValue(row["Autos_de_vinculación_a_proceso"]),
        "Sentencias": transformValue(row["Sentencias_condenatorias"]),
        "Judicialización": transformValue(row["Judicialización"]),
        "Criterio": transformValue(row["Criterio de Oportunidad"]),
        "Controversias": transformValue(row["Controversias"]),
        "Suspensiónes": transformValue(row["Suspensión condicional del proceso"]),
        "Procedimiento": transformValue(row["Procedimiento abreviado"]),
        "Reparaciónes": transformValue(row["Reparación del daño"]),
        "TotalCombate": transformItem(row["Carpetas en favor del combate"]),
        "Archivos": transformValue(row["Archivo temporal"]),
        "NoAcciónPenal": transformValue(row["No ejercicio de la acción penal"]),
        "Abstenciones": transformValue(row["Facultad de abstenerse a investigar"]),
        "TotalNoCombate": transformItem(row["Carpetas que no abonan al combate"]),
        "Presupuesto": row["Presupuesto_otorgado"] !== undefined ? transformCurrency(row["Presupuesto_otorgado"]) : "NR",
        "Montos": row["Montos_recuperados"] !== undefined ? transformCurrency(row["Montos_recuperados"]) : "NR"
    });
    return acc;
}, {});

// Guarda el JSON en un archivo
fs.writeFileSync('C:/git/fiscalias3/src/js/autonomia.js', JSON.stringify(transformedData, null, 2));

const mappedData = resultados_json.map(entry => {
    const year = entry.Año;
    if (year === 2023) {
        let estado_info = estados_mexico.find(estado => estado.Entidad.trim() === entry.Entidad.trim());
        let estado_autonomia = autonomia_json.find(estado => estado.Entidad.trim() === entry.Entidad.trim());

        return {
            id: estado_info?.id,
            value: estado_autonomia?.Total,
            latitude: estado_info?.latitude,
            longitude: estado_info?.longitude,
            Entidad: entry.Entidad.trim(),
            Resultados: year.toString(),
            Monto: transformCurrency(entry.Montos_recuperados),
            CombateCorrupción: transformItem(entry["Carpetas en favor del combate"]),
            NoCombateCorrupción: transformItem(entry["Carpetas que no abonan al combate"]),
        };
    }
}).filter(entry => entry !== undefined);

fs.writeFileSync('src/js/tooltipv1.js', JSON.stringify(mappedData, null, 2));
console.log('Archivo JSON creado exitosamente.');
