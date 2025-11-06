const productContainer = document.getElementById("product-container");
const subTotal=document.getElementById("sub-total");
const total=document.getElementById("total");
const delivery=document.getElementById("delivery-fee");
const clothsCart = document.createElement('div');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const clothsDetail = document.createElement('div');
const productsName = document.createElement('h4');
const productSize = document.createElement('div');
const sizeName = document.createElement('p');
const productColor = document.createElement('div');



const colorName = document.createElement('p');
const price = document.createElement('h5');
const trashContainer = document.createElement('div');
const icon = document.createElement('i');
const buttonsContainer = document.createElement('div');
const subtract = document.createElement('h5');
const quantityDiv = document.createElement('h5');
const add = document.createElement('h5');
const minusicon = document.createElement('i');
const addicon = document.createElement('i');


clothsCart.classList.add("cloths-cart");
imageContainer.classList.add("image-container")
image.classList.add("image");
clothsDetail.classList.add("cloth-details");
productsName.classList.add("name");
productSize.classList.add("category");
productColor.classList.add("category");
price.classList.add("font-size")
trashContainer.classList.add("trash-container");
icon.classList.add("fa-trash-can", "fa-solid");
buttonsContainer.classList.add("button-shape", "flex-content-center", "flex-space-between");
subtract.classList.add("quantity");
quantityDiv.classList.add("quantity");
add.classList.add("quantity");
minusicon.classList.add("fa-solid", "fa-minus");
addicon.classList.add("fa-solid", "fa-plus");


productColor.innerHTML = "Color:";
productSize.innerHTML = "Size:";



imageContainer.appendChild(image);
productColor.appendChild(colorName);
productSize.appendChild(sizeName);
clothsDetail.appendChild(productsName);
clothsDetail.appendChild(productColor);
clothsDetail.appendChild(productSize);
clothsDetail.appendChild(price);
trashContainer.appendChild(icon);
subtract.appendChild(minusicon);
add.appendChild(addicon);
buttonsContainer.appendChild(subtract);
buttonsContainer.appendChild(quantityDiv);
buttonsContainer.appendChild(add);
trashContainer.appendChild(buttonsContainer);
clothsCart.appendChild(imageContainer);
clothsCart.appendChild(clothsDetail);
clothsCart.appendChild(trashContainer);
productContainer.appendChild(clothsCart);



let dataa = {"id":"13456734-3","size":"L","quantity":"3"}
quantityDiv.innerHTML = dataa.quantity;
let fees=50
let deliveryFee=(delivery.innerHTML="$"+fees);
console.log(typeof deliveryFee)



Productdata[0].variants.forEach(variant => {
    if (variant.id == dataa.id) {
        image.src = variant.featured_image;
        productsName.innerHTML = variant.title;
        colorName.innerHTML = variant.color;
        sizeName.innerHTML = dataa.size;
        price.innerHTML = "$" + (dataa.quantity*variant.selling_price);
        subTotal.innerHTML=price.innerHTML;
        total.innerHTML="$"+(dataa.quantity*variant.selling_price+fees);

    }
})
