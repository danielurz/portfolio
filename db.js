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
        const texto = `
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
        
        const link = "https://danielurz.github.io/expenses-check/"
        const git = "https://github.com/danielurz/expenses-check"

        return {texto,git,link}
        
    }
    if(project.classList.contains('cripto')) {
        const texto = `
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

        const link = "https://danielurz.github.io/criptos/"
        const git = "https://github.com/danielurz/criptos"

        return {texto,git,link}
    }
    if(project.classList.contains('vet')) {
        const texto = `
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

        const link = "https://danielurz.github.io/vet-patients/"
        const git = "https://github.com/danielurz/vet-patients"

        return {texto,git,link}
    }
    if(project.classList.contains('recipes')) {
        const texto = `
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

        const link = "https://danielurz.github.io/food-recipes/"
        const git = "https://github.com/danielurz/food-recipes"

        return {texto,git,link}
    }
    if(project.classList.contains('imgapi')) {
        const texto = `
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

        const link = "https://danielurz.github.io/pixabay-images/"
        const git = "https://github.com/danielurz/pixabay-images"

        return {texto,git,link}
    }
    if(project.classList.contains('loans')) {
        const texto = `
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

        const link = "https://danielurz.github.io/loan-fees/"
        const git = "https://github.com/danielurz/loan-fees"

        return {texto,git,link}
    }
    if(project.classList.contains('weather')) {
        const texto = `
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

        const link = "https://danielurz.github.io/weatherapp/"
        const git = "https://github.com/danielurz/weatherapp"

        return {texto,git,link}
    }
    if(project.classList.contains('insurance')) {
        const texto = `
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

        const link = "https://danielurz.github.io/car-insurance-rates/"
        const git = "https://github.com/danielurz/car-insurance-rates"

        return {texto,git,link}
    }
    if(project.classList.contains('portfolio')) {
        const texto = `
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

        const link = "#"
        const git = "https://github.com/danielurz/expenses-check"

        return {texto,git,link}
    }
}

export {
    bodyMessage,
    bodyContent
}


