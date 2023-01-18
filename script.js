// Funcion para los tabs en la cabezera del proyecto


const textos = document.querySelectorAll('#Header .texts .text')
const tabs = document.querySelectorAll('#Header .tabs span')

textos.forEach(p => p.style.display = "none")

textos[0].style.display = "block"
tabs[0].classList.add('activo')

for (let i = 0; i < 2; i++) {
    tabs[i].addEventListener('click',function() {
        textos.forEach(p => p.style.display = "none")
        textos[i].style.display = "block"
        
        tabs.forEach(tab => tab.classList.remove('activo'))
        tabs[i].classList.add('activo')

    })    
}    


// Funcion para el evento hover para los logos en tamaño XL


import { bodyMessage, bodyContent } from "./db.js"

const logos = document.querySelectorAll('#Header .techs .logo')
const body = document.querySelector('body')
const main = document.querySelector('main')


let array = [];

function hoverLogoXL(e) {
    if(array.length === 0) {
        const element = document.createElement('div')
        const imagen = e.target.querySelector('img')
        
        element.classList.add('hover-logo')
        
        element.innerHTML = `
        <div class="hover-box">
            <div class="img-div">
                <img src="${imagen.src}"/>
            </div>
            <div class="body">
                ${bodyMessage(e.target)}
            </div>
        </div>
        `

        array.push(element)
        const imgElement = element.querySelector('img')    
        const bodyElement = element.querySelector('.body')    
        
        let timeout = setTimeout(() => {
            body.insertBefore(element,main)
            setTimeout(() => {
                element.style.opacity = "1"  
                imgElement.style.transform = "translateX(0)"  
                bodyElement.style.transform = "translateX(0)"  
            }, 500);
        }, 500);
        
        e.target.addEventListener('mouseleave',function(){
            element.remove()
            array.shift()
            clearTimeout(timeout)
        })
    }
}



// Funcion para el evento click para los logos en tamaño S


function clickLogoS(logo) {
    if(array.length === 0) {
        const element = document.createElement('div')
        const imagen = logo.querySelector('img')
        
        element.classList.add('hover-logo-s')
        
        element.innerHTML = `
        <div class="box-logo">
            <span class="cerrar"><i class="fa-solid fa-xmark"></i></span>
            <div class="img-div">
                <img src="${imagen.src}"/>
            </div>
            <div class="body">
                ${bodyMessage(logo)}
            </div>
        </div>
        `
        array.push(element)
        const cerrar = element.querySelector('.cerrar')
        const box = element.querySelector('.box-logo')
        
        body.insertBefore(element,main)
        body.style.overflow = "hidden"

        setTimeout(() => {
            element.style.opacity = "1"  
            box.style.opacity = "1"  
            box.style.width = "450px"  
            box.style.height = "550px"  
        }, 0);

        cerrar.addEventListener('click',function(){
            element.remove()
            array.shift()
            body.style.overflow = "scroll"
        })

        window.addEventListener('resize',function(){
            element.remove()
            array.shift()
            body.style.overflow = "scroll"
        })
    }
}




// Ejecucion de las funciones de los eventos para los logos en ambos tamaños y resize



const mq1024 = window.matchMedia('(max-width:1024px)')


function logoEvent() {
    if(!mq1024.matches) {
        logos.forEach(logo => {
            logo.addEventListener('mouseenter',hoverLogoXL)
        })
    } else {
        logos.forEach(logo => {
            logo.addEventListener('click',() =>clickLogoS(logo))
        })
    }
}

logoEvent()

 
let previousWidth = window.innerWidth;
window.addEventListener("resize", function() {
  if (window.innerWidth > 1024 && previousWidth <= 1024) {
    logos.forEach(logo => {
        logo.addEventListener('mouseenter',hoverLogoXL)
    })
} else if(window.innerWidth <= 1024 && previousWidth > 1024) {
    logos.forEach(logo => {
        logo.removeEventListener('mouseenter',hoverLogoXL)
        logo.addEventListener('click',() =>clickLogoS(logo))
    })
  }
  previousWidth = window.innerWidth;
}); 






