const accordionBtns = document.querySelectorAll ('.accordion');


accordionBtns.forEach(accordion =>{
    // console.log(accordion)
    accordion.addEventListener('click', ()=> {
        // console.log('toggle clicked')
        accordion.classList.toggle("is-open");
        
        let content = accordion.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
    
})