<template>
  <q-layout>
    <q-layout-header reveal>
        <q-toolbar>
          <botao-voltar />
          <img :src="imgPath" alt="Logo do tema" width="30px" height="30px">
          <q-toolbar-title>
            <span id="tema">{{ tema }}</span>
          </q-toolbar-title>
        </q-toolbar>
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated bounceInLeft">
          <q-pagination direction-links class="row justify-center" v-model="page" color="tertiary" :min="1" :max="getQtdQuestoes" :max-pages="6" @input="irParaQuestao"/>
        </transition>
    </q-layout-header>

    <q-layout-footer>
    </q-layout-footer>

    <q-page-container>
      <router-view @atualizar="atualizar"/>
    </q-page-container>

  </q-layout>
</template>

<script>
import BotaoVoltar from '../components/BotaoVoltar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'QuestionarioLayout',
  components: {
    BotaoVoltar
  },
  data: () => {
    return {
      tema: '',
      page: 1,
      imgPath: '',
      qtdQuestoes: 0
    }
  },
  computed: {
    ...mapGetters(['getQtdQuestoes', 'getTipoQuestionario'])
  },
  methods: {
    atualizar (questao) {
      this.tema = questao.tema
      if (this.getTipoQuestionario === 'adulto') {
        this.page = questao.numero.adulto
      } else {
        this.page = questao.numero.adolescente
      }
      this.imgPath = questao.caminhoImagemTema
    },
    irParaQuestao () {
      this.$router.push('/' + this.getTipoQuestionario + '/questao/' + this.page)
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-pagination {
  background-color #ffffff
}
</style>
