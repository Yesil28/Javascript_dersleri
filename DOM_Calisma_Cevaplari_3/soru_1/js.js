
var sifre = document.getElementById("sifre");
var mail = document.getElementById("mail");
var mail_deger = document.getElementsByClassName("form-control")[0];
var sifre_deger = document.getElementsByClassName("form-control")[1];

var buton = document.getElementById("buton");





function tikla() {



    

    mail.textContent="İl";
    sifre.textContent = "ilçe";

    sifre_deger.remove();
    mail_deger.remove();



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

    buton.remove();



//YENİ BUTON
    var butonn=document.createElement("input");
            
    butonn.setAttribute("type","button");
    butonn.setAttribute("class","btn btn-primary w-100 mt-5");
    butonn.setAttribute("id","yeni_buton");
    butonn.setAttribute("value","İlet");

    
    var butonnn=document.getElementById("yeni_buton");
    butonnn.appendChild(butonn);




    const yeni_butonn = document.querySelector("#yeni_buton");

    yeni_butonn.addEventListener("click",run);


}

