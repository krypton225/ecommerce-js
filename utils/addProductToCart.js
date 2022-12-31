import ProductOperations from "./productOperations.js";

const CartProduct = (function () {
    const cartIcon = document.getElementById("cart-number");
    const mainCart = document.getElementById("cart-show-products");

    let countFinalResult = 0;

    const productsInCart = [];

    const main = function () {
        getProductClicked();
    }

    function getProductClicked() {
        ProductOperations.getCartButtons().forEach((button) => {
            button.addEventListener(("click"), (e) => {
                const productID = ProductOperations.getProductID(e.currentTarget);
                addProductIntoCart(ProductOperations.getProductObject(parseInt(productID)));

                e.currentTarget.classList.add("hidden");
                e.currentTarget.nextElementSibling.classList.add("w-full");

                cartIcon.classList.add("w-1", "h-1", "p-3", "rounded-full", "flex", "justify-center", "items-center",
                    "absolute", "-top-3", "left-0", "bg-slate-700", "text-white", "text-base");

                setTotalPrice();
            });
        });
    }

    function addProductIntoCart(product) {
        productsInCart.push(product[0]);
        setLengthAtIconCart();
        renderProductsAtCart(product[0]);
    }

    function setLengthAtIconCart() {
        cartIcon.innerHTML = productsInCart.length;
    }

    function renderProductsAtCart(product) {
        const { id, pathPic, picAltText, productPrice } = product;

        mainCart.innerHTML +=
            `<div id="product-cart-${id}" class="product-card-home w-full px-3 relative flex justify-between items-center cart-product-container">
                <img src="${pathPic}" id="product-img-cart-${id}" class="w-[24%] object-cover"
                alt="${picAltText}" width="20%" height="20%" loading="lazy" draggable="false">

                <h3 id="product-title-cart-${id}" class="text-lg text-center">${picAltText}</h3>

                <div class="flex flex-col items-center">
                    <span id="product-price-cart-${id}" class="inline-block rounded-lg py-1 px-3 bg-slate-600 text-white z-50">
                        Price: $${productPrice}
                    </span>

                    <div class="w-full px-0 mt-5 flex justify-between items-center product-operations">
                        <button class="btn-custom-2 decrease-cart-item-btn" disabled>-</button>
                        <span class="inline-block mx-[10%] text-xl font-semibold product-counting">1</span>
                        <button class="btn-custom-2 increase-cart-item-btn">+</button>
                    </div>
                </div>
            </div>`;

        console.log(`Total price of all products is: ${calculateTotalPrice(productPrice)}`)

        increaseCounterOfProduct();
        decreaseCounterOfProduct();
    }

    function calculateTotalPrice(price) {
        return countFinalResult += price;
    }

    function getIdProductInCart(targetElement) {
        const myParentElementID = parseInt(targetElement.parentNode.parentNode.parentNode.id.split("-cart-")[1]);
        return productsInCart.filter((el) => el.id === myParentElementID);
    }

    const increaseCounterOfProduct = function () {
        document.querySelectorAll(".increase-cart-item-btn").forEach((el) => {
            el.addEventListener(("click"), (e) => {
                e.stopPropagation();

                e.currentTarget.previousElementSibling.previousElementSibling.disabled = false;

                const returnedObj = getIdProductInCart(e.currentTarget);

                const myPrevElement = getSibling(e.currentTarget, "prev");
                let counter = parseInt(myPrevElement.textContent).toString();
                ++counter;

                countFinalResult += parseInt(returnedObj[0].productPrice);
                console.log(`Final Result: ${countFinalResult}`)
                setTotalPrice();

                myPrevElement.innerHTML = counter.toString();
            });
        });
    }

    const decreaseCounterOfProduct = function () {
        document.querySelectorAll(".decrease-cart-item-btn").forEach((el) => {
            el.addEventListener(("click"), (e) => {
                e.stopPropagation();

                const myNextElement = getSibling(e.currentTarget, "next");
                const returnedObj = getIdProductInCart(e.currentTarget);

                let counter = parseInt(myNextElement.textContent).toString();
                --counter;

                if (counter <= 1) {
                    counter = 1;
                    e.currentTarget.disabled = true;
                } else {
                    e.currentTarget.disabled = false;
                }

                countFinalResult -= parseInt(returnedObj[0].productPrice);
                console.log(`Final Result: ${countFinalResult}`)
                setTotalPrice();

                myNextElement.innerHTML = counter.toString();
            });
        });
    }

    function setTotalPrice() {
        document.getElementById("total-price").innerHTML = `Total price: ${countFinalResult}`;
    }

    function getSibling(element = null ?? "", placeELement = "") {
        if (placeELement === "prev") {
            return element.previousElementSibling;
        } else if (placeELement === "next") {
            return element.nextElementSibling;
        }
    }

    return {
        main
    }
})();

export default CartProduct;