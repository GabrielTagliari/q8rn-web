<template>
  <q-page padding>
    <div class="animate-pop">
      <q-list separator>
        <q-item class="row justify-between items-center">
          <span>Pontuação: {{ escore }}</span>
          <span>Resultado: {{ resultado }}</span>
        </q-item>
      </q-list>
      <q-list separator class="q-mt-sm q-mb-sm">
        <q-list-header>Pontos a melhorar</q-list-header>
        <div v-for="tema in pontosParaMelhorar.map(ponto => ponto.tema).filter((v, i, a) => a.indexOf(v) === i)" :key="tema">
          <q-item-separator />
          <q-collapsible :avatar="caminhoImagem(tema)" :label="tema" :sublabel="exibePontuacaoPorTema(tema)">
            <q-list>
              <q-item class="row justify-between">
                <q-item-tile label>Questão</q-item-tile>
                <q-item-tile label>Resposta</q-item-tile>
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
          <q-btn rounded color="primary" label="Voltar ao menu" class="botao-responder q-ma-sm" @click="abrePopUpConfirmacaoRetorno"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import ItemPontoMelhorar from '../components/ItemPontoMelhorar.vue'
import { pegaCaminhoImagem, pegaResultadoPorEscore } from '../helpers/de-para.js'

export default {
  name: 'Escore',
  data: () => {
    return {
      escore: 48,
      resultado: '',
      totalPontosPorTema: [
        {tema: 'Nutrição', totalRealizado: 5, total: 12},
        {tema: 'Exercício', totalRealizado: 7, total: 12},
        {tema: 'Água', totalRealizado: 8, total: 8},
        {tema: 'Sol', totalRealizado: 6, total: 8},
        {tema: 'Temperança', totalRealizado: 15, total: 16},
        {tema: 'Ar puro', totalRealizado: 2, total: 8},
        {tema: 'Descanso', totalRealizado: 1, total: 8},
        {tema: 'Confiança', totalRealizado: 4, total: 16}
      ],
      pontosParaMelhorar: [
        {
          tema: 'Nutrição',
          titulo: 'Com que frequência você inclui nas principais refeições do dia: feijões, cereais integrais, castanhas, frutas, legumes e verduras?',
          resposta: 'Raramente',
          pontos: 1
        },
        {
          tema: 'Nutrição',
          titulo: 'Quantos dos itens a seguir você consome uma ou mais vezes por semana? (salgadinhos, bolachas, frituras, refrigerantes e doces de maneira geral)',
          resposta: 'Raramente',
          pontos: 3
        },
        {
          tema: 'Exercício',
          titulo: 'Quantos minutos você gasta “em média” quando faz exercícios intensos até suar?',
          resposta: '30 a 60 minutos',
          pontos: 4
        },
        {
          tema: 'Confiança',
          titulo: 'Sua confiança em Deus (Ser Superior ou algo sagrado) influencia positivamente sua maneira de viver?',
          resposta: 'Algumas vezes',
          pontos: 2
        },
        {
          tema: 'Confiança',
          titulo: 'Sua confiança em Deus (Ser Superior ou algo sagrado) influencia positivamente?',
          resposta: 'Algumas vezes',
          pontos: 3
        }
      ]
    }
  },
  components: {
    ItemPontoMelhorar
  },
  mounted () {
    this.calculaResultadoPorEscore()
  },
  methods: {
    caminhoImagem (tema) {
      return pegaCaminhoImagem(tema)
    },
    calculaResultadoPorEscore () {
      this.resultado = pegaResultadoPorEscore(this.escore)
    },
    exibePontuacaoPorTema (tema) {
      return 'Pontos: ' + this.calculaTotalPontosRealizadosPorTema(tema) + '/' + this.calculaTotalPontosPorTema(tema)
    },
    calculaTotalPontosRealizadosPorTema (tema) {
      return this.totalPontosPorTema.filter(ponto => ponto.tema === tema).map(ponto => ponto.totalRealizado).reduce(ponto => ponto.totalRealizado)
    },
    calculaTotalPontosPorTema (tema) {
      return this.totalPontosPorTema.filter(total => total.tema === tema).map(total => total.total)
    },
    abrePopUpConfirmacaoRetorno () {
      this.$q.dialog({
        title: 'Alerta',
        message: 'Após voltar ao menu não será mais possível visualizar os pontos a melhorar. Deseja voltar ao menu?',
        ok: 'Sim',
        cancel: 'Não'
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
