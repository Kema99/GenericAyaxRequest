<?php
include '_php.php';

$numQuery = 0;
if (isset($_POST['numQuery'])) {
    $numQuery = $_POST['numQuery'];  
}

switch($numQuery){
    case 1:
        echo json_encode(obtenerUsuarios());
        break;
    case 2:
        echo json_encode(obtenerUsuario($_POST["dni"]));
        break;    
    case 3:
        echo json_encode(obtenerIdDeUsuario($_POST["dni"]));
        break;                
}        

?>
