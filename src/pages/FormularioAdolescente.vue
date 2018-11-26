<template>
  <div class="fixed-center text-center">
    <p class="text-faded">Em breve...</p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/questionario')"
    >Voltar</q-btn>
  </div>
</template>

<script>
export default {
  name: 'FormularioAdolescente'
}
</script>
