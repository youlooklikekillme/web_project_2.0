async function getResponce() {
    let response = await fetch("../web_project_2.0/data/menu.json");
    let content = await response.json();
    content = content.slice(0, 9);

    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }


    let ul_0 = document.getElementById("node_for_insert");
    content.forEach(item => {
    ul_0.innerHTML += `
        <li class="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 order-block d-flex flex-column p-5 border bg-body">
            <img style="width: 180px;" class="align-self-center" src="${item.img}" alt="${item.title}">
            <h2 class="text-center">${item.title}</h2>
            <p class='discription-block'>${item.description}</p>
            <div class="mb-0">
                <p>Price: ${item.price} ¥</p>
                <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                <p>Order <input class="w-25" type="number" name="count" value="0"></p>
            </div>
        </li>
    `;
});



}

getResponce()