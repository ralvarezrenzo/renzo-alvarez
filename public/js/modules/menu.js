export default function menuOpen(btnMenu,menu,bgHeader){
    const d = document;
    d.addEventListener("click",e=>{
        let navBar = d.querySelector(menu);
        let $header = d.querySelector(bgHeader);
        if(e.target.matches(btnMenu)|| e.target.matches(`${btnMenu} *`)){
             navBar.classList.toggle('open-menu')
             $header.classList.toggle('btn-header-bg')
        }
    })    
}