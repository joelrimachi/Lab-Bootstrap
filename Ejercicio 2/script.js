const formulario = document.getElementById("formulario");
const alerta = document.getElementById("alerta");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(formulario.checkValidity()){

        alerta.classList.remove("d-none");
        formulario.reset();
        formulario.classList.remove("was-validated");

    }else{

        formulario.classList.add("was-validated");

    }

});