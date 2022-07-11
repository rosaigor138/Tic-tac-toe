class Jogo {
    constructor() {
        this.tabuleiro = [[null,null,null],
            [null,null,null],
            [null,null,null]];
        this.jogadorX = 'x';
        this.jogadorO = 'o';
        this.posicaoVazia = null;
        this.jogadorAnterior = null;
    }
    novaJogada(jogada) {
        var jogador = jogada.charAt(0);
        var coordenadaLinha = parseInt(jogada.charAt(2)-1);
        var coordenadaColuna = parseInt(jogada.charAt(4)-1 );
        if (coordenadaLinha < 0 || coordenadaLinha > 2 || coordenadaColuna < 0 || coordenadaColuna > 2 ||
            this.jogadorAnterior == jogador ||
            this.tabuleiro[coordenadaColuna][coordenadaLinha] != this.posicaoVazia) {
            return false;
        } else {
            this.tabuleiro[coordenadaColuna][coordenadaLinha] = jogador;
            this.jogadorAnterior = jogador;
            return true;
        }
    }
    verificaVencedor(){
        for(var i=0; i<3; i++){
            if(this.tabuleiro[i][0] !== null && this.tabuleiro[i][0] == this.tabuleiro[i][1] && this.tabuleiro[i][0] == this.tabuleiro[i][2]){
                return console.log("O jogador vencedor é: "+this.tabuleiro[i][0]);
            }  
        }
        for(var i=0; i<3; i++){
            if(this.tabuleiro[0][i] !== null && this.tabuleiro[0][i] == this.tabuleiro[1][i] && this.tabuleiro[0][i] == this.tabuleiro[2][i]){
                return console.log("O jogador vencedor é: "+this.tabuleiro[0][i]);
            }  
        }
        if(this.tabuleiro[0][0] !== null && this.tabuleiro[0][0] == this.tabuleiro[1][1] && this.tabuleiro[0][0] == this.tabuleiro[2][2]){
            return console.log("O jogador vencedor é: "+this.tabuleiro[0][0]);
        }
        if(this.tabuleiro[0][2] !== null && this.tabuleiro[0][2] == this.tabuleiro[1][1] && this.tabuleiro[0][2] == this.tabuleiro[2][0]){
            return console.log("O jogador vencedor é: "+this.tabuleiro[0][2]);
        }
    }
    mostrar(){
        console.table(this.tabuleiro);
    }
}
let primeiroJogo = new Jogo();
primeiroJogo.mostrar();
primeiroJogo.novaJogada('x:2,2');
primeiroJogo.mostrar();
primeiroJogo.novaJogada('o:2,1');
primeiroJogo.mostrar();
primeiroJogo.novaJogada('x:3,3');
primeiroJogo.mostrar();
primeiroJogo.novaJogada('o:1,1');
primeiroJogo.mostrar();
primeiroJogo.novaJogada('x:3,1');
primeiroJogo.mostrar();
primeiroJogo.novaJogada('o:1,3');
primeiroJogo.mostrar();
primeiroJogo.novaJogada('x:3,2');
primeiroJogo.mostrar();
primeiroJogo.verificaVencedor();
