<template>
  <div id="note-editor">
    <textarea :value="message" @input="updateMessage">
    </textarea>
  </div>
</template>

<script>
  import store from '../store/store.js'

  export default {
    name: 'Editor',
    computed: {
      message: function() {
        return this.$store.state.activeNote.text
      }
    },
    methods: {
      updateMessage(e) {
        return this.$store.commit('EDIT_NOTE', e.target.value)
      }
    }/**/
  }
</script>

<style>

</style>
