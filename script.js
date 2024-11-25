// Función que simula el registro de un usuario
function registrarUsuario(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validación simple de los datos (en un caso real, realizarías una validación más completa)
    if (nombre && usuario && password) {
        alert(`¡Bienvenido, ${nombre}! Te has registrado exitosamente.`);
        
        // Ocultar el formulario de registro
        document.getElementById("registro").style.display = "none";
        
        // Mostrar el menú de opciones
        document.getElementById("menu").style.display = "block";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Funciones para mostrar las opciones correspondientes
function mostrarVentas() {
    alert("Mostrando opciones de ventas.");
}

function mostrarAnulaciones() {
    alert("Mostrando opciones de anulaciones.");
}

function mostrarCierres() {
    alert("Mostrando opciones de cierres.");
}

function mostrarClientes() {
    alert("Mostrando opciones de clientes.");
}

function mostrarProveedores() {
    alert("Mostrando opciones de proveedores.");
}

function mostrarInventarios() {
    alert("Mostrando opciones de inventarios.");
}
