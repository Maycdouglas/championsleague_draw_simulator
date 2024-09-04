export default function Clube(nome,pais, pote) {
    this.nome = nome
    this.pais = pais
    this.pote = pote
    this.isComplete = false
    this.partidas = []
    this.qntdPartidas = 0

    this.adicionarPartida = function(partida) {
        this.partidas.push(partida)
        if(this.qntdPartidas < 8)
            this.qntdPartidas++
    }
    
}