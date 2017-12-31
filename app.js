import mainJS from "./js/main";
import filmDetails from "./js/filmDetails";
import inTheaters from "./js/inTheaters";

export function init() {
    if (window.location.hash === "") {
        window.location.hash = "#main";
    }

    if (window.location.hash === "#main") {
        mainJS();
    } else if (window.location.hash === "#inTheaters") {
        inTheaters();
    } else {
        filmDetails();
    }
}

init();