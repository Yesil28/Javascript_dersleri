let btnKelimeGonder = document.getElementById("btnKelimeGonder");

let engelliKelimeler = [];



btnKelimeGonder.addEventListener("click", function (e) {
    e.preventDefault();
    let yeniEtiket = document.createElement("div");
    yeniEtiket.innerHTML = document.getElementById("kelime").value;
    let satir = document.getElementsByClassName("row");
    satir[0].children[1].appendChild(yeniEtiket);

    var regExKelime = new RegExp(document.getElementById("kelime").value , 'gi');
    engelliKelimeler.push(regExKelime);
    
    

});


btnGonder.addEventListener("click", function (e) {
    e.preventDefault();
    let yeniEtiket = document.createElement("div");
    let yorumEtiketi=document.getElementById("yorum");
    let yorum=yorumEtiketi.value;
  


   
    /*Filtreleme İşlemi Başı */
    for (let index = 0; index < engelliKelimeler.length; index++) {
       
        yorum=yorum.replace( engelliKelimeler[index], '***');
    }
 /*Filtreleme İşlemi Sonu */
    yeniEtiket.innerHTML = yorum;

    let satir = document.getElementsByClassName("row");

    satir[0].children[0].appendChild(yeniEtiket);
    

    
});