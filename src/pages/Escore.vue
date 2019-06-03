<template>
  <q-page padding>
    <div class="animate-pop">
      <q-list separator>
        <q-item class="row justify-between items-center">
          <span id="escore">{{ $t('escore.pontuacao').concat(': ').concat(escore) }}</span>
          <span id="classificacao">{{ $t('escore.classificacao').concat(': ').concat(resultado) }}</span>
        </q-item>
      </q-list>
      <q-list separator class="q-mt-sm q-mb-sm">
        <q-list-header>{{ $t('escore.pontosMelhorar') }}</q-list-header>
        <div v-for="tema in getTemasPontosMelhorar()" :key="tema.titulo">
          <q-item-separator />
          <q-collapsible :avatar="tema.caminhoImagemTema" :label="tema.titulo" :sublabel="exibePontuacaoPorTema(tema.titulo)">
            <q-list>
              <q-item class="row justify-between">
                <q-item-tile label>{{ $t('escore.questao') }}</q-item-tile>
                <q-item-tile label>{{ $t('escore.resposta') }}</q-item-tile>
              </q-item>
              <div v-for="pontoParaMelhorar in pontosParaMelhorar.filter(ponto => ponto.tema.titulo === tema.titulo)" :key="pontoParaMelhorar.titulo">
                <q-item-separator />
                <q-item>
                  <item-ponto-melhorar :questao="pontoParaMelhorar.titulo"
                    :resposta="pontoParaMelhorar.resposta"
                    :pontos="pontoParaMelhorar.pontos"
                  />
                </q-item>
              </div>
            </q-list>
          </q-collapsible>
        </div>
      </q-list>
      <div class="flex justify-end">
          <q-btn rounded color="primary" :label="$t('escore.voltarMenu')" class="botao-responder q-ma-sm" @click="abrePopUpConfirmacaoRetorno"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import ItemPontoMelhorar from '../components/ItemPontoMelhorar.vue'
import { pegaCaminhoImagem } from '../helpers/de-para.js'
import { TipoQuestionario } from '../helpers/TipoQuestionarioEnum.js'
import { mapGetters } from 'vuex'

export default {
  name: 'Escore',
  data: () => {
    return {
      escore: 0,
      resultado: '',
      totalPontosPorTema: [],
      pontosParaMelhorar: []
    }
  },
  components: {
    ItemPontoMelhorar
  },
  mounted () {
    this.calculaResultadoPorEscore()
    this.calculaPontosParaMelhorar()
    this.populaTotalPontosPorTema()
  },
  computed: {
    ...mapGetters(['getQuestoes', 'getTipoQuestionario'])
  },
  methods: {
    caminhoImagem (tema) {
      return pegaCaminhoImagem(tema)
    },
    populaTotalPontosPorTema () {
      this.totalPontosPorTema = []
      this.getQuestoes.forEach(element => {
        if (element.tema.titulo in this.totalPontosPorTema.filter(item => item.tema.titulo)) {
          this.totalPontosPorTema.filter(item => item.tema.titulo === element.tema.titulo)
        }

        this.totalPontosPorTema.push({
          tema: element.tema.titulo,
          totalRealizado: element.opcaoSelecionada,
          total: this.getQuestoes.filter(q => q.tema.titulo === element.tema.titulo).length * 4
        })
      })
    },
    calculaPontosParaMelhorar () {
      this.pontosParaMelhorar = this.getQuestoes.filter(questao => questao.opcaoSelecionada <= 2).map(questao => {
        let pontos = {
          tema: questao.tema,
          titulo: questao.titulo,
          resposta: questao.opcoes.filter(opcao => opcao.valor === questao.opcaoSelecionada).map(opcao => opcao.titulo)[0],
          pontos: questao.opcaoSelecionada
        }
        return pontos
      })
    },
    getTemasPontosMelhorar () {
      return this.pontosParaMelhorar.map(ponto => ponto.tema).reduce((novaLista, elementoAtual) => {
        if (!novaLista.some(elemento => elemento.titulo === elementoAtual.titulo)) {
          novaLista.push(elementoAtual)
        }
        return novaLista
      }, [])
    },
    calculaResultadoPorEscore () {
      this.escore = this.getQuestoes.map(questao => questao.opcaoSelecionada).reduce((a, b) => a + b, 0)
      if (this.getTipoQuestionario === TipoQuestionario.ADULTO) {
        this.resultado = this.pegaClassificacaoPorEscoreAdulto()
      } else {
        this.resultado = this.pegaClassificacaoPorEscoreAdolescente()
      }
    },
    pegaClassificacaoPorEscoreAdulto () {
      let escala = [25, 44, 58, 73, 88]
      return this.pegaClassificacaoPorEscore(escala)
    },
    pegaClassificacaoPorEscoreAdolescente () {
      let escala = [22, 49, 51, 63, 76]
      return this.pegaClassificacaoPorEscore(escala)
    },
    pegaClassificacaoPorEscore (escala) {
      return this.escore <= escala[0] ? this.$t('classificacoes.insuficiente')
        : this.escore >= escala[0] + 1 && this.escore <= escala[1] ? this.$t('classificacoes.regular')
          : this.escore >= escala[1] + 1 && this.escore <= escala[2] ? this.$t('classificacoes.bom')
            : this.escore >= escala[2] + 1 && this.escore <= escala[3] ? this.$t('classificacoes.muitoBom')
              : this.escore >= escala[3] + 1 && this.escore <= escala[4] ? this.$t('classificacoes.excelente')
                : this.$t('classificacoes.indefinido')
    },
    exibePontuacaoPorTema (tema) {
      return this.$t('escore.pontos')
        .concat(': ')
        .concat(this.calculaTotalPontosRealizadosPorTema(tema))
        .concat('/').concat(this.calculaTotalPontosPorTema(tema))
    },
    calculaTotalPontosRealizadosPorTema (tema) {
      return this.totalPontosPorTema.filter(ponto => ponto.tema === tema).map(ponto => ponto.totalRealizado).reduce((a, b) => a + b, 0)
    },
    calculaTotalPontosPorTema (tema) {
      return this.totalPontosPorTema.filter(total => total.tema === tema).map(total => total.total)[0]
    },
    abrePopUpConfirmacaoRetorno () {
      this.$q.dialog({
        title: this.$t('escore.alertaPopUp.alerta'),
        message: this.$t('escore.alertaPopUp.mensagem.alerta'),
        ok: this.$t('sim'),
        cancel: this.$t('nao')
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
