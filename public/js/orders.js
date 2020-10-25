function getOrder() {
    fetch('http://localhost:5000/cart')
        .then((res) => res.json())
        .then((data) => {
            let menuData = data.data[0].cartItems
            console.log(menuData)
            let output = '';
            menuData.forEach(function (item) {
                // console.log(item)
                output += `
            <div class="card card-body mb-3">
            <div class="card-body">
            <h3 class="card-title">Item Name: ${item.name}</h3>
            <h3>Special Instructions: ${item.extraInstructions}</h3>
            </div>
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}

getOrder()