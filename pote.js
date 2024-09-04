export default function Pote(numero, championsLeague) {
    this.numero = numero
    this.clubes = [];
    this.championsLeague = championsLeague
    this.qntdClubes = 0

    this.adicionarClube = function(clube) {
        clube.pote = this
        this.clubes.push(clube)
        if(this.qntdClubes < 9)
            this.qntdClubes++
    }

}