const aboutChildrenElements = document.querySelector('.about__description').children;
const moreTextBtn = document.querySelector('.visible-text-btn');

function showTextInAboutSection(button,content){
    [...content].forEach((element, i,arr) => {
        firstLoadContentAbout(element,i);
        resizeContentAbout(button,element,arr);
        clickButtonMoreText(button,element)
    });
}

showTextInAboutSection(moreTextBtn,aboutChildrenElements)

function firstLoadContentAbout(element,quantity){
    window.addEventListener('load', (e) => {
        if(window.innerWidth <= 767){
                if(quantity > 0){
                    element.classList.add('p-hidden');
                }else{
                    element.classList.remove('p-hidden');
                }
        }
    });
}

function resizeContentAbout(button,element,elementArray){
    window.addEventListener('resize',function(e){
            if(e.target.screen.width > 767){
                button.classList.add('hidden-text-btn');
                element.classList.remove('p-hidden'); 
            }
            if(e.target.screen.width <= 767){
                button.classList.remove('hidden-text-btn');
                elementArray[0].classList.remove('p-hidden');
                element.classList.add('p-hidden');             
            }
    });
}

function clickButtonMoreText(button,element){
        button.addEventListener('click', (e) => {         
            element.style.display = 'block';
            button.classList.add('hidden-text-btn');
            button.classList.remove('visible-text-btn');
        });
}
