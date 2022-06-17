let jogador0 = prompt('Qual o nome do jogador 1 "X"?');
let jogador1 = prompt('Qual o nome do jogador 2 "O"?');
var ca1;
var ca2;
var ca3;
var ca4;
var ca5;
var ca6;
var ca7;
var ca8;
var ca9;
var casa = ''

var venceu = 0;
var jogador = 0;

function jogada(casa, posicao){
    if (jogador == 0) {
        document.querySelector(posicao).setAttribute("src", "x.png");
        switch (casa) {
          case 'casa1':
            ca1 = 0;
            break
          case 'casa2':
            ca2 = 0;
            break
          case 'casa3':
            ca3 = 0;
            break
          case 'casa4':
            ca4 = 0;
            break
          case 'casa5':
            ca5 = 0;
            break
          case 'casa6':
            ca6 = 0;
            break
          case 'casa7':
            ca7 = 0;
            break
          case 'casa8':
            ca8 = 0;
            break
          case 'casa9':
            ca9 = 0;
            break
        }
        jogador = 1;
      } else {
        document.querySelector(posicao).setAttribute("src", "o.png");
        switch (casa) {
          case 'casa1':
            ca1 = 1;
            break
          case 'casa2':
            ca2 = 1;
            break
          case 'casa3':
            ca3 = 1;
            break
          case 'casa4':
            ca4 = 1;
            break
          case 'casa5':
            ca5 = 1;
            break
          case 'casa6':
            ca6 = 1;
            break
          case 'casa7':
            ca7 = 1;
            break
          case 'casa8':
            ca8 = 1;
            break
          case 'casa9':
            ca9 = 1;
            break
        }
        jogador = 0;
      }
}

function marcar(pos) {
  casa = pos
  var posicao = "." + pos;
  if (ca1 == 0 && ca2 ==0 && ca3 ==0 || ca1 == 0 && ca4 ==0 && ca7 ==0 || ca1 == 0 && ca5 ==0 && ca9 ==0 || ca7 == 0 && ca8 ==0 && ca9 ==0 || ca4 == 0 && ca5 == 0 && ca6 ==0 || ca3 == 0 && ca6 ==0 && ca9 ==0 || ca3 == 0 && ca5 == 0 && ca7 == 0 || ca2 == 0 & ca5 == 0 && ca8 == 0){
    alert('O Jogador ' + jogador0 + ' Venceu!')
    location.reload()
} if(ca1 == 1 && ca2 == 1 && ca3 == 1 || ca1 == 1 && ca4 == 1 && ca7 == 1 || ca1 == 1 && ca5 == 1 && ca9 == 1 || ca7 == 1 && ca8 == 1 && ca9 == 1 || ca4 == 1 && ca5 == 1 && ca6 == 1 || ca3 == 1 && ca6 == 1 && ca9 == 1 || ca3 == 1 && ca5 == 1 && ca7 == 1 || ca2 == 1 & ca5 == 1 && ca8 == 1){
  alert('O Jogador ' + jogador1 + ' Venceu!')
  location.reload()
}
else {
    jogada(casa, posicao)
}}

