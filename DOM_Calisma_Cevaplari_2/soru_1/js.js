
var ad = document.getElementById("ad");
var soyad= document.getElementById("soyad");
var mail = document.getElementById("mail");
var secim = document.getElementById("form1");

function gir()
{
   var etiket_ac;
   let a;
    if (ad.value == "")
    {
        a = secim.children[0];
        etiket_ac=document.createElement("span");
        etiket_ac.id = "hata";
        etiket_ac.appendChild(document.createTextNode("boş bırakılmaz"));
        a.appendChild(etiket_ac);

    }

    if (soyad.value == "")
    {
        a = secim.children[1];
        etiket_ac=document.createElement("span");
        etiket_ac.id = "hata";
        etiket_ac.appendChild(document.createTextNode("boş bırakılmaz"));
        a.appendChild(etiket_ac);


    }
    if (mail.value == "")
    {

        a = secim.children[2];
        etiket_ac=document.createElement("span");
        etiket_ac.id = "hata";
        etiket_ac.appendChild(document.createTextNode("boş bırakılmaz"));
        a.appendChild(etiket_ac);
    }

}