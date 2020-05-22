function Kontrol()
{
    var mail = document.getElementById("mail");
    var karkter = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    if(karkter.test(mail.value) == false){

        alert("Hatalı format");
        return false;
    }
    else{
     alert("Doğru format");
    }
}