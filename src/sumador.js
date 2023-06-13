function ocurrencias(frase, palabra) {
  var cont=0;
  var fraseCompleta=[];
  var palabraCompleta=[];
  palabraCompleta=palabra.split(" ");
  fraseCompleta=frase.split(" ");
  for(let i=0;i<=1;i++){
    if(fraseCompleta[i]==palabraCompleta[i]){
      cont++;
      return fraseCompleta+=fraseCompleta[i]+":"+cont+" ";
    }
  }
  
}

export default ocurrencias;
