

const pesonagens= [
 {
    nome: "Monkey D Luffy",
    logo: "./imagens/tripulacao-luffy.png",
    descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita voluptatibus reprehenderit iste, quo dolorum ratione maxime quia earum nihil itaque eum possimus culpa accusantium ipsam! Repudiandae similique cum neque!",
    imagem: "./imagens/personagem-monkey-d-luffy.png",
    
},

 {
    nome: "Tony Chopper",
    logo: "./imagens/tripulacao-chopper.png",
    descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita voluptatibus reprehenderit iste, quo dolorum ratione maxime quia earum nihil itaque eum possimus culpa accusantium ipsam! Repudiandae similique cum neque!",
    imagem: "./imagens/personagem-tony-chopper.png"
    
    
},
 
 {
    nome: "Nami",
    logo: "./imagens/tripulacao-nami.png",
    descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita voluptatibus reprehenderit iste, quo dolorum ratione maxime quia earum nihil itaque eum possimus culpa accusantium ipsam! Repudiandae similique cum neque!",
    imagem: "./imagens/personagem-nami.png"
    
},
 
 {
    nome: "Roronoa Zoro",
    logo: "./imagens/tripulacao-zoro.png",
    descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita voluptatibus reprehenderit iste, quo dolorum ratione maxime quia earum nihil itaque eum possimus culpa accusantium ipsam! Repudiandae similique cum neque!",
    imagem: "./imagens/personagem-roronoa-zoro.png"
   
},
 
 {
    nome: "Sanji",
    logo: "./imagens/tripulacao-sanji.png",
    descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita voluptatibus reprehenderit iste, quo dolorum ratione maxime quia earum nihil itaque eum possimus culpa accusantium ipsam! Repudiandae similique cum neque!",
    imagem: "./imagens/personagem-sanji.png"
 
}

]


pesonagens.forEach((pesonagem)=> {
    let man= document.querySelector('.personagens');
    let li= document.querySelector('.botoes');
  man.innerHTML +=`
  <div class="personagem  selecionado">
  <img class="imagem" src=${pesonagem.imagem} alt="${pesonagem.nome}">
    <div class="conteudo">
    <i class="logo"></i>
    <h2 class="nome-personagem">${pesonagem.nome}</h2>
    <p class="descricao">${pesonagem.descricao}</p>
    </div>
    </div>
    `
    li.innerHTML+=`
    <li > 
    <button class= "botao selecionado">
    <img  src=${pesonagem.logo} alt="${pesonagem.nome}">
    </button>
    </li>
    `
});

const botao = document.querySelectorAll(".botao");



botao.forEach((btn)=>{
  btn.addEventListener('click',()=>{
  const btnSelecionado =document.querySelector(".botao.selecionado");
  const pesonagemSelecionado = document.querySelector(".personagem.selecionado");
  const pesonagem = document.querySelectorAll('.personagem');
  
  btnSelecionado.classList.remove("selecionado");
  pesonagemSelecionado.classList.remove("selecionado");

  console.log(pesonagemSelecionado);

    btn.classList.add("selecionado");
    pesonagem.classList.add("selecionado");

    
  });
});