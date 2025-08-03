// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigoinp = document.getElementById("amigo");
const listar = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const arrAmigo = [];
let encon = false;
let amigoSor = "";

function agregarAmigo() {

    var valam = amigoinp.value;
    var li = document.createElement('li');
    if (valam) {

        encon = arrAmigo.includes(valam);
        if (encon) {
            alertas("Ya se encuentra este amigo en el App.");
        } else {

            arrAmigo.push(valam);
            li.textContent = valam;
            li.value = valam;
            listar.appendChild(li);

        }
        amigoinp.value = "";
        console.log("existe valam : ", valam, arrAmigo, encon);
    } else {
        alertas("Por Favor Ingrese un Nombre.");
    }


}


function sortearAmigo() {
    const amigoAle = elegirAmigo(arrAmigo);// elegir amigo
    var li = document.createElement('li');
    li.textContent = amigoAle;
    li.value = amigoAle;
    resultado.appendChild(li);

    console.log(amigoAle);
}

function elegirAmigo(array) {
    const intelegido = Math.floor(Math.random() * array.length); // busqueda del amigo en el array
    return array[intelegido];
}

function alertas(msg) {
    alert(msg);
};

