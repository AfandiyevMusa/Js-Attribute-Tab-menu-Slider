"use strict";

let leftIcon = document.querySelector(".slider .left")
let rightIcon = document.querySelector(".slider .right")

function rightSlider() {
    let activeImage = document.querySelector(".active-img")
    activeImage.classList.remove("active-img")
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active-img")
    } else {
        activeImage.parentElement.firstElementChild.classList.add("active-img")
    }
}

function leftSlider() {
    let activeImage = document.querySelector(".active-img")
    activeImage.classList.remove("active-img")
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active-img")
    } else {
        activeImage.parentElement.lastElementChild.classList.add("active-img")
    }
}

rightIcon.addEventListener("click", rightSlider)
leftIcon.addEventListener("click", leftSlider)
// rightIcon.addEventListener("mouseover", rightSlider)
// leftIcon.addEventListener("mouseover", leftSlider)
// setInterval(rightSlider, 2300)

let allImages = document.querySelectorAll(".slider .imags .eachimage")
let allDots = document.querySelectorAll(".slider .dots i")
let allWords = document.querySelectorAll(".slider .words span")

allDots.forEach(eachDot => {
    eachDot.addEventListener("click", function(){
        allImages.forEach(eachImage => {
            if(eachDot.getAttribute("data-id") == eachImage.getAttribute("data-id")){
                eachImage.classList.add("active-img")
            }else{
                eachImage.classList.remove("active-img")
            }
        })
    })
})