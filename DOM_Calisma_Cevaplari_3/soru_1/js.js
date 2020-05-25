let ileriButonu=document.getElementById("ileri_butonu");
let geriButonu=document.getElementById("geri_butonu");
let kaydetButonu=document.getElementById("kaydet_butonu");
let adimBir=document.getElementById("adim_1");
let adimIki=document.getElementById("adim_2");

ileriButonu.addEventListener("click",function(e){
    adimBir.style.display="none";
    adimIki.style.display="block";

    e.preventDefault();
});

geriButonu.addEventListener("click",function(e){
    adimBir.style.display="block";
    adimIki.style.display="none";
    e.preventDefault();
});

kaydetButonu.addEventListener("click",function(e){
    adimBir.style.display="none";
    adimIki.style.display="none";
    alert("Formunuz gönderilmiştir.");
    e.preventDefault();
});