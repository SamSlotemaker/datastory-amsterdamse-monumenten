let car = document.querySelector('.car');
let main = document.querySelector('main')
let allAnimationItems = document.querySelectorAll('.animate')
let mainHeight = main.offsetHeight;
let windowHeight = window.innerHeight;
let mainInnerHeight = mainHeight - windowHeight;

let allSections = document.querySelectorAll('main > section')
console.log(main.offsetTop)

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY - main.offsetTop;
    let percentage = scroll / mainInnerHeight * 100;
    percentage = parseInt(percentage)
    let toLeft = percentage

    if (percentage > 60) {
        car.style.backgroundImage = "url('./style/images/car-old.png')"
        car.style.bottom = "25px"
    }
    else if (percentage > 32) {
        car.style.backgroundImage = "url('./style/images/car-older.png')"
        car.style.bottom = "15px"
    }
    else {
        car.style.backgroundImage = "url('./style/images/car-new.png')"
        car.style.bottom = "25px"
    }
    car.style.setProperty('--car-left', toLeft + "%")
});


// OBSERVER
const options = {
    rootMargin: "20px",
    threshold: 0.2
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `${entry.target.dataset.animation} .8s forwards ease-in-out`
        }
    })
}, options)
allAnimationItems.forEach(item => {
    observer.observe(item)
})