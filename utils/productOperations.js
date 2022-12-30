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

    return {
        getShowButtons: getAllShowButtonsProducts,
        getCartButtons: getAllCartButtonsProducts,
    }
})();

export default ProductOperations;