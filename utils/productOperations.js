import AllProducts from "../data/products.js";

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
     * @param  {HTMLButtonElement} buttonClicked=null??""
     */
    function getProductIDFromButtonClicked(buttonClicked = null ?? "") {
        return buttonClicked.parentNode.parentNode.id.split("-")[1];
    }

    /**
     * @description filter the product array to get the product with specified product ID.
     * @param  {number} productID=0 - product ID which will be filtered and get from the main product array.
     */
    function getProductObject(productID = 0) {
        return AllProducts.filter((product) => productID === product.id);
    }

    return {
        getShowButtons: getAllShowButtonsProducts,
        getCartButtons: getAllCartButtonsProducts,
        getProductID: getProductIDFromButtonClicked,
        getProductObject
    }
})();

export default ProductOperations;