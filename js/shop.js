async function getResponce() {
    let response = await fetch("../data/menu.json");
    let content = await response.json();
    content = content.slice(0, 9);

    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }


    let ul_0 = document.getElementById("node_for_insert"); // Берём элемент по ID
    content.forEach(item => {
    ul_0.innerHTML += `
        <li style="width: 200px" class="d-flex flex-column m-1 p-3 border bg-body">
            <img style="width: 180px" class="align-self-center" src="${item.img}" alt="${item.title}">
            <h5>${item.title}</h5>
            <p>${item.description}. Цена ${item.price} р.</p>
            <input type="hidden" name="vendor_code" value="${item.vendor_code}">
            <p>Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
    `;
});



}

getResponce()