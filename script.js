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
    // if (content.style.display === 'block'){
    //     content.style.display = 'none'; 
    // }else{
    //     content.style.display = 'block';
    // }
})
/* Use classList to add and remove to stop it from showing when not clicked */