
const sepet = document.getElementById("sepet");
const k1 = document.getElementById("k1").textContent;
const k2 = document.getElementById("k2").textContent;
const k3 = document.getElementById("k3").textContent;

const urunler=[k1,k2,k3];

let index = 0;
function kart1(){
           
        
        localStorage.setItem("eklenen ürün",k1);
        index+=1;
        sepet.textContent=index;

    
}

function kart2(){

        localStorage.setItem("eklenen ürün",k2);
    index+=1;
        sepet.textContent=index;
}
function kart3(){
        localStorage.setItem("eklenen ürün",k3);
        index+=1;
        sepet.textContent=index;
}