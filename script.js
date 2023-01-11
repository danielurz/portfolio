const typingEffect = new Typed('#textType',{
    strings : ["my Space","my WebPage","my Portfolio","my Journey"],
    loop : true,
    typeSpeed: 100,
    backSpeed: 80,
    startDelay: 500,
    backDelay: 1500,
    showCursor: true
})



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



import { bodyMessage, bodyContent } from "./db.js"


const logos = document.querySelectorAll('#Header .techs .logo')

let array = [];

function hoverLogo(logo) {
    if(array.length === 0) {
        const element = document.createElement('div')
        const imagen = logo.querySelector('img')

        element.classList.add('hover-logo')
        
        element.innerHTML = `
        <div class="img-div">
            <img src="${imagen.src}"/>
        </div>
        <div class="body">
            ${bodyMessage(logo)}
        </div>
        `

        array.push(element)    
        
        let timeout = setTimeout(() => {
            logo.appendChild(element)
            setTimeout(() => {
                element.style.opacity = "1"  
                element.style.width = "400px"  
                element.style.height = "500px"  
            }, 500);
        }, 500);
        
        logo.addEventListener('mouseleave',function(){
            element.remove()
            array.shift()
            clearTimeout(timeout)
        })
    }
}



logos.forEach(logo => {
    logo.addEventListener('mouseenter',() => hoverLogo(logo))
})















const projects = document.querySelectorAll('#Projects .box')

let arrayP = []

function hoverProject(project) {
    if(arrayP.length === 0) {
        const element = document.createElement('div')
        const title = project.querySelector('.title')
        const {texto,git,link} = bodyContent(project)
        
        element.classList.add('hover-project')
        
        element.innerHTML = `
        <div class="cabezera">
            <p class="titleee">${title.textContent}</p>
        </div>
        <div class="tabss">
            <span>Description</span>
            <span>Instructions</span>
        </div>
        <div class="content">
            ${texto}
        </div>
        <div class="links">
            <a href="${link}" target="_blank" class="link">
                <span><i class="fa-solid fa-link"></i></span>
            </a>
            <a href="${git}" target="_blank" class="git">
                <span><i class="fa-brands fa-github"></i></span>
            </a>
        </div>
        `
            
            
        const tabs = element.querySelectorAll('.tabss span')
        const content = element.querySelectorAll('.content div')
        tabs[0].classList.add('activo')
        
        for (let i = 0; i < 2; i++) {
            tabs[i].addEventListener('click',function(){

                if(i === 0 && !this.classList.contains('activo')) {
                    content.forEach(box => box.style.transform = "translateX(0)")
                } 
                else if (i === 1 && !this.classList.contains('activo')) {
                    content.forEach(box => box.style.transform = "translateX(-100%)")
                }

                tabs.forEach(tab => tab.classList.remove('activo'))
                this.classList.add('activo')
            })
        }        
        
        arrayP.push(element)    
        
        let timeout = setTimeout(() => {
            project.appendChild(element)
            setTimeout(() => {
                element.style.opacity = "1"  
                element.style.width = "400px"  
                element.style.height = "450px"  
            }, 500);
        }, 500);
        
        project.addEventListener('mouseleave',function(){
            element.remove()
            arrayP.shift()
            clearTimeout(timeout)
        })
    }
}

projects.forEach(project => {
    project.addEventListener('mouseenter',() => hoverProject(project))
})



