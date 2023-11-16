import { logos } from "./scripts/logos.js";
import { FEprojects } from "./scripts/projects.js"
import { introduction } from "./scripts/introduction.js";

// Add the debounce function at the top of your script
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ... rest of your code ...

// ------------ Cargar introducciones -------------

(function(){
    const tabDiv = document.querySelector("#Header .tabs")
    const textDiv = document.querySelector("#Header .texts")
    const CVsrc = "/archives/cv.pdf"

    introduction.forEach(({title,text}) => {
        const span = document.createElement("span")
        const div = document.createElement("div")

        div.classList.add("text")
        span.classList.add("span")

        span.textContent = title
        div.innerHTML = `
            <p>${text}</p>
            <div id="CV">
                <a href="${CVsrc}" target="_blank">Download my CV</a>
            </div>
        `

        tabDiv.append(span)
        textDiv.append(div)
    })
}());


// -------- introduccion click event ---------

const text = Array.from(document.querySelectorAll('#Header .texts .text'))
const tab = Array.from(document.querySelectorAll('#Header .tabs .span'))

text[0].style.display = "block"
tab[0].classList.add('activo')


introduction.forEach((_,index) => {
    tab[index].addEventListener("click", () => {
        introduction.forEach((_,index) => {
            text[index].style.display = "none"
            tab[index].classList.remove("activo")
        })

        text[index].style.display = "block"
        tab[index].classList.add("activo")
    })
});





// --------- Cargar proyectos ----------

(function(){
    const projectDiv = document.querySelector("#Projects .frontend .contenedor")

    FEprojects.forEach(obj => {
        const {boxClass,thumb,title,text} = obj

        const project = document.createElement("div")

        project.classList.add("box")
        project.classList.add(`${boxClass}`)

        project.innerHTML = `
        <div class="header">
            <img src="${thumb}" alt="${title}">
        </div>
        <div class="body">
            <p class="title">${title}</p>
            <p class="text">${text}</p>
        </div>
        `

        projectDiv.append(project)
    })

}());



// crear los contenedores de los logos, uno en reversa y otro normal y clonar ambos para que se vea continuo 



const body = document.querySelector('body')
const main = document.querySelector('main')
let logoDiv = document.querySelector("#Logos");

for (let i = 0; i < 2; i++) {
    const logoCont = document.createElement("div")
    const logoBox = document.createElement("div")
    
    logoCont.classList.add("logo-cont")
    logoBox.classList.add("logo-box")

    let logoArr

    if (i === 1) logoArr = [...logos].reverse()
    else logoArr = [...logos]

    logoArr.forEach(({clase,src}) => {
        const logo = document.createElement("div")
        logo.classList.add("logo")

        logo.innerHTML = `
            <p>${clase}</p>
            <img class="logo-img ${clase}" src="${src}" alt="logo ${clase}" />
        `

        logoBox.append(logo)
    })

    logoCont.append(logoBox)

    const clonedNode = logoBox.cloneNode(true)
    logoCont.append(clonedNode)

    logoDiv.append(logoCont)
}


const logoCont = document.querySelectorAll("#Logos .logo-cont")
const logoBox = document.querySelectorAll("#Logos .logo-cont .logo-box")
const logo = document.querySelectorAll("#Logos .logo-cont .logo-box .logo")

let logoBoxWidth = logoBox[0].offsetWidth
let logoWidth = logo[0].offsetWidth

Array.from(logoCont[1].children).forEach(box => {
    box.style.transform = `translateX(-${(logoBoxWidth + logoWidth)}px)`
})

let position = 0
let interval

const startInterval = () => {
    logoBoxWidth = logoBox[0].offsetWidth
    logoWidth = logo[0].offsetWidth

    interval = setInterval(() => {
        position += 1
    
        logoCont.forEach((cont,index) => {
            if (index === 0) {
                Array.from(cont.children).forEach(box => {
                    box.style.transform = `translateX(-${position}px)`
                })
            } else {
                Array.from(cont.children).forEach(box => {
                    box.style.transform = `translateX(${-(logoBoxWidth + logoWidth) + position}px)`
                })
            }
    
            if (position > logoBoxWidth) {
                position = 0
                cont.append(cont.children[index])
            }
        })
    }, 50);
}



// --------- Funcion para el evento hover de los logos en tamaño XL ----------



const hoverLogoXL = e => {
    clearInterval(interval)

    const [logoClass, logo] = e.target.className.split(" ");

    if (logoClass && logoClass !== "logo-img") return

    const {clase,src,list} = logos.find(({clase}) => clase === logo);

    const element = document.createElement('div')
    
    element.classList.add('hover-logo')
    
    element.innerHTML = `
    <div class="hover-box">
        <div class="img-div">
            <img src="${src}"/>
        </div>
        <div class="body">
            <p class="titlee">${clase.toUpperCase()}</p>
            <p class="prem">I have clear knowledge in these areas:</p>
            <ul>${list}</ul>
        </div>
    </div>
    `

    const imgElement = element.querySelector('img')    
    const bodyElement = element.querySelector('.body')    

    const timeout = setTimeout(() => {
        body.insertBefore(element,main)
        setTimeout(() => {
            element.style.opacity = "1"  
            imgElement.style.transform = "translateX(0)"  
            bodyElement.style.transform = "translateX(0)"  
        }, 300);
    }, 200);

    e.target.addEventListener("mouseleave", () => {
        element.remove()
        clearTimeout(timeout)
    })

    logoDiv.addEventListener("mouseleave", () => {
        clearInterval(interval)
        if (window.innerWidth > 1024) {
            startInterval()
        }
    })
}



