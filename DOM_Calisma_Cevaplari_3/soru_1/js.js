const mail = document.querySelectorAll(".form-control")[0];

const sifre = document.querySelectorAll(".form-control")[1];


const form = document.getElementById("form");
let a;
var etiket_ac;
function tikla(){
    let a;
    var etiket_ac;
    if(mail == ""){
        a = form.children[5];
        etiket_ac=document.createElement("span");
        etiket_ac.id = "hata";
        etiket_ac.appendChild(document.createTextNode("boş bırakılmaz"));
        a.appendChild(etiket_ac);
    }
}