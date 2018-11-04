<template>
  <q-layout>
    <q-layout-header reveal>
      <q-toolbar align="center">
        <q-toolbar-title class="q-pa-xs">
          <img src="../assets/logo_simples.png" alt="Logo" width="50px" height="40px">
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="justify" inverted >
        <q-route-tab default class="tab" slot="title" name="tab-1" label="Histórico" icon="history" to="/"/>
        <q-route-tab class="tab" slot="title" name="tab-2" label="Questionário" icon="assignment" to="/cadastro"/>
        <q-route-tab class="tab" slot="title" name="tab-3" label="Configurações" icon="settings" to="/configuracoes"/>
      </q-tabs>
    </q-layout-header>

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
.tab {
  flex: 1 !important;
}
</style>
