const cartOperations = (function () {
    const mainElement = document.getElementById("show-cart");

    /**
     * * Check if param is true, then open cart, else close it.
     * @param  {} open=true
     */
    function showOrNot(open = true) {
        mainElement.classList.add(open ? "right-0" : "-right-[27rem]");
        mainElement.classList.remove(open ? "-right-[27rem]" : "right-0");
    }

    function openShowCart(cartIconToOpen = null ?? "") {
        document.getElementById(cartIconToOpen).addEventListener(("click"), () => showOrNot(true));
    }

    function closeShowCart(cartCloseIcon = null ?? "") {
        document.getElementById(cartCloseIcon).addEventListener(("click"), () => showOrNot(false));
    }

    return {
        open: openShowCart,
        close: closeShowCart
    }
})();

export default cartOperations;