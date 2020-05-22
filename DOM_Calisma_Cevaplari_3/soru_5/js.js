const karakter = document.querySelector(".form-control");


karakter.addEventListener("keypress",changeText);
var sayac =100;

function changeText(e){

   const a =e.target.value.length;
    sayac=sayac-1;
    console.log(sayac);

    
    document.getElementById("x").innerHTML = sayac;

    if(a>=100){
        
        alert("!!!!EN FAZLA 100 KARAKTER!!!!");
        
    }
    
}