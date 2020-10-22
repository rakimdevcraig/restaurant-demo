function getMenu() {
    fetch('http://localhost:5000/menu')
        .then((res) => res.json())
        .then((data) => {
            let menuData = data.data
            let output = '';
            menuData.forEach(function (item) {
                output += `
            <div class="card card-body mb-3 bg-light">
            <img class="img-fluid" src="${item.picture}">
            <h3>Item Name: ${item.name}</h3>
            <h3>Item Price: ${item.price}</h3>
            <h3>Item Description: ${item.description}</h3>
            <h3>Item Type: ${item.type}</h3>
            <h3>Add instructions <textarea id="instructions"></textarea> </h3>
            <button type="button" onclick="addToCart('${item._id}','${item.name}','${item.description}','${item.picture}', '${item.price}', ${item.type},${extraInstructions})">Add To Cart</button> 
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
let extraInstructions = document.getElementById('instructions').value


function addToCart(itemID, itemName, itemDescription, itemPicture, itemPrice, itemType, itemInstructions) {
    let id = itemID
    let name = itemName
    let description = itemDescription
    let picture = itemPicture
    let price = itemPrice
    let type = itemType
    let instructions = itemInstructions

    console.log(instructions, name)
    // fetch("http://localhost:5000/api/cart", {

    //     // Adding method type 
    //     method: "POST",
    //     // Adding body or contents to send 
    //     // Adding headers to the request 
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         "cartItems": {
    //             "product": id,
    //             "name": name,
    //             "quantity": quantity,
    //             "picture": picture,
    //             "price": price,
    //             "type": type
    //         }
    //     })
    // })
    //     // Converting to JSON 
    //     .then(response => response.json())
    //     // Displaying results to console 
    //     .then(json => console.log(json));
}

getMenu()