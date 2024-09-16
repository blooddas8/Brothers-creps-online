<?php
	include '../modelo/conexion.php';
	$consultar ="SELECT * FROM registro ";
	$query = mysqli_query($conectar, $consultar);
	$array = mysqli_fetch_array($query);
