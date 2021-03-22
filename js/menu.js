const menuWrapper = document.getElementsByClassName("menu-wrapper")[0];

async function showItems() {
    const itemsJson = await getItems();
    console.log(itemsJson)

    // Si los items se encuentran vacíos
    if (itemsJson.items) {
        const pVacio = document.createElement("p");
        pVacio.innerHTML = "No hay Items";
        menuWrapper.appendChild(pVacio);
        return;
    }

    for (let i = 0; i < itemsJson.length; i++) {
        // Wrapper
        const item = document.createElement("div");
        item.classList.add("item");

        // Image
        const image = document.createElement("img");
        image.src = itemsJson[i].image;
        item.appendChild(image);

        // Title
        const name = document.createElement("h3");
        name.innerHTML = itemsJson[i].name;
        item.appendChild(name);

        // Description
        const description = document.createElement("p");
        description.innerHTML = itemsJson[i].description;
        item.appendChild(description);

        const price = document.createElement("span");
        price.innerHTML = "$" + itemsJson[i].price;
        item.appendChild(price);
        
        menuWrapper.appendChild(item);
    }
}

showItems()
