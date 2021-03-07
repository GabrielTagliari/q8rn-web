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
          {{ $t('revista.titulo') }}
          <a :href="getPathUrl" download target="_blank" class="q-btn inline relative-position q-btn-item non-selectable q-ma-md q-btn-rectangle q-btn-flat q-focusable q-hoverable text-primary">
            <div class="q-focus-helper"></div>
            <span class="q-btn-inner row col items-center justify-center">{{ $t('revista.botao') }}</span>
          </a>
          {{ $t('downloadQuestionario') }}
          <a :href="getPathUrlAdultPDF" download target="_blank" class="q-btn inline relative-position q-btn-item non-selectable q-ma-md q-btn-rectangle q-btn-flat q-focusable q-hoverable text-primary">
            <div class="q-focus-helper"></div>
            <span class="q-btn-inner row col items-center justify-center">{{ $t('questionario.adulto') }}</span>
          </a>
          <a :href="getPathUrlAdolescentPDF" download target="_blank" class="q-btn inline relative-position q-btn-item non-selectable q-ma-md q-btn-rectangle q-btn-flat q-focusable q-hoverable text-primary">
            <div class="q-focus-helper"></div>
            <span class="q-btn-inner row col items-center justify-center">{{ $t('questionario.adolescente') }}</span>
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
    },
    getPathUrlAdultPDF () {
      if (this.$q.i18n.lang === 'pt-br') {
        return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/questionnaries%2FQ8RN%20(Portuguese%20version_Adults).pdf?alt=media&token=a51feb53-f6a6-4d06-b3c8-8271b1163257'
      }
      if (this.$q.i18n.lang === 'en-us') {
        return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/questionnaries%2FQ8RN%20(English%20version_Adults).pdf?alt=media&token=947c664f-594d-4258-81f6-6252bf69b6d5'
      }
      if (this.$q.i18n.lang === 'es') {
        return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/questionnaries%2FQ8RN%20(Spanish%20Version_%20Adults).pdf?alt=media&token=233a7f04-c0f8-4b12-a8b7-91eeee93cd71'
      }
    },
    getPathUrlAdolescentPDF () {
      if (this.$q.i18n.lang === 'pt-br') {
        return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/questionnaries%2FQ8RN%20(Portuguese%20version_Adolescent).pdf?alt=media&token=93dcf512-d984-480b-adc1-2f85a6d9b258'
      }
      if (this.$q.i18n.lang === 'en-us') {
        return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/questionnaries%2FQ8RN%20(English%20version_Adolescent).pdf?alt=media&token=8b57e2e8-7a52-43f4-bbce-726ab1506d33'
      }
      if (this.$q.i18n.lang === 'es') {
        return 'https://firebasestorage.googleapis.com/v0/b/q8rn-web.appspot.com/o/questionnaries%2FQ8RN%20(Spanish%20Version_%20Adolescent).pdf?alt=media&token=5ffe03b4-243a-4e0a-ba3e-0bc6d2fcd7ba'
      }
    }
  },
  methods: {
    ...mapActions(['carregarQuestoesAdulto', 'carregarQuestoesAdolescente']),
    abreQuestionarioAdulto () {
      this.$analytics.logEvent('click_questionario_adulto')
      this.detectarIdioma()
      this.limpaQuestoes()
      this.carregarQuestoesAdulto(this.questoes)
    },
    abreQuestionarioAdolescente () {
      this.$analytics.logEvent('click_questionario_adolescente')
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
