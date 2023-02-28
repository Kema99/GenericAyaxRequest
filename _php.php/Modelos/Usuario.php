<?php
Class Usuario implements JsonSerializable{
    private $id;
    private $dni;
    private $nombre;
    private $contrasena;
    private $email;

    function __construct($id, $dni, $nombre, $contrasena, $email)
    {
        $this->id = $id;
        $this->dni = $dni;
        $this->nombre = $nombre;
        $this->contrasena = $contrasena;
        $this->email = $email;
    }

    public function jsonSerialize() { 
        return array(
            'id'=>$this->id,
            'dni'=>$this->dni,
            'nombre'=>$this->nombre,
            'contrasena'=>$this->contrasena,
            'email'=>$this->email
        );
    } 
}

?>