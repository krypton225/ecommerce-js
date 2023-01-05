const Loader = (function () {
    function open() {
        document.onreadystatechange = function () {
            const state = document.readyState;

            if (state === 'interactive') {
                document.getElementById('main-content').style.visibility = "hidden";
            } else if (state === 'complete') {
                setTimeout(function () {
                    document.getElementById('interactive');
                    document.getElementById('load').style.visibility = "hidden";
                    document.getElementById('main-content').style.visibility = "visible";
                }, 1000);
            }
        }
    }

    return { run: open }
})();

export default Loader;