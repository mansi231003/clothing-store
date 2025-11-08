// Toggler to open sidebar container...!

const toggles = document.querySelectorAll('.sidebar-toggler');
const container = document.getElementById('container');

toggles.forEach(toggler => {
    toggler.addEventListener(`click`, () => {

        if (container.classList.contains("active")) {
            container.classList.remove("active");
            document.body.classList.remove("no-scroll")

        }
        else {
            container.classList.add("active");
            document.body.classList.add("no-scroll")

        }
    })
})



const Productdata = [
    {
        "collection": ['new arrival'],
        "id": 13456734,
        "title": "T-shirt with Tape Details",
        "tags": ['men', 'women', 'casual'],
        "original_price": "400",
        "selling_price": "300",
        "featured_image": "static/image/black-tshirt.png",
        "rating": "3.5",
        "stock": "15",
        "variants": [
            {
                "id": "13456734-1",
                "title": "T-shirt with Tape Details",
                "size": ["L", "S"],
                "color": "Black",
                "original_price": "450",
                "selling_price": "320",
                "featured_image": "static/image/black-tshirt.png",
                "rating": "4.3"
            },
            {
                "id": "13456734-2",
                "title": "T-shirt with Tape Details",
                "size": ["M"],
                "color": "Green",
                "original_price": "400",
                "selling_price": "300",
                "featured_image": "static/image/green tshirt.png",
                "rating": "4.5"
            },
            {
                "id": "13456734-3",
                "title": "T-shirt with Tape Details",
                "size": ["XL", "L"],
                "color": "Orange",
                "original_price": "480",
                "selling_price": "350",
                "featured_image": "static/image/orange tshirt.png",
                "rating": "4.6"
            },

        ]
    },
    {
        "collection": ['top selling', 'best selling'],
        "id": 13456735,
        "title": "Skinny Fit Jeans",
        "tags": ['men', 'formal', 'casual'],
        "original_price": "800",
        "selling_price": "600",
        "featured_image": "static/image/jean.png",
        "rating": "4.2",
        "stock": "8",
        "variants": [
            {
                "id": "13456735-1",
                "title": "Skinny Fit Jeans",
                "size": ["L", "XL"],
                "color": "Blue",
                "original_price": "800",
                "selling_price": "600",
                "featured_image": "static/image/jean.png",
                "rating": "4.2"
            },
            {
                "id": "13456735-2",
                "title": "Skinny Fit Jeans",
                "size": ["XS", "M"],
                "color": "green",
                "original_price": "850",
                "selling_price": "650",
                "featured_image": "static/image/jean.png",
                "rating": "4.0"
            }
        ]
    },
    {
        "collection": ['new arrival', 'best selling'],
        "id": 13456736,
        "title": "Checkered Shirt",
        "tags": ['women', 'casual', 'trending'],
        "original_price": "1200",
        "selling_price": "900",
        "featured_image": "static/image/check shirt.png",
        "rating": "4.7",
        "stock": "12",
        "variants": [
            {
                "id": "13456736-1",
                "title": "Checkered Shirt",
                "size": ["L", "XL"],
                "color": "Dark Blue",
                "original_price": "1200",
                "selling_price": "900",
                "featured_image": "static/image/check shirt.png",
                "rating": "4.7"
            },
            {
                "id": "13456736-2",
                "title": "Checkered Shirt",
                "size": ["S", "XL"],
                "color": "Light Blue",
                "original_price": "1250",
                "selling_price": "950",
                "featured_image": "static/image/check shirt.png",
                "rating": "4.5"
            },
            {
                "id": "13456736-3",
                "title": "Checkered Shirt",
                "size": ["M", "L"],
                "color": "black",
                "original_price": "1300",
                "selling_price": "1000",
                "featured_image": "static/image/check shirt.png",
                "rating": "4.8"
            }
        ]
    },
    {
        "collection": ['new arrival', 'best selling'],
        "id": 13456737,
        "title": "Sleeve Striped T-shirt",
        "tags": ['women', 'summer', 'party'],
        "original_price": "1500",
        "selling_price": "1100",
        "featured_image": "static/image/orange shirt.png",
        "rating": "4.8",
        "stock": "6",
        "variants": [
            {
                "id": "13456737-1",
                "title": "Sleeve Striped T-shirt",
                "size": ["L", "XX-L"],
                "color": "Pink",
                "original_price": "1500",
                "selling_price": "1100",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.8"
            },
            {
                "id": "13456737-2",
                "title": "Sleeve Striped T-shirt",
                "size":["S", "M"],
                "color": "Yellow",
                "original_price": "1550",
                "selling_price": "1150",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.9"
            }
        ]
    },
    {
        "collection": ['top selling'],
        "id": 13456738,
        "title": "Vertical Striped Shirt",
        "tags": ['men', 'women', 'winter', 'casual'],
        "original_price": "1800",
        "selling_price": "1400",
        "featured_image": "static/image/striped shirt.png",
        "rating": "4.4",
        "stock": "20",
        "variants": [
            {
                "id": "13456738-1",
                "title": "Vertical Striped Shirt",
                "size": ["L"],
                "color": "Grey",
                "original_price": "1800",
                "selling_price": "1400",
                "featured_image": "static/image/striped shirt.png",
                "rating": "4.4"
            },
            {
                "id": "13456738-2",
                "title": "Vertical Striped Shirt",
                "size": ["S", "L"],
                "color": "Black",
                "original_price": "1900",
                "selling_price": "1500",
                "featured_image": "static/image/striped shirt.png",
                "rating": "4.5"
            },
            {
                "id": "13456738-3",
                "title": "Vertical Striped Shirt",
                "size": ["S"],
                "color": "Maroon",
                "original_price": "2000",
                "selling_price": "1600",
                "featured_image": "static/image/striped shirt.png",
                "rating": "4.3"
            }
        ]
    },
    {
        "collection": ['top selling', 'best selling'],
        "id": 13456739,
        "title": "Courage Graphic T-Shirt",
        "tags": ['men', 'summer', 'casual'],
        "original_price": "900",
        "selling_price": "650",
        "featured_image": "static/image/courage tshirt.png",
        "rating": "4.1",
        "stock": "10",
        "variants": [
            {
                "id": "13456739-1",
                "title": "Courage Graphic T-Shirt",
                "size": ["M", "L"],
                "color": "Khaki",
                "original_price": "900",
                "selling_price": "650",
                "featured_image": "static/image/courage tshirt.png",
                "rating": "4.1"
            },
            {
                "id": "13456739-2",
                "title": "Courage Graphic T-Shirt",
                "size": ["XL"],
                "color": "Olive",
                "original_price": "950",
                "selling_price": "700",
                "featured_image": "static/image/courage tshirt.png",
                "rating": "4.0"
            }
        ]
    },
    {
        "collection": ['new arrival', 'top selling', 'best selling'],
        "id": 13456740,
        "title": "Loose Fit Bermuda Shorts",
        "tags": ['kids', 'casual', 'fun'],
        "original_price": "350",
        "selling_price": "250",
        "featured_image": "static/image/shorts.png",
        "rating": "4.6",
        "stock": "25",
        "variants": [
            {
                "id": "13456740-1",
                "title": "Loose Fit Bermuda Shorts",
                "size": ["L", "XL"],
                "color": "Red",
                "original_price": "350",
                "selling_price": "250",
                "featured_image": "static/image/shorts.png",
                "rating": "4.6"
            },
            {
                "id": "13456740-2",
                "title": "Loose Fit Bermuda Shorts",
                "size":["L", "M"],
                "color": "Blue",
                "original_price": "380",
                "selling_price": "280",
                "featured_image": "static/image/shorts.png",
                "rating": "4.7"
            },
            {
                "id": "13456740-3",
                "title": "Loose Fit Bermuda Shorts",
                "size": ["M"],
                "color": "Green",
                "original_price": "400",
                "selling_price": "300",
                "featured_image": "static/image/shorts.png",
                "rating": "4.5"
            }
        ]
    },
    {
        "collection": ['new arrival'],
        "id": 13456741,
        "title": "Faded Skinny Jeans",
        "tags": ['men', 'winter', 'premium'],
        "original_price": "5000",
        "selling_price": "3800",
        "featured_image": "static/image/black jean.png",
        "rating": "4.9",
        "stock": "5",
        "variants": [
            {
                "id": "13456741-1",
                "title": "Faded Skinny Jeans",
                "size":["S", "M"],
                "color": "Black",
                "original_price": "5000",
                "selling_price": "3800",
                "featured_image": "static/image/black jean.png",
                "rating": "4.9"
            },
            {
                "id": "13456741-2",
                "title": "Faded Skinny Jeans",
                "size": ["S"],
                "color": "Brown",
                "original_price": "5200",
                "selling_price": "4000",
                "featured_image": "static/image/black jean.png",
                "rating": "4.8"
            }
        ]
    },
    {
        "id": 13456742,
        "title": "Polo with Contrast Trims",
        "tags": ['women', 'fitness', 'sports'],
        "original_price": "700",
        "selling_price": "500",
        "featured_image": "static/image/product shirts1.png",
        "rating": "4.5",
        "stock": "18",
        "variants": [
            {
                "id": "13456742-1",
                "title": "Polo with Contrast Trims",
                "size": ["L", "XL"],
                "color": "Black",
                "original_price": "700",
                "selling_price": "500",
                "featured_image": "static/image/product shirts1.png",
                "rating": "4.5"
            },
            {
                "id": "13456742-2",
                "title": "Polo with Contrast Trims",
                "size": ["L", "XL"],
                "color": "Purple",
                "original_price": "750",
                "selling_price": "550",
                "featured_image": "static/image/product shirts1.png",
                "rating": "4.6"
            },
            {
                "id": "13456742-3",
                "title": "Polo with Contrast Trims",
                "size":["L", "S"],
                "color": "Grey",
                "original_price": "800",
                "selling_price": "600",
                "featured_image": "static/image/product shirts1.png",
                "rating": "4.4"
            }
        ]
    },
    {
        "collection": ['best selling'],
        "id": 13456743,
        "title": "Gradient Graphic T-shirt",
        "tags": ['men', 'casual', 'winter'],
        "original_price": "1100",
        "selling_price": "800",
        "featured_image": "static/image/product shirt2.png",
        "rating": "4.3",
        "stock": "14",
        "variants": [
            {
                "id": "13456743-1",
                "title": "Gradient Graphic T-shirt",
                "size":["L"],
                "color": "Red",
                "original_price": "1100",
                "selling_price": "800",
                "featured_image": "static/image/product shirt2.png",
                "rating": "4.3"
            },
            {
                "id": "13456743-2",
                "title": "Gradient Graphic T-shirt",
                "size":["M"],
                "color": "Blue",
                "original_price": "1150",
                "selling_price": "850",
                "featured_image": "static/image/product shirt2.png",
                "rating": "4.2"
            }
        ]
    },
    {
        "id": 13456744,
        "title": "Polo with Tipping Details",
        "tags": ['women', 'formal', 'elegant'],
        "original_price": "1300",
        "selling_price": "950",
        "featured_image": "static/image/product shirt3.png",
        "rating": "4.6",
        "stock": "9",
        "variants": [
            {
                "id": "13456744-1",
                "title": "Polo with Tipping Details",
                "size": ["S"],
                "color": "Black",
                "original_price": "1300",
                "selling_price": "950",
                "featured_image": "static/image/product shirt3.png",
                "rating": "4.6"
            },
            {
                "id": "13456744-2",
                "title": "Polo with Tipping Details",
                "size": ["M"],
                "color": "Beige",
                "original_price": "1350",
                "selling_price": "1000",
                "featured_image": "static/image/product shirt3.png",
                "rating": "4.7"
            },
            {
                "id": "13456744-3",
                "title": "Polo with Tipping Details",
                "size": ["XL"],
                "color": "Navy",
                "original_price": "1400",
                "selling_price": "1050",
                "featured_image": "static/image/product shirt3.png",
                "rating": "4.5"
            }
        ]
    },
    {
        "collection": ['new arrival'],
        "id": 13456745,
        "title": "Black Striped T-shirt",
        "tags": ['men', 'women', 'sports', 'fitness'],
        "original_price": "850",
        "selling_price": "600",
        "featured_image": "static/image/product shirt4.png",
        "rating": "4.2",
        "stock": "22",
        "variants": [
            {
                "id": "13456745-1",
                "title": "Black Striped T-shirt",
                "size": ["L"],
                "color": "Black",
                "original_price": "850",
                "selling_price": "600",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.2"
            },
            {
                "id": "13456745-2",
                "title": "Black Striped T-shirt",
                "size":["S"],
                "color": "Navy",
                "original_price": "900",
                "selling_price": "650",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.1"
            }
        ]
    },
    {
        "id": 13456746,
        "title": "Bomber Jacket",
        "tags": ['men', 'women', 'casual', 'trendy'],
        "original_price": "2500",
        "selling_price": "1900",
        "featured_image": "static/image/orange shirt.png",
        "rating": "4.7",
        "stock": "7",
        "variants": [
            {
                "id": "13456746-1",
                "title": "Bomber Jacket",
                "size":["L", "S"],
                "color": "Green",
                "original_price": "2500",
                "selling_price": "1900",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.7"
            },
            {
                "id": "13456746-2",
                "title": "Bomber Jacket",
                "size":["L"],
                "color": "Black",
                "original_price": "2600",
                "selling_price": "2000",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.8"
            },
            {
                "id": "13456746-3",
                "title": "Bomber Jacket",
                "size":["L", "XL"],
                "color": "Burgundy",
                "original_price": "2700",
                "selling_price": "2100",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.6"
            }
        ]
    },
    {
        "collection": ['new arrival', 'top selling', 'best selling'],
        "id": 13456747,
        "title": "Kids Denim Jacket",
        "tags": ['kids', 'casual', 'trendy'],
        "original_price": "800",
        "selling_price": "600",
        "featured_image": "static/image/orange shirt.png",
        "rating": "4.4",
        "stock": "11",
        "variants": [
            {
                "id": "13456747-1",
                "title": "Kids Denim Jacket",
                "size":["M"],
                "color": "Blue",
                "original_price": "800",
                "selling_price": "600",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.4"
            },
            {
                "id": "13456747-2",
                "title": "Kids Denim Jacket",
                "size":["L", "XL"],
                "color": "Light Blue",
                "original_price": "850",
                "selling_price": "650",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.5"
            }
        ]
    },
    {
        "id": 13456748,
        "title": "Formal Blazer",
        "tags": ['men', 'formal', 'office'],
        "original_price": "3500",
        "selling_price": "2700",
        "featured_image": "static/image/orange shirt.png",
        "rating": "4.8",
        "stock": "6",
        "variants": [
            {
                "id": "13456748-1",
                "title": "Formal Blazer",
                "size":["L", "XL"],
                "color": "Navy",
                "original_price": "3500",
                "selling_price": "2700",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.8"
            },
            {
                "id": "13456748-2",
                "title": "Formal Blazer",
                "size":["L", "XL"],
                "color": "Charcoal",
                "original_price": "3600",
                "selling_price": "2800",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.9"
            },
            {
                "id": "13456748-3",
                "title": "Formal Blazer",
                "size":["S", "XL"],
                "color": "Black",
                "original_price": "3700",
                "selling_price": "2900",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.7"
            }
        ]
    },
    {
        "id": 13456749,
        "title": "Knit Sweater",
        "tags": ['women', 'winter', 'cozy'],
        "original_price": "1600",
        "selling_price": "1200",
        "featured_image": "static/image/orange shirt.png",
        "rating": "4.5",
        "stock": "13",
        "variants": [
            {
                "id": "13456749-1",
                "title": "Knit Sweater",
                "size":["XL"],
                "color": "Cream",
                "original_price": "1600",
                "selling_price": "1200",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.5"
            },
            {
                "id": "13456749-2",
                "title": "Knit Sweater",
                "size":["L", "XL"],
                "color": "Grey",
                "original_price": "1650",
                "selling_price": "1250",
                "featured_image": "static/image/orange shirt.png",
                "rating": "4.6"
            }
        ]
    },
    {
        "id": 13456750,
        "title": "Chino Pants",
        "tags": ['men', 'formal', 'casual'],
        "original_price": "1400",
        "selling_price": "1000",
        "featured_image": "static/image/black jean.png",
        "rating": "4.3",
        "stock": "16",
        "variants": [
            {
                "id": "13456750-1",
                "title": "Chino Pants",
                "size":["L", "XL"],
                "color": "Beige",
                "original_price": "1400",
                "selling_price": "1000",
                "featured_image": "static/image/black jean.png",
                "rating": "4.3"
            },
            {
                "id": "13456750-2",
                "title": "Chino Pants",
                "size": ["L", "XL"],
                "color": "Navy",
                "original_price": "1450",
                "selling_price": "1050",
                "featured_image": "static/image/black jean.png",
                "rating": "4.4"
            },
            {
                "id": "13456750-3",
                "title": "Chino Pants",
                "size":["L", "XL"],
                "color": "Olive",
                "original_price": "1500",
                "selling_price": "1100",
                "featured_image": "static/image/black jean.png",
                "rating": "4.2"
            }
        ]
    },
    {
        "id": 13456751,
        "title": "Linen Shirt",
        "tags": ['men', 'summer', 'casual'],
        "original_price": "1200",
        "selling_price": "850",
        "featured_image": "static/image/black jean.png",
        "rating": "4.6",
        "stock": "10",
        "variants": [
            {
                "id": "1345651-1",
                "title": "Linen Shirt",
                "size":["L"],
                "color": "White",
                "original_price": "1200",
                "selling_price": "850",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.6"
            },
            {
                "id": "13456751-2",
                "title": "Linen Shirt",
                "size":["L"],
                "color": "Sky Blue",
                "original_price": "1250",
                "selling_price": "900",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.7"
            }
        ]
    },
    {
        "id": 13456752,
        "title": "Maxi Dress",
        "tags": ['women', 'summer', 'elegant'],
        "original_price": "2200",
        "selling_price": "1650",
        "featured_image": "static/image/black jean.png",
        "rating": "4.8",
        "stock": "8",
        "variants": [
            {
                "id": "13456752-1",
                "title": "Maxi Dress",
                "size":["S"],
                "color": "Floral Print",
                "original_price": "2200",
                "selling_price": "1650",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.8"
            },
            {
                "id": "13456752-2",
                "title": "Maxi Dress",
                "size":["L", "XL"],
                "color": "Solid Red",
                "original_price": "2300",
                "selling_price": "1750",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.9"
            },
            {
                "id": "13456752-3",
                "title": "Maxi Dress",
                "size": ["L", "XL"],
                "color": "Navy Blue",
                "original_price": "2400",
                "selling_price": "1850",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.7"
            }
        ]
    },
    {
        "id": 13456753,
        "title": "Running Shoes",
        "tags": ['men', 'women', 'sports', 'fitness'],
        "original_price": "3000",
        "selling_price": "2300",
        "featured_image": "static/image/black jean.png",
        "rating": "4.7",
        "stock": "19",
        "variants": [
            {
                "id": "13456753-1",
                "title": "Running Shoes",
                "size":["L", "XL"],
                "color": "Black/White",
                "original_price": "3000",
                "selling_price": "2300",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.7"
            },
            {
                "id": "13456753-2",
                "title": "Running Shoes",
                "size": ["L", "XL"],
                "color": "Blue/Grey",
                "original_price": "3100",
                "selling_price": "2400",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.8"
            },
            {
                "id": "13456753-3",
                "title": "Running Shoes",
                "size":["L", "XL"],
                "color": "Red/Black",
                "original_price": "3200",
                "selling_price": "2500",
                "featured_image": "static/image/product shirt4.png",
                "rating": "4.6"
            }
        ]
    }
];



