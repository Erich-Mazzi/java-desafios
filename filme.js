const controles = document.querySelectorAll('.controle');

let itematual = 0;
const itens = document.querySelectorAll('.item');

const maxitens = itens.length;

controles.forEach(controle =>{
    controle.addEventListener('click', () => {
        const btnesquerda = controle.classList.contains('seta-esquerda');
        if (btnesquerda) { 
            itematual -= 1;
        }
        else {
            itematual += 1;
        }

        if (itematual >= maxitens){
            itematual = 0;
        }

        if (itematual < 0){
            itematual = maxitens - 1;
        }

        console.log("controle", btnesquerda, itematual, maxitens);

        itens.forEach(item => item.classList.remove('item-atual'));

        itens[itematual].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });

        itens[itematual].classList.add("item-atual");

    });
});

