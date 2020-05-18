
var sifre = document.getElementById("sifre");
var mail = document.getElementById("mail");

var buton = document.getElementById("buton");

function tikla() {

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



    var nesne=document.createElement("input");
            
    nesne.setAttribute("type","text");
    nesne.setAttribute("class","form-control");
    
    var panelDiv=document.getElementById("panel");
    panelDiv.appendChild(nesne);

    buton.remove();




    var butonn=document.createElement("input");
            
    butonn.setAttribute("type","button");
    butonn.setAttribute("class","btn btn-primary w-100 mt-5");
    butonn.setAttribute("id","yeni_buton");
    butonn.setAttribute("value","İlet");

    
    var butonnn=document.getElementById("panel");
    butonnn.appendChild(butonn);


    const yeni_butonn = document.querySelector("#yeni_buton");

    yeni_butonn.addEventListener("click",run);


    
    function run(e){
        alert("iletildi");
    }
}

