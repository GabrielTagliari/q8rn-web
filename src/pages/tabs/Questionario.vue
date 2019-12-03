<template>
  <q-page padding class="column justify-center align-center">
    <div class="row justify-center align-center">
      <q-card class="col" inline style="max-width: 1024px">
        <q-card-media>
          <img src="~assets/remedios.jpeg">
          <q-card-title slot="overlay">
            Escolha o tipo do questionario
          </q-card-title>
        </q-card-media>
        <q-card-actions>
          <q-btn outline size='md' color='primary' class="q-ma-md" id="adulto" @click='abreQuestionarioAdulto'>{{ $t('questionario.adulto') }}</q-btn>
          <q-btn outline size='md' color='secondary' class="q-ma-md" id="adolescente" @click='abreQuestionarioAdolescente'>{{ $t('questionario.adolescente') }}</q-btn>
        </q-card-actions>
        <q-card-separator/>
        <q-card-main>
          Quer saber saber mais?
          <a :href="getPathUrl" download class="q-btn inline relative-position q-btn-item non-selectable q-ma-md q-btn-rectangle q-btn-flat q-focusable q-hoverable text-primary">
            <div class="q-focus-helper"></div>
            <span class="q-btn-inner row col items-center justify-center">Revista Q8RN</span>
          </a>
        </q-card-main>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import questoesPtBr from '../../../mock/questionario_pt_br.json'
import questoesEnUs from '../../../mock/questionario_en_us.json'
import questoesEs from '../../../mock/questionario_es.json'
// import firebase from 'firebase'

export default {
  name: 'Questionario',
  data: () => {
    return {
      questoes: questoesPtBr
    }
  },
  computed: {
    getPathUrl () {
      // var storage = firebase.storage()
      // var gsReference = storage.refFromURL('gs://q8rn-web.appspot.com/panfleto.pdf')
      // return gsReference
      return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/panfleto.pdf?alt=media&token=068146e6-57d9-477a-9aab-30ba036e7a18'
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreQuestionarioAdulto () {
      this.detectarIdioma()
      this.limpaQuestoes()
      this.carregarQuestoesAdulto(this.questoes)
    },
    abreQuestionarioAdolescente () {
      this.detectarIdioma()
      this.limpaQuestoes()
      this.carregarQuestoesAdolescente(this.questoes.filter(questao => questao.tipo === 'ambos'))
    },
    detectarIdioma () {
      if (this.$q.i18n.lang === 'en-us') {
        this.questoes = questoesEnUs
      }
      if (this.$q.i18n.lang === 'es') {
        this.questoes = questoesEs
      }
    },
    limpaQuestoes () {
      this.questoes.forEach(questao => {
        questao.opcaoSelecionada = ''
      })
    }
  }
}
</script>
