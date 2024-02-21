<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table class="cuadro-tabla">
        <!-- Contenido de la tabla -->
    </table>
    <div id="menu">
        <label for="numeroPlantas">Seleccione la cantidad de plantas:</label>
        <select id="numeroPlantas">
            <option value="1">1 planta</option>
            <option value="2">2 plantas</option>
            <option value="3">3 plantas</option>
            <option value="4">4 plantas</option>
            <option value="5">5 plantas</option>
            <option value="6">6 plantas</option>
        </select>
        <div class="botonesContenedor">
            <button id="iniciar-btn">Iniciar</button>
            <button id="replantar-btn" style="display:none;">Replantar</button>
        </div>
    </div>
    <div id="tope-invernadero"></div>
    <div id="plantasContenedor">
        <img src="imagenes/1.jpg" alt="Planta 1"class="planta1">
        <img src="imagenes/2.jpg" alt="Planta 2"class="planta2">
        <img src="imagenes/3.jpg" alt="Planta 3"class="planta3">
        <img src="imagenes/4.jpg" alt="Planta 4"class="planta4">
        <img src="imagenes/5.jpg" alt="Planta 5"class="planta5">
        <img src="imagenes/6.jpg" alt="Planta 6"class="planta6">
    </div>
    <div id="tabla-preferencia"></div>
 <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> <!-- Asegurarse de incluir jQuery antes del archivo script.js -->
    <script src="script.js"></script>
</body>
</html>
    

   
