let contador = 0;

const botones = document.querySelectorAll(".agregar");
const badge = document.getElementById("contador");

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        contador++;

        badge.textContent = contador;

    });

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(formulario.checkValidity()){

        formulario.classList.remove("was-validated");

        formulario.reset();

        const modal = new bootstrap.Modal(document.getElementById("modalExito"));

        modal.show();

    }

    else{

        formulario.classList.add("was-validated");

    }

});