window.onload = function() {
    var oCar = document.getElementById("car");
    timer = null;
    timer = setInterval(function() {
        oCar.style.left = oCar.offsetLeft - 5 + "px";
        if (oCar.offsetLeft < -1000) {
            oCar.style.left = "0px";
        } else if (oCar.offsetLeft >= 0) {
            oCar.style.left = oCar.offsetLeft - 5 + "px";
        }
    }, 50);
    oCar.onmouseover = function() {
        clearInterval(timer);
    }
    oCar.onmouseout = function() {
        timer = setInterval(function() {
            oCar.style.left = oCar.offsetLeft - 5 + "px";
            if (oCar.offsetLeft < -1000) {
                oCar.style.left = "0px";
            } else if (oCar.offsetLeft >= 0) {
                oCar.style.left = oCar.offsetLeft - 5 + "px";
            }
        }, 50);
    }
}
