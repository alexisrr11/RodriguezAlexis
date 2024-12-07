let hideText_btn = document.getElementById("hideText_btn");

let hideText = document.getElementById("hideText");

hideText_btn.addEventListener("click", ToggleText);

function ToggleText() {
    hideText.classList.toggle("show");
}

hideText.addEventListener("click", () => {
    hideText.classList.remove("show");
})

let hideText_btn1 = document.getElementById("hideText_btn1");

let hideText1 = document.getElementById("hideText1");

hideText_btn1.addEventListener("click", ToggleTxt);

function ToggleTxt() {
    hideText1.classList.toggle("show1");
}

hideText1.addEventListener("click", () => {
    hideText1.classList.remove("show1");
})