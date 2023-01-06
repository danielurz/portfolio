const textos = document.querySelectorAll('#Header .text p')
const tabs = document.querySelectorAll('#Header .tabs span')

textos.forEach(p => p.style.display = "none")
textos[0].style.display = "block"
tabs[0].classList.add('activo')

for (let i = 0; i < 3; i++) {
    tabs[i].addEventListener('click',function() {
        textos.forEach(p => p.style.display = "none")
        textos[i].style.display = "block"
        
        tabs.forEach(tab => tab.classList.remove('activo'))
        tabs[i].classList.add('activo')

    })
}


const typingEffect = new Typed('#textType',{
    strings : ["my Space","my WebPage","my Portfolio","my Journey"],
    loop : true,
    typeSpeed: 100,
    backSpeed: 80,
    startDelay: 500,
    backDelay: 1500,
    showCursor: true
})

