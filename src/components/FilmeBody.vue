<template>
  <v-card
      class="pa-2"
      outlined
      tile  >

    <ul class="list-unstyled mt-3 mb-4">
      <li>{{ filme.valor  }}</li>
      <li>{{ filme.descricao }}</li>
    </ul>
    <v-btn type="button" class="w-100 btn btn-lg btn-outline-primary">Alugar</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'FilmeBody',
  props: {
    filme: Object
  }
}
</script>

<style scoped>

</style>