// Getting all the products data...!

function getData() {

    return Productdata;

}



// To display all the products in given id in clothcard by creating element...!

function displayProducts(id, product) {
    let itemWrap = document.getElementById(id);
    itemWrap.innerHTML = "";

    let data = product;
    data.forEach(item => {

        const clothItem = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img1 = document.createElement('img');

        const headingContainer = document.createElement('div');
        const heading = document.createElement('h5');

        const starContainer = document.createElement('div');
        const stars = document.createElement('div');
        const rating = document.createElement('div');
        const ratingPara = document.createElement('p');


        const discountContainer = document.createElement('div');
        const price = document.createElement('h5');
        const discountPrice = document.createElement('h5');
        const discount = document.createElement('div');
        const strike = document.createElement('s');

        clothItem.classList.add("cloth-item");
        clothItem.classList.add("swiper-slide");
        imgContainer.classList.add("image-container");
        img1.classList.add("image");

        starContainer.classList.add("stars-container");
        stars.classList.add("stars");
        rating.classList.add("rating");
        ratingPara.classList.add("grey-color");


        discountContainer.classList.add("price");
        price.classList.add("font-size");
        discountPrice.classList.add("grey-color");
        discountPrice.classList.add("font-size");
        discount.classList.add("discount");
        discount.classList.add("flex-content-center");

        imgContainer.appendChild(img1);
        clothItem.appendChild(imgContainer)

        headingContainer.appendChild(heading);
        clothItem.appendChild(headingContainer);

        starContainer.appendChild(stars);
        starContainer.appendChild(rating);
        rating.appendChild(ratingPara);
        clothItem.appendChild(starContainer);

        let counter = 1;
        for (k = 0; k < 5; k++) {
            let ratingNumber = Math.trunc(item.rating);
            if (ratingNumber >= counter) {

                const star = document.createElement('i');
                star.classList.add("fa-solid", "fa-star");
                stars.appendChild(star);
            }
            else {
                const star = document.createElement('i');
                star.classList.add("fa-regular", "fa-star");
                stars.appendChild(star);
            }
            counter++;
        }


        discountPrice.appendChild(strike);
        discountContainer.appendChild(price);
        discountContainer.appendChild(discountPrice);
        discountContainer.appendChild(discount);

        clothItem.appendChild(discountContainer);

        itemWrap.appendChild(clothItem);

        heading.innerHTML = item.title;
        rating.innerHTML = item.rating + "/5";
        price.innerHTML = "$" + item.selling_price;
        strike.innerHTML = "$" + item.original_price;
        discount.innerHTML = "-" + Math.trunc(((item.original_price - item.selling_price) / item.original_price) * 100) + "%";
        img1.src = item.featured_image;
    })
    return itemWrap;
}



