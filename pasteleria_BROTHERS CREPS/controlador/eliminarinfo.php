<?php
include '../M modelo/conexion.php';
$id= $_GET['id'];

$sql = "DELETE FROM registro WHERE id_registro ='".$id."' ";
$resultado = mysqli_query($conectar, $sql);
if($resultado){
echo "<script> alert ('Eliminado correctamente');
location.href ='../V vista/mostrar_prueba.php';
 </script>";
} else {
    echo "<script> alert ('Error al eliminar ');
location.href ='../V vista/mostrar_prueba.php';
 </script>";
}