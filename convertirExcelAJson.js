const XLSX = require('xlsx');
const fs = require('fs');

const estados = [
    { id: "MX-AGU", value: 10, Entidad: "Aguascalientes", latitude: 21.8853, longitude: -102.2916 },
    { id: "MX-BCN", value: 3, Entidad: "Baja California", latitude: 30.8406, longitude: -115.2838 },
    { id: "MX-BCS", value: 2, Entidad: "Baja California Sur", latitude: 25.0343, longitude: -111.6661 },
    { id: "MX-CAM", value: 9, Entidad: "Campeche", latitude: 19.8301, longitude: -90.5349 },
    { id: "MX-CHP", value: 5, Entidad: "Chiapas", latitude: 16.7569, longitude: -93.1292 },
    { id: "MX-CHH", value: 11, Entidad: "Chihuahua", latitude: 28.632996, longitude: -106.069100 },
    { id: "MX-CMX", value: 7, Entidad: "Ciudad de México", latitude: 19.4326, longitude: -99.1332 },
    { id: "MX-COA", value: 10, Entidad: "Coahuila", latitude: 27.0587, longitude: -101.7068 },
    { id: "MX-COL", value: 8, Entidad: "Colima", latitude: 19.2452, longitude: -103.7242 },
    { id: "MX-DUR", value: 9, Entidad: "Durango", latitude: 24.0223, longitude: -104.6532 },
    { id: "MX-GUA", value: 8, Entidad: "Guanajuato", latitude: 21.0190, longitude: -101.2574 },
    { id: "MX-GRO", value: 8, Entidad: "Guerrero", latitude: 17.5545, longitude: -99.5128 },
    { id: "MX-HID", value: 7, Entidad: "Hidalgo", latitude: 20.0911, longitude: -98.7624 },
    { id: "MX-JAL", value: 10, Entidad: "Jalisco", latitude: 20.6597, longitude: -103.3496 },
    { id: "MX-MEX", value: 6, Entidad: "CDMX", latitude: 19.4969, longitude: -99.7233 },
    { id: "MX-MIC", value: 9, Entidad: "Michoacán", latitude: 19.5665, longitude: -101.7068 },
    { id: "MX-MOR", value: 3, Entidad: "Morelos", latitude: 18.6813, longitude: -99.1013 },
    { id: "MX-NAY", value: 2, Entidad: "Nayarit", latitude: 21.7514, longitude: -104.8455 },
    { id: "MX-NLE", value: 11, Entidad: "Nuevo León", latitude: 25.6866, longitude: -100.3161 },
    { id: "MX-OAX", value: 4, Entidad: "Oaxaca", latitude: 17.0732, longitude: -96.7266 },
    { id: "MX-PUE", value: 11, Entidad: "Puebla", latitude: 19.0413, longitude: -98.2062 },
    { id: "MX-QUE", value: 8, Entidad: "Querétaro", latitude: 20.5888, longitude: -100.3899 },
    { id: "MX-ROO", value: 12, Entidad: "Quintana Roo", latitude: 19.1817, longitude: -88.4791 },
    { id: "MX-SLP", value: 6, Entidad: "San Luis Potosí", latitude: 22.1565, longitude: -100.9855 },
    { id: "MX-SIN", value: 9, Entidad: "Sinaloa", latitude: 24.8254, longitude: -107.4424 },
    { id: "MX-SON", value: 8, Entidad: "Sonora", latitude: 29.0729, longitude: -110.9559 },
    { id: "MX-TAB", value: 6, Entidad: "Tabasco", latitude: 17.9895, longitude: -92.9488 },
    { id: "MX-TAM", value: 10, Entidad: "Tamaulipas", latitude: 23.7369, longitude: -99.1411 },
    { id: "MX-TLA", value: 9, Entidad: "Tlaxcala", latitude: 19.3182, longitude: -98.2375 },
    { id: "MX-VER", value: 10, Entidad: "Veracruz", latitude: 19.1738, longitude: -96.1342 },
    { id: "MX-YUC", value: 7, Entidad: "Yucatán", latitude: 20.7099, longitude: -89.0943 },
    { id: "MX-ZAC", value: 7, Entidad: "Zacatecas", latitude: 22.7709, longitude: -102.5832 }
];

// Lee el archivo Excel
const workbook = XLSX.readFile('D:/Descargas/archivo.xlsx');
// Selecciona la hoja por nombre
const sheetName = 'Resultados'; // Cambia 'Resultados' por el nombre de la hoja que deseas leer
const worksheet = workbook.Sheets[sheetName];

// Convierte la hoja a JSON, comenzando desde la fila 2
let jsonData = XLSX.utils.sheet_to_json(worksheet, { range: 1 });

