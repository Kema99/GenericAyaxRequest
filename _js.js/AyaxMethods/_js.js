let jsonData = null;

async function requestAyax(ruta, paramNumQuery) {
    await $.ajax({
        method: "POST",
        url: ruta,
        data: { numQuery: paramNumQuery },
        success: function (data) {
            jsonData = JSON.parse(data);
        }
    });
    return jsonData;
}

async function requestAyaxParams(ruta, params) {
    await $.ajax({
        method: "POST",
        url: ruta,
        data: params,
        success: function (data) {
            jsonData = JSON.parse(data);
        }
    });
    return jsonData;
}

async function getJsonList(ruta, numQuery) {
    const respuesta = await requestAyax(ruta, numQuery);
    return createListObjects(respuesta);
}

async function getJsonSingleResponse(ruta, numQuery) {
    const respuesta = await requestAyaxParams(ruta, numQuery);
    return respuesta;
}

async function getJsonListByParams(ruta, params) {
    const respuesta = await requestAyaxParams(ruta, params);
    return createListObjects(respuesta);
}

async function getJsonSingleResponseByParams(ruta, params) {
    const respuesta = await requestAyaxParams(ruta, params);
    return respuesta;
}

function createListObjects(respuesta) {
    let objetos = [];
        if (respuesta.result !== undefined) {
            objetos[0] = respuesta.result;
        } else {
            respuesta.forEach(x => {
                objetos[objetos.length] = x;
            });
        }
    return objetos;
}