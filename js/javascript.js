const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
var n ;
var interval;
var dots = document.getElementsByClassName("dot");

function startTimer() {
    clearInterval(interval); 
interval = setInterval("carrossel()", 3000);
}
    startTimer();

    function carrossel(){
       

        idx++;

        n = idx;

        if(idx > img.length - 1){
            idx = 0;
            n = idx;
        }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";

    imgs.style.transform = `translateX(${-idx * 1300}px)`;

}

function avanca(){
    idx++;
    n = idx;

    if(idx > img.length - 1){
        idx = 0;
        n = idx;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";

    imgs.style.transform = `translateX(${-idx * 1300}px)`;
    startTimer();
}

function retrocede(){
    idx--;
    n = idx;
    if(idx < 0){
        idx = img.length - 1;
        n = idx;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
    imgs.style.transform = `translateX(${-idx * 1300}px)`;
    startTimer();
}

var slideIndex = 1;

function showSlides(n) {
    idx = n;
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
    imgs.style.transform = `translateX(${-idx * 1300}px)`;
    startTimer();
  }

  

var elNome = document.getElementById("nome");
elNome.addEventListener("blur", validaNome);

function validaNome() {
    var valorNome = document.getElementById("nome").value;

    if(valorNome.length > 0){

        var imgo = document.getElementById("NomOk")
        imgo.classList.remove('ok');
    
        var imgerro = document.getElementById("Nome")
        imgerro.classList.add('erro');
        return true;
    }
    else{
        var imgerro = document.getElementById("Nome")
        imgerro.classList.remove('erro');

        var imgok = document.getElementById("NomOk")
        imgok.classList.add('ok');

        return false;
    }
}



var elTelefone = document.getElementById("telefone");
elTelefone.addEventListener("blur", validaTelefone);

function validaTelefone()
{
    var valorTelefone = document.getElementById("telefone").value;

    if(isNaN( valorTelefone)){
        var imgerro = document.getElementById("Tel")
        imgerro.classList.remove('erro');
    
        var imgok = document.getElementById("TelOk")
        imgok.classList.add('ok');

        return false;
    }
    if(valorTelefone.length > 7)
    {

        var imgok = document.getElementById("TelOk")
        imgok.classList.remove('ok');
    
        var imgerro = document.getElementById("Tel")
        imgerro.classList.add('erro');

        return true;
        
    }
    else
    {

        var imgerro = document.getElementById("Tel")
        imgerro.classList.remove('erro');
    
        var imgok = document.getElementById("TelOk")
        imgok.classList.add('ok');

        return false;
    }
}



var elEmail = document.getElementById("email");
elEmail.addEventListener("blur", validaEmail);

function validaEmail() {
    var  e = elEmail.value;
    if ((e.length >=1) &&
        (e.length >=3) &&
        (e.search("@")!=-1) &&
        (e.search(" ")==-1) &&
        (e.search(".")!=-1) &&
        (e.indexOf(".") >=1)&&
        (e.indexOf(".") - e.indexOf("@") != 1) &&
        (e.lastIndexOf(".") < e.length - 1)) {

    var imgok = document.getElementById("EmailOk")
    imgok.classList.remove('ok');

    var imgerro = document.getElementById("Email")
    imgerro.classList.add('erro');

    return true;
    }
    
    else{
    var imgerro = document.getElementById("Email")
    imgerro.classList.remove('erro');

    var imgok = document.getElementById("EmailOk")
    imgok.classList.add('ok');

    return false;
    }
}

var elForm = document.getElementById("formPrincipal");

elForm.onsubmit = validaForm;



function validaForm()
{
    var valorNome = document.getElementById("nome").value;
    var  e = elEmail.value;
    var valorTelefone = document.getElementById("telefone").value;

    if((valorNome == "") &&
    (e == "")&&
    (valorTelefone == "")) {
        var imgerron = document.getElementById("Nome")
        imgerron.classList.remove('erro');

        var imgokn = document.getElementById("NomOk")
        imgokn.classList.add('ok');
    
        var imgerroe = document.getElementById("Email")
        imgerroe.classList.remove('erro');
    
        var imgoke = document.getElementById("EmailOk")
        imgoke.classList.add('ok');

        var imgerrot = document.getElementById("Tel")
        imgerrot.classList.remove('erro');
    
        var imgokt = document.getElementById("TelOk")
        imgokt.classList.add('ok');

        return false;
    }
    if((valorNome == "") &&
    (e == "")) {
        var imgerron = document.getElementById("Nome")
        imgerron.classList.remove('erro');

        var imgokn = document.getElementById("NomOk")
        imgokn.classList.add('ok');
    
        var imgerroe = document.getElementById("Email")
        imgerroe.classList.remove('erro');
    
        var imgoke = document.getElementById("EmailOk")
        imgoke.classList.add('ok');

        return false;
    }
    if((valorNome == "") &&
    (valorTelefone == "")) {
        var imgerron = document.getElementById("Nome")
        imgerron.classList.remove('erro');

        var imgokn = document.getElementById("NomOk")
        imgokn.classList.add('ok');
    
        var imgerrot = document.getElementById("Tel")
        imgerrot.classList.remove('erro');
    
        var imgokt = document.getElementById("TelOk")
        imgokt.classList.add('ok');

        return false;
    }
    if((e == "")&&
    (valorTelefone == "")) {

        var imgerroe = document.getElementById("Email")
        imgerroe.classList.remove('erro');
    
        var imgoke = document.getElementById("EmailOk")
        imgoke.classList.add('ok');

        var imgerrot = document.getElementById("Tel")
        imgerrot.classList.remove('erro');
    
        var imgokt = document.getElementById("TelOk")
        imgokt.classList.add('ok');

        return false;
    }


        if(valorNome == ""){
            var imgerro = document.getElementById("Nome")
            imgerro.classList.remove('erro');

            var imgok = document.getElementById("NomOk")
            imgok.classList.add('ok');
        
            return false;
        }
        if(e == ""){
            var imgerro = document.getElementById("Email")
            imgerro.classList.remove('erro');
        
            var imgok = document.getElementById("EmailOk")
            imgok.classList.add('ok');
        
            return false;
        }
        if(valorTelefone == ""){
            var imgerro = document.getElementById("Tel")
            imgerro.classList.remove('erro');
        
            var imgok = document.getElementById("TelOk")
            imgok.classList.add('ok');
    
            return false;
        }
        if(isNaN( valorTelefone)){
            var imgerro = document.getElementById("Tel")
            imgerro.classList.remove('erro');
        
            var imgok = document.getElementById("TelOk")
            imgok.classList.add('ok');
    
            return false;
        }

        if ((e.length >=1) &&
            (e.length >=3) &&
            (e.search("@")!=-1) &&
            (e.search(" ")==-1) &&
            (e.search(".")!=-1) &&
            (e.indexOf(".") >=1)&&
            (e.indexOf(".") - e.indexOf("@") != 1) &&
            (e.lastIndexOf(".") < e.length - 1) &&
            (valorTelefone.length > 7) &&
            (valorNome.length > 0)
            ) { 
                return true;

            }else{
                return false;

        }

}   
