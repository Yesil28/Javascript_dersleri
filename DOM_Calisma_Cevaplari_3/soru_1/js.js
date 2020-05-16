
var sifre = document.getElementsByClassName("form-control")[1];
var mail = document.getElementsByClassName("form-control")[0];



var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

function tikla() {
    var etiket_ac;
    let a;

    if(mail.){

    }
    


    if (mail.value == "" || sifre.value == "") {

        a = form1.children[1];
        etiket_ac = document.createElement("span");
        etiket_ac.id = "hata";
        etiket_ac.appendChild(document.createTextNode("boş bırakılmaz"));
        a.appendChild(etiket_ac);
    }
    else {
        form2.open
    }

}

