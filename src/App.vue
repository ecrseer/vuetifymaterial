<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import listinhaC from "./assets/BibliotecaDosComponentes.js";

function importaTodosComponentes(){

    console.log('12039'+listinhaC[0])

}importaTodosComponentes()


export default {
  name: 'App',

  components: {
    HelloWorld,
  },


};
</script>
