let maaslar = {
    ali:100,
    ayse: 300,
    ahmet: 250
};

    if(maaslar.ahmet>maaslar.ali && maaslar.ahmet>maaslar.ayse)
        console.log("en büyük maaş ahmet'in");
    
    

    else if(maaslar.ali>maaslar.ahmet && maaslar.ali>maaslar.ayse)
        console.log("en büyük maaş ali'nin");

    
    else
        console.log("En büyük maaş ayşe'nin");
    
const {ali,ayse,ahmet}=maaslar;

console.log(ali,ayse,ahmet);

for(let prop in maaslar){
    console.log(prop);
}


