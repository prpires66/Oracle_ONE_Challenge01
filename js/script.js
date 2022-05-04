const inputTexto = document.querySelector('#texto');
const mensagem = document.querySelector('#mensagem');

function btnEncriptar() {
    const texto = inputTexto.value;
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.innerHTML = textoEncriptado;
}

function encriptar(texto) {
    let textoEncriptado = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
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



