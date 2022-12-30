import ProductOperations from "./productOperations.js";

const CartProduct = (function () {
    const cartIcon = document.getElementById("cart-number");
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
    }

    function setLengthAtIconCart() {
        cartIcon.innerHTML = productsInCart.length;
    }

    return {
        main
    }
})();

export default CartProduct;