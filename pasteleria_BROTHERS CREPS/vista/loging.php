<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión - BROTHERS CREPS</title>
    <link rel="stylesheet" href="../estilo css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">BROTHERS CREPS</div>
        </nav>
    </header>

    <section id="login" class="login-section">
        <h2>Inicio de Sesión</h2>
        <?php
        // Procesar el formulario cuando se envíe
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Verificar usuario y contraseña
            $usuario = $_POST['usuario'];
            $contrasena = $_POST['contrasena'];

            // Valores esperados para usuario y contraseña
            $usuario_correcto = 'BROTHERS CREPS';
            $contrasena_correcta = '787951562';

            if ($usuario === $usuario_correcto && $contrasena === $contrasena_correcta) {
                // Redirigir si la autenticación es exitosa
                header('Location:../prueba tienda/vista/mostrar_prueba.php');
                exit;
            } else {
                // Mostrar mensaje de error si la autenticación falla
                echo '<p style="color: red;">Usuario o contraseña incorrectos.</p>';
            }
        }
        ?>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required>
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </section>

    <footer>
        <div class="footer-container">
            <div class="footer-left">
                <p>&copy; 2024 BOTHERS CREPS. Todos los derechos reservados.</p>
            </div>
            <div class="footer-right">
                <p>Diseño por <strong>pasteeria BOTHERS CREPS</strong> | Desarrollo por <strong>JESUS</strong></p>
            </div>
        </div>
    </footer>
</body>
</html>
        