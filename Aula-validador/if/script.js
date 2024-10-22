function verificar_idade() {
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.textContent = "Você é maior de idade. Uhu, poederei tirar carteira de motorista!";
    }
    
}

function limpar() {
    const resultado = document.getElementById("resultado");
    const input = document.querySelector("#data_nas");

    input.value = ""
    resultado.textContent = ""
}
