<template>
  <v-layout column>
    <v-flex xs6 sm8 md6>
      <v-card>
        <v-card-title class="headline">Teams</v-card-title>
        <v-card-text>
          <div>
            <button @click="writeToFirestore" :disabled="writeSuccessful">
              <span v-if="!writeSuccessful">Write now</span>
              <span v-else>Successful!</span>
            </button>
          </div>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title class="headline">Add Team</v-card-title>
        <v-card-text>
          <div>
            <v-form id="add-team">
              <v-text-field v-model="teamName" label="Team Name" required></v-text-field>
              <v-text-field v-model="contactName" label="Contact Name"></v-text-field>
              <v-text-field v-model="contactNumber" label="Contact Number"></v-text-field>
              <v-text-field v-model="address" label="Address"></v-text-field>
              <v-text-field v-model="postcode" label="Postcode"></v-text-field>
              <v-btn @click="addTeam">submit</v-btn>
            </v-form>
          </div>
        </v-card-text>
      </v-card>
      <ul>
        <li v-for="todo in todos">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li>
          <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      writeSuccessful: false,

      teamName: "",
      contactName: "",
      contactNumber: "",
      address: "",
      postcode: ""
    };
  },
  computed: {
    todos() {
      return this.$store.state.teams.list;
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("teams").doc();
      const document = {
        division: "7ZVK0QD0ZR3VCPcPSrEy",
        teamName: this.teamName,
        contactName: this.contactName,
        contactNumber: this.contactNumber,
        address: this.address,
        postcode: this.postcode
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
    addTeam() {
      const team = {
        teamName: this.teamName,
        contactName: this.contactName,
        contactNumber: this.contactNumber,
        address: this.address,
        postcode: this.postcode
      };
      this.$store.dispatch("teams/createTeam", team);
    },
    ...mapMutations({
      toggle: "todos/toggle"
    })
  }
};
</script>
