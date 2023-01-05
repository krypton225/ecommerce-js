const Overlay = (function () {
    /**
     * @description Create overlay to be shown when modal is appeared.
     */
    function overlayHTMLTemplate() {
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("w-full", "h-full",
            "absolute", "top-0", "left-0", "bg-[#19212e90]", "z-[999999999999999]")
        overlayElement.id = "overlay";
        return overlayElement;
    }

    /**
     * @description Insert overlay into the body when modal is opened.
     */
    function insertOverlayIntoHTML() {
        document.body.prepend(overlayHTMLTemplate(), document.body.firstChild);
    }

    /**
     * @description Remove overlay from the body when modal is closed.
     */
    function removeOverlayIntoHTML() {
        document.getElementById("overlay").remove();
    }

    return {
        insert: insertOverlayIntoHTML,
        remove: removeOverlayIntoHTML,
    }
})();

export default Overlay;