function ocurrencias(frase, palabra) {
  var cont=0;
  if(frase==palabra){
    cont++;
    return palabra+":"+cont;
  }
}

export default ocurrencias;
