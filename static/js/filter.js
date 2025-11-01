
const filterButtons = document.querySelectorAll('.filter-button');
const filterContainer = document.getElementById("container2");

filterButtons.forEach(filterButton => {
    filterButton.addEventListener(`click`, () => {

        if (filterContainer.classList.contains("active")) {
            filterContainer.classList.remove("active");
            document.body.classList.remove("no-scroll")

        }
        else {
            filterContainer.classList.add("active");
            document.body.classList.add("no-scroll")

        }
    })
})



const filterDropdowns = document.querySelectorAll('.filter-dropdown');
const filterSections = document.querySelectorAll('.filter-section');

filterDropdowns.forEach(filterDropdown => {
    filterDropdown.addEventListener(`click`, () => {
        filterSections.forEach(filterSection => {
            if (filterSection.dataset.target == filterDropdown.dataset.target) {
                if (filterSection.classList.contains("active")) {
                    filterSection.classList.remove("active");
                    filterDropdown.classList.remove("active");
                }
                else {
                    filterSection.classList.add("active");
                    filterDropdown.classList.add("active");
                }
            }
        })
    })
})




const obj = {
    colors: [],
    sizes: [],
    price: [],
    search: []
}

// displayProducts("category", Productdata);

let colorFilterProducts = [];
let sizeFilterProducts = [];
let priceFilterProducts = [];
let searchFilterProducts = [];




let sizeButtons = document.querySelectorAll(".sizee");
sizeButtons.forEach(button => {
    button.addEventListener(`click`, () => {

        if (button.classList.contains("active")) {
            button.classList.remove("active");
            obj.sizes.splice(obj.sizes.indexOf(button.dataset.size), 1);

        }
        else {
            button.classList.add("active");
            obj.sizes.push(button.dataset.size);
        }

        if (checkEmptyObject()) {
            displayProducts("category", Productdata);
        }
        else {

             filterData();
            // let category = document.querySelector(".not")

            // if (filterSizes.length == 0) {
            //     category.classList.add("active");
            //     category.innerHTML = "Try searching another filter.No related products found!"

            // }
            // else {
            //     category.classList.remove("active")
            // }
        }
    })
})




let circles = document.querySelectorAll(".circle");
circles.forEach(circle => {

    circle.addEventListener(`click`, () => {
        if (circle.classList.contains("active")) {
            circle.classList.remove("active");
            obj.colors.splice(obj.colors.indexOf(circle.dataset.color), 1);

        }
        else {
            circle.classList.add("active");
            obj.colors.push(circle.dataset.color);
        }

        if (checkEmptyObject()) {
            displayProducts("category", Productdata);

        }
        else {
         filterData();

            // let category = document.querySelector(".not")

            // if (filterClrs.length == 0) {
            //     category.classList.add("active");
            //     category.innerHTML = "Try searching another filter.No related products found!"

            // }
            // else {
            //     category.classList.remove("active")
            // }
        }
    })
})



function checkEmptyObject() {

    const Objectvalues = Object.values(obj);
    let empty = true;
    for (const value of Objectvalues) {
        if (value.length > 0 && value[0] != 0) {
            empty = false;
            break;
        }
    }
    return empty;
}



let range = document.querySelector(".range");
let output = document.getElementById("output");

range.addEventListener(`change`, () => {
    const price = parseFloat(range.value);
    output.value = `$${price}`;
    obj.price = [];

    if (price > 0) {
        obj.price.push(price);
        filterData();

    }
    else if (checkEmptyObject()) {
        displayProducts("category", Productdata)

    }
    else {
        filterData();
    }

})


const search = document.getElementById("filter-search");

search.addEventListener(`input`, () => {
    obj.search = [];

    if (search.value.trim() != "") {
        obj.search.push(search.value);
        filterData();
    }
    else if (checkEmptyObject()) {
        displayProducts("category", Productdata)
    }
    else {
        filterData();
    }
    // if (filterData().length == 0) {
    //     category.classList.add("active");
    //     category.innerHTML = "Try searching another filter.No related products found!"

    // }
    // else {
    //     category.classList.remove("active")
    // }

})



function filterData() {

    let data = getData();
    data.forEach(product => {
        let variants = product.variants;

        variants.forEach(variant => {
            // console.log("obj",obj)
            const search = document.getElementById("filter-search");

            let title = (variant.title).toLowerCase();
            let color = (variant.color).toLowerCase();
            let size = (variant.size).toLowerCase();
            let price = variant.selling_price;

            // console.log(title,color,size,price)
            if (obj.colors.includes(color)) {
                colorFilterProducts.push(variant);

            }
            if (obj.sizes.includes(size)) {
                sizeFilterProducts.push(variant);

            }
            if (price <= obj.price[0]) {
                priceFilterProducts.push(variant)
            }
            if (title.includes(obj.search[0])) {
                searchFilterProducts.push(variant);
            }

        })

    })
    let result = filterArray("id", Productdata, colorFilterProducts, sizeFilterProducts, priceFilterProducts, searchFilterProducts);
// console.log(colorFilterProducts,sizeFilterProducts)
console.log(result)

    displayProducts("category", result);

    sizeFilterProducts = [];
    colorFilterProducts = [];
    priceFilterProducts = [];
    searchFilterProducts = [];

    // return result;

}



function filterArray(key, mainData, ...arrays) {

    // if (!arrays.length) {
    //     return [];
    // }
    let activeArray = arrays.filter(arr => arr.length > 0);
    if (activeArray.length === 0) {
        // return [];
        activeArray = [[{}],[{}]]
        console.log("Active array: ",activeArray)

    }

    let common = mainData.flatMap(product =>
        product.variants.filter(variant =>
            activeArray.every(arr => arr.some(obj =>
                Object.keys(obj).every(key =>
                    variant[key] === obj[key]
                    
                )
            ))
        )
    )
    return common;
}




let resetButton = document.getElementById("reset-button");

resetButton.addEventListener(`click`, () => {

    const activeColor = document.querySelectorAll(".circle.active");
    const activeButtons = document.querySelectorAll(".sizee.active");

    activeColor.forEach(circle => {
        circle.classList.remove("active")

    })

    activeButtons.forEach(button => {
        button.classList.remove("active")

    })

    Object.values(obj).forEach(value => {
        value.length = 0;
    })

    search.value = "";

    range.value = 0;
    output.value = `$${range.value}`;

    displayProducts("category", Productdata);

})


