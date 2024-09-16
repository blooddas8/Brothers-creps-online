<?php  
include '../controlador/consulta_cafeteria.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../estilo css/stylo de mostrar.css">
    <title>Consulta ventas</title>
    <script type="text/javascript">
        function confirmar() {         // Función para confirmar eliminación
            return confirm('¿Deseas eliminar, estas seguro?');
        }
    </script>
</head>
<body> 
<h1>Información venta</h1>
<br>
<table border="1">
    <thead>
        <tr>
            <th>iId_Registro:</th>
            <th>Nombre:</th>
            <th>Pedido:</th>
            <th>Fecha Entrega:</th>
            <th>Hora Entrega:</th>
            <th>Telefono:</th>


            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
    </thead>
    <tbody id="datos">
        <?php
        if (isset($query)) {
            foreach ($query as $row) { ?>
            <tr> <!-- Referencia campos de Base de Datos -->
                <td><?php echo $row['id_registro']; ?></td>
                <td><?php echo $row['nombre']; ?></td>
                <td><?php echo $row['pedido']; ?></td>
                <td><?php echo $row['fecha_entrega']; ?></td>
                <td><?php echo $row['hora_entrega']; ?></td>
                <td><?php echo $row['telefono']; ?></td>

                <td><?php echo "<a href='../C controlador/editarinfo.php?id=".$row['id_registro']."'> Editar </a>"; ?></td>
                <td><?php echo "<a href='../C controlador/eliminarinfo.php?id=".$row['id_registro']."' onclick='return confirmar()'> Eliminar </a>"; ?></td>     
            </tr>                             
        <?php
            }
        }
        ?>
    </tbody>
</table>
<br>    
<button type="button"><a href="ingresaCoche.html"> Regresar </a></button>
</body>
</html>

