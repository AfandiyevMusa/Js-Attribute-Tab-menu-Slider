"use strict";

let rightBtn = document.querySelector(".up .icons .right")
let leftBtn = document.querySelector(".up .icons .left")
let allItems = document.querySelectorAll(".down .items")


allItems.forEach(eachItem => {
    let newDimension = eachItem.getBoundingClientRect();
    rightBtn.addEventListener("click", function () {
        eachItem.scrollLeft += newDimension.width / 4
    })

    leftBtn.addEventListener("click", function () {
        eachItem.scrollLeft -= newDimension.width / 4
    })
})