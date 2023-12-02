const box = document.querySelectorAll('.box')

window.addEventListener('scroll',progress)

progress()

function progress(){
    const triggerBottom = window.innerHeight/ 5 * 4
    box.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom){
        box.classList.add('box-active')
    } else{
        box.classList.remove('box-active')
    }
    })
}
