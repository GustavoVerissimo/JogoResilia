// inicio do jogo 

confirm("O labirinto é um local sombrio onde as piores criaturas do universo vivem e aqui todo ano pessoas são jogadas dentro dele com o objetivo de que so sairá vivo aquele que tomar as melhores decisões... que comece os jogos. clique em ok para continuar e escolher um personagem.");
function escolherGustavo() {
    var nome = "Gustavo";
    var escolheuGustavo = confirm(`Gustavo é lendario caçador de recompesas que foi capturado pelas por um grupo de piratas espaciais de jogado dentro do labirinto MiSTERIUS.
    Se deseja escolher este lendario caçador de recompensas clique ok, caso prefira outro participante clique em cancelar.`)

    if(escolheuGustavo == true) {
        jornadaGustavo();
    }
}

function escolherCamilla() {
    var nome = "Camilla";
    var escolheuCamilla = confirm(`Camilla é uma das princesas de jupiter que após seu planeta ser invadido por marte, foi vendida e jogada dentro do labirinto MiSTERIUS.
    Se deseja escolher a camilla princesa de jupiter clique ok, caso prefira outro participante clique em cancelar.`)

    if(escolheuCamilla == true) {
        jornadaCamilla();
    }
}

function escolherManuella() {
    var nome = "Manuella";
    var escolheuManuella = confirm(`Manuella a criança que possui um enorme poder porém não sabe usar e por isso foi rapitada para que retissem
    seu poder e logo após isso foi vendida e jogada dentro do labirinto MiSTERIUS.
    Se deseja escolher manuella a criança que possui um enorme clique ok, caso prefira outro participante clique em cancelar.`)

    if(escolheuManuella == true) {
        jornadaManuella();
    }
}

// jornada 

