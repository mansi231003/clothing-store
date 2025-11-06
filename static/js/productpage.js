const filterProductt2 = collectionType("best selling");
displayProducts("also-like", filterProductt2);



const variants = Productdata[0].variants;
const variantsContainer = document.querySelector(".column-t-shirts-container");
const mainImage = document.getElementById("main-image");
const productName = document.getElementById("product-name");
const originalPrice = document.getElementById("original-price");
const sellingPrice = document.getElementById("selling-price");
const discount = document.getElementById("discount");
const sizeContainer = document.querySelector(".size-container");
const colorsContainer = document.querySelector(".colors-container");
const sizee = document.querySelector(".button-shape")
const form = document.getElementById("form");
const idInput = document.getElementById("id-input");
const sizeInput = document.getElementById("size-input");
const quantityInput = document.getElementById("quantity-input");
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const quantity = document.getElementById("quantity");


let number = quantity.innerHTML = 1;

plus.addEventListener(`click`, () => {
    if (number < Productdata[0].stock)
        quantity.innerHTML = number += 1;
    quantityInput.value = number;


})

minus.addEventListener(`click`, () => {
    if (number > 1) {
        quantity.innerHTML = number -= 1;
        quantityInput.value = number;

    }
})


form.addEventListener(`submit`, () => {

    let details = {
        "id": idInput.value,
        "size": sizeInput.value,
        "quantity": quantityInput.value
    }
    event.preventDefault();
    let selectedData = JSON.stringify(details);
    console.log(selectedData);

})



function size(num) {
    variants[num].size.forEach(size => {
        const sizeDiv = document.createElement('div');
        sizeDiv.classList.add("button-shape", "flex-content-center");
        sizeContainer.appendChild(sizeDiv);
        sizeDiv.innerHTML = size;

        sizeDiv.addEventListener(`click`, () => {
            sizeInput.value = size;

            const activesize = document.querySelector(".button-shape.active");
            if (activesize == null) {
                sizeDiv.classList.add("active")

            }
            else {
                activesize.classList.remove("active")
                sizeDiv.classList.add("active")

            }

        })
    })
}


const colorsCode = {
    black: "#2b2b2b",
    green: "#008657",
    orange: "#fa7b4d"
}

for (let i = 0; i < variants.length; i++) {


    mainImage.src = variants[0].featured_image;
    productName.innerHTML = variants[0].title + `(${variants[0].color})`;
    originalPrice.innerHTML = "$" + variants[0].original_price;
    sellingPrice.innerHTML = "$" + variants[0].selling_price;
    discount.innerHTML = "-" + Math.trunc(((variants[0].original_price - variants[0].selling_price) / variants[0].original_price) * 100) + "%";


    const columnTshirt = document.createElement('div');
    const image = document.createElement('img');

    columnTshirt.classList.add("column-t-shirt");
    image.dataset.id = variants[i].id;
    image.classList.add("t-shirt-image");

    columnTshirt.appendChild(image);
    variantsContainer.appendChild(columnTshirt);

    image.src = variants[i].featured_image;

    image.addEventListener(`click`, () => {
        mainImage.src = image.src;

    })



    const colors = document.createElement('div');
    const Itag = document.createElement('i');

    colors.classList.add("circle", "flex-content-center")
    Itag.classList.add("fa-solid", "fa-check", "tick");
    colors.style.backgroundColor = `${colorsCode[variants[i].color.toLowerCase()]}`;
    colors.appendChild(Itag);
    colorsContainer.appendChild(colors);



    if (i == 0) {
        colors.classList.add("active")
        idInput.value = variants[i].id;
        size(i);

    }


    colors.addEventListener(`click`, () => {

        sizeContainer.innerHTML = "";

        size(i);

        const activeColor = document.querySelector(".circle.active");
        activeColor.classList.remove("active");

        colors.classList.add("active")

        mainImage.src = image.src;
        productName.innerHTML = variants[i].title + `(${variants[i].color})`;
        originalPrice.innerHTML = "$" + variants[i].original_price;
        sellingPrice.innerHTML = "$" + variants[i].selling_price;
        discount.innerHTML = "-" + Math.trunc(((variants[i].original_price - variants[i].selling_price) / variants[i].original_price) * 100) + "%";

        idInput.value = variants[i].id;

    })


}







const reviewContainer = document.getElementById('review');
const reviewButton = document.querySelector(".review-button");
reviewButton.addEventListener('click', () => {
    reviewContainer.classList.remove('display-none')
    reviewButton.classList.add('display-none')
})





