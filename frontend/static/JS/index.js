import home from "./views/home.js";
import Profil from "./views/Profil.js";
import about from "./views/about.js";
import major from "./views/major.js";
import contact from "./views/contact.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async() => {
    const routes = [
        { path: "/", view: home },
        { path: "/profil", view: Profil },
        { path: "/about", view: about },
        { path: "/major", view: major },
        { path: "/contact", view: contact }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);




document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            navigateTo(link.href);
        });
    });
    router();
});