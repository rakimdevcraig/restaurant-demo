//reference https://www.youtube.com/watch?v=Oive66jrwBs&t=1502s 
document.getElementById('addMenuItem').addEventListener('submit', addItemToMenu)

function addItemToMenu(e) {
    //stop it from submitting to a file
    e.preventDefault()
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let price = document.getElementById("price").value
    let picture = document.getElementById("picture").value
    let type = document.getElementById("type").value

    fetch('http://localhost:5000/menu', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            picture: picture,
            type: type
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