let transformedData = jsonData.reduce((acc, row) => {
    const year = row["Año"];
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push({
        "Entidad": row["Entidad"].trim() || "",
        "Denuncias": row["Denuncias_recibidas"] === -1 ? "NR" : (row["Denuncias_recibidas"] === 0 ? "0" : row["Denuncias_recibidas"].toString()),
        "Investigaciones": row["Investigaciones_de_Oficio"] === -1 ? "NR" : (row["Investigaciones_de_Oficio"] === 0 ? "0" : row["Investigaciones_de_Oficio"].toString()),
        "Carpetas": row["Carpetas_de_investigación_abiertas"] === -1 ? "NR" : (row["Carpetas_de_investigación_abiertas"] === 0 ? "0" : row["Carpetas_de_investigación_abiertas"].toString()),
        "Imputaciones": row["Formulaciones_de_imputación"] === -1 ? "NR" : (row["Formulaciones_de_imputación"] === 0 ? "0" : row["Formulaciones_de_imputación"].toString()),
        "Vinculaciones": row["Autos_de_vinculación_a_proceso"] === -1 ? "NR" : (row["Autos_de_vinculación_a_proceso"] === 0 ? "0" : row["Autos_de_vinculación_a_proceso"].toString()),
        "Sentencias": row["Sentencias_condenatorias"] === -1 ? "NR" : (row["Sentencias_condenatorias"] === 0 ? "0" : row["Sentencias_condenatorias"].toString()),
        "Judicialización": row["Judicialización"] === -1 ? "NR" : (row["Judicialización"] === 0 ? "0" : row["Judicialización"].toString()),
        "Criterio": row["Criterio de Oportunidad"] === -1 ? "NR" : (row["Criterio de Oportunidad"] === 0 ? "0" : (row["Criterio de Oportunidad"].toString() || "")),
        "Controversias": row["Medios alternativos de solución de controversias"] === -1 ? "NR" : (row["Medios alternativos de solución de controversias"] === 0 ? "0" : row["Medios alternativos de solución de controversias"].toString()),
        "Suspensiónes": row["Suspensión condicional del proceso"] === -1 ? "NR" : (row["Suspensión condicional del proceso"] === 0 ? "0" : row["Suspensión condicional del proceso"].toString()),
        "Procedimiento": row["Procedimiento abreviado"] === -1 ? "NR" : (row["Procedimiento abreviado"] === 0 ? "0" : row["Procedimiento abreviado"].toString()),
        "Reparaciónes": row["Reparación del daño"] === -1 ? "NR" : (row["Reparación del daño"] === 0 ? "0" : row["Reparación del daño"].toString()),
        "TotalCambate": row["Carpetas en favor del combate"] ? (parseFloat(row["Carpetas en favor del combate"]) * 100).toFixed(0) + '%' : 'NR',
        "Archivos": row["Archivo temporal"] === -1 ? "NR" : (row["Archivo temporal"] === 0 ? "0" : (row["Archivo temporal"].toString() || "NR")),
        "NoAcciónPenal": row["No ejercicio de la acción penal"] === -1 ? "NR" : (row["No ejercicio de la acción penal"] === 0 ? "0" : (row["No ejercicio de la acción penal"].toString() || "")),
        "Abstenciones": row["Facultad de abstenerse a investigar"] === -1 ? "NR" : (row["Facultad de abstenerse a investigar"] === 0 ? "0" : (row["Facultad de abstenerse a investigar"].toString() || "")),
        "TotalNoCombate": row["Carpetas que no abonan al combate"] ? (parseFloat(row["Carpetas que no abonan al combate"]) * 100).toFixed(0) + '%' : 'NR',
        "Presupuesto": row["Presupuesto_otorgado"] !== undefined ?
            (row["Presupuesto_otorgado"] === -1 || row["Presupuesto_otorgado"] === 0 ? "$0.00" : 
            (row["Presupuesto_otorgado"] === "NR" ? "NR" 
                : parseFloat(row["Presupuesto_otorgado"]).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }))) 
                : "NR",
        "Montos": row["Montos_recuperados"] !== undefined ?
            (row["Montos_recuperados"] === -1 || row["Montos_recuperados"] === 0 ? "$0.00" : 
            (row["Montos_recuperados"] === "NR" ? "NR" 
                : parseFloat(row["Montos_recuperados"]).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }))) 
                : "NR"
    });
    return acc;
}, {});

// Guarda el JSON en un archivo
fs.writeFileSync('D:/Descargas/archivo.js', JSON.stringify(transformedData, null, 2));

const mappedData = jsonData.map(entry => {
    const year = entry.Año;
    if (year === 2023) {
        const estado = estados.find(estado => estado.Entidad.trim() === entry.Entidad.trim());
        return {
            id: estado?.id,
            value: estado?.value,
            latitude: estado?.latitude, 
            longitude: estado?.longitude,
            Entidad: entry.Entidad.trim(),
            Resultados: year,
            Monto: entry.Montos_recuperados !== undefined ?
                (entry.Montos_recuperados === -1 || entry.Montos_recuperados === 0 ? "$0.00" : 
                (entry.Montos_recuperados === "NR" ? "NR" : 
                parseFloat(entry.Montos_recuperados)
                .toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }))) 
                : "NR",
            CombateCorrupción: entry["Carpetas en favor del combate"] ? 
                (parseFloat(entry["Carpetas en favor del combate"]) * 100).toFixed(0) + '%' : 'NR',
            NoCombateCorrupción: entry["Carpetas que no abonan al combate"] ? 
                (parseFloat(entry["Carpetas que no abonan al combate"]) * 100).toFixed(0) + '%' : 'NR',
        };
    }
}).filter(entry => entry !== undefined);

fs.writeFileSync('D:/Descargas/tooltip.js', JSON.stringify(mappedData, null, 2));
console.log('Archivo JSON creado exitosamente.');
