



function tikla(){

    const metin = document.getElementsByClassName("form-control")[0].value;
console.log(metin);



var res = metin.replace(/samet/gi, "*****");
 
    document.getElementById("demo").innerHTML = res;
}
