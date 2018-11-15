<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <q-list highlight>
        <q-list-header>Questionários Recentes</q-list-header>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Jim Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 100" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Gina Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 95" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Carlos Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 70" />
        </q-item>
        <q-item-separator />
        <q-list-header>Questionários Anteriores</q-list-header>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Donna Doe" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Jim Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 100" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Gina Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 95" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Carlos Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 70" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Jim Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 100" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/female.svg" />
          <q-item-main label="Gina Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 95" />
        </q-item>
        <q-item link @click.native="$router.push('/entrevistado')">
          <q-item-side avatar="statics/male.svg" />
          <q-item-main label="Carlos Doe" />
          <q-item-side right stamp="01/11/2018 - Escore: 70" />
        </q-item>
      </q-list>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'HistoricoPage'
}
</script>

<style>
</style>
