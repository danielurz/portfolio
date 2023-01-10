function bodyMessage(logo) {
    if(logo.classList.contains("html")) {
        return ( `
                <p class="titlee">HTML</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Creation of elements</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>

            `
        )
    }
    if(logo.classList.contains("css")) {
        return ( `
                <p class="titlee">CSS</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays and Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("js")) {
        return ( `
                <p class="titlee">JavaScript</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays and Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("react")) {
        return ( `
                <p class="titlee">React JS</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("sass")) {
        return ( `
                <p class="titlee">SASS</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("git")) {
        return ( `
                <p class="titlee">GIT</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("tailwind")) {
        return ( `
                <p class="titlee">Tailwind</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("bootstrap")) {
        return ( `
                <p class="titlee">Bootstrap</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("figma")) {
        return ( `
                <p class="titlee">Figma</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Promises</li>
                    <li>Async/Await</li>
                    <li>Manipulation of Arrays</li>
                    <li>Manipulation of Objects</li>
                    <li>Functions</li>
                    <li>Methods/Properties</li>
                    <li>Events</li>
                </ul>
            `
        )
    }
}












function bodyContent(project) {
    if(project.classList.contains('expenses')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('cripto')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('vet')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('recipes')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('imgapi')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('loans')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('weather')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('insurance')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
    if(project.classList.contains('portfolio')) {
        return (`
            <div class="desc">
                <p>This is the description of the project This is the description
                of the project This is the description of the project This is the 
                description of the project This is the description of the project 
                This is the description of the project</p>
            </div>
            <div class="inst">
                <p>This are the instructions of the project This are the
                instructions of the project  This are the instructions of the 
                project This are the instructions of the project This are the 
                instructions of the project</p>
            </div>
        `
        )
    }
}

export {
    bodyMessage,
    bodyContent
}


