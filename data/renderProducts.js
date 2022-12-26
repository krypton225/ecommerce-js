const renderProducts = (function () {
    function setProductsInfo(parentElementID = null, sourceOfProducts = []) {
        try {
            const myELement = document.getElementById(parentElementID);

            sourceOfProducts.forEach(({ id, pathPic, picAltText, productDescription }) => {
                myELement.innerHTML +=
                    `<div id="product-${id}" class="product-card-home">

                        <img src="${pathPic}" class="w-[60%] mx-auto object-cover" alt="${picAltText}">

                        <h3 class="mt-3">${picAltText}</h3>

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