//Pegar o Id do sol e do body
    var corpo = document.querySelector("#corpo");
    const botao = document.querySelector(".imagem-botao");
//identificar o click do usuario
    botao.addEventListener('click', () => {

        //adicionar a class ao body ou remover a class
        adicionarClass(corpo); 
        
        //trocar a imagem do sol pela lua e vice-versa
        trocarImagem(botao);    
    })

function adicionarClass(corpo){
    if(corpo.className.endsWith("modo-escuro")){
        corpo.classList.remove("modo-escuro");
    }else{
        corpo.classList.add("modo-escuro");
    }   
}
function trocarImagem(botao){
    if(botao.getAttribute("src") == "src/imagens/sun.png"){
        botao.setAttribute("src", "src/imagens/moon.png");
    }else{
        botao.setAttribute("src", "src/imagens/sun.png");    
    }
    
}