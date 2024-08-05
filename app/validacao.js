function verificaChuteValido(chute){

    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `
            <div>Valor Inválido</div>
        `
        return
    }

    if(numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `
        <div>
            Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}
        </div>
        
        `
        return
    }

    if(numero === numeroSecreto){
      
    setTimeout(() =>{
        
        let params = {
            particleCount: 1000, 
            spread: 100, 
            startVelocity: 80, 
            origin: { x: 0, y: 0.999 }, 
            angle: 45 
        };

        confetti(params);

        params.origin.x = 1;
        params.angle = 140;
        confetti(params);

    },100);
    
        document.body.innerHTML = `
        <h1 class="animate-emoji">🎉 Parabéns! 🎉</h1>
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
    else{
        if(numero > numeroSecreto){
            elementoChute.innerHTML += `
                <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
            `
        }
        else{
            elementoChute.innerHTML += `
                <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
            `
        }
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
