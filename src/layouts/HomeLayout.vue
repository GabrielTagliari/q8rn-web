<template>
  <q-layout>

    <q-layout-header>
      <q-toolbar class="fixed-top">
        <q-toolbar-title class="title">
          Q8RN
          <span slot="subtitle">Questionário dos oito remédios naturais</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs class="tabs fixed-bottom" align="center">
        <q-route-tab
          slot="title"
          icon="history"
          to="/your/route"
          replace
          label="Histórico"
        />
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Questionário"
        />
      </q-tabs>
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
  name: 'HomeLayout'
}
</script>

<style>
.title {
  text-align: center;
}
</style>
