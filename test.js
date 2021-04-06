var form = document.querySelector("form");

var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var description = document.getElementById("description");
var enviar = document.getElementById("enviar");
var limpiar = document.getElementById("limpiar");

var python = document.getElementById("python");
var java = document.getElementById("java");
var typescript = document.getElementById("typescript");
var php = document.getElementById("php");
var c = document.getElementById("c");
var cc = document.getElementById("cc");

var año1 = document.getElementById("1");
var año2 = document.getElementById("2");
var año3 = document.getElementById("3");
var año4 = document.getElementById("4");
var año5 = document.getElementById("5");

function checks() {
    if (python.checked){
        return true;
    } 
    if (java.checked){
        return true;
    }
    if (typescript.checked){
        return true;
    }
    if (php.checked){
        return true;
    }
    if (c.checked){
        return true;
    }
    if (cc.checked){
        return true
    }
    return false;
}

function radio() {
    if (año1.checked){
        return true;
    } 
    if (año2.checked){
        return true;
    }
    if (año3.checked){
        return true;
    }
    if (año4.checked){
        return true;
    }
    if (año5.checked){
        return true;
    }
    return false;
}

function validar(num) {
    if (!num.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}

enviar.addEventListener("click", function (a) {
    a.preventDefault();
    if (validar(rut.value) && nombre.value && apellidos.value && email.value && email.value.match(/\S+@\S+\.\S+/) &&
        validar(telefono.value) && telefono.value.length == 9 && description.value &&checks() && radio()) {
            document.write("Hemos recibido sus datos, pronto nos estaremos comunicando con usted");
    }
    else {
        if (!document.getElementById("error")) {
            var aux1 = document.createElement("p");
            aux1.setAttribute("id", "error");
            var node = document.createTextNode("Formulario invalido, verifique sus datos nuevamente");
            aux1.appendChild(node);
            aux1.id;
            document.getElementById("body").appendChild(aux1);
            setTimeout(function () {
                document.getElementById("body").removeChild(aux1);
            }, 1000);
        }
    }
});

limpiar.addEventListener("click", function (a) {
    a.preventDefault();
    form.reset();
});
