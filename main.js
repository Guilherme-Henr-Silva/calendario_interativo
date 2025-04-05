// Código para tornar calendário interativo, utilizando declaração interativa
function colorirDia() {
    // Bloco de variáveis (escopo de função)
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    // Bloco de validação de informações
    if (!days) {
        alert("Favor informar um dia exitente no calendário")
    }
    else {
        if ((days > 0) && (days < 31)) {
            let td = calendar.getElementsByTagName('td');
            td.style.backgroundColor = color;
        }
        else {
            alert("Favor informar uma data constante no calendário");
        }
    }

    var elementos = document.querySelectorAll('td');

    // Contador de cores utilizadas
    var contadorAzul = 0, contadorVerde = 0, contadorRosa, contadorRoxo = 0;

    // Loop para verificar estilo de cada célula e contar quantas tem cores iguais
    for(let i = 0; i < elementos.length; i++){
        // Obtém o estilo aplicado do elemento atual
        var estilo = window.getComputedStyle(elementos[i]);
        // Obtém a cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;

        // Verifica a cor e incrementa o contador correspondente
        if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "lightblue"){
            contadorAzul++;
        }
        else if(corEstilo === "rgb(152, 251, 152)" || corEstilo === "palegreen"){
            contadorVerde++;
        }
        else if(corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink"){
            contadorRosa++;
        }
        else if(corEstilo === "rgb(106, 90, 205)" || corEstilo === "slateblue"){
            contadorRoxo++;
        }
    }

}