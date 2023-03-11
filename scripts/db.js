function bodyMessage(logo) {
    if(logo.classList.contains("html")) {
        return ( `
                <p class="titlee">HTML</p>
                <p class="prem">I have clear knowledge in the creation and structure of :</p>
                <ul>
                    <li>Head tags and metadata</li>
                    <li>Body elements</li>
                    <li>Attributes and values</li>
                    <li>Tables and it's tags</li>
                    <li>Forms, inputs and related</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("css")) {
        return ( `
                <p class="titlee">CSS</p>
                <p class="prem">I have clear knowledge in the creation of :</p>
                <ul>
                    <li>Pseudo-classes</li>
                    <li>Box models</li>
                    <li>Displays and Positions</li>
                    <li>Gradients and shadows</li>
                    <li>Flexbox and Grid</li>
                    <li>2D and 3D animations</li>
                    <li>Media Queries</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("js")) {
        return ( `
                <p class="titlee">JavaScript</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Modern Syntax</li>
                    <li>Promises/Fetch / Async/Await</li>
                    <li>Manipulation of Arrays and Objects</li>
                    <li>Functions / Methods / Properties</li>
                    <li>Prototypes, Delegation and Classes</li>
                    <li>RESTS APIs, Events and more...</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("react")) {
        return ( `
                <p class="titlee">React JS</p>
                <p class="prem">I have clear knowledge in these areas:</p>
                <ul>
                    <li>React with vite</li>
                    <li>Hooks and props</li>
                    <li>useState,useEffect, useContext and others</li>
                    <li>React Router DOM</li>
                    <li>Actions and loaders</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("sass")) {
        return ( `
                <p class="titlee">SASS</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>Nesting</li>
                    <li>Variables</li>
                    <li>Mixings</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("git")) {
        return ( `
                <p class="titlee">GIT</p>
                <p class="prem">I have clear knowledge in:</p>
                <ul>
                    <li>Inits</li>
                    <li>Commits</li>
                    <li>Branches</li>
                    <li>Pushes</li>
                    <li>Checkouts</li>
                    <li>Repository cloning</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("tailwind")) {
        return ( `
                <p class="titlee">Tailwind</p>
                <p class="prem">I have clear knowledge in:</p>
                <ul>
                    <li>All them classes</li>   
                </ul>
            `
        )
    }
    if(logo.classList.contains("bootstrap")) {
        return ( `
                <p class="titlee">Bootstrap</p>
                <p class="prem">I have clear knowledge in:</p>
                <ul>
                    <li>Layouts</li>
                    <li>Forms</li>
                    <li>Components</li>
                </ul>
            `
        )
    }
    if(logo.classList.contains("figma")) {
        return ( `
                <p class="titlee">Figma</p>
                <p class="prem">I have clear knowledge in these areas :</p>
                <ul>
                    <li>UX/UI Layouts</li>
                    <li>All the Tools inside the app</li>
                </ul>
            `
        )
    }
}












function bodyContent(project) {
    if(project.classList.contains('expenses')) {
        const instrcs = `
            <p>As soon as you open the project it will ask you to set you budget, add the amount of your preferences, add them in US currency for a better experience, later in the little lightblue icon in the bottom right with the "+" you will start adding your expenses.
            </br></br>
            As soon as you start adding your expenses you will see them in the bottom separetly, you will be able to edit them swiping left on the expense and swiping right for deleting it
            </p>
        `

        const link = "https://danielurz.github.io/expenses-check/"
        const git = "https://github.com/danielurz/expenses-check"

        return {instrcs,git,link}
        
    }
    if(project.classList.contains('cripto')) {
        const instrcs = `
            <p>It's pretty simple to use this project, just select the currency and cryptocurrency you wold like to know the price of, submit it and then you will see the result down below</p>
        `

        const link = "https://danielurz.github.io/criptos/"
        const git = "https://github.com/danielurz/criptos"

        return {instrcs,git,link}
    }
    if(project.classList.contains('vet')) {
        const instrcs = `
            <p>In the form in the left you can start adding patients and for editing and deleting patients you will have to hover the patient info to see them icons</p>
        `

        const link = "https://danielurz.github.io/vet-patients/"
        const git = "https://github.com/danielurz/vet-patients"

        return {instrcs,git,link}
    }
    if(project.classList.contains('recipes')) {
        const instrcs = `
            <p>Search for the category of food you like in the input element, and see all the recipes 
            that matches your category, you can see the description of the recepes you like the most 
            in the "View Recepe" button. </br></br> 
            You can save them as favorite and watch them in "My Favorites" section, in this section 
            then you can delete them also</p>
        `

        const link = "https://danielurz.github.io/food-recipes/"
        const git = "https://github.com/danielurz/food-recipes"

        return {instrcs,git,link}
    }
    if(project.classList.contains('imgapi')) {
        const instrcs = `
            <p>Search for the images you would like to see and see the result down below, if your 
            search has more than 30 images you will be able to the the rest of the result in the 
            pagination in the bottom of the page</p>
        `

        const link = "https://danielurz.github.io/pixabay-images/"
        const git = "https://github.com/danielurz/pixabay-images"

        return {instrcs,git,link}
    }
    if(project.classList.contains('loans')) {
        const instrcs = `
            <p>Choose money range and term</p>
        `

        const link = "https://danielurz.github.io/loan-fees/"
        const git = "https://github.com/danielurz/loan-fees"

        return {instrcs,git,link}
    }
    if(project.classList.contains('weather')) {
        const instrcs = `
            <p>First search for the countries available in the second 
            input and the search for a city in that country in the first
            input, submit the form and the you will se the result in the 
            top of the page </p>
        `

        const link = "https://danielurz.github.io/weatherapp/"
        const git = "https://github.com/danielurz/weatherapp"

        return {instrcs,git,link}
    }
    if(project.classList.contains('insurance')) {
        const instrcs = `
            <p>So the algorithm works like this: the price base is $2000, every year that the vehicle 
            is older than the current year is decrease by 3%, then, if the brand of the vehicle is 
            "European" increase 30%, if its "American" 15%, and if its "Asian" 5%, then, if the plan 
            is "Basic" increase 20%, and if its "Complete" 50%, then the result of this algorithm is 
            shown in the component below </p>
        `

        const link = "https://danielurz.github.io/car-insurance-rates/"
        const git = "https://github.com/danielurz/car-insurance-rates"

        return {instrcs,git,link}
    }
    if(project.classList.contains('portfolio')) {
        const instrcs = `
            <p>Nothing to see here</p>
        `

        const link = "#"
        const git = "https://github.com/danielurz/expenses-check"

        return {instrcs,git,link}
    }
}



export {
    bodyMessage,
    bodyContent
}

