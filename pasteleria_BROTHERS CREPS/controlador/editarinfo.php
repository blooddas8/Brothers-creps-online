<?php
include "../modelo/conexion.php"; 

if(isset($_POST['enviar'])){   
    //"enviar" viene del mismo formulario atributo name "enviar"
    $nombre2 = $_POST['nombre'];
    $nombre = $_POST['pedido'];
    $ape1 = $_POST['fecha_entrega'];    
    $ape2 = $_POST['hora_entrega'];
    $telefono = $_POST['telefono'];

    
    // Corrige el nombre de la tabla y los campos en el SQL
    $sql = "UPDATE registro SET nombre ='$nombre2', pedido='$nombre', fecha_entrega='$ape1', hora_entrega='$ape2', telefono='$telefono' WHERE id_registro='$id'";
    
    $resultado = mysqli_query($conectar, $sql);
    
    if($resultado){
        echo "<script>alert('Actualizado');
              location.href = '../vista/mostrar_prueba.php';  
              </script>";
    } else {
        echo "<script>alert('Error al actualizar');
              location.href = '../vista/mostrar_prueba.php';  
              </script>";
    }
} else {       // Esta sección obtiene los valores de la base de datos y los muestra en el formulario 
    $id = $_GET['id'];   // Valor id viene del formulario mostrar alumnos
    $sql = "SELECT * FROM registro WHERE id_registro = '".$id."'";
    $resultado = mysqli_query($conectar, $sql);
    
    if($resultado){
        $row = mysqli_fetch_assoc($resultado);
        $nombre2 =$row['nombre'];
        $nombre = $row['pedido'];
        $ape1 = $row['fecha_entrega'];
        $ape2 = $row['hora_entrega'];  
        $telefono = $row['telefono'];  

        
        mysqli_close($conectar);
    } else {
        echo "Error al obtener los datos.";
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../estilo css/editar.css">

    <title>Actualizar Informacion</title>
</head>
<body>    
    <h1>Modificando información de venta</h1>
    <fieldset>
        <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
            <label for="pedido">NOMBRE:</label><br>
            <input type="text" name="nombre" value="<?php echo $nombre2; ?>" ><br><br>
        
            <label for="pedido">PEDIDO:</label><br>
            <input type="text" name="pedido" value="<?php echo $nombre; ?>" ><br><br>
            
            <label for="fecha_entrega">FECHA DE ENTREGA:</label><br>
            <input type="date" name="fecha_entrega" value="<?php echo $ape1; ?>" ><br><br>
            
            <label for="hora_entrega">HORA ENTREGA:</label><br>
            <input type="time" name="hora_entrega" value="<?php echo $ape2; ?>" ><br><br>

            <label for="hora_entrega">TELEFONO:</label><br>
            <input type="text" name="telefono" value="<?php echo $telefono; ?>" ><br><br>
            
            <input type="hidden" name="id_registro" value="<?php echo $id; ?>">
            
            <input type="submit" name="enviar" value="ACTUALIZAR"> <br><br>   
        </form>
    </fieldset>
    <button type="button"><a href="../V vista/mostrar_prueba.php"> Consultar Ventas </a></button>    
</body>
</html>

<?php } ?>