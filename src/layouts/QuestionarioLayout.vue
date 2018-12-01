<template>
  <q-layout>
    <q-layout-header reveal>
        <q-toolbar>
          <botao-voltar />
          <img :src="imgPath" alt="Logo do tema" width="30px" height="30px">
          <q-toolbar-title>
            <span> {{ tema }} </span>
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
import { pegaCaminhoImagem } from '../helpers/de-para.js'
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
    ...mapGetters(['getQtdQuestoes'])
  },
  methods: {
    atualizar (questao) {
      this.tema = questao.tema
      this.page = questao.numero
      this.imgPath = this.atualizarImagemTema()
    },
    atualizarImagemTema () {
      return pegaCaminhoImagem(this.tema)
    },
    irParaQuestao () {
      this.$router.push('/questionario/questao/' + this.page)
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-pagination {
  background-color #ffffff
}
</style>
