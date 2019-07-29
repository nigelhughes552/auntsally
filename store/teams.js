export const state = () => ({
  teams: [],
});

export const mutations = {
  add(state, text) {
    state.teams.push({
      text
    });
  },
  remove(state, { todo }) {
    state.teams.splice(state.teams.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};
