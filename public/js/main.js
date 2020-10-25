function getMenu() {
    fetch('http://localhost:5000/menu')
        .then((res) => res.json())
        .then((data) => {
            let menuData = data.data
            let output = '';
            menuData.forEach(function (item) {
                // console.log(item)
                output += `
                <div class="col-md-4 py-3">
                <div class="card bg-light">
                <img class="card-img-top" src="${item.picture}">
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text">Item Price: ${item.price}</p> 
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">Add instructions <textarea class="form-control" id="instructions" rows="3"></textarea> </p>
                    <button class="btn btn-primary" type="button" onclick="addToCart('${item._id}','${item.name}','${item.description}','${item.picture}', '${item.price}', '${item.type}')">Add To Cart</button> 
                    </div>
                    </div>
                    </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}

function addToCart(itemID, itemName, itemDescription, itemPicture, itemPrice, itemType) {
    let extraInstructions = document.getElementById('instructions').value
    let id = itemID
    let name = itemName
    let description = itemDescription
    let picture = itemPicture
    let price = itemPrice
    let type = itemType
    // console.log(extraInstructions)
    // console.log(extraInstructions, id, name, description, picture, price, type)
    fetch("http://localhost:5000/cart", {

        // Adding method type 
        method: "POST",
        // Adding body or contents to send 
        // Adding headers to the request 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "cartItems": {
                "id": id,
                "name": name,
                "description": description,
                "picture": picture,
                "price": price,
                "type": type,
                "extraInstructions": extraInstructions
            }
        })
    })
    // Converting to JSON 
    // .then(response => response.json())
    // Displaying results to console 
    // .then(json => console.log(json));
    confirmAddToCart()
}

function confirmAddToCart() {
    let output = ''
    output +=
        `
    <div class="alert alert-success" role="alert">
    Item successfully Added to Cart!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    `
    document.getElementById('alert').innerHTML = output;

}

getMenu()