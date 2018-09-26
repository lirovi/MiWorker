var i = 0;
var msg=["Hola que tal", "Cambiando el texto", "Buscando procesos","Bienvenido"];
function contador(){
    i = i + 1;
    
    
    setTimeout("contador()",1000);
    if(i<5)
    {postMessage(msg[i-1]);}
    else{postMessage(i);}
   
    
}
contador();