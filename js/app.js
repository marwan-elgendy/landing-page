/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');
let Nav = document.querySelector('nav');
const Unlist = document.querySelector('#navbar__list');
var scrollpos = window.scrollY;
let Sections_div = document.querySelectorAll('section div');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

  for(section of sections){
      let list_item = document.createElement('li');
      list_item.innerHTML = `<a href="#">${section.getAttribute("data-nav")}</a>`;
      Unlist.appendChild(list_item);
    }
    

    let links = document.querySelectorAll('#navbar__list li a');
    





    
    
    
    // Add class 'active' to section when near top of viewport
    
    window.addEventListener('scroll', function(){ 
        for(section of sections){
            scrollpos = window.scrollY;
            
            if(scrollpos >= section.offsetTop * 0.7  && scrollpos <= section.offsetTop + section.offsetHeight*0.6){
                section.classList.add("your-active-class");
            }
            else {
                section.classList.remove("your-active-class");
            }
        }
    });
    
    
    
    
    
    // Scroll to anchor ID using scrollTO event
    
        for(let i = 0; i < links.length ; i++){
            links[i].addEventListener('click', (e) => {
                e.preventDefault();
                let coo = sections[i].getBoundingClientRect().top + window.scrollY * 0.9;
                window.scrollTo({
                    top: coo,
                    behavior: 'smooth'
                });
            });
        }


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// $(window).scroll(function(){

//     $('section').each(function() {
//         if($(window).scrollTop() >= $(this).offset().top + $(this).height() || $(window).scrollTop() < $(this).offset().top)
//             $(this).removeClass('your-active-class');
//         else
//             $(this).addClass('your-active-class');
//     });

// });






