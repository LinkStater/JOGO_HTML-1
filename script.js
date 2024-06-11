function reset() {
  window.location.href = window.location.href;
}

function tocarAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

function start() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/sala de aula.jpg">';
  conteudo += '<p> O jogador começa em uma sala de aula quando o incêndio começa. O alarme de incêndio está tocando alto, e o jogador pode ouvir gritos e sons de pânico pelos corredores. </p> ';
  conteudo += '</div>';
  conteudo += '<br>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="investigar_gritos()">Investigar os gritos</button>';
  conteudo += '<button onclick="Fugir1()">Fugir</button>';
  conteudo += '</div>';


  $("#principal").append(conteudo)
}

function investigar_gritos() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/corredor.jpg">';
  conteudo += '<p> Ao sair da sala você encontra um bilhete misterioso embrulhado em uma pedra, como se houvesse sido lançado ( a janela está quebrada ) </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="pegar_pedra()">Pegar a pedra</button>';
  conteudo += '<button onclick="Fugir2()">Tentar fugir pela janela</button>'
  conteudo += '</div>';
  
  $("#principal").append(conteudo)

}

function Fugir1() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/corredor.jpg">';
  conteudo += '<p> Você vai ao corredor e encontra um bilhete misterioso embrulhado em uma pedra</p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += ' <button onclick="pegar_pedra()">Pegar a pedra</button>';
  conteudo += ' <button onclick="Fugir2(); tocarAudio()">Tentar fugir pela janela</button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function Fugir2() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/monstro.jpg">';
  conteudo += ' <p> Você desce pela janela e ao chegar no chão, você se depara com o "paranormal" e ele acaba te matando por empalamento </p>'
  conteudo += '<p> Fim de jogo </p>'
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += ' <button onclick="reset()">Recomeçar</button>'
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function pegar_pedra() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/pedra.png">'
  conteudo += '<p> Vc lê o bilhete misterioso e nele diz que o incêndio foi causado  por uma entidade paranormal. Em seguida escuta novamente os gritos de forma mais alta. Vc corre pelo corredor em direção aos gritos, mas de repente uma lixeira misteriosamente foi lançada em sua direção </p>'
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="desviar()">Tentar desviar</button>';
  conteudo += '<button onclick="bloquear()">Tentar bloquear</button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function desviar() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<p> Vc com muito reflexo consegue desviar por pouco sem danos algum e em seguida continua correndo </p>'
  conteudo += '<p> em direção aos gritos, se deparando com uma enorme porta com uma placa escrito “ Biblioteca, Silencio”. Você entra na biblioteca e se depara com livros flutuando e uma estudante flutuando no meio do círculo de livros. Você procura algo na biblioteca para tentar ajudar. </p>'
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="direita()"> Ir para a direita </button>';
  conteudo += '<button onclick="esquerda()"> Ir para a esquerda </button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function bloquear() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<p> Vc com muito reflexo consegue bloquear o golpe da lixeira, porém, com danos, (seu braço ficou machucado) e em seguida continua correndo; </p>'
  conteudo += '<p> em direção aos gritos, se deparando com uma enorme porta com uma placa escrito “ Biblioteca, Silencio”. Você entra na biblioteca e se depara com livros flutuando e uma estudante flutuando no meio do círculo de livros. Você procura algo na biblioteca para tentar ajudar. </p>'
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="direita()">Ir para a direita</button>';
  conteudo += '<button onclick="esquerda()">Ir para a esquerda</button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}
// parte 2

function esquerda() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/ritual.jpg">';
  conteudo += '<p> Ao ir para a esquerda vc não acha nada, apenas livros rasgados no chão, estantes derrubadas etc. </p>'
  conteudo += '<br>'
  conteudo += '<p> Você então decide retornar para o outro caminho </p>'
  conteudo += '<p> Ao ir para o corredor à direita da biblioteca, você se depara com um livro diferente dos demais, com uma aparência mais rústica, bem empoeirado, sua capa parece muito velha. Ao encostar no livro vc desmaia e logo após se encontra em uma sala toda branca, sem porta, sem janela, sem nada, apenas um ritual no meio da sala. </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="ritual()">Entrar no ritual</button>';
  conteudo += '<button onclick="morte()"> Não entrar no ritual </button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function direita() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<img src="imagens/ritual.jpg">';
  conteudo += '<p> Ao ir para o corredor à direita da biblioteca, você se depara com um livro diferente dos demais, com uma aparência mais rústica, bem empoeirado, sua capa parece muito velha. Ao encostar no livro vc desmaia e logo após se encontra em uma sala toda branca, sem porta, sem janela, sem nada, apenas um ritual no meio da sala. </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="ritual()">Entrar no ritual</button>';
  conteudo += '<button onclick="morte(); tocarAudio()"> Não entrar no ritual </button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function ritual() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<p> Entrando no ritual, você desmaia novamente, só que dessa vez você aparece do lado de fora da sala, porém, você descobre que aprendeu a ler livros de magia, e também você sente que consegue executar alguma delas. </p>';
  conteudo += '<p> Agora que você descobriu que pode executar magias, você decide voltar para resgatar a garota que estava flutuando no meio da sala. </p>';
  conteudo += '<p> para salvar a garota, você precisa de um feitiço, chamado abra kadabra. E para recitar a magia é preciso de cacos de vidro e um pouco de folhas de papel(algo não muito dificil de se encontrar no lugar em que está.) </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="magia()">Recitar a magia</button>';
  conteudo += '</div>';
  
  $("#principal").append(conteudo)
}

function morte() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<p> Você decide não entrar no ritual, e por isso acabam se passando horas e horas, e você acaba começando a se sentir zonzo, começa a delirar e acaba morrendo por alucinações </p>';
  conteudo += '<p> Fim de jogo </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="reset(); tocarAudio()">Recomeçar</button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function magia() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<p> Você recita a magia e logo após isso ele desce sobre seus braços ainda desacordada, então você tenta levar ela a algum outro lugar mais seguro. </p>';
  conteudo += '<p> Mas você sente algo estranho, como se fosse um poder que estava emanando por tras de você. </p>';
  conteudo += '<p> Ao olhar para tras você consegue ver ele saindo do chão, e se enfurecendo após ver que o ritual que ele ia fazer estava arruinado, pois a garota havia sido salva. </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="batalhar()">Lutar</button>';
  conteudo += '<button onclick="fugir3(); tocarAudio()">Fugir</button>';
  conteudo += '</div>';
  
  $("#principal").append(conteudo)
}

function batalhar() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += ' <p> Você decide lutar contra o ser, e ele te ataca, mas você consegue se defender e consegue matar ele. </p>';
  conteudo += '<p> Fim de jogo, voce derrotou o monstro e salvou a garota. A´pos o monstro morrer você percebe que o incendio havia parado e fugiu da escola. </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="reset()">Deseja recomeçar?</button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}

function fugir3() {

  var conteudo = "";
  conteudo += '<br>';
  conteudo += '<div class="principal">';
  conteudo += '<p> Você tenta fugir, mas ao olhar para sua frente o ser paranormal ja estava lá. Ele te acerta com um golpe em sua cabeça, e você acaba morrendo </p>';
  conteudo += '<p> Game Over </p>';
  conteudo += '</div>';
  conteudo += '<div class="btn">';
  conteudo += '<button onclick="reset()">Recomeçar</button>';
  conteudo += '</div>';

  $("#principal").append(conteudo)
}