function jornadaGustavo() {

    alert("Voce escolheu O caçador de recompensas lendario e a partir de agr você seguira sua jornada em busca da saida e LEMBRE-SE tome sempre as melhores decisões ou vc ira morrer HAHAHA. clique ok para continuar. ");
    alert("Vc acordou em um dos patios do labririnto porém por ficar dias sem comer e e tomando sedativos vc precisa obter energia através de uma comida. Ha uma pequena arvore com algusn frutos onde um é uma banuva e o outro uma lorango. clique ok para continuar. ");
    var frutas = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 1 para escolher a banuva ou 2 para escolher a lorango");

    if(frutas == 1) {

        continuacaoGustavo();
    } else if (frutas == 2) {
        alert('infelizmente vc escolheu a fruta venenosa e morreu. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
        alert('Volte ao inicio')  }
    else {
        alert('Digite apenas os números 1 ou 2.');
        
    }

}

function jornadaCamilla() {

    alert("Voce escolheu  a camilla princesa de jupiter e a partir de agr você seguira sua jornada em busca da saida e LEMBRE-SE tome sempre as melhores decisões ou vc ira morrer HAHAHA. clique ok para continuar. ");
    alert("Vc acordou em um dos patios do labririnto porém por ficar dias sem comer e e tomando sedativos vc precisa obter energia através de uma comida. Ha uma pequena arvore com algusn frutos onde um é uma banuva e o outro uma lorango. clique ok para continuar. ");
    var frutas = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 1 para escolher a banuva ou 2 para escolher a lorango");

    if(frutas == 2) {

        continuacaoCamilla();
    } else if (frutas == 1) {
        alert('infelizmente vc escolheu a fruta venenosa e morreu. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
        alert('Volte ao inicio')  }
    else {
        alert('Digite apenas os números 1 ou 2.');
        
    }

}

function jornadaManuella() {

    alert("Voce escolheu  a Manuella a criança poderosa e a partir de agr você seguira sua jornada em busca da saida e LEMBRE-SE tome sempre as melhores decisões ou vc ira morrer HAHAHA. clique ok para continuar. ");
    alert("Vc acordou em um dos patios do labririnto porém por ficar dias sem comer e e tomando sedativos vc precisa obter energia através de uma comida. Ha uma pequena arvore com algusn frutos onde um é uma banuva e o outro uma lorango. clique ok para continuar. ");
    var frutas = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 1 para escolher a banuva ou 2 para escolher a lorango");

    if(frutas == 1) {

        continuacaoManuella();
    } else if(frutas == 2) {
        alert('infelizmente vc escolheu a fruta venenosa e morreu. Eu avisei para tomar sempre as melhores decisões HAHAHA.');
        alert('Volte ao inicio')  }
    else{
        alert('Digite apenas os números 1 ou 2.');
        
    }

}

//continuação
 
function continuacaoGustavo() {

    alert("Agora que se alimentou vc se levantou e foi em direção a primeira porta e abriu ela, la seguiu pelo corredor que onde tinha duas portas, uma a direita e outra a esquerda.");
    alert("mas não será tão facil assim, pois em uma das portas a um virus que te matará em instantes então escolha a porta correta e vá em direção a final.")
    var portas = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 1 para escolher a direita ou 2 para escolher a esquerda");

    if(portas == 1) {

        finalGustavo();
    } else if(portas == 2) {
        alert('infelizmente vc escolheu a porta errada e contraiu o virus e morreu. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
        alert('Volte ao inicio')  }
    else{
        alert('Digite apenas os números 1 ou 2.');
        
     }
}

function continuacaoCamilla() {

    alert("Agora que se alimentou vc se levantou e foi em direção a primeira porta e abriu ela, la seguiu pelo corredor que onde tinha duas portas, uma a direita e outra a esquerda.");
    alert("mas não será tão facil assim, pois em uma das portas a um virus que te matará em instantes então escolha a porta correta e vá em direção a final.")
    var portas = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 1 para escolher a direita ou 2 para escolher a esquerda");
    
        if(portas == 1) {
    
            finalCamilla();
        } else if(portas == 2) {
            alert('infelizmente vc escolheu a porta errada e contraiu o virus e morreu. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
            alert('Volte ao inicio')  }
        else {
            alert('Digite apenas os números 1 ou 2.')
            
        }
}

function continuacaoManuella() {

    alert("Agora que se alimentou vc se levantou e foi em direção a primeira porta e abriu ela, la seguiu pelo corredor que onde tinha duas portas, uma a direita e outra a esquerda.");
    alert("mas não será tão facil assim, pois em uma das portas a um virus que te matará em instantes então escolha a porta correta e vá em direção a final.")
    var portas = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 2 para escolher a direita ou 1 para escolher a esquerda");

        if(portas == 2) {

            finalManuella();
        } else if(portas == 1) {
            alert('infelizmente vc escolheu a porta errada e contraiu o virus e morreu. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
            alert('Volte ao inicio')  
        }else{
            alert('Digite apenas os números 3 ou 4.');
        
        }
}

    // final 

function finalGustavo() {

    alert("Parabéns vc abriu a porta correta mas para escapar do labirinto falta ainda uma coisa.");
    alert("a duas capsulas na mesa a sua frente. Uma te dará dinheiro e uma nave para escapar do MISTERIUS  e a outra te transformara em um terrivel animal e ficara para sempre preso no misterius.")
    var capsula = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 2 para escolher a capsula azul ou 1 para escolher a capsula roxa");
    
        if(capsula == 1) {
    
            alert("Parabéns você conseguiu sair do MISTERIUS. Vá embora e cuidade para não retonar HAHAHA.")
        } else if(capsula == 2) {
            alert('infelizmente vc escolheu a capsula venenosa e se trasformou no terrivel animal. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
            alert('Volte ao inicio')  
        }else{
            alert('Digite apenas os números 2 ou 1.')
            
        }
}

function finalCamilla() {

    alert("Parabéns vc abriu a porta correta mas para escapar do labirinto falta ainda uma coisa.");
    alert("a duas capsulas na mesa a sua frente. Uma te dará dinheiro e uma nave para escapar do MISTERIUS  e a outra te transformara em um terrivel animal e ficara para sempre preso no misterius.")
    var capsula = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 2 para escolher a capsula azul ou 1 para escolher a capsula roxa");
        
        if(capsula == 1) {
        
            alert("Parabéns você conseguiu sair do MISTERIUS. Vá embora e cuidade para não retonar HAHAHA.")
        } else if(capsula == 2) {
            alert('infelizmente vc escolheu a capsula venenosa e se trasformou no terrivel animal. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
            alert('Volte ao inicio')  
        } else{
            alert('Digite apenas os números 1 ou 2.')
                
        }
}        


function finalManuella() {

    alert("Parabéns vc abriu a porta correta mas para escapar do labirinto falta ainda uma coisa.");
    alert("a duas capsulas na mesa a sua frente. Uma te dará dinheiro e uma nave para escapar do MISTERIUS  e a outra te transformara em um terrivel animal e ficara para sempre preso no misterius.")
    var capsula = prompt(" Voce tem duas opções e so poderá escolher apenas uma. Digite 1 para escolher a capsula azul ou 2 para escolher a capsula roxa");
            
        if(capsula == 2) {
            
            alert("Parabéns você conseguiu sair do MISTERIUS. Vá embora e cuidade para não retonar HAHAHA.")
        } else if(capsula == 1) {
            alert('infelizmente vc escolheu a capsula venenosa e se trasformou no terrivel animal. Eu avisei para tomar sempre as melhores decisões HAHAHA.')  
            alert('Volte ao inicio'); 
        } else{
            alert('Digite apenas os números 1 ou 2.');
                    
        }
}
        
    
