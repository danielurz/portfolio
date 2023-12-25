export const loaderFn = () => {
    const loader = document.createElement("div")
    loader.classList.add("loader")

    loader.innerHTML = `
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
    `

    const main = document.querySelector("main")
    main.append(loader)

    return loader
}


export const formToast = response => {
    const isActive = document.querySelector(".toast")
    if(isActive) return

    const key = Object.keys(response)[0]

    const outcomes = {
        success: {
            title: "Success",
            message: response.success,
            icon: "fa-check",
            color: "#4070f4"
        },
        error: {
            title: "Error",
            message: response.error,
            icon: "fa-xmark",
            color: "firebrick"
        }
    }

    const {title,message,icon,color} = outcomes[key]
    
    const main = document.querySelector("main")
    const toast = document.createElement("div")
    
    toast.classList.add("toast")
    
    toast.innerHTML = `
    <div class="toast-content">
        <i class="fas fa-solid check ${icon}"></i>
        <div class="message">
            <span class="text text-1">${title}</span>
            <span class="text text-2">${message}</span>
        </div>
        </div>
        <i class="fa-solid fa-xmark close"></i>
    <div class="progress active"></div>
    `
    
    document.documentElement.style.setProperty('--toast-color', color);

    main.append(toast)

    const progress = toast.querySelector(".progress")

    setTimeout(() => {
        toast.classList.add("activeToast");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("activeToast");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000); 

    setTimeout(() => {
        progress.classList.remove("active");
    }, 3300);

}


export function debounce(func, wait) {
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