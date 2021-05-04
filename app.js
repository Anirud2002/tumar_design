// selectors

const lpText = document.querySelector(".text-ani")
const lpText2 = document.querySelector(".text-ani-1")
const lpText3 = document.querySelector(".text-ani-2")
const moveH1 = document.querySelector(".move-h1")
const imageDescriptions = document.querySelectorAll(".img-description")
const projectImages = document.querySelectorAll(".pic-container")
const burger = document.querySelector(".burger")
const logo = document.querySelector(".logo")
const nav = document.querySelector("nav")
const listItem = document.querySelectorAll(".list li")
const changeImage = document.querySelector('.changing-img')
console.log(listItem)

let tween = gsap.timeline()
tween.to(lpText, {duration: 1, opacity:1, y:0})
.to(lpText2, {duration: 1, opacity:1, y:0})
.to(lpText3, {duration: 1, opacity:1, y:0}, "-=0.75")

let headingTween = gsap.timeline()
headingTween.to(moveH1, {duration: 1, x: "-500"})


const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: '.projects',
    duration: 2000,
    triggerHook: 0.5
}).setTween(headingTween).addTo(controller)


imageDescriptions.forEach(imageDescription => {

    let imageDesTween = TweenLite.from(imageDescription, {opacity:0, x: "100",  ease: Power1.easeIn})
                                


    const imgDesScene = new ScrollMagic.Scene({
        triggerElement: imageDescription,
        triggerHook: 1,
        reverse: false
    }).setTween(imageDesTween).addTo(controller)

})

projectImages.forEach(projectImage => {
    let projectImageTween = TweenLite.to(projectImage, {y:"-80", duration: 1})

    const projectImageScene = new ScrollMagic.Scene({
        triggerElement: projectImage,
        triggerHook:0.5
    }).setTween(projectImageTween).addTo(controller)
})

let waypoint = new Waypoint({
    element: document.getElementById('projects'),
    handler: function(){
        burger.classList.toggle("change-color")
        logo.classList.toggle("change-color")
    }
})

burger.addEventListener("click", ()=> {
    nav.classList.toggle("show")
    listItem.forEach(item => {
        console.log(item)
        item.classList.toggle("up")
    })
})

listItem.forEach(item => {
    item.addEventListener("mouseover", () => {
        console.log(item)
        if (item.classList.contains("home")){
            item.style.color = "white"
            changeImage.src = "./img/lilman.jpg"
            changeImage.style.animation = "showup"
            item.addEventListener('mouseleave', ()=> {
                item.style.color = "transparent"
            })
        }else if (item.classList.contains("about")){
            item.style.color = "white"
            changeImage.src = "./img/sneakers.jpg"
            item.addEventListener('mouseleave', ()=> {
                item.style.color = "transparent"
            })
        }else if (item.classList.contains("services")){
            item.style.color = "white"
            changeImage.src = "./img/bro.jpg"
            item.addEventListener('mouseleave', ()=> {
                item.style.color = "transparent"
            })
        }else if (item.classList.contains("contact")){
            item.style.color = "white"
            changeImage.src = "./img/photo2.jpg"
            item.addEventListener('mouseleave', ()=> {
                item.style.color = "transparent"
            })
        }
    })
})
       

        

