const renderProducts = (function () {
    function setProductsInfo(parentElementID = null, sourceOfProducts = []) {
        try {
            const myELement = document.getElementById(parentElementID);

            sourceOfProducts.forEach(({ id, pathPic, picAltText, productPrice, productDescription }) => {
                myELement.innerHTML +=
                    `<div id="product-${id}" class="product-card-home relative">

                        <span class="rounded-bl-lg py-1 px-5 absolute top-0 right-0 bg-slate-600 text-white z-50">$${productPrice}</span>

                        <img src="${pathPic}" class="w-[60%] mx-auto object-cover" alt="${picAltText}" width="60%" height="60%" loading="lazy">

                        <h2 class="mt-3">${picAltText}</h2>

                        <p class="text-sm text-gray-500">${productDescription}</p>

                        <div class="px-2 flex justify-between items-center">
                            <button class="btn-custom">add to cart</button>
                            <button class="btn-custom">show</button>
                        </div>
                    </div>`;
            })
        } catch (error) {
            console.error(error);
        }
    }

    return {
        setProducts: setProductsInfo
    }
})();

export default renderProducts.setProducts;