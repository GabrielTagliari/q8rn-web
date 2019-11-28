<template>
  <q-page padding class="column justify-center align-center">
    <div class="row justify-center align-center">
      <q-card class="col" inline style="max-width: 640px">
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
          <q-btn flat size='md' color='primary' class="q-ma-md" >Revista Q8RN</q-btn>
        </q-card-main>
      </q-card>
      <!-- <q-card class="col" inline style="width: 640px">
        <q-card-media>
          <iframe src="https://drive.google.com/file/d/0B4eySEvTiA_yRFdLT2ZOdFdFSG9zX1FZWnFudEU5dkpVTFNn/preview" width="640" height="480"></iframe>
        </q-card-media>
      </q-card> -->
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import questoesPtBr from '../../../mock/questionario_pt_br.json'
import questoesEnUs from '../../../mock/questionario_en_us.json'
import questoesEs from '../../../mock/questionario_es.json'

export default {
  name: 'Questionario',
  data: () => {
    return {
      questoes: questoesPtBr
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
