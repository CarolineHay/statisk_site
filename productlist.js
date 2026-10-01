const param = new URLSearchParams(window.location.search);
const selectedCategory = param.get("category");
console.log("selectedCategory", selectedCategory);

const productURL = `https://kea-alt-del.dk/t7/api/products?category=${selectedCategory}`;
const listContainer = document.querySelector(".product_list_container");

function getData(url) {
    fetch(url).then((response) => {
        response.json().then((data) => {
            showProducts(data);
        });
    });
};

function showProducts(products) {
    console.log("First product", products[1]);
    console.log("Number of products", products.length)

function getDiscountPrice(originalPrice, discount) {
    return Math.round((originalPrice * (100 - discount)) / 100);
}

    listContainer.innerHTML = "";

products.forEach((product) => {
    listContainer.innerHTML += 
        `<article class="product_card ${product.soldout ? "soldout" : ""}">
        <a href="product.html?id"=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Sahara Team Jersey"></a>
        <h3>${product.productdisplayname}</h3>
        <p>${product.brandname} | ${product.category}</p>
        <div>
        ${product.discount ? "<p class='discount_tag'>" + getDiscountPrice(product.price, product.discount) + " kr</p>" : ""}
        <p>${product.price} kr ${product.discount ? " <em>-" + product.discount + "%</em>" : ""}</p>
        </div>
        <p><a href="product.html?id"=${product.id}>Read More</a></p>
        ${product.soldout ? "<p class='soldout_tag'>Sold Out</p>" : ""}
        </article>`;
    });
}

getData(productURL);