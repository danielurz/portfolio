const typingEffect = new Typed('.text-third',{
    strings : ["my Space","my WebPage","my World","my Journey"],
    loop : true,
    typeSpeed: 100,
    backSpeed: 80,
    startDelay: 500,
    backDelay: 1500,
    showCursor: false
})

function slider() {
    const carouselSlider = document.querySelector('.carousel_slider')
    const list = document.querySelector('.carousel_list')
    const item = document.querySelector('.carousel_item')
    let list2

    const speed = 0.5

    const width = list.offsetWidth
    let x = 0
    let x2 = width

    console.log(width)


    function clone() {
        list2 = list.cloneNode(true)
        carouselSlider.appendChild(list2)
        list2.style.left = `${width}px`
    }

    clone()


    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`
        } else {
            x = width
        }
    }

    function moveSecond() {
        x2 -= speed

        if(list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`
        } else {
            x2 = width
        }
    }

    function hover() {
        clearInterval(a)
        clearInterval(b)
    }

    function unhover() {
        a = setInterval(moveFirst, 10)
        b = setInterval(moveSecond, 10)
    }

    clone()

    let a = setInterval(moveFirst, 10)
    let b = setInterval(moveSecond, 10)

    // carouselSlider.addEventListener('mouseenter',hover)
    // carouselSlider.addEventListener('mouseleave',unhover)
}

slider()







 const tabs = document.querySelectorAll('.li');
 const boxes = document.querySelectorAll('.aboutme .box');

 boxes.forEach(box => box.style.display = 'none')
 tabs[0].classList.add('activeTab')
 boxes[0].classList.add('activo')

 for (let i = 0; i < 3; i++) {
     tabs[i].addEventListener('click', function() {
         
         tabs.forEach(tab => tab.classList.remove('activeTab'))
         boxes.forEach(box => box.classList.remove('activo'))
         
         this.classList.add('activeTab')
         boxes[i].classList.add('activo')
        });
 }
 
 const header = document.querySelector('#header')

 console.log(header);