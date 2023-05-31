setInterval(() => $("#dateTime").text(new Date().toLocaleString()), 1000);


const resizer = document.querySelector("#resizer");
const sidebar = document.querySelector("#sidebar");

resizer.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", resize, false);
    document.addEventListener(
        "mouseup",
        () => {
            document.removeEventListener("mousemove", resize, false);
        },
        false
    );
});

function resize(e) {
    const size = `${e.x}px`;
    sidebar.style.flexBasis = size;
}

function showContent() {
    let element = document.querySelector(".sidebar-content");
    let sideBar = document.querySelector("#sidebar")
    if (element.style.display === "none") {
        element.setAttribute(
            "style",
            "display: flex; flex-direction: column; width: 210px;"
        );
    } else {
        element.setAttribute("style", "display: none;");
        sideBar.removeAttribute("style");

    }
}


$("#codex").codex({
    effect: "charbychar",
    reveal: 200, // the number of miliseconds
});

new TypeIt("#main-about-text", {
    speed: 10,
    waitUntilVisible: true,
}).go();

function ReadMoreAboutText() {
    let aboutTextReadMore = document.getElementById("about-text-read-more");
    let moreText = document.getElementById("about-text-more");

    if (aboutTextReadMore.style.display === "none") {
        aboutTextReadMore.style.display = "inline";
        aboutTextReadMore.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        aboutTextReadMore.style.display = "none";
        aboutTextReadMore.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function changIcon() {
    let element = document.querySelector(".arrow-expand-icon");
    let sidebarItems = document.querySelector(".sidebar-items");
    if (element.className == "arrow-expand-icon") {
        element.setAttribute(
            "src",
            "./assets/images/icons/findAndShowNextMatches.svg"
        );
        element.className += " open";
        sidebarItems.removeAttribute("style");
    } else {
        element.setAttribute("src", "./assets/images/icons/play_forward.svg");
        element.className = "arrow-expand-icon";
        sidebarItems.setAttribute("style", "display: none;");
    }
}

