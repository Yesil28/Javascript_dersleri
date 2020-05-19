const buton = document.getElementById("buton");

function tikla(){

    var progress25=document.createElement("progress");
    progress25.setAttribute("class","progress");        
    progress25.setAttribute("role","progressbar");
    progress25.setAttribute("class","progress-bar");
    progress25.setAttribute("style","width: 25%");
    progress25.setAttribute("aria-valuenow","25");
    progress25.setAttribute("aria-valuemin","0");
    progress25.setAttribute("aria-valuemax","100");
    var progress1=document.getElementById("y");
    progress1.appendChild(progress25);

    buton.remove();


    var yeni_soru2 = "Hangi Takımlısın";
    document.getElementById("soru2").innerHTML = yeni_soru2;

    var s2_c1 = "TRABZONSPOR";
    document.getElementById("c1").innerHTML = s2_c1;

    var s2_c2 = "galatasaray";
    document.getElementById("c2").innerHTML = s2_c2;

    var s2_c3 = "beşiktaş";
    document.getElementById("c3").innerHTML = s2_c3;

    var s2_c4 = "fener";
    document.getElementById("c4").innerHTML = s2_c4;


    
    //------------------TS-------------------------------

    var ts=document.createElement("input");
            
    ts.setAttribute("type","radio");
    ts.setAttribute("checked","true");
    ts.setAttribute("class","form-check-input");
    ts.setAttribute("name","exampleRadios1");
    ts.setAttribute("id","exampleRadios1");
    ts.setAttribute("value","option1");

    var a=document.getElementById("v1");
    a.appendChild(ts);

    //------------------GS-------------------------------
    var gs=document.createElement("input");
            
    gs.setAttribute("type","radio");
    gs.setAttribute("class","form-check-input");
    gs.setAttribute("name","exampleRadios1");
    gs.setAttribute("id","exampleRadios2");
    gs.setAttribute("value","option2");

    var aa=document.getElementById("v2");
    aa.appendChild(gs);

    
    //------------------BJK-------------------------------
    var bjk=document.createElement("input");
            
    bjk.setAttribute("type","radio");
    bjk.setAttribute("class","form-check-input");
    bjk.setAttribute("name","exampleRadios1");
    bjk.setAttribute("id","exampleRadios3");
    bjk.setAttribute("value","option3");

    var aaa=document.getElementById("v3");
    aaa.appendChild(bjk);

    //------------------FB-------------------------------
    var fb=document.createElement("input");
            
    fb.setAttribute("type","radio");
    fb.setAttribute("class","form-check-input");
    fb.setAttribute("name","exampleRadios1");
    fb.setAttribute("id","exampleRadios4");
    fb.setAttribute("value","option4");

    var aaaa=document.getElementById("v4");
    aaaa.appendChild(fb);


    //-----------yeni buton------------------------

    var butonn=document.createElement("input");
            
    butonn.setAttribute("type","button");
    butonn.setAttribute("class","btn btn-light mt-3 mx-5 mb-5");
    butonn.setAttribute("id","yeni_buton");
    butonn.setAttribute("value","Seç");

    
    var butonnn=document.getElementById("yeni_buton");
    butonnn.appendChild(butonn);

    //--------------------soru2bitiş---------------------------




    butonnn.addEventListener("click",run);

    function run(e){

        var progress50=document.createElement("progress"); 
        progress50.setAttribute("role","progressbar");
        progress50.setAttribute("class","progress-bar");
        progress50.setAttribute("style","width: 50%");
        progress50.setAttribute("aria-valuenow","50");
        progress50.setAttribute("aria-valuemin","0");
        progress50.setAttribute("aria-valuemax","100");
        
        var progress2=document.getElementById("p50");
        progress2.appendChild(progress50);
    
        


        var yeni_soru3 = "Hangi Sporu Tercih Edersin";
      document.getElementById("soru3").innerHTML = yeni_soru3;

    var s3_c1 = "voleybol";
    document.getElementById("s3_c1").innerHTML = s3_c1;

    var s3_c2 = "Futbol";
    document.getElementById("s3_c2").innerHTML = s3_c2;

    var s3_c3 = "basketbol";
    document.getElementById("s3_c3").innerHTML = s3_c3;

    var s3_c4 = "diğerleri";
    document.getElementById("s3_c4").innerHTML = s3_c4;


         //------------------voleybol-------------------------------

    var voleybol=document.createElement("input");
            
    voleybol.setAttribute("type","radio");
    voleybol.setAttribute("checked","true");
    voleybol.setAttribute("class","form-check-input");
    voleybol.setAttribute("name","exampleRadios2");
    voleybol.setAttribute("id","exampleRadios1");
    voleybol.setAttribute("value","option1");

    var vb=document.getElementById("r1");
    vb.appendChild(voleybol);

    //------------------futbol------------------------------
    var futbol=document.createElement("input");
            
    futbol.setAttribute("type","radio");
    futbol.setAttribute("class","form-check-input");
    futbol.setAttribute("name","exampleRadios2");
    futbol.setAttribute("id","exampleRadios2");
    futbol.setAttribute("value","option2");

    var fbb=document.getElementById("r2");
    fbb.appendChild(futbol);

    
    //------------------basketbol-------------------------------
    var basketbol=document.createElement("input");
            
    basketbol.setAttribute("type","radio");
    basketbol.setAttribute("class","form-check-input");
    basketbol.setAttribute("name","exampleRadios2");
    basketbol.setAttribute("id","exampleRadios3");
    basketbol.setAttribute("value","option3");

    var bb=document.getElementById("r3");
    bb.appendChild(basketbol);

    //------------------diğerleri-------------------------------
    var dgr=document.createElement("input");
            
    dgr.setAttribute("type","radio");
    dgr.setAttribute("class","form-check-input");
    dgr.setAttribute("name","exampleRadios2");
    dgr.setAttribute("id","exampleRadios4");
    dgr.setAttribute("value","option4");

    var ab=document.getElementById("r4");
    ab.appendChild(dgr);



    butonnn.remove();


 //-----------yeni buton------------------------

        var butonn2=document.createElement("input");
            
        butonn2.setAttribute("type","button");
        butonn2.setAttribute("class","btn btn-light mt-3 mx-5 mb-5");
        butonn2.setAttribute("id","yeni_buton");
        butonn2.setAttribute("value","Seç");
    
        
        var butonnn2=document.getElementById("yeni_buton2");
        butonnn2.appendChild(butonn2);


        butonnn2.addEventListener("click",run);

        function run(e){
            var progress100=document.createElement("progress");
            progress100.setAttribute("class","progress");        
            progress100.setAttribute("role","progressbar");
            progress100.setAttribute("class","progress-bar");
            progress100.setAttribute("style","width: 100%");
            progress100.setAttribute("aria-valuenow","100");
            progress100.setAttribute("aria-valuemin","0");
            progress100.setAttribute("aria-valuemax","100");
            var progress2=document.getElementById("p100");
            progress2.appendChild(progress100);


            var son = "TEST BİTMİŞTİR";
    document.getElementById("son").innerHTML = son;
        }
    
    }
    
       
}


    
  
  