<?php
include './../../Conexion/_php.php';
include './../../ExecuteQuery/_php.php';
include './../../Modelos/Usuario.php';

function generarAtributosUsuarios($queryResult)
{
    $lista = array();
    while ($resultado = $queryResult->fetch_assoc()) {
        $id = $resultado["id"];
        $dni = $resultado["dni"];
        $nombre = $resultado["nombre"];
        $contraseña = $resultado["contraseña"];
        $email = $resultado["email"];
    
        $resultadoFinal = new Usuario($id, $dni, $nombre, $contraseña, $email);
        
        array_push($lista, $resultadoFinal);
    }
    return $lista;
}

function generarAtributosUsuario($queryResult)
{
    $resultado = $queryResult->fetch_assoc();
    $id = $resultado["id"];
    $dni = $resultado["dni"];
    $nombre = $resultado["nombre"];
    $contraseña = $resultado["contraseña"];
    $email = $resultado["email"];

    $resultadoFinal = new Usuario($id, $dni, $nombre, $contraseña, $email);
    return $resultadoFinal;
}

function generarIdUsuario($queryResult)
{
    $resultado = $queryResult->fetch_assoc();
    $id = $resultado["id"];
    
    return $id;
}

function obtenerUsuarios()
{
    $sql = "SELECT cli.* FROM clientes cli;";

    $queryResult = executeQuery($sql);
    $respuesta = generarAtributosUsuarios($queryResult);
    return $respuesta;
}

function obtenerUsuario($dni)
{
    $sql = "SELECT cli.* FROM clientes cli WHERE dni = '$dni';";

    $queryResult = executeQuery($sql);
    $respuesta = generarAtributosUsuario($queryResult);

    return $respuesta;
}

function obtenerIdDeUsuario($dni)
{
    $sql = "SELECT id FROM clientes WHERE dni = '$dni';";

    $queryResult = executeQuery($sql);
    $respuesta = generarIdUsuario($queryResult);

    return $respuesta;
}

?>