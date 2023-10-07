//Si construyéramos un programa de computadora para que sea una linterna, aquí está el fragmento que reconocería si se presionó el botón de la linterna para encender la luz. 

function onButtonTapTurnFlashlightOn() {
    lightBulbOn = true;
}

function onButtonTapTurnFlashlightOn() {
    if (light.bulb == true) {
        light.bulb = false;
    }
    else {
        light.bulb = true;
    }
}



function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

function createArray() {
    var newArray = [0, 1, 2, 3, 4, 5];
    return newArray;        // agregó la sentencia return
}
var needAnArray = createArray();        // ahora needAnArray es la variable que llama a createArray

