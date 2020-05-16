function renkliyaz(){
    const metin = document.getElementById("metin");
    const yazi = metin.textContent;
    const kelimeler = yazi.split(" ");

        let yeniyazi="";
        for (let index = 0; index < kelimeler.length; index++) {
        
        if(kelimeler[index].length==5){

            yeniyazi+="<span style = 'color: red'>"+kelimeler[index]+ " " +"</span>";
        }
        else
        {
            yeniyazi+=kelimeler[index]+ " ";
        }
    }

    metin.innerHTML=yeniyazi;
}