// It returns products by comparing collections type...! 

function collectionType(type) {
    let data = getData();
    let filterProduct = [];

    data.forEach(product => {
        let collArray = product.collection;
        try {
            collArray.forEach(collection => {

                if (collection == type) {
                    filterProduct.push(product);
                }
            })
        }
        catch {

        }
    })
    return filterProduct;

}



// To search all the products...!

const searchBar = document.querySelector(".search");
const searchOptions = document.querySelector(".search-options");
let value = [];

searchBar.addEventListener(`input`, () => {
    value = [];
    searchOptions.innerHTML = "";

    if (searchBar.value == "") {
        searchOptions.innerHTML = "";
    }
       let count=0;

        for (let i = 0; i < Productdata.length; i++) {

            if(count>=3){
                return;
            }
                 value.push(searchBar.value);
            if (searchBar.value.trim() != "" && searchBar.value != null && searchBar.value != undefined && Productdata[i].title.toLowerCase().includes(value[0])) {

                const clothsCart = document.createElement('div');
                const imageContainer = document.createElement('div');
                const image = document.createElement('img');
                const clothsDetail = document.createElement('div');
                const productsName = document.createElement('h4');
                const price = document.createElement('h5');

                clothsCart.classList.add("cloths-cart");
                imageContainer.classList.add("image-container")
                image.classList.add("image","width-100");
                clothsDetail.classList.add("cloth-details");
                productsName.classList.add("name");
                price.classList.add("font-size")


                imageContainer.appendChild(image);
                clothsDetail.appendChild(productsName);
                clothsDetail.appendChild(price);
                clothsCart.appendChild(imageContainer);
                clothsCart.appendChild(clothsDetail);
                searchOptions.appendChild(clothsCart);

                image.src = Productdata[i].featured_image;
                price.innerHTML = "$"+Productdata[i].selling_price;
                productsName.innerHTML = Productdata[i].title;

                count++;

            }

        }
})