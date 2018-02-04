<template>
  <div id="toolbar">
    <i @click="addNote()" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" :class="{starred: favorite}" class="glyphicon glyphicon-star"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
  import store from '../store/store.js'
  export default {
    name: 'Toolbar',
    methods: {
      addNote() {
        this.$store.commit('ADD_NOTE')
      },
      toggleFavorite() {
        this.$store.commit('TOGGLE_FAVORITE')
      },
      deleteNote() {
        this.$store.commit('DELETE_NOTE')
      }
    },
    computed: {
      favorite: function () {
        return this.$store.state.activeNote.favorite
      }
    }
  }
</script>

<style>

</style>
