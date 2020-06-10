window.onload = () => {
    document.getElementsByClassName("content")[0].style.opacity = "1";
}

function redirect(url) {
    if (window.scrollY == 0) {
        document.getElementsByClassName("content")[0].style.opacity = "0";
        setTimeout(() => {
            location = url;
        }, 500);
    } else {
        window.scrollTo({
            top: window.scrollY - 1
        });
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            setTimeout(() => {
                document.getElementsByClassName("content")[0].style.opacity = "0";
                setTimeout(() => {
                    location = url;
                }, 500);
            }, 500);
        }, 50);
    }
}

setTimeout(() => {
    document.getElementsByClassName("content")[0].style.opacity = "1";
}, 250);