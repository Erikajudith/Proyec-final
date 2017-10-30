var frase= prompt("ingrsa una frase"); //ingresa la frase
var may= frase.toUpperCase();//convierte a mayusculas
var asc = may();// donde meto mi cifrado
function cipher (frase) {// funcion para cambiar
    for(var i= 0; i < may.length; i +=1);
    if(i === " "){//ir en toda la longitud de mi frase y en cada indice
    return true;
    //si ingresa espacios salir
    }
      else
      { for(var j=0;j<may.length;j++)
        asc[j]=may[j].charCodeAt(0);//convertir cada letra a su nuevo numero
      }
      for (var q= 0; q<asc.length; q++){
        document.weite(String.fromCharCode(asc[q]));//regresar la letra con su nuevo valor
      }

alert ("no se permiten espacios");

}


//((x-65+n) %26) +65
