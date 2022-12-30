import ProductOperations from "./productOperations.js";

const CartProduct = (function () {
    const cartIcon = document.getElementById("cart-number");
    const mainCart = document.getElementById("cart-show-products");

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
            });
        });
    }

    function addProductIntoCart(product) {
        productsInCart.push(product);
        setLengthAtIconCart();
        renderProductsAtCart(product[0]);
    }

    function setLengthAtIconCart() {
        cartIcon.innerHTML = productsInCart.length;
    }

    function renderProductsAtCart(product) {
        const { id, pathPic, picAltText, productPrice } = product;

        mainCart.innerHTML +=
            `<div id="product-94" class="product-card-home w-full px-3 relative flex justify-between items-center">
                <span class="block rounded-lg px-4 py-1 absolute top-[-26.4%] left-0 bg-slate-600 text-white z-50">Total: $${productPrice}</span>

                <img src="${pathPic}" id="product-img--cart-${id}" class="w-[24%] object-cover"
                alt="${picAltText}" width="20%" height="20%" loading="lazy" draggable="false">

                <h3 id="product-title-333333333" class="text-lg text-center">${picAltText}</h3>

                <div class="flex flex-col items-center">
                    <span id="product-price-11111111" class="inline-block rounded-lg py-1 px-3 bg-slate-600 text-white z-50">
                        Price: $${productPrice}
                    </span>

                    <div class="w-full px-0 mt-5 flex justify-between items-center product-operations">
                        <button class="btn-custom-2 decrease-cart-item">-</button>
                        <span class="inline-block mx-[10%] text-xl font-semibold product-counting">1</span>
                        <button class="btn-custom-2 increase-cart-item">+</button>
                    </div>
            </div>`;

        increaseCounterOfProduct();
        decreaseCounterOfProduct();
    }

    const increaseCounterOfProduct = function () {
        document.querySelectorAll(".increase-cart-item").forEach((el) => {
            el.addEventListener(("click"), (e) => {
                const myPrevElement = getSibling(e.currentTarget, "prev");
                let counter = parseInt(myPrevElement.textContent).toString();
                ++counter;
                myPrevElement.innerHTML = counter.toString();
            });
        });
    }

    const decreaseCounterOfProduct = function () {
        document.querySelectorAll(".decrease-cart-item").forEach((el) => {
            el.addEventListener(("click"), (e) => {
                const myNextElement = getSibling(e.currentTarget, "next");
                let counter = parseInt(myNextElement.textContent).toString();
                --counter;

                if (counter < 1) counter = 1;

                myNextElement.innerHTML = counter.toString();
            });
        });
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