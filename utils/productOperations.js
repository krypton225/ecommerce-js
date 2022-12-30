import Scroll from "./removeScrolling.js";

const ProductOperations = (function () {
    /**
     * @description get all buttons Show which into product cards.
     * @returns {NodeList} - returns list of nodes of buttons.
    */
    function getAllShowButtonsProducts() {
        return document.querySelectorAll(`.product-card-home .show`);
    }

    /**
     * @description get all buttons add-cart which into product cards.
     * @returns {NodeList} - returns list of nodes of these buttons.
    */
    function getAllCartButtonsProducts() {
        return document.querySelectorAll(`.product-card-home .add-cart`);
    }

    /**
     * @description get product ID which regards to the clicked button and send to setModalBody function.
     * @param  {} buttonClicked=null??""
     */
    function getProductIDFromButtonClicked(buttonClicked = null ?? "") {
        return buttonClicked.parentNode.parentNode.id.split("-")[1];
    }

    return {
        getShowButtons: getAllShowButtonsProducts,
        getCartButtons: getAllCartButtonsProducts,
        getProductID: getProductIDFromButtonClicked
    }
})();

export default ProductOperations;