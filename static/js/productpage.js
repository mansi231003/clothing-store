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
const add=document.querySelector(".add");
const minus=document.querySelector(".minus");
const quantity=document.getElementById("quantity");




const colorsCode = {
    black: "#2b2b2b",
    green: "#008657",
    orange: "#fa7b4d"
}

for (let i = 0; i < variants.length; i++) {
let number= quantity.innerHTML=1;

    add.addEventListener(`click`,()=>{
   quantity.innerHTML=number+=1;
    console.log(number)

})
minus.addEventListener(`click`,()=>{
    if(number>1){
   quantity.innerHTML=number-=1;
    }

})

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
        console.log(idInput.value)

        variants[i].size.forEach(size => {
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

                    console.log(activesize);
                }

            })

        })

    }


    colors.addEventListener(`click`, () => {

        sizeContainer.innerHTML = "";

        variants[i].size.forEach(size => {
            const sizeDiv = document.createElement('div');
            sizeDiv.classList.add("button-shape", "flex-content-center");
            sizeContainer.appendChild(sizeDiv);
            sizeDiv.innerHTML = size;

            sizeDiv.addEventListener(`click`, () => {
                sizeInput.value = size;
                console.log(sizeInput.value)

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


        mainImage.src = image.src;
        const activeColor = document.querySelector(".circle.active");

        activeColor.classList.remove("active");

        colors.classList.add("active")

        productName.innerHTML = variants[i].title + `(${variants[i].color})`;
        originalPrice.innerHTML = "$" + variants[i].original_price;
        sellingPrice.innerHTML = "$" + variants[i].selling_price;
        discount.innerHTML = "-" + Math.trunc(((variants[i].original_price - variants[i].selling_price) / variants[i].original_price) * 100) + "%";

        idInput.value = variants[i].id;
        console.log(idInput.value)
    })


    // let variantsColor = `<div class=" ${i == 0 ? "circle active" : "circle"}  flex-content-center" data-title='${variants[i].color} ${variants[i].title}' data-sprice=${variants[i].selling_price} data-oprice=${variants[i].original_price} data-target=${variants[i].id} style="background-color:${colorsCode[variants[i].color.toLowerCase()]}"><i class="fa-solid fa-check tick"></i></div>`;
    // colorsContainer.innerHTML += variantsColor;



}


// const circles = document.querySelectorAll(".circle")

// circles.forEach(circle => {

//     circle.addEventListener(`click`, () => {
//         const activeColor = document.querySelector(".circle.active");
//         activeColor.classList.remove("active");
//         circle.classList.add("active");

//         const matchImg = document.querySelector(`[data-id="${circle.dataset.target}"]`);
//         mainImage.src = matchImg.src;

//         originalPrice.innerHTML = `$${circle.dataset.oprice}`;
//         sellingPrice.innerHTML = `$${circle.dataset.sprice}`;
//         productName.innerHTML = `${circle.dataset.title}`;
//         discount.innerHTML = "-" + Math.trunc(((circle.dataset.oprice - circle.dataset.sprice) / circle.dataset.oprice) * 100) + "%";

//     })
// })






const reviewContainer = document.getElementById('review');
const reviewButton = document.querySelector(".review-button");
reviewButton.addEventListener('click', () => {
    reviewContainer.classList.remove('display-none')
    reviewButton.classList.add('display-none')
})





