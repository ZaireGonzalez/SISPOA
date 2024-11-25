document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");

    // Interacciones específicas para cada opción
    const interactions = {
        "Ventas": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("ventas-table");

            const headers = ["Hora", "Día", "Fecha", "Tipo de Impuesto", "Producto"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { hora: "08:30 AM", dia: "Lunes", fecha: "2024-11-20", impuesto: "IVA 19%", producto: "Laptop" },
                { hora: "11:15 AM", dia: "Martes", fecha: "2024-11-21", impuesto: "IVA 5%", producto: "Cámara" },
                { hora: "02:45 PM", dia: "Miércoles", fecha: "2024-11-22", impuesto: "Exento", producto: "Libro" },
                { hora: "04:10 PM", dia: "Jueves", fecha: "2024-11-23", impuesto: "IVA 19%", producto: "Celular" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Ventas";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Inventario": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("inventario-table");

            // Encabezados de la tabla
            const headers = ["Fecha", "Producto", "Cantidad", "Valor"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Datos de ejemplo para la tabla
            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", producto: "Laptop", cantidad: 10, valor: "$10,000,000" },
                { fecha: "2024-11-21", producto: "Cámara", cantidad: 15, valor: "$7,500,000" },
                { fecha: "2024-11-22", producto: "Libro", cantidad: 30, valor: "$600,000" },
                { fecha: "2024-11-23", producto: "Celular", cantidad: 20, valor: "$20,000,000" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            // Título del módulo
            const title = document.createElement("h2");
            title.textContent = "Módulo de Inventario";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Peticiones, Quejas o Reclamos": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("peticiones-table");

            // Encabezados de la tabla
            const headers = ["Fecha", "Nombre", "Teléfono", "Petición", "Queja", "Reclamo"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Datos de ejemplo para la tabla
            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", nombre: "Juan Pérez", telefono: "3101234567", peticion: "Aumento de cobertura", queja: "Retraso en servicio", reclamo: "Fallas recurrentes" },
                { fecha: "2024-11-21", nombre: "Ana Gómez", telefono: "3017654321", peticion: "Actualización de datos", queja: "", reclamo: "Cobro indebido" },
                { fecha: "2024-11-22", nombre: "Carlos Díaz", telefono: "3159876543", peticion: "", queja: "Problema de facturación", reclamo: "" },
                { fecha: "2024-11-23", nombre: "Luisa Martínez", telefono: "3124567890", peticion: "Solicitud de información", queja: "Demora en atención", reclamo: "" }
            ];

            // Genera filas para cada dato
            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            // Título del módulo
            const title = document.createElement("h2");
            title.textContent = "Módulo de Peticiones, Quejas o Reclamos";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Proveedores": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("proveedores-table");

            // Encabezados de la tabla
            const headers = ["Fecha", "Nombre", "Teléfono", "Dirección", "Producto", "Precio"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Datos de ejemplo para la tabla
            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", nombre: "Proveedor A", telefono: "3101234567", direccion: "Calle 1, Bogotá", producto: "Producto A", precio: "$2,000,000" },
                { fecha: "2024-11-21", nombre: "Proveedor B", telefono: "3017654321", direccion: "Calle 2, Medellín", producto: "Producto B", precio: "$5,000,000" },
                { fecha: "2024-11-22", nombre: "Proveedor C", telefono: "3159876543", direccion: "Calle 3, Cali", producto: "Producto C", precio: "$3,000,000" },
                { fecha: "2024-11-23", nombre: "Proveedor D", telefono: "3124567890", direccion: "Calle 4, Barranquilla", producto: "Producto D", precio: "$1,500,000" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            // Título del módulo
            const title = document.createElement("h2");
            title.textContent = "Módulo de Proveedores";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        // Otros módulos...
    };

    // Asigna el evento a cada opción
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", () => {
            const optionText = option.querySelector("p").innerText;
            if (interactions[optionText]) {
                interactions[optionText]();
            } else {
                alert(`No hay interacción definida para: ${optionText}`);
            }
        });
    });
});
