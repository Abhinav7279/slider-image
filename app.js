const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach( (slide,idx) =>
    {
        slide.style.left = `${idx * 100}%`

})

const goPrev = ()=>{
    counter--;
    slideImg();
}
const goNext = ()=>{
    counter++;
    slideImg();
}

const slideImg = ()=>{
    slides.forEach((slide) =>{
        slide.style.transform = `translateX(-${counter *100}%)`
    })
}
