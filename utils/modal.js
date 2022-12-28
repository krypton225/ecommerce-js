import AllProducts from "../data/products.js";

const Modal = (function () {
    const myModal = document.getElementById("my-modal");

    function getAllButtonsProducts() {
        return document.querySelectorAll(`.product-card-home .show`);
    }

    function getButtonClicked() {
        getAllButtonsProducts().forEach((product) => {
            product.addEventListener(("click"), (e) => {
                getProductContainerID(e.currentTarget);
            });
        });
    }

    function getProductContainerID(buttonClicked = undefined ?? "") {
        const parentELementID = buttonClicked.parentNode.parentNode.id.split("-")[1];
        const productObject = getProductObject(parseInt(parentELementID));
        setModalBody(productObject[0]);
    }

    function getProductObject(productID = 0) {
        return AllProducts.filter((product) => productID === product.id);
    }

    const setModalBody = function (product) {
        const { id, pathPic, picAltText, productPrice, productFullDescription } = product;

        myModal.innerHTML = `
                <div id="product-modal-${id}" class="product-card-modal relative">
                    <div class="close-modal w-7 h-7 p-1 rounded-full absolute -top-11 right-1 flex justify-center items-center 
                    bg-slate-600 text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <span class="w-9 h-9 rounded-full p-8 flex justify-center items-center absolute top-5 right-6 z-[9999] 
                    bg-slate-600 text-white -rotate-[16deg]">
                        $${productPrice}
                    </span>

                    <img src="${pathPic}" id="product-modal-img-${id}" class="w-[60%] mx-auto object-cover"
                        alt="${picAltText}" width="60%" height="60%" loading="lazy" draggable="false">

                    <h2 id="product-modal-title-${id}" class="w-full relative mt-3 text-center text-[1.7rem]">${picAltText}</h2>

                    <p id="product-modal-description-5421" class="px-1 my-4 text-[1rem] text-gray-500">${productFullDescription}</p>
            </div>`;

        myModal.classList.remove("top-[26rem]", "opacity-0", "invisible");
        myModal.classList.add("top-[28rem]", "opacity-1", "visible");

        closeModal();
    }

    function closeModal() {
        document.querySelector(".close-modal").addEventListener(("click"), () => {
            myModal.classList.remove("top-[28rem]", "opacity-1", "visible");
            myModal.classList.add("top-[26rem]", "opacity-0", "invisible");
        });
    }

    return {
        getButtonClicked,
        closeModal
    }
})();

export default Modal;