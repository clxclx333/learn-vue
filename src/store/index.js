import Vue from 'vue';
import Vuex from 'vuex';
import { QUERYDATALIST } from './mutation-types';
import { queryTodoListData } from '../service/TodoService';

Vue.use(Vuex);

export default new Vuex.Store(
  {
    state: {
      list: []
    },
    mutations: {
      [QUERYDATALIST](state, data) {
        console.log(data);
        state.list = data;
      },
      login(state, data) {
        state.loginState = data.loginState;
      },
      pushList(state, payload) {
        this.state.list.push({
          todo: payload,
          done: false,
        });
      },
    },
    actions: {
      async [QUERYDATALIST]({ commit }, payload) {
        const { data } = await queryTodoListData(payload.url);
        commit(QUERYDATALIST, data.data);
      },
      async pushList({ commit }, payload) {
        commit('pushList', payload);
      },
    },
    modules: {},
  }
);
