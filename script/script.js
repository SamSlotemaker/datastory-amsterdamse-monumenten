let car = document.querySelector('.car');
let section = document.querySelector('main')

let sectionHeight = section.offsetHeight;
let windowHeight = window.innerHeight;
let sectionInnerHeight = sectionHeight - windowHeight;



window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    let percentage = scroll / sectionInnerHeight * 100;
    percentage = parseInt(percentage)
    let toLeft = 100 - percentage
    console.log(percentage)
    car.style.setProperty('--car-left', toLeft + "%")

});


console.log(windowHeight)
console.log(sectionHeight)
