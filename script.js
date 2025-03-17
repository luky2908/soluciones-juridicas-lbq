document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado correctamente");

    // Filtrar imágenes por categoría (Ejemplo para futuras implementaciones)
    const filtro = document.getElementById("filtroCategoria");
    if (filtro) {
        filtro.addEventListener("change", function () {
            const categoria = filtro.value;
            const imagenes = document.querySelectorAll(".galeria-item");
            
            imagenes.forEach(img => {
                if (categoria === "todos" || img.dataset.categoria === categoria) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    }

    // Mostrar vista detallada de una imagen
    const imagenes = document.querySelectorAll(".galeria-item");
    imagenes.forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.getElementById("modalImagen");
            const modalImg = document.getElementById("imagenAmpliada");
            const modalDescripcion = document.getElementById("descripcionImagen");

            modalImg.src = img.src;
            modalDescripcion.textContent = img.alt;
            modal.style.display = "block";
        });
    });

    // Cerrar modal de imagen
    const cerrarModal = document.getElementById("cerrarModal");
    if (cerrarModal) {
        cerrarModal.addEventListener("click", function () {
            document.getElementById("modalImagen").style.display = "none";
        });
    }

    // Validación de formulario de contacto
    const formulario = document.getElementById("formularioContacto");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            
            if (nombre === "" || email === "" || mensaje === "") {
                alert("Todos los campos son obligatorios.");
                return;
            }
            
            alert("Formulario enviado correctamente.");
            formulario.reset();
        });
    }
});