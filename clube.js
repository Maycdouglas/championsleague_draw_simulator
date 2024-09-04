export default function Clube(nome,pais, pote) {
    this.nome = nome
    this.pais = pais
    this.pote = pote
    this.isComplete = false
    this.partidas = [] // Deve receber um vetor com o clube e se é em casa ou fora

}