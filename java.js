function maquina(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){
        
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 80 * i)
});
}
const titulo = document.querySelector('.dev');
maquina(titulo);