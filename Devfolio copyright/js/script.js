/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

// light and dark mode
const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    // sessionStorage.setItem("theme", $HTML.dataset.theme)
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme)
}
$themeBtn.addEventListener("click", changeTheme);
// let themeBtn = document.querySelector("#theme-btn")
// let html = document.documentElement;

// tabs
// const tabBtn = document.querySelector("[data-tab-btn]");
// let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
// let [lastActiveTabBtn] = tabBtn;

// tabBtn.forEach(item => {
//     item.addEventListener("click", () => {
//         activeTab.classList.remove("active")
//         tabBtn.classList.add("active");
//     });
// });
let tabBtn = document.querySelectorAll("[data-tab-btn]")
let tabBtnAray = Array.from(tabBtn);
let contentTab = document.querySelectorAll("[data-tab-content]");
let contentTabArray = Array.from(contentTab);

tabBtn.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabBtn.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        contentTabArray.forEach((ele) => {
            ele.style.display = "none";
        })
        // document.querySelector(`[data-tab-content="${ele.dataset.tabBtnAray}"]`).style.display = 'block';
        // activeContent.style.display = 'block';
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block';
    })
});
