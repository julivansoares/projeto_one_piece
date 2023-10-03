

const pesonagens= [
 {
    id:0,
    nome: "Monkey D Luffy",
    logo: "./imagens/tripulacao-luffy.png",
    descricao:"Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda. Ele é apresentado como um jovem cujo corpo ganha as propriedades de borracha após ter comido a Gomu-Gomu no Mi, uma das várias frutas amaldiçoadas conhecidas como Akuma no Mi ou Frutas do Diabo.",
    imagem: "./imagens/personagem-monkey-d-luffy.png",
    selecionado:"selecionado"
    
},

 {
  id:1,
    nome: "Tony Chopper",
    logo: "./imagens/tripulacao-chopper.png",
    descricao:"Tony Tony Chopper, também conhecido como Amante de Algodão Doce, é um personagem fictício da série de mangá One Piece criada por Eiichiro Oda. Ele é o sexto membro a se juntar e o médico dos Piratas do Chapéu de Palha.",
    imagem: "./imagens/personagem-tony-chopper.png",
    selecionado:" "
    
},
 
 {  
  id:2,
    nome: "Nami",
    logo: "./imagens/tripulacao-nami.png",
    descricao:"Nami, é uma personagem fictícia do mangá e anime One Piece criada por Eiichiro Oda. Nami é introduzida na narrativa como uma aliada oportunista do protagonista Monkey D. Luffy mas que possui motivos nobres por trás de suas ações ambíguas.",
    imagem: "./imagens/personagem-nami.png",
    selecionado:" "
},
 
 {  
  id:3,
    nome: "Roronoa Zoro",
    logo: "./imagens/tripulacao-zoro.png",
    descricao:"Roronoa Zoro, é um personagem fictício da série One Piece criada por Eiichiro Oda. Na história, Zoro era um caçador de piratas que por fim se torna um quando é convencido pelo protagonista Monkey D. Luffy a ser o primeiro membro de sua tripulação, os Piratas do Chapéu de Palha. ",
    imagem: "./imagens/personagem-roronoa-zoro.png",
    selecionado:" "
},
 
 {
  id:4,
    nome: "Sanji",
    logo: "./imagens/tripulacao-sanji.png",
    descricao:"Vinsmoke Sanji é um personagem criado por Eiichiro Oda para o seu mangá e anime One Piece. Ele é introduzido ainda na primeira saga da história como um cozinheiro do restaurante-navio Baratie e depois passa a trabalhar para o capitão Monkey D. Luffy no seu bando dos Piratas do Chapéu de Palha",
    imagem: "./imagens/personagem-sanji.png",
    selecionado:" "
}

]



const personagem = ((p)=>{
   const ul = document.querySelector('.botoes');
   const man= document.querySelector('.personagens');
   
 
    p.forEach((personagem,i)=>{
      ul.innerHTML+=`
      <li > 
      <button class= "botao ${personagem.selecionado}" id=${personagem.id}>
      <img  src=${personagem.logo} alt="${personagem.nome}"  id=${personagem.id}>
      </button>
      </li>
      `
    })

    man.innerHTML +=`
    <div class="personagem  selecionado">
    <img class="imagem" src=${p[0].imagem} alt="${p[0].nome}">
    <div class="conteudo">
    <i class="logo"></i>
    <h2 class="nome-personagem">${p[0].nome}</h2>
    <p class="descricao">${p[0].descricao}</p>
    </div>
    </div>
  `
  pesonagenSelecionado(pesonagens);
    
})


const pesonagenSelecionado =((p,i)=> {
  const man= document.querySelector('.personagens');
  const botoes = document.querySelectorAll('.botao'); 
  botoes.forEach((botao)=>{
    botao.addEventListener('click', (e)=> {
     const btnSelecionado = document.querySelector('.botao.selecionado');
      btnSelecionado.classList.remove('selecionado');
      personagemSelecionadoRemove = document.querySelector('.personagem.selecionado') 
      botao.classList.add("selecionado");
      console.log(personagemSelecionadoRemove);
      personagemSelecionadoRemove.remove();
      man.innerHTML +=`
      <div class="personagem  selecionado">
      <img class="imagem" src=${p[e.target.id].imagem} alt="${p[e.target.id].nome}">
      <div class="conteudo">
      <i class="logo"></i>
      <h2 class="nome-personagem">${p[e.target.id].nome}</h2>
      <p class="descricao">${p[e.target.id].descricao}</p>
      </div>
      </div>
      
    `
    console.log(p[e.target.id].id)
  
    });
    
  }); 
  
});

personagem(pesonagens);







