const mail = document.getElementById("inputEmail4");
const sifre = document.getElementById("inputPassword4");
const adres = document.getElementById("inputAddress");


const mail1 =document.getElementById("mail1");
const sifre1 =document.getElementById("sifre1");
const adres1 =document.getElementById("adres1");



function tikla(){

       const a =  mail.value;
       const c = adres.value;
       const b = sifre.value;

        mail1.textContent = a;
        sifre1.textContent = b;
        adres1.textContent = c;
}