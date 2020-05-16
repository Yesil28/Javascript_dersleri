const karakter = document.querySelector(".form-control");


karakter.addEventListener("keyup",changeText);

function changeText(e){

   const a =e.target.value.length;

    if(a>=100){
        alert("!!!!EN FAZLA 100 KARAKTER!!!!");
    }
}