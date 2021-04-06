const form = document.querySelector("form") as HTMLFormElement;

const nombre = document.getElementById("nombre") as HTMLInputElement;
const apellidos = document.getElementById("apellidos") as HTMLInputElement;
const rut = document.getElementById("rut") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const telefono = document.getElementById("telefono") as HTMLInputElement;
const description = document.getElementById("description") as HTMLInputElement;
const enviar = document.getElementById("enviar") as HTMLInputElement;
const limpiar = document.getElementById("limpiar") as HTMLInputElement;

const python = document.getElementById("python") as HTMLInputElement;
const java = document.getElementById("java") as HTMLInputElement;
const typescript = document.getElementById("typescript") as HTMLInputElement;
const php = document.getElementById("php") as HTMLInputElement;
const c = document.getElementById("c") as HTMLInputElement;
const cc = document.getElementById("cc") as HTMLInputElement;

const año1 = document.getElementById("1") as HTMLInputElement;
const año2 = document.getElementById("2") as HTMLInputElement;
const año3 = document.getElementById("3") as HTMLInputElement;
const año4 = document.getElementById("4") as HTMLInputElement;
const año5 = document.getElementById("5") as HTMLInputElement;

function checks(): boolean {
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

function radio(): boolean {
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

function validar(num: string): boolean {
    if (!num.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}

enviar.addEventListener("click", (a: Event) => {

    a.preventDefault();

    if (validar(rut.value) && nombre.value && apellidos.value && email.value && email.value.match(/\S+@\S+\.\S+/) &&
        validar(telefono.value) && telefono.value.length == 9 && description.value && checks() && radio()) {
            document.write("Hemos recibido sus datos, pronto nos estaremos comunicando con usted");
    } 
    else {
        if (!document.getElementById("error")) {

            const aux = document.createElement("p");
            aux.setAttribute("id", "error");
            const node = document.createTextNode("Formulario invalido, verifique sus datos nuevamente");
            aux.appendChild(node);
            aux.id
            document.getElementById("body").appendChild(aux);

            setTimeout(function () {
                document.getElementById("body").removeChild(aux);
            }, 1000);
        }

    }

})

limpiar.addEventListener("click", (a: Event) => {
    a.preventDefault();
    form.reset();
})

