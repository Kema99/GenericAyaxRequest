const usersRoute = '../_php.php/Negocio/Usuarios/main.php';

window.onload = async () => {
    let users = await getUsers();

    users.map(function(x) {
        alert(JSON.stringify(x));
    });

    let userFound = await getUser("75452154L");
    alert(JSON.stringify(userFound));

    let userId = await getUserId("75452154L");
    alert(userId);
}

async function getUsers(){
    return await getJsonList(usersRoute, 1);
}

async function getUser(dni){
    let params = { numQuery: 2, dni};
    return await getJsonSingleResponseByParams(usersRoute, params);
}

async function getUserId(dni){
    let params = { numQuery: 3, dni};
    return await getJsonSingleResponseByParams(usersRoute, params);
}

