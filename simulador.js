// Variables globales
const eventos = [
    { id: 1, tipo: "Maquillaje social", costoBase: 60000, costoPorCliente: 45000 },
    { id: 2, tipo: "Maquillaje de novia", costoBase: 170000, costoPorCliente: 45000 },
    { id: 3, tipo: "Maquillaje de noche", costoBase: 60000, costoPorCliente: 45000 },
];

// Función para capturar entradas
function solicitarDatos() {
    const tipoEvento = prompt(
        "Elige un tipo de evento:\n1. Maquillaje social\n2. Maquillaje de novia\n3. Maquillaje de noche"
    );

    const cliente = parseInt(prompt("¿Cuántas personas usarán este servicio?"), 10);

    if (isNaN(tipoEvento) || isNaN(cliente) || tipoEvento < 1 || tipoEvento > 3) {
        alert("Por favor, ingresa datos válidos.");
        return null;
    }

    return {
        tipoEvento: parseInt(tipoEvento, 10),
        cliente,
    };
}

// Función para calcular presupuesto
function calcularPresupuesto({ tipoEvento, cliente }) {
    const eventoSeleccionado = eventos.find((evento) => evento.id === tipoEvento);

    if (!eventoSeleccionado) {
        alert("No se encontró el evento seleccionado.");
        return null;
    }

    // El costo del primer cliente es el costo base
    const costoPrimerCliente = eventoSeleccionado.costoBase;
    // Costo adicional para el resto de los clientes
    const costoClientesAdicionales =
        cliente > 1 ? (cliente - 1) * eventoSeleccionado.costoPorCliente : 0;

    const total = costoPrimerCliente + costoClientesAdicionales;

    return {
        tipo: eventoSeleccionado.tipo,
        costoPrimerCliente,
        clientesAdicionales: cliente > 1 ? cliente - 1 : 0,
        costoPorCliente: eventoSeleccionado.costoPorCliente,
        total,
    };
}

// Función para mostrar resultados
function mostrarResultado(resultado) {
    alert(
        `Presupuesto para el evento:\n` +
        `Tipo: ${resultado.tipo}\n` +
        `Costo primer cliente: $${resultado.costoPrimerCliente}\n` +
        `Clientes adicionales: ${resultado.clientesAdicionales}\n` +
        `Costo por cliente adicional: $${resultado.costoPorCliente}\n` +
        `Total: $${resultado.total}`
    );
}

// Flujo principal
document.getElementById("iniciar").addEventListener("click", () => {
    const datos = solicitarDatos();

    if (datos) {
        const resultado = calcularPresupuesto(datos);

        if (resultado) {
            mostrarResultado(resultado);
        }
    }
});
