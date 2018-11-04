<template>
  <q-page padding>
    <div class="column absolute-center">
      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="primary" class="q-ma-md" @click="abrirModal()">Cadastro existente</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="secondary" class="q-ma-md" @click="$router.push('/formulario')">Não possuo cadastro</q-btn>
      </transition>

      <transition appear enter-active-class="animated flipInX" leave-active-class="animated bounceInLeft">
        <q-btn rounded outline size="lg" color="tertiary" class="q-ma-md" @click="$router.push('/questionario')">Questionário sem cadastro</q-btn>
      </transition>
    </div>
    <q-modal v-model="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn
            flat
            round
            dense
            v-close-overlay
            icon="keyboard_arrow_left"
          />
          <q-toolbar-title>
            Buscar cadastro existente
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar inverted slot="header">
          <q-search v-model="search" class="col-6" color="secondary" placeholder="Digite o nome do entrevistado"/>
        </q-toolbar>

        <div class="layout-padding">
          <q-btn
            color="primary"
            v-close-overlay
            label="Close"
          />
        </div>
      </q-modal-layout>
    </q-modal>
  </q-page>
</template>

<script>
export default {
  name: 'QuestionarioPage',
  data: () => {
    return {
      layoutModal: false,
      search: ''
    }
  },
  methods: {
    abrirModal () {
      this.layoutModal = true
    }
  }
}
</script>

<style>
</style>
