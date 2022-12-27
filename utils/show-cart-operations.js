const cartOperations = (function () {
    const mainElement = document.getElementById("show-cart");

    function openShowCart(cartIconToOpen = null) {
        document.getElementById(cartIconToOpen).addEventListener(("click"), () => {
            mainElement.classList.remove("-right-[27rem]");
            mainElement.classList.add("right-0");
        });
    }

    function closeShowCart(cartCloseIcon = null) {
        document.getElementById(cartCloseIcon).addEventListener(("click"), () => {
            mainElement.classList.add("-right-[27rem]");
            mainElement.classList.remove("right-0");
        });
    }

    return {
        open: openShowCart,
        close: closeShowCart
    }
})();

export default cartOperations;