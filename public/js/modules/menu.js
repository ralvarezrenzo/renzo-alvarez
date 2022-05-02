export default function menuOpen(btnMenu,menu,bgHeader,menuLinks){
    const d = document;
    d.addEventListener("click",e=>{
        let navBar = d.querySelector(menu);
        let $header = d.querySelector(bgHeader);
        if(e.target.matches(btnMenu)|| e.target.matches(`${btnMenu} *`)){
             navBar.classList.toggle('open-menu')
             $header.classList.toggle('btn-header-bg')
        }
        if(e.target.matches(menuLinks)){
            navBar.classList.remove('open-menu')
        }
    })    
}