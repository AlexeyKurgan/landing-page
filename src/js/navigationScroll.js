const links = document.querySelectorAll('.navigation__item-link');
let sections = document.querySelectorAll('section, header')

function clickNavigation(linksArray){
    [...linksArray].forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
    
            const id = link.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    
            if(!link.classList.contains('navigation__item-link_active')){
                [...linksArray].forEach((item)=>{
                    item.classList.remove('navigation__item-link_active')
                })               
                link.classList.add('navigation__item-link_active')
            }          
        });
    })  
}

clickNavigation(links);

function scrollNavigation(sectionsArray){
    let sections = {};
    let i = 0;
  
    [...sectionsArray].forEach.call(sectionsArray, (e) =>{
        sections[e.id] = e.offsetTop;
    })
  
    window.addEventListener('scroll', function (e) {
  
        for (i in sections) {
            if((sections[i] <= (window.pageYOffset + 200))){
                window.pageXOffset - sectionsArray[6].clientHeight;
                document.querySelector('.navigation__item-link_active').setAttribute('class', 'navigation__item-link');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'navigation__item-link navigation__item-link_active');
            }
        }
    });
}
   
scrollNavigation(sections);
