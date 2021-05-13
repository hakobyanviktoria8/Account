function openCity(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("tabtitle").innerText = tabName
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// Get the element with id="search_btn" and click on it and changes width
let search_btn = document.getElementById("search_btn");
let bool = false;
search_btn.addEventListener("click", function () {
    bool = !bool;

    search_btn.style.paddingLeft = bool ? "10rem" : "";
});





