import { fireDb } from '~/plugins/firebase.js';

export const state = () => ({
  teams: [],
});

export const actions = {
  async writeToFirestore() {
    const ref = fireDb.collection('teams').doc();
    const document = {
      division: '7ZVK0QD0ZR3VCPcPSrEy',
      teamName: this.teamName,
      contactName: this.contactName,
      contactNumber: this.contactNumber,
      address: this.address,
      postcode: this.postcode,
    };
    try {
      await ref.set(document);
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
  },
  createTeam({ commit, getters }, payload) {
    console.log(payload);
    const ref = fireDb.collection('teams').doc();
    const team = {
      teamName: payload.teamName,
      contactName: payload.contactName,
      contactNumber: payload.contactNumber,
      address: payload.address,
      postcode: payload.postcode,
    };
    try {
      ref.add(team).then(data => {
        console.log(data);
        const key = data.key;
        commit('createTeam', {
          ...team,
          id: key,
        });
      });
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
    // Reach out to firebase and store it
  },
};

export const mutations = {
  createTeam(state, team) {
    console.log('mut' + team);
    state.teams.push({ team });
  },
  remove(state, { todo }) {
    state.teams.splice(state.teams.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};
