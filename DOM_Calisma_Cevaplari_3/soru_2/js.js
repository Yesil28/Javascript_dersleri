const buton = document.getElementById("buton");


function tikla(e){


    var abc=document.createElement("progress");
            
    abc.setAttribute("role","progressbar");
    abc.setAttribute("class","progress-bar");
    abc.setAttribute("aria-valuenow","25");
    abc.setAttribute("aria-valuemin","0");
    abc.setAttribute("style","width: 25%");
    abc.setAttribute("aria-valuemax","100");
    
    var x = "%25";
    document.getElementById("x").innerHTML = x;
    
    var panelDivv=document.getElementById("p1");
    panelDivv.appendChild(abc);





    
    var abcc=document.createElement("progress");
            
    abcc.setAttribute("role","progressbar");
    abcc.setAttribute("class","progress-bar");
    abcc.setAttribute("aria-valuenow","75");
    abcc.setAttribute("aria-valuemin","0");
    abcc.setAttribute("style","width: 75%");
    abcc.setAttribute("aria-valuemax","100");
    
    var y = "%75";
    document.getElementById("y").innerHTML = y;
    
    var panelDivvv=document.getElementById("p2");
    panelDivvv.appendChild(abcc);
    
    buton.remove();
}