<?php

$conexion = mysqli_connect("localhost","user","PASSWORD","danielweb");
mysqli_set_charset($conexion, 'utf8');

$nombre = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["asunto"];

$insertar = "INSERT INTO prospectos(nombres,correo) VALUES ('$nombre','$email')";

$resultado = mysqli_query($conexion,$insertar);

mysqli_close($conexion);

$body = "Correo: " . $email . "<br>Nombre: " . $nombre . "<br>Asunto: " . $subject;