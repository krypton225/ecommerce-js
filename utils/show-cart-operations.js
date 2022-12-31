import Scroll from "./removeScrolling.js";

const CartOperations = (function () {
    const mainElement = document.getElementById("show-cart");

    /**
     * @description entry point of the module.
     * @param {string} elementForOpen
     * @param {string} elementForClose
     */
    const main = function (elementForOpen = "", elementForClose = "") {
        openShowCart(elementForOpen);
        closeShowCart(elementForClose);
    }

    /**
     * @description Check if param is true, then open cart, else close it.
     * @param  {} open=true
     */
    function showOrNot(open = true) {
        mainElement.classList.add(open ? "right-0" : "-right-[50rem]");
        mainElement.classList.remove(open ? "-right-[50rem]" : "right-0");
    }

    /**
     * @description to show the cart.
     * @param  {} cartIconToOpen=null??"" - element ID to open cart.
     */
    function openShowCart(cartIconToOpen = null ?? "") {
        document.getElementById(cartIconToOpen).addEventListener(("click"), () => {
            showOrNot(true);
            Scroll.removeTwoAxis("body");
            Scroll.addYAxisTo("show-cart");
        });
    }

    /**
     * @description to hide the cart.
     * @param  {} cartCloseIcon=null??"" - element ID to close cart.
     */
    function closeShowCart(cartCloseIcon = null ?? "") {
        document.getElementById(cartCloseIcon).addEventListener(("click"), () => {
            showOrNot(false);
            Scroll.addTwoAxis("body");
            Scroll.removeYAxisFrom("show-cart");
        });
    }

    return {
        main
    }
})();

export default CartOperations;