// Funcion para el evento click para los logos en tamaño S


const clickLogoS = index => {
    const {clase,list,src} = logos[index]
    const element = document.createElement('div')
    
    element.classList.add('hover-logo-s')
    
    element.innerHTML = `
    <div class="box-logo">
        <span class="cerrar"><i class="fa-solid fa-xmark"></i></span>
        <div class="img-div">
            <img src="${src}"/>
        </div>
        <div class="body">
            <p class="titlee">${clase.toUpperCase()}</p>
            <p class="prem">I have clear knowledge in these areas:</p>
            <ul>${list}</ul>
        </div>
    </div>
    `
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

    cerrar.addEventListener('click', () => {
        element.remove()
        body.style.overflow = "scroll"
    })

    window.addEventListener('resize', () => {
        element.remove()
        body.style.overflow = "scroll"
    })
}








// Manejador de eventos



// Ejecucion de las funciones de los eventos para los logos en ambos tamaños y resize



const projects = Array.from(document.querySelectorAll("#Projects .frontend .box"))


const hoverProjectL = index => {
    const {title,text,instructions,link,git} = FEprojects[index]

    const element = document.createElement('div')

    element.classList.add('hover-project')
    
    element.innerHTML = `
    <div class="cabezera">
        <p class="titleee">${title}</p>
    </div>
    <div class="tabss">
        <span>Description</span>
        <span>How to use</span>
    </div>
    <div class="content">
        <div class="desc">
            <p>${text}</p>
        </div>
        <div class="inst">
            ${instructions}
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
    
    let timeout = setTimeout(() => {
        projects[index].append(element)
        setTimeout(() => {
            element.style.opacity = "1"  
            element.style.width = "400px"  
            element.style.height = "550px"  
        }, 500);
    }, 300);
    
    projects[index].addEventListener('mouseleave',() => {
        element.remove()
        clearTimeout(timeout)
    })
}



// Funcion el efecto click para los proyectos en tamaño S



const clickProjectS = index => {
    const {title,text,instructions,link,git} = FEprojects[index]
    
    const element = document.createElement("div")

    element.classList.add('click-project')
    
    element.innerHTML = `
    <div class="project-box">
        <span class="cerrar"><i class="fa-solid fa-xmark"></i></span>
        <div class="cabezera">
            <p class="titleee">${title}</p>
        </div>
        <div class="tabss">
            <span>Description</span>
            <span>How to use</span>
        </div>
        <div class="content">
            <div class="desc">
                <p>${text}</p>
            </div>
            <div class="inst">
                ${instructions}
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
    
    body.insertBefore(element,main)

    const cerrar = element.querySelector('.cerrar')
    
    body.style.overflow = "hidden"

    setTimeout(() => {
        box.style.width = "400px"  
        box.style.height = "600px"  
        box.style.opacity = "1"  
    }, 100);

    cerrar.addEventListener('click',function(){
        element.remove()
        body.style.overflow = "scroll"
    })
    
    window.addEventListener('resize',function(){
        element.remove()
        body.style.overflow = "scroll"
    })
}



// Manejador de eventos




document.addEventListener("DOMContentLoaded", () => {
    const handlerProjectXL = projects.map((_,index) => () => hoverProjectL(index))
    const handlerProjectS = projects.map((_,index) => () => clickProjectS(index))
    
    const handlerLogoXL = e => hoverLogoXL(e)
    const handlerLogoS = logos.map((_,index) => () => clickLogoS(index))

    const caveat = document.querySelector("#Header .caveat")

    const checkWindowSize = () => {
        const Logos = Array.from(document.querySelectorAll("#Logos .logo-cont .logo-box")[0].children)

        Logos.forEach((el,index) => {
            el.removeEventListener("click", handlerLogoS[index])
        })
        logoDiv.removeEventListener("mouseover", handlerLogoXL)
        clearInterval(interval)

        if (window.innerWidth > 1024) {
            startInterval()
            logoDiv.addEventListener("mouseover", handlerLogoXL)
            caveat.textContent = "Hover me!!!"
        } else {
            Logos.forEach((el,index) => {
                el.addEventListener("click", handlerLogoS[index])
            })
            caveat.textContent = "Click on me!!!"
        }

        projects.forEach((project,index) => {
            project.removeEventListener("mouseenter", handlerProjectXL[index])
            project.removeEventListener("click", handlerProjectS[index])
            
            if (window.innerWidth > 1024) {
                project.addEventListener("mouseenter", handlerProjectXL[index])
            } else {
                project.addEventListener("click", handlerProjectS[index])
            }
        })
    }

    checkWindowSize()

    window.addEventListener("resize", debounce(checkWindowSize, 100));
})

