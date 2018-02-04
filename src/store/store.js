/**
 * Created by Administrator on 2018/2/3 0003.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, TOGGLE_FAVORITE, SET_ACTIVE_NOTE  } from './mutation-types'

Vue.use(Vuex)

const state = {
  // NotesList 列表
  notes: [],
  // 当前选中组件，Toobar的收藏和删除、NotesList通过高亮显示、Editor的展示及其编辑
  activeNote: {}

}

const mutations = {
  [ADD_NOTE] (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    };
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [EDIT_NOTE] (state, text)  {
    state.activeNote.text = text
  },
  [DELETE_NOTE] (state) {
    let index = state.notes.indexOf(state.activeNote)

    if (index !== -1) {
      state.notes.splice(index, 1)
      state.activeNote = {}
    }
    if (state.notes[0] !== undefined) {
      state.activeNote = state.notes[0]
    }
  },
  [SET_ACTIVE_NOTE] (state, note) {
    state.activeNote= note
  },
  [TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  }
}

export default new Vuex.Store({
  state,
  mutations
})
