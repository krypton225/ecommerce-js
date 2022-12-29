const Scroll = (function () {

    /**
     * @param  {} elementID=null??"" - ID of element to remove overflow from.
     */
    function removeTwoAxis(elementID = null ?? "") {
        document.getElementById(elementID).classList.add("overflow-hidden");
    }

    /**
     * @param  {} elementID=null??"" - ID of element to add overflow from.
     */
    function addTwoAxis(elementID = null ?? "") {
        document.getElementById(elementID).classList.remove("overflow-hidden");
    }

    /**
     * @param  {} elementID=null??"" - ID of element to add overflow-y from.
     */
    function addInYAxis(elementID = null ?? "") {
        document.getElementById(elementID).classList.add("overflow-y-auto");
    }

    /**
     * @param  {} elementID=null??"" - ID of element to remove overflow-y from.
     */
    function removeFromYAxis(elementID = null ?? "") {
        document.getElementById(elementID).classList.remove("overflow-y-auto");
    }

    return {
        removeTwoAxis,
        addTwoAxis,
        addYAxisTo: addInYAxis,
        removeYAxisFrom: removeFromYAxis
    }
})();

export default Scroll;