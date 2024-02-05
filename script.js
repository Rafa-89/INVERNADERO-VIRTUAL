$(function() {
    $('#numeroPlantas').on('change', function() {
        mostrarPlantas();
    });

    // Llamar a mostrarPlantas al cargar la página
    mostrarPlantas();

    $('#iniciar-btn').on('click', function() {
        iniciar();
    });

    $('#replantar-btn').on('click', function() {
        replantar();
    });
});

function mostrarPlantas() {
    const cantidadPlantas = $('#numeroPlantas').val();
    const plantasContainer = $('#plantasContenedor');

// Definir un array con las rutas de las imágenes
const imagenes = ['imagenes/1.jpg', 'imagenes/2.jpg', 'imagenes/3.jpg', "imagenes/4.jpg","imagenes/5.jpg","imagenes/6.jpg"];

    plantasContainer.empty();

    for (let i = 0; i < cantidadPlantas; i++) {
        // Crea un nuevo div para la planta
        const planta = $('<div class="planta"></div>');

        // Crea una nueva imagen y configura su fuente y estilos
        const imagen = $('<img alt="Planta"/>').attr('src', imagenes[i % imagenes.length]).css({
            'width': '100px',
            'height': '100px',
            'margin-right': '20px',
            'margin-left': '20px',
            'position': 'absolute',
            'bottom': '0'
        });

        // Calcula y ajusta el margen izquierdo para mover las demás imágenes
        const margenIzquierdo = i * (30 + 10); // (ancho de la imagen + margen derecho)

        // Aplica el margen izquierdo a la imagen
        imagen.css('margin-left:20PX', margenIzquierdo + 'px');

        // Agrega la imagen al div de la planta
        planta.append(imagen);

        // Agrega el div de la planta al contenedor principal
        plantasContainer.append(planta);
    }
}

function iniciar() {
    const topeInvernadero = $('#tope-invernadero').position().top;

    $('.planta').each(function(index, elemento) {
        const velocidadAleatoria = Math.random() * (10 - 1) + 1;
        const distancia = topeInvernadero - $(elemento).position().top;

        // Calcular la duración de la animación en milisegundos
        const duracion = velocidadAleatoria * 1000;

        // Incrementar el contador de orden y asignarlo a la planta
        const orden = index + 1;
        $(elemento).data('orden', orden);

        // Animar la planta hacia arriba
        $(elemento).animate({
            bottom: -distancia
        }, {
            duration: duracion,
            easing: 'linear',
            complete: function() {
                // Callback opcional para manejar eventos después de la animación
                mostrarTablaPreferencia();
            }
        });
    });
}

// Función para mostrar la tabla de preferencia
function mostrarTablaPreferencia() {
    // Obtener las plantas ordenadas por su contador
    const plantasOrdenadas = $('.planta').toArray().sort(function(a, b) {
        const ordenA = $(a).data('orden');
        const ordenB = $(b).data('orden');
        return ordenA - ordenB;
    });

    // Crear y mostrar la tabla de preferencia
    const tablaPreferencia = $('<table>').append($('<thead>').append($('<tr>').append('<th>Planta</th><th>Orden</th><th>Posición</th><th>Tipo</th><th>Velocidad</th>')))
                                          .append($('<tbody>'));

    plantasOrdenadas.forEach(function(planta, index) {
        const orden = $(planta).data('orden');
        const posicion = index + 1; // Posición en la tabla
        const tipoPlanta = obtenerTipoPlanta(); // Reemplazar con la lógica real para obtener el tipo de planta
        const velocidad = obtenerVelocidadPlanta(); // Reemplazar con la lógica real para obtener la velocidad de la planta

        tablaPreferencia.find('tbody').append($('<tr>').append(`<td>Planta ${posicion}</td><td>${orden}</td><td>${posicion}</td><td>${tipoPlanta}</td><td>${velocidad}</td>`));
    });

    // Agregar la tabla al contenedor deseado (reemplaza '#tabla-preferencia' con tu ID o clase deseada)
    $('#tabla-preferencia').html(tablaPreferencia);
}

// Funciones de ejemplo para obtener el tipo y velocidad de la planta
function obtenerTipoPlanta() {
    // Implementa la lógica real para obtener el tipo de planta
    return 'Tipo A';
}

function obtenerVelocidadPlanta() {
    // Implementa la lógica real para obtener la velocidad de la planta
    return '10 m/s';
}









// Obtener referencias a los botones
var iniciarBtn = document.getElementById('iniciar-btn');
var replantarBtn = document.getElementById('replantar-btn');

// Asignar función de alternancia al hacer clic en los botones
iniciarBtn.addEventListener('click', function() {
    iniciarBtn.style.display = 'none';
    replantarBtn.style.display = 'block';
});

replantarBtn.addEventListener('click', function() {
    replantarBtn.style.display = 'none';
    iniciarBtn.style.display = 'block';
});


replantarBtn.addEventListener('click', function() {
    // Restablecer la posición de las plantas
    restablecerPosicionPlantas();

    // Ocultar el botón Replantar y mostrar el botón Iniciar
    replantarBtn.style.display = 'none';
    iniciarBtn.style.display = 'block';
});

function restablecerPosicionPlantas() {
    $('.planta').stop(); // Detener las animaciones actuales
    $('.planta').css('bottom', '0'); // Restablecer la posición
}


















