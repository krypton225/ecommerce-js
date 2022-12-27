const generateID = (function () {
    function* MainCountingIDGenerator(start = 1) {
        let count = start;

        while (true) {
            yield count++;
        }
    }

    function isArrayNotEmpty(sourceArr = []) {
        return sourceArr.length !== 0
    }

    function insertIDIntoData(dataArr = []) {
        if (isArrayNotEmpty(dataArr)) {
            const counter = MainCountingIDGenerator();

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