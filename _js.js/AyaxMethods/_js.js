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

async function getJsonList(route, numQuery) {
    const response = await requestAyax(route, numQuery);
    return createListObjects(response);
}

async function getJsonSingleResponse(route, numQuery) {
    const response = await requestAyaxParams(route, numQuery);
    return response;
}

async function getJsonListByParams(route, params) {
    const response = await requestAyaxParams(route, params);
    return createListObjects(response);
}

async function getJsonSingleResponseByParams(route, params) {
    const response = await requestAyaxParams(route, params);
    return response;
}

function createListObjects(response) {
    let objects = [];
        if (response.result !== undefined) {
            objects[0] = response.result;
        } else {
            response.forEach(x => {
                objects[objects.length] = x;
            });
        }
    return objects;
}