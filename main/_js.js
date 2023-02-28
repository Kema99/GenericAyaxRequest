const rutaUsuarios = '../_php.php/Negocio/Usuarios/main.php';

window.onload = async () => {
    let usuarios = await obtenerUsuarios();

    usuarios.map(function(x) {
        alert(JSON.stringify(x));
    });

    let usuarioBuscado = await obtenerUsuario("75452154L");
    alert(JSON.stringify(usuarioBuscado));

    let idUsuario = await obtenerIdDeUsuario("75452154L");
    alert(idUsuario);
}

async function obtenerUsuarios(){
    return await getJsonList(rutaUsuarios, 1);
}

async function obtenerUsuario(dni){
    let params = { numQuery: 2, dni};
    return await getJsonSingleResponseByParams(rutaUsuarios, params);
}

async function obtenerIdDeUsuario(dni){
    let params = { numQuery: 3, dni};
    return await getJsonSingleResponseByParams(rutaUsuarios, params);
}

