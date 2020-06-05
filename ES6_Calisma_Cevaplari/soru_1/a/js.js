const a = (soru,evet,hayir) => {
    

    if(confirm(soru)==true)
    console.log(evet());
    else 
    console.log(hayir());
        
    }
a("Çıkmak istediğinize emin misiniz","evet","hayir");




