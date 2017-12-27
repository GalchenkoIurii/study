import mainJS from "./js/main";
import filmDetails from "./js/filmDetails";

function init() {
    if (window.location.hash === "") {
        window.location.hash = "#main";
    }

    if (window.location.hash === "#main") {
        mainJS();
    } else {
        filmDetails();
    }
}

init();