// Funcion el efecto hover para los proyectos en tamaño XL


const projects = document.querySelectorAll('#Projects .box')

let arrayP = []

function hoverProjectL(e) {
    if(arrayP.length === 0) {
        const element = document.createElement('div')
        const descript = e.target.querySelector('.text')
        const title = e.target.querySelector('.title')
        const {instrcs,git,link} = bodyContent(e.target)
        
        element.classList.add('hover-project')
        
        element.innerHTML = `
        <div class="cabezera">
            <p class="titleee">${title.textContent}</p>
        </div>
        <div class="tabss">
            <span>Description</span>
            <span>How to use</span>
        </div>
        <div class="content">
            <div class="desc">
                <p>${descript.innerHTML}</p>
            </div>
            <div class="inst">
                ${instrcs}
            </div>
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
            e.target.appendChild(element)
            setTimeout(() => {
                element.style.opacity = "1"  
                element.style.width = "400px"  
                element.style.height = "550px"  
            }, 500);
        }, 500);
        
        e.target.addEventListener('mouseleave',function(){
            element.remove()
            arrayP.shift()
            clearTimeout(timeout)
        })
    }
}





// Funcion el efecto click para los proyectos en tamaño S



function clickProjectS(project) {
    if(arrayP.length === 0) {
        const element = document.createElement('div')
        const descript = project.querySelector('.text')
        const title = project.querySelector('.title')
        const {instrcs,git,link} = bodyContent(project)
        
        element.classList.add('click-project')
        
        element.innerHTML = `
        <div class="project-box">
            <span class="cerrar"><i class="fa-solid fa-xmark"></i></span>
            <div class="cabezera">
                <p class="titleee">${title.textContent}</p>
            </div>
            <div class="tabss">
                <span>Description</span>
                <span>How to use</span>
            </div>
            <div class="content">
                <div class="desc">
                    <p>${descript.innerHTML}</p>
                </div>
                <div class="inst">
                    ${instrcs}
                </div>
            </div>
            <div class="links">
                <a href="${link}" target="_blank" class="link">
                    <span><i class="fa-solid fa-link"></i></span>
                </a>
                <a href="${git}" target="_blank" class="git">
                    <span><i class="fa-brands fa-github"></i></span>
                </a>
            </div>
        </div>
        `
            
        const tabs = element.querySelectorAll('.tabss span')
        const content = element.querySelectorAll('.content div')
        const box = element.querySelector('.project-box')

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
        body.insertBefore(element,main)

        const cerrar = element.querySelector('.cerrar')
        
        element.style.opacity = "1"  
        body.style.overflow = "hidden"


        setTimeout(() => {
            box.style.width = "400px"  
            box.style.height = "600px"  
            box.style.opacity = "1"  
        }, 100);

        cerrar.addEventListener('click',function(){
            element.remove()
            arrayP.shift()
            body.style.overflow = "scroll"
        })
        
        window.addEventListener('resize',function(){
            element.remove()
            arrayP.shift()
            body.style.overflow = "scroll"
        })
    }
}



// Ejecucion para las funciones de los eventos para los proyectos en ambos tamaños y resize


const mq768 = window.matchMedia('(max-width:768px)')


function projectEvent() {
    if(!mq768.matches) {
        projects.forEach(project => {
            project.addEventListener('mouseenter',hoverProjectL)
        })
    } else {
        projects.forEach(project => {
            project.removeEventListener('mouseenter',hoverProjectL)
            project.addEventListener('click',() => clickProjectS(project))
        })
    }
}

projectEvent()

 
let previousWidthP = window.innerWidth;
window.addEventListener("resize", function() {
  if (window.innerWidth > 768 && previousWidthP <= 768) {
    projects.forEach(project => {
        project.addEventListener('mouseenter',hoverProjectL)
    })
} else if(window.innerWidth <= 768 && previousWidthP > 768) {
    projects.forEach(project => {
        project.removeEventListener('mouseenter',hoverProjectL)
        project.addEventListener('click',() => clickProjectS(project))
    })
  }
  previousWidthP = window.innerWidth;
}); 