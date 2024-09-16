<?php
include '../modelo/conexion.php';

$nombre = $_POST['0'];

$pedido = $_POST['1'];

$fecha_entrega = $_POST['2'];

$hora_entrega = $_POST['3'];

$telefono = $_POST['4'];


$ingresar = "INSERT INTO registro VALUES ('$nombre', '$pedido', '$fecha_entrega', '$hora_entrega', '$telefono')";

$query = mysqli_query($conectar, $ingresar);

if ($query) {
    echo "<script> 
            alert('AGREGADO!!');
            location.href = '/prueba de tienda/vista/pruueba.html';
          </script>";
} else {
    echo "<script> 
            alert('ERROR AL AGREGAR!!');
            location.href = '/prueba de tienda/vista/pruueba.html';
          </script>";
}
?>