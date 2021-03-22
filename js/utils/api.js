async function getItems() {
    const response = await fetch("http://143.198.69.86/menu");
    const jsonResponse = await response.json();
    return jsonResponse;
}

// Data debe de ser un objeto con el id a eliminar
async function deletePizza(id) {
    const response = await fetch(`http://143.198.69.86/menu/${id}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET, DELETE'
        },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}

async function addPizza(data) {
    const response = await fetch("http://143.198.69.86/menu", {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET, DELETE'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}