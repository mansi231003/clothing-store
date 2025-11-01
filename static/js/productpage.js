const filterProductt2 = collectionType("best selling");
displayProducts("also-like", filterProductt2);

const circles = document.querySelectorAll(".circle");

const variants = Productdata[0].variants;
const variantsContainer = document.querySelector(".column-t-shirts-container");
const mainImage = document.getElementById("main-image");
const productName = document.getElementById("product-name");
const originalPrice = document.getElementById("original-price");
const sellingPrice = document.getElementById("selling-price");
const discount = document.getElementById("discount");
// const sizeContainer=document.querySelector(".size-container");
const colorsContainer = document.querySelector(".colors-container");

for (let i = 0; i < variants.length; i++) {

    mainImage.src = variants[0].featured_image;
    productName.innerHTML = variants[0].title;
    originalPrice.innerHTML = "$" + variants[0].original_price;
    sellingPrice.innerHTML = "$" + variants[0].selling_price;
    discount.innerHTML = "-" + Math.trunc(((variants[0].original_price - variants[0].selling_price) / variants[0].original_price) * 100) + "%";




    const columnTshirt = document.createElement('div');
    const image = document.createElement('img');

    columnTshirt.classList.add("column-t-shirt");
    image.classList.add("t-shirt-image");

    columnTshirt.appendChild(image);
    variantsContainer.appendChild(columnTshirt);


    image.src = variants[i].featured_image;


    image.addEventListener(`click`, () => {
        console.log(variants)
        mainImage.src = image.src;
        productName.innerHTML = variants[i].color + " " + variants[i].title;
        originalPrice.innerHTML = "$" + variants[i].original_price;
        sellingPrice.innerHTML = "$" + variants[i].selling_price;
        discount.innerHTML = "-" + Math.trunc(((variants[i].original_price - variants[i].selling_price) / variants[i].original_price) * 100) + "%";

    })

    const circle = document.createElement('div');
    circle.classList.add('circle', 'flex-content-center');
    colorsContainer.appendChild(circle);
    circle.innerHTML = variants[i].color;

    circle.addEventListener(`click`, () => {
        mainImage.src = variants[i].featured_image;
        productName.innerHTML = variants[i].color + " " + variants[i].title;
        originalPrice.innerHTML = "$" + variants[i].original_price;
        sellingPrice.innerHTML = "$" + variants[i].selling_price;
        discount.innerHTML = "-" + Math.trunc(((variants[i].original_price - variants[i].selling_price) / variants[i].original_price) * 100) + "%";

        // console.log(variants[i].size)
    })



}











