// check local storage color option
let maincolor = localStorage.getItem("color-option")
if (maincolor !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"))
    //check active class on color list
    document.querySelectorAll(".colors-list li").forEach(Element => {
        Element.classList.remove("active")
        // add active class on iteam
        if (Element.dataset.color === maincolor) {
            Element.classList.add("active")
        }
    })
}
//  rendom back ground img
let rendombackground = true
// variable to control the background intervel
let theinterval;
//check if there is storage backgrond iteam
let backgrondlocalitem = localStorage.getItem("background_option")
//check if the storage embty
if (backgrondlocalitem !== null) {
    if (backgrondlocalitem === 'true') {
        rendombackground = true;
    }else {
        rendombackground = false;
    }
    // remove calss active 
    document.querySelectorAll(".random-background span").forEach(ele => {
        ele.classList.remove("active")
    });
    if (backgrondlocalitem === 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
    }else {
        document.querySelector(".random-background .no").classList.add("active");
    };
};

// spin icon setting
document.querySelector(".setting-box .fa-gear").onclick = function () {
    // make icon rotation
    this.classList.toggle("fa-spin")
    // change color 
    this.classList.toggle("active")
    // open setting list
    document.querySelector(".setting-box").classList.toggle("open")
}
// switch color
const colorslist = document.querySelectorAll(".colors-list li")
// loop on list item colors
colorslist.forEach(colorslist => {
    // click on every list items
    colorslist.addEventListener("click", (e) => {
        // set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // set color on local storage
        localStorage.setItem("color-option", e.target.dataset.color)
        // remove active class from color list
        e.target.parentElement.querySelectorAll(".active").forEach(Element => {
            Element.classList.remove("active")
        })
        // add active class to active color
        e.target.classList.add("active")
    });
});
// switch background
const randomBackGround = document.querySelectorAll(".random-background span")
// loop on list item colors
randomBackGround.forEach(span => {
    // click on every list items
    span.addEventListener("click", (e) => {
        // remove active class from color list
        e.target.parentElement.querySelectorAll(".active").forEach(Element => {
            Element.classList.remove("active")
        })
        // add active class to active color
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            rendombackground = true
            rendomize()
            localStorage.setItem("background_option", true)
        }else {
            rendombackground = false
            clearInterval(theinterval)
            localStorage.setItem("background_option", false)
        }
    });
})
// select landing page elements
let landingpage = document.querySelector(".landing-page");
//get array og imags
let imagsarray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// function to rendomize img
function rendomize() {
    if (rendombackground === true) {
        theinterval = setInterval(() => {
            //random number
            let rendomenumber = Math.floor(Math.random() * imagsarray.length);
            //change background imags
            landingpage.style.backgroundImage = 'url("../images/' + imagsarray[rendomenumber] +'")';
        }, 3000)
    }
}
rendomize()
const nav = document.querySelectorAll('.nav-bullets .bullet');
nav.forEach(bullet => {
    bullet.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})