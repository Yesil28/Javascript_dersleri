
var sifre = document.getElementById("sifre");
var mail = document.getElementById("mail");
var mail_deger = document.getElementsByClassName("form-control")[0];
var sifre_deger = document.getElementsByClassName("form-control")[1];

var buton = document.getElementById("buton");



function tikla() {


    if (mail_deger.style.display == "none" && sifre_deger.style.display == "none") {
            mail_deger.style.display = "";
        sifre_deger.style.display="";
          } 
        else {
            mail_deger.style.display = "none";
             sifre_deger.style.display="none";
          }
    

    mail.textContent="İl";
    sifre.textContent = "ilçe";


  

    var x = "Mahalle";
    document.getElementById("demo").innerHTML = x;

    var y = "Cadde";
    document.getElementById("x").innerHTML = y;







    var abc=document.createElement("input");
            
    abc.setAttribute("type","text");
    abc.setAttribute("class","form-control");
    
    var panelDivv=document.getElementById("y");
    panelDivv.appendChild(abc);



    var il_text=document.createElement("input");
            
    il_text.setAttribute("type","text");
    il_text.setAttribute("class","form-control");
    
    var il_textt=document.getElementById("yeni_text");
    il_textt.appendChild(il_text);



    var ilce_text=document.createElement("input");
            
    ilce_text.setAttribute("type","text");
    ilce_text.setAttribute("class","form-control");
    
    var ilce_textt=document.getElementById("yeni_text_ilce");
    ilce_textt.appendChild(ilce_text);



    var nesne=document.createElement("input");
            
    nesne.setAttribute("type","text");
    nesne.setAttribute("class","form-control");
    
    var panelDiv=document.getElementById("panel");
    panelDiv.appendChild(nesne);

   




}

const yyyy=document.getElementById("y");

const yeni_textt=document.getElementById("yeni_text");

const yeni_textt_ilce = document.getElementById("yeni_text_ilce");

const panell = document.getElementById("panel");


function geritikla(){
    if (yyyy.style.display == "none" && yeni_textt.style.display == "none" && yeni_textt_ilce.style.display=="none"&& panell.style.display=="none") {
            yyyy.style.display = "";
        yeni_textt.style.display="";
        yeni_textt_ilce.display="";
        panell.display="";
          } 
        else {
            yeni_textt.style.display = "none";
             yyyy.style.display="none";
             yeni_textt_ilce.display="none";
             panell.display="none";
          }


}

