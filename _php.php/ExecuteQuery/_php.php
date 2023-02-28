<?php
    function executeQuery ($sql){
        $conn = connectMySQL();
        $queryResult = mysqli_query($conn, $sql);
        mysqli_close($conn);

        return $queryResult;
    }
?>