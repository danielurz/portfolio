export const FEprojects = [
    {
        boxClass: "expenses",
        thumb: "imagenes/Captura de pantalla 2023-01-06 041714.jpg",
        title: "Expenses Checker",
        text: `This is a React project that allows the user to manage
        its budget and expenses in order just to see how much money they have 
        spent, how they are spending that money and how much budget the have 
        left. </br></br>
        It also allows the user to filter their expenses in categories to see 
        where is going all that money. In this project I use useState and 
        useEffect and hooks.`,
        instructions: `<p>As soon as you open the project it will ask you to set you budget, add the amount of your preferences, add them in US currency for a better experience, later in the little lightblue icon in the bottom right with the "+" you will start adding your expenses.
        </br></br>
        As soon as you start adding your expenses you will see them in the bottom separetly, you will be able to edit them swiping left on the expense and swiping right for deleting it
        </p>`,
        link: "https://danielurz.github.io/expenses-check/",
        git: "https://github.com/danielurz/expenses-check"
    },
    {
        boxClass: "cripto",
        thumb: "imagenes/Captura de pantalla 2023-01-06 042634.jpg",
        title: "Cripto Converter API",
        text: `This Cripto Converter site allows you to convert 5
        different types of currency including the US currency into the 20 most
        traded cryptocurrencies right now, so you will know the price, the higest
        value of the day and the lowest all this in real time. </br></br>
        I made this project in React using an API that is called "CryptoCompare", 
        used Async/Await to get this data. useState, useEffect, hooks and also 
        customs Hooks were used in this project.`,
        instructions: `<p>It's pretty simple to use this project, just select the currency and cryptocurrency you wold like to know the price of, submit it and then you will see the result down below</p>`,
        link: "https://danielurz.github.io/criptos/",
        git: "https://github.com/danielurz/criptos"
    },
    {
        boxClass: "recipes",
        thumb: "imagenes/Captura de pantalla 2023-01-06 043733.jpg",
        title: "Food Recipes API",
        text: `This project is very special for me, it's an app that i 
        build where you can choose a category of food you like and through an 
        API of food recipes it throws you all the recipes that matches with your 
        previews selection, you can view the recepe, the instruccions to make it, 
        the ingreidents and the amounts, you can alse save the ones you like the 
        most. </br></br>
        This project was Build in JavaScipt and Bootstrap and the API is 
        in "themealdb.com" and i used fetch to get all this data.`,
        instructions: `<p>Search for the category of food you like in the input element, and see all the recipes 
        that matches your category, you can see the description of the recepes you like the most 
        in the "View Recepe" button. </br></br> 
        You can save them as favorite and watch them in "My Favorites" section, in this section 
        then you can delete them also</p>`,
        link: "https://danielurz.github.io/food-recipes/",
        git: "https://github.com/danielurz/food-recipes"
    },
    {
        boxClass: "imgapi",
        thumb: "imagenes/Captura-Pb.PNG",
        title: "Image Finder API",
        text: `In this project you can search for whatever image you 
        like and see them results, i made this project using the pixabay API so 
        all the images are coyright free and you can use them however you like.
        </br></br>
        This project was all made in JavaScipt, i used fetch to get the data of 
        the API.`,
        instructions: `<p>Search for the images you would like to see and see the result down below, if your 
        search has more than 30 images you will be able to the the rest of the result in the 
        pagination in the bottom of the page</p>`,
        link: "https://danielurz.github.io/pixabay-images/",
        git: "https://github.com/danielurz/pixabay-images"
    },
    {
        boxClass: "loans",
        thumb: "imagenes/Captura-Loans.PNG",
        title: "Loan Page",
        text: `This React project is a simulator of how much money you
        will be paying back if you take a loan depending on the money you ask and 
        payment term.
        </br></br>
        The less the money you ask the less the interests you will need to pay 
        and the longer term you ask more money you will need to pay, you can see 
        how much money you will need to pay monthly and how much in total.`,
        instructions: `<p>Choose money range and term</p>`,
        link: "https://danielurz.github.io/loan-fees/",
        git: "https://github.com/danielurz/loan-fees"
    },
    {
        boxClass: "weather",
        thumb: "imagenes/Captura-Weather.PNG",
        title: "Weather API",
        text: `This Project allows the user to search how is the
        weather in every city they choose in the following countrys that are
        available in the next input
        </br></br>
        This project was made in JavaScipt and i used the openweathermap API,
        using fetch to get the data.`,
        instructions: `<p>First search for the countries available in the second 
        input and the search for a city in that country in the first
        input, submit the form and the you will se the result in the 
        top of the page </p>`,
        link: "https://danielurz.github.io/weatherapp/",
        git: "https://github.com/danielurz/weatherapp"
    },
    {
        boxClass: "insurance",
        thumb: "imagenes/Captura-Insurance.PNG",
        title: "Insurance Page",
        text: `This is a project that allows the user to select some 
        attributes of your car for example where is from, the year of the car and 
        if the insurance plan is a basic one or a full one. And then know what is 
        gonna be the final price of the insurance depending of the previews 
        choises
        </br></br>
        In this React project i used useState, useEffect, useContext, 
        createContext, ans useCallback. If you wanna know how the algorithm works 
        in the section "How to use" it will show.`,
        instructions: `<p>So the algorithm works like this: the price base is $2000, every year that the vehicle 
        is older than the current year is decrease by 3%, then, if the brand of the vehicle is 
        "European" increase 30%, if its "American" 15%, and if its "Asian" 5%, then, if the plan 
        is "Basic" increase 20%, and if its "Complete" 50%, then the result of this algorithm is 
        shown in the component below </p>`,
        link: "https://danielurz.github.io/car-insurance-rates/",
        git: "https://github.com/danielurz/car-insurance-rates"
    },
    {
        boxClass: "portfolio",
        thumb: "imagenes/Captura-Portfolio.PNG",
        title: "This Portfolio :)",
        text: `This portfolio i did it all by myself from scratch using 
        JavaScipt and PHP for the form, i think i like the outcome. `,
        instructions: `<p>Nothing to see here</p>`,
        link: "#",
        git: "#"
    },
]