const insan1 = {
    ad: "Ali",
    soyad: "fas",
}
const insan2 = {
    ad: "Veli",
    soyad: "fas",
}

const insan3 = {
    ad: "Mehmet",
    soyad: "fas",
}


const map = new Map();

map.set("ad1 = ",insan1.ad);
map.set("ad2 = ",insan2.ad);
map.set("ad3 = ",insan3.ad);

const dizi = [[map.get("ad1 = ")],[map.get("ad2 = ")],[map.get("ad3 = ")]];


console.log(dizi);

