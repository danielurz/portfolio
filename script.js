const textos = document.querySelectorAll('#Header .text p')
const tabs = document.querySelectorAll('#Header .tabs span')

textos.forEach(p => p.style.display = "none")
textos[0].style.display = "block"

for (let i = 0; i < 3; i++) {
    tabs[i].addEventListener('click',function() {
        textos.forEach(p => p.style.display = "none")
        textos[i].style.display = "block"
    })
}


