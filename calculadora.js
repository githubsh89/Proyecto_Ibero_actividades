  
  
function suma() {  
    var x,y,suma,text;  
    x = document.getElementById("valor1").value;  
    y = document.getElementById("valor2").value;  
    r = document.getElementById("resultado").value;
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
       
      suma=parseFloat(x)+parseFloat(y);  
      text= suma;  
      var resultado=document.getElementById("resultado")
     
    }
    document.getElementById("resultado").innerHTML = text;
    console.log(x);
    console.log(y);
    console.log(r);
}

function resta() {  
    var x,y,resta,text;  
    x = document.getElementById("valor1").value;  
    y = document.getElementById("valor2").value;  
    r = document.getElementById("resultado").value;
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
     
      resta=parseFloat(x)-parseFloat(y);  
      text= resta;  
      var resultado=document.getElementById("resultado")
     
    }
    document.getElementById("resultado").innerHTML = text;
    console.log(x);
    console.log(y);
    console.log(r);
}
     
function multiplicacion() {  
    var x,y,resta,text;  
    x = document.getElementById("valor1").value;  
    y = document.getElementById("valor2").value;  
    r = document.getElementById("resultado").value;
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
       
      multiplicacion=parseFloat(x)*parseFloat(y);  
      text= multiplicacion;  
      var resultado=document.getElementById("resultado")
     
    }
    document.getElementById("resultado").innerHTML = text;
    console.log(x);
    console.log(y);
    console.log(r);
}      
    
function division() {  
    var x,y,resta,text;  
    x = document.getElementById("valor1").value;  
    y = document.getElementById("valor2").value;  
    r = document.getElementById("resultado").value;
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      
      division=parseFloat(x)/parseFloat(y);  
      text= division;  
      var resultado=document.getElementById("resultado")
     
    }
    document.getElementById("resultado").innerHTML = text;
    console.log(x);
    console.log(y);
    console.log(r);
}    
  
  