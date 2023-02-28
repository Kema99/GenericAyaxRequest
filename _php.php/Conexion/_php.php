<?php
    function connectMySQL()
    {
        $conn = mysqli_connect("localhost", "admin", "admin", "tienda_videojuegos");
        if (!$conn) {
            return die(mysqli_connect_error());
        }
        return $conn;
    }
?>