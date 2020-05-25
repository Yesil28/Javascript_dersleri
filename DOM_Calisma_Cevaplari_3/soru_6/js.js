const urunler=[
        {
           id:1,
           urunAdi:"Ürün 1",
           urunDetayi:"Some quick example text to build on the card title and make up the bulk of the card's content." 
        },
        {
            id:2,
            urunAdi:"Ürün 2",
            urunDetayi:"Some quick example text to build on the card title and make up the bulk of the card's content." 
         },
         {
            id:3,
            urunAdi:"Ürün 3",
            urunDetayi:"Some quick example text to build on the card title and make up the bulk of the card's content." 
         }
    ];
    
    let sepet=[];
    
    function urunEkle(urunId) {
        
        sepet.push(urunler[urunId-1]);
        
        var urunSayisiEtiketi=document.getElementsByClassName("badge badge-light");
        urunSayisiEtiketi[0].innerHTML=sepet.length;
    
        localStorage.removeItem("sepet");
        localStorage.setItem("sepet",JSON.stringify(sepet));
    
    
    }
    
    let sepetButonu=document.getElementById("sepetButonu");
    
    sepetButonu.addEventListener("click",function() {
        var yeniDiv=document.createElement("div");
        yeniDiv.className="container";
        var yeniUl=document.createElement("ul");
    
        var cekilenSepet=JSON.parse(localStorage.getItem("sepet"));
    
    
        for (let index = 0; index < cekilenSepet.length; index++) {
           
            var yeniLi=document.createElement("li");
            yeniLi.innerHTML=`Ürün Adı: ${cekilenSepet[index].urunAdi} Ürün Açıklaması: ${cekilenSepet[index].urunDetayi}`;
            yeniUl.appendChild(yeniLi);
        }
    
        yeniDiv.appendChild(yeniUl);
        document.body.appendChild(yeniDiv);
        
    });