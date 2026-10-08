/*=====================================================
        ZENI COFFEE WEBSITE
        PART 5 - JAVASCRIPT
=====================================================*/


/*==================================
        SELECT ELEMENTS
===================================*/

const navbar = document.querySelector(".navbar");

const progressBar = document.querySelector(".progress-bar");

const backToTop = document.querySelector(".back-to-top");

const revealElements = document.querySelectorAll(
".card, .feature, .hero-content, .hero-image, .statistics"
);

const statNumbers = document.querySelectorAll(".stat h2");


/*==================================
      NAVBAR SCROLL EFFECT
===================================*/

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){

        navbar.style.background =
        "rgba(22,11,6,.92)";

        navbar.style.boxShadow =
        "0 10px 35px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background =
        "rgba(15,8,4,.18)";

        navbar.style.boxShadow = "none";

    }

});


/*==================================
       SCROLL PROGRESS BAR
===================================*/

window.addEventListener("scroll", ()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight
    -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});


/*==================================
      BACK TO TOP BUTTON
===================================*/

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        backToTop.style.opacity = "1";

        backToTop.style.pointerEvents =
        "auto";

    }

    else{

        backToTop.style.opacity = "0";

        backToTop.style.pointerEvents =
        "none";

    }

});


backToTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================
      SMOOTH PAGE LINKS
===================================*/

document.querySelectorAll("a[href^='#']")
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================
      SCROLL REVEAL
===================================*/

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:.2

});



revealElements.forEach(item=>{

observer.observe(item);

});


/*==================================
      STAT COUNTER
===================================*/

function animateValue(el){

let value =
parseInt(el.textContent);

let current = 0;

let increment = value / 80;

function update(){

current += increment;

if(current < value){

el.textContent =
Math.floor(current)+"+";

requestAnimationFrame(update);

}

else{

if(el.textContent.includes("★")){

return;

}

el.textContent =
value+"+";

}

}

update();

}


statNumbers.forEach(stat=>{

animateValue(stat);

});


/*==================================
      IMAGE PARALLAX
===================================*/

window.addEventListener("mousemove",(e)=>{

const image =
document.querySelector(".hero-image img");

const x =
(e.clientX / window.innerWidth - .5) * 15;

const y =
(e.clientY / window.innerHeight - .5) * 15;

image.style.transform =
`translate(${x}px,${y}px)`;

});


/*==================================
      BUTTON RIPPLE
===================================*/

const buttons =
document.querySelectorAll(
".primary-btn,.secondary-btn,.order-btn"
);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform =
"translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform =
"translateY(0)";

});

});


/*==================================
      ACTIVE NAV LINK
===================================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop - 150;

const height =
section.offsetHeight;

if(pageYOffset >= top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==================================
      PAGE LOADER
===================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


console.log(
"%c☕ Zeni Coffee Loaded Successfully",
"color:#D4A44F;font-size:16px;font-weight:bold;"
);