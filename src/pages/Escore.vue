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
        <div v-for="tema in pontosParaMelhorar.map(ponto => ponto.tema).filter((v, i, a) => a.indexOf(v) === i)" :key="tema">
          <q-item-separator />
          <q-collapsible :avatar="caminhoImagem(tema)" :label="tema" :sublabel="exibePontuacaoPorTema(tema)">
            <q-list>
              <q-item class="row justify-between">
                <q-item-tile label>{{ $t('escore.questao') }}</q-item-tile>
                <q-item-tile label>{{ $t('escore.resposta') }}</q-item-tile>
              </q-item>
              <div v-for="pontoParaMelhorar in pontosParaMelhorar.filter(ponto => ponto.tema === tema)" :key="pontoParaMelhorar.titulo">
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
    ...mapGetters(['getQuestoes'])
  },
  methods: {
    caminhoImagem (tema) {
      return pegaCaminhoImagem(tema)
    },
    populaTotalPontosPorTema () {
      this.totalPontosPorTema = []
      this.getQuestoes.forEach(element => {
        if (element.tema in this.totalPontosPorTema.filter(item => item.tema)) {
          this.totalPontosPorTema.filter(item => item.tema === element.tema)
        }

        this.totalPontosPorTema.push({
          tema: element.tema,
          totalRealizado: element.opcaoSelecionada,
          total: this.getQuestoes.filter(q => q.tema === element.tema).length * 4
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
    calculaResultadoPorEscore () {
      this.escore = this.getQuestoes.map(questao => questao.opcaoSelecionada).reduce((a, b) => a + b, 0)
      this.resultado = this.pegaResultadoPorEscore(this.escore)
    },
    pegaResultadoPorEscore (escore) {
      return escore <= 25 ? this.$t('classificacoes.insuficiente')
        : escore >= 26 && escore <= 44 ? this.$t('classificacoes.regular')
          : escore >= 45 && escore <= 58 ? this.$t('classificacoes.bom')
            : escore >= 59 && escore <= 73 ? this.$t('classificacoes.muitoBom')
              : escore >= 74 && escore <= 88 ? this.$t('classificacoes.excelente')
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
