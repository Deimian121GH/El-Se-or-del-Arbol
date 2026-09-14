/* Datos de la empresa: cambia aquí los datos pendientes */
const EMPRESA = {
    direccion: "Cuicuno, Latacunga, Ecuador",
    telefono: "0995211511",
    whatsapp: "0995211511",
    correo: "ledsenordelarbol@gmail.com"
};

document.getElementById("telefonoEmpresa").textContent = EMPRESA.telefono;
document.getElementById("whatsappEmpresa").textContent = EMPRESA.whatsapp;
document.getElementById("correoEmpresa").textContent = EMPRESA.correo;
document.getElementById("anio").textContent = new Date().getFullYear();

/*
   Ruta al local:
   nuestra página no solicita el GPS del visitante.
   Google Maps recibe solo el destino y calcula la ruta.
*/
const botonRuta = document.getElementById("botonRuta");
const destino = encodeURIComponent(EMPRESA.direccion);
botonRuta.href = "https://www.google.com/maps/dir/?api=1&destination=" + destino;

/* Encuesta en modo demostración */
const formEncuesta = document.getElementById("formEncuesta");
const mensajeEncuesta = document.getElementById("mensajeEncuesta");

formEncuesta.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const satisfaccion = document.getElementById("satisfaccion").value;

    if (!satisfaccion) {
        mostrarMensaje(mensajeEncuesta, "Seleccione un nivel de satisfacción.", "error");
        return;
    }

    mostrarMensaje(
        mensajeEncuesta,
        "Encuesta validada correctamente. Los datos no se almacenan en esta demostración.",
        "exito"
    );

    formEncuesta.reset();
});

function mostrarMensaje(elemento, texto, tipo) {
    elemento.textContent = texto;

    if (tipo === "error") {
        elemento.className = "resultado error";
    } else if (tipo === "exito") {
        elemento.className = "resultado exito";
    } else {
        elemento.className = "resultado";
    }
}
