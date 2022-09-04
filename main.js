
let nombre = document.getElementById("div-input_nombre");

nombre.addEventListener('keypress', (Event) =>{
    Event.preventDefault()
    let codigoKey = Event.key;
       
    if(!isFinite(codigoKey)){
        nombre.value += codigoKey;
    }
   
})

window.onload=function(){
    
    let numero = document.getElementById("numRandom");
    numero.value = Math.floor((Math.random() * (999999 - 0 + 1)) + 0);
    
}


