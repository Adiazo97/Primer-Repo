document.getElementById("iniciarSesion").addEventListener("click", function(){
    alert("Bienvenido a la tienda de flores")
});


document.getElementById('enviarFlores').onmouseover = function() {
    this.textContent = 'Envia Bouquets';
}

document.getElementById('enviarFlores').onmouseout = function() {
    this.textContent = 'Envia Flores ';
}

const botonesComprar = document.querySelectorAll(".comprar");

botonesComprar.forEach(boton => {

    boton.addEventListener('click', function(){
        boton.style.visibility = 'hidden';
    });

});
