import menuOpen from "./modules/menu.js";
import escritura from "./modules/escritura.js";

const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    menuOpen(".btn-menu",".menu",".header")
    escritura();
})