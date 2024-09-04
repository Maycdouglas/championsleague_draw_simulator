import Clube from './clube.js'
import Pote from './pote.js'
import Partida from './partida.js'

export default function ChampionsLeague(temporada) {
    this.temporada = temporada
    this.potes = [];
    this.qntdPotes = 0
    this.allMatches = []

    this.criarPote = function(numero) {
        const pote = new Pote(numero, this)
        this.potes.push(pote)
        if(this.qntdPotes < 4)
            this.qntdPotes++
        return pote
    }

    this.sortearPartidas = function(pote) {
        
        let clubesNaoSorteados = selecionarClubesNaoSorteados(pote.clubes)

        //Sorteia o clube
        let indiceSorteado = Math.floor(Math.random() * clubesNaoSorteados.length)
        let clube = clubesNaoSorteados[indiceSorteado]

        for(let poteAdversario of this.potes) {
            let adversario = sortearPartidasPote(poteAdversario.clubes,clube)
            const partida = new Partida(clube,adversario,this)
            clube.adicionarPartida(partida)
        }
        
        clube.isComplete = true
        console.log(clube.partidas)
        return clubesNaoSorteados[indiceSorteado]
    }

    function selecionarClubesNaoSorteados(clubes) {
        let clubesNaoSorteados = []
        let indiceClube = 0

        for(let clube of clubes) {
            if(clube.isComplete === false){
                clubesNaoSorteados[indiceClube] = clube
                indiceClube = indiceClube + 1
            }
        }

        return clubesNaoSorteados
    }

    function selecionarAdversariosNaoSorteados(adversarios, clube) {
        let adversariosNaoSorteados = []
        let indiceAdversario = 0

        for(let adversario of adversarios) {
            if(adversario.isComplete === false && clube != adversario){
                adversariosNaoSorteados[indiceAdversario] = adversario
                indiceAdversario = indiceAdversario + 1
            }
        }

        return adversariosNaoSorteados
    }

    function sortearPartidasPote(clubesPote,clube) {
        let adversariosNaoSorteados = selecionarAdversariosNaoSorteados(clubesPote, clube)
        
        //Sorteia o adversário
        let indiceSorteado = Math.floor(Math.random() * adversariosNaoSorteados.length)
        let adversario = adversariosNaoSorteados[indiceSorteado]

        return adversario
    }

    
}

