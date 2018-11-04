<template>
  <q-page padding>
    <q-list link>
      <q-list-header>Rede</q-list-header>
      <q-item link tag="label">
        <q-item-main label="Sincronização" sublabel="Última sincronização realizada em 04/11/2018" />
        <q-item-side left icon="sync">
        </q-item-side>
      </q-item>
      <q-item link tag="label">
        <q-item-main label="Online" />
        <q-item-side right>
          <q-toggle v-model="checked" />
        </q-item-side>
      </q-item>
    </q-list>
    <q-list class="q-mt-sm q-mb-sm">
      <q-list-header>Tema</q-list-header>
      <q-item link tag="label">
        <q-item-main label="Cor Padrão" />
        <q-item-side right>
          <q-color modal ok-label="Escolher" cancel-label="Cancelar" v-model="corPadrao" />
        </q-item-side>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ConfiguracoesPage',
  data: function () {
    return {
      checked: false,
      corPadrao: '#c52c34'
    }
  }
}
</script>

<style>
</style>
