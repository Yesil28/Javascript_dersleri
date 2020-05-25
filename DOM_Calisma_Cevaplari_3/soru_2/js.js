// let ileriButonu=document.getElementById("ileri_butonu");
// let geriButonu=document.getElementById("geri_butonu");
// let kaydetButonu=document.getElementById("kaydet_butonu");
let adimBir=document.getElementById("adim_1");
let adimIki=document.getElementById("adim_2");

// ileriButonu.addEventListener("click",function(e){
//     adimBir.style.display="none";
//     adimIki.style.display="block";

//     e.preventDefault();
// });

// geriButonu.addEventListener("click",function(e){
//     adimBir.style.display="block";
//     adimIki.style.display="none";
//     e.preventDefault();
// });

// kaydetButonu.addEventListener("click",function(e){
//     adimBir.style.display="none";
//     adimIki.style.display="none";
//     alert("Formunuz gönderilmiştir.");
//     e.preventDefault();
// });



var takimOylari=[10,5,2];
btnGonder.addEventListener("click",function(e){

    const rdBtn=document.querySelectorAll(".form-check-input");

    const rdBtnDizi=Array.from(rdBtn);

    rdBtnDizi.forEach(function(item){

        if(item.checked==true)
        {
            if(item.value=="gs")
            {
                takimOylari[0]++;
            }
            else if(item.value=="fb")
            {
                takimOylari[1]++;
            }
            else if(item.value=="bjk")
            {
                takimOylari[2]++;
            }
        }

    });

    var toplamOy=takimOylari[0]+takimOylari[1]+takimOylari[2];


    const proBar=document.querySelectorAll(".progress-bar");

    for (let index = 0; index < proBar.length; index++) {
      
        //proBar[index].value=(takimOylari[index]*100)/toplamOy;
        proBar[index].setAttribute("aria-valuenow",(takimOylari[index]*100)/toplamOy);
        proBar[index].style.width=String((takimOylari[index]*100)/toplamOy) + '%';
        proBar[index].textContent+=" % " + String((takimOylari[index]*100)/toplamOy); 

    }

    adimBir.style.display="none";
    adimIki.style.display="block";
    e.preventDefault();
});