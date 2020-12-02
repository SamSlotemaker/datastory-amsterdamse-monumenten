let car = document.querySelector('.car');
let section = document.querySelector('main')
let allAnimationItems = document.querySelectorAll('.animate')
let sectionHeight = section.offsetHeight;
let windowHeight = window.innerHeight;
let sectionInnerHeight = sectionHeight - windowHeight;

let allSections = document.querySelectorAll('main > section')

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    let percentage = scroll / sectionInnerHeight * 100;
    percentage = parseInt(percentage)
    let toLeft = 100 - percentage
    car.style.setProperty('--car-left', toLeft + "%")

});

// OBSERVER
const options = {
    threshold: 1
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `${entry.target.dataset.animation} .8s forwards ease-in-out`
        }
        else {
            entry.target.style.animation = 'none'
        }
    })
}, options)
allAnimationItems.forEach(item => {
    observer.observe(item)
})