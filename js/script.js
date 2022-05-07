function encriptar(texto) {
    let textoEncriptado = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let textoEncriptadoFinal = "";
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < textoEncriptado.length; j++) {
            if (texto[i] == textoEncriptado[j][0]) {
                textoEncriptadoFinal += textoEncriptado[j][1];
            }
        }
    }

    return textoEncriptado;
}

var botaoCriptografar = document.querySelector('.criptografar');
inputTexto = document.querySelector('.inText');
outputTexto = document.querySelector('.outText');

botaoCriptografar.addEventListener("click", function () {
    const texto = inputTexto.value;
    if (texto.length > 0) {

        console.log(texto);
        const textoEncriptado = encriptar(inputTexto.value);

        outputTexto.innerHTML = texto;



        if (getComputedStyle(document.querySelector('.direita')).justifyContent == 'end') {
            document.querySelector('.direita').style.justifyContent = 'center';
        } else {
            document.querySelector('.direita').style.justifyContent = 'end';
        }
        document.querySelector('.resultado').classList.toggle('escondido');
        document.querySelector('.resultado-imagem').classList.toggle('escondido');
    }
});

inputTexto.addEventListener("keyup", function () {

    const texto = inputTexto.value;
    console.log(texto, texto.length);
    if (texto.length == 0) {
        document.querySelector('.resultado-imagem').classList.toggle('escondido');
        document.querySelector('.direita').style.justifyContent = 'center';
        document.querySelector('.resultado').classList.toggle('escondido');
        console.log('Tamanho zero');

    }
});
