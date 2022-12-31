import AllProducts from "../data/products.js";

import renderProducts from "../data/renderProducts.js";

import CartOperations from "../utils/show-cart-operations.js";

import Modal from "../utils/modal.js";
import CartProduct from "../utils/addProductToCart.js";

renderProducts("parent-products", AllProducts);

CartOperations.main("show-cart-open", "show-cart-close")

Modal.main();

CartProduct.main();