document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("indicadores");
    const informacion = document.getElementById("informacion");

    // Obtener los datos desde la API
    fetch('https://censopoblacion.azurewebsites.net/API/indicadores/2/999')
        .then(response => {
            // Verificamos que la respuesta sea correcta
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Verificamos el contenido de los datos recibidos
            console.log('Datos recibidos:', data);

            // Asegurarse de que el array de datos no esté vacío
            if (data.length === 0) {
                informacion.textContent = 'No se encontraron indicadores.';
                return;
            }

            // Llenar el select con los datos de la API
            data.forEach(item => {
                let option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.nombre;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener los indicadores:', error);
            informacion.textContent = 'Hubo un problema al cargar los indicadores. Intenta nuevamente más tarde.';
        });

    // Mostrar la información cuando se selecciona un valor
    select.addEventListener("change", function () {
        const selectedId = select.value;
        if (selectedId) {
            informacion.textContent = `Has seleccionado el indicador con ID: ${selectedId}.`;
            // Aquí puedes agregar más lógica para mostrar detalles adicionales
        } else {
            informacion.textContent = "";
        }
    });
});
