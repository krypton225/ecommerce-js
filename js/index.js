import AllProducts from "../data/products.js";

import renderProducts from "../data/renderProducts.js";

import CartOperations from "../utils/show-cart-operations.js";

renderProducts("parent-products", AllProducts);

CartOperations.open("show-cart-open");
CartOperations.close("show-cart-close");