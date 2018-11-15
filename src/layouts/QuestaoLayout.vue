<template>
  <q-layout>
    <q-layout-header reveal>
        <q-toolbar>
          <q-btn
            flat
            round
            dense
            icon="keyboard_arrow_left"
            @click="$router.push('/formulario')"
          />
          <img :src="imgPath" alt="Logo do tema" width="30px" height="30px">
          <q-toolbar-title>
            <span> {{ tema }} </span>
          </q-toolbar-title>
        </q-toolbar>
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated bounceInLeft">
          <q-pagination class="row justify-center" v-model="page" color="tertiary" :min="1" :max="qtdQuestoes" :max-pages="6" direction-links />
        </transition>
    </q-layout-header>

    <q-layout-footer>
    </q-layout-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'QuestaoLayout',
  data: () => {
    return {
      tema: 'Nutrição',
      page: 1,
      imgPath: 'statics/nutrition.svg',
      qtdQuestoes: 25
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-pagination {
  background-color #ffffff
}
</style>
