function verifica_num() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    switch (numero) {
        case 1:
            resultado.textContent = "Você escolheu o numero 1";
            break;

        case 2:
            resultado.textContent = "Você escolheu o numero 2";
            break;  

        case 3:
            resultado.textContent = "Você escolheu o numero 3";
            break;   

        case 4:
            resultado.textContent = "Você escolheu o numero 4";
            break;          
            
        case 5:
            resultado.textContent = "Você escolheu o numero 5";
            break;      
    }
}