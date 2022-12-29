const generateID = (function () {
    /**
     * @returns {number}
    */
    function* countingIDGenerator() {
        let count = 1;

        while (true) {
            yield count++;
        }
    }

    /**
     * @param  {Array} sourceArr=[] - array to check if it has objects or not.
    */
    function isArrayNotEmpty(sourceArr = []) {
        return sourceArr.length !== 0;
    }

    /**
     * @param  {Array} dataArr=[] - array has objects and insert IDs into each one.
    */
    function insertIDIntoData(dataArr = []) {
        if (isArrayNotEmpty(dataArr)) {
            const counter = countingIDGenerator();

            dataArr.forEach((arr) => {
                arr.id = counter.next().value;
            });
        } else {
            throw new Error("Array must not be empty of objects.");
        }
    }

    return {
        insert: insertIDIntoData
    }
})();

export default generateID.insert;