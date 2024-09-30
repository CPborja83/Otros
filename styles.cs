/* Fondo de la imagen para el título */
.titulo-container {
    background-image: url('../imagen/lago.jpg'); /* Ruta de la imagen */
    background-size: cover; /* Para que la imagen cubra todo el área */
    background-position: center; /* Centra la imagen */
    height: 300px; /* Puedes ajustar el tamaño según tus necesidades */
    display: flex;
    justify-content: center;
    align-items: center;
}

.titulo {
    font-size: 80px; /* Tamaño de las letras */
    color: #FFFFFF; /* Color blanco */
    font-weight: bold;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7); /* Efecto luminoso */
}

/* Opcional: Para mejorar el aspecto del texto en pantallas pequeñas */
@media (max-width: 768px) {
    .titulo {
        font-size: 50px; /* Ajuste de tamaño de texto en pantallas más pequeñas */
    }
}
