<template>
  <q-layout>
    <q-layout-header reveal>
      <q-toolbar align="center">
        <q-toolbar-title class="q-pa-xs">
          <img src="~assets/logo_simples.png" alt="Logo" width="40px" height="35px">
        </q-toolbar-title>
        <q-select id="lang-dropdown" dark class="absolute-right"
          :options="idiomas"
          v-model="locale"
        />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-toolbar align="center">
        <q-toolbar-title>
          Copyright &copy; 2019 q8rn.com
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'HomeLayout',
  data () {
    return {
      locale: this.$q.i18n.lang,
      idiomas: [
        { label: 'Português (BRA)', value: 'pt-br' },
        { label: 'English (US)', value: 'en-us' },
        { label: 'Español', value: 'es' }
      ]
    }
  },
  watch: {
    locale (locale) {
      import(`quasar-framework/i18n/${locale}`).then(lang => {
        this.$q.i18n.set(lang.default)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>

<style>
</style>
