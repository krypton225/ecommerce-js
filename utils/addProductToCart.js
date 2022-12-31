import ProductOperations from "./productOperations.js";

const CartProduct = (function () {
    const cartIcon = document.getElementById("cart-number");
    const mainCart = document.getElementById("cart-show-products");

    let countFinalResult = 0;

    const productsInCart = [];

    /**
     * @description entry point of the module.
     */
    const main = function () {
        getProductClicked();
    }

    /**
     * @description get the product which is clicked from home page.
     */
    function getProductClicked() {
        ProductOperations.getCartButtons().forEach((button) => {
            button.addEventListener(("click"), (e) => {
                const productID = ProductOperations.getProductID(e.currentTarget);
                addProductIntoCart(ProductOperations.getProductObject(parseInt(productID)));

                e.currentTarget.classList.add("hidden");
                e.currentTarget.nextElementSibling.classList.add("w-full");

                cartIcon.classList.add("w-1", "h-1", "p-3", "rounded-full", "flex", "justify-center", "items-center",
                    "absolute", "-top-3", "left-0", "bg-slate-700", "text-white", "text-base");

                setTotalPriceInHTML();
            });
        });
    }

    /**
     * @description get the product object after click button & add to cart container.
     * Push the product in productsInCart array, which acts as container for all products in cart.
     * Set length of this array (productsInCart) as notification for the icon cart.
     * Render OR Add this product into HTML div of the cart.
     * @param  {Object} product
     */
    function addProductIntoCart(product) {
        productsInCart.push(product[0]);
        setLengthAtIconCart();
        renderProductsAtCart(product[0]);
    }

    /**
     * @description set the length of the productsInCart array into cart icon.
     */
    function setLengthAtIconCart() {
        cartIcon.innerHTML = productsInCart.length;
    }

    /**
     * @description Render the selected product in the div of cart & Call (increase & decrease) functions of each product.
     * @param  {Object} product
     */
    function renderProductsAtCart(product) {
        const { id, pathPic, picAltText, productPrice } = product;

        mainCart.innerHTML +=
            `<div id="product-cart-${id}" class="product-card-home w-full px-3 relative flex justify-between items-center cart-product-container">
                <div class="w-[40%] overflow-hidden">
                    <img src="${pathPic}" id="product-img-cart-${id}" class="w-full object-cover"
                    alt="${picAltText}" width="20%" height="20%" loading="lazy" draggable="false">
                </div>

                <h3 id="product-title-cart-${id}" class="text-lg text-center">${picAltText}</h3>

                <div class="flex flex-col items-center">
                    <span id="product-price-cart-${id}" class="inline-block rounded-lg py-1 px-3 bg-slate-600 text-white z-50">
                        Price: $${productPrice}
                    </span>

                    <div class="w-full px-0 mt-3 flex justify-between items-center product-operations">
                        <button class="btn-custom-2 decrease-cart-item-btn" disabled>-</button>
                        <span class="inline-block mx-[10%] text-xl font-semibold product-counting">1</span>
                        <button class="btn-custom-2 increase-cart-item-btn">+</button>
                    </div>

                    <button class="btn-custom-2 w-full mt-3 text-sm remove-cart-item">remove</button>
                </div>
            </div>`;

        calculateTotalPrice(productPrice);

        increaseCounterOfProduct();
        decreaseCounterOfProduct();
    }

    /**
     * @param  {number} price - to add to total price.
     * @returns total price after added the param.
     */
    function calculateTotalPrice(price) {
        return countFinalResult += price;
    }

    /**
     * @description To get the current ID of the product.
     * @param  {HTMLElement} targetElement
     * @returns the product which matches.
     */
    function getIdProductInCart(targetElement) {
        const myParentElementID = parseInt(targetElement.parentNode.parentNode.parentNode.id.split("-cart-")[1]);
        return productsInCart.filter((el) => el.id === myParentElementID);
    }

    /**
     * @description What will happen if increase button of each product is clicked.
     */
    const increaseCounterOfProduct = function () {
        document.querySelectorAll(".increase-cart-item-btn").forEach((el) => {
            el.addEventListener(("click"), (e) => {
                e.stopPropagation();

                // * Disable decrease button by default.
                e.currentTarget.previousElementSibling.previousElementSibling.disabled = false;

                const returnedObj = getIdProductInCart(e.currentTarget);

                const myPrevElement = getSibling(e.currentTarget, "prev");
                let counter = parseInt(myPrevElement.textContent).toString();
                ++counter;

                // * Add price of product to the total.
                countFinalResult += parseInt(returnedObj[0].productPrice);
                setTotalPriceInHTML();

                // * Render the current counter into HTML.
                myPrevElement.innerHTML = counter.toString();
            });
        });
    }

    /**
     * @description What will happen if decrease button of each product is clicked.
     */
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

                // * Remove price of product to the total.
                countFinalResult -= parseInt(returnedObj[0].productPrice);
                setTotalPriceInHTML();

                // * Render the current counter into HTML.
                myNextElement.innerHTML = counter.toString();
            });
        });
    }

    /**
     * @description Setting total price into HTML.
     */
    function setTotalPriceInHTML() {
        document.getElementById("total-price").innerHTML = `Total price: ${countFinalResult}`;
    }

    /**
     * @param  {HTMLElement} element=null??"" element to get its siblings
     * @param  {string} placeELement="" where the element you want? (previous or next) of current element.
     */
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