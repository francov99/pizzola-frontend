const itemsWrapper = document.getElementsByClassName("items-wrapper")[0];
const inputs = document.getElementsByTagName("input");
const form = document.getElementById("form");

const nameValue = document.getElementById("name").value;
const descriptionValue = document.getElementById("description").value;
const priceValue = document.getElementById("price").value;
const imageValue = document.getElementById("image").value;


function updateInputs() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', (e) => {
            inputs[i].value = e.srcElement.value;
        });
    }
}

function cleanInputs() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

async function eliminateItem(id) {
    const deletedItem = await deletePizza(id);
    console.log(deletedItem);
}

async function sendPizza(e) {
    e.preventDefault();
    try {
        const response = await addPizza({
            name: nameValue,
            description: descriptionValue,
            price: priceValue,
            image: imageValue,
        });
        cleanInputs();
        alert("Pizza añadida");
        console.log("pizza añadida: ", response);
    }
    catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', sendPizza);

async function showItems() {
    const itemsJson = await getItems();
    console.log(itemsJson)

    // Si los items se encuentran vacíos
    if (itemsJson.items) {
        const pVacio = document.createElement("p");
        pVacio.innerHTML = "No hay Items";
        itemsWrapper.appendChild(pVacio);
        return;
    }

    for (let i = 0; i < itemsJson.length; i++) {
        // Wrapper
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const image = document.createElement("img");
        image.src = itemsJson[i].image;
        card.appendChild(image);

        // Name
        const itemName = document.createElement("h3");
        itemName.innerHTML = itemsJson[i].name;
        card.appendChild(itemName);

        // Description
        const description = document.createElement("p");
        description.innerHTML = itemsJson[i].description;
        card.appendChild(description);

        // Price
        const price = document.createElement("span");
        price.innerHTML = "$" + itemsJson[i].price;
        card.appendChild(price);

        // Eliminate button 
        const eliminate = document.createElement("button");
        eliminate.classList.add("delete");
        //Image icon 
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616390566~hmac=a255dc38cb8f4b30e32cc0dbfe61e4f1";
        eliminate.appendChild(deleteIcon);
        // Action
        eliminate.addEventListener("click", () => {
            eliminateItem(itemsJson[i]._id);
        });
        card.appendChild(eliminate);
        
        itemsWrapper.appendChild(card);
    }
}

showItems()
updateInputs()