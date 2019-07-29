<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Welcome to the Banbury &amp; District Aunt Sally website</v-card-title>
        <v-card-text>
          <p>This website is sponsored by Banbury Plant &amp; Skip Hire</p>
          <div>
            <button @click="writeToFirestore" :disabled="writeSuccessful">
              <span v-if="!writeSuccessful">Write now</span>
              <span v-else>Successful!</span>
            </button>
          </div>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title class="headline">Add Division</v-card-title>
        <v-card-text>
          <p>Add Division</p>
          <div>
            <v-form id="add-division">
              <v-text-field v-model="division" label="Division" required></v-text-field>
              <v-btn @click="writeToFirestore">submit</v-btn>
            </v-form>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";
export default {
  data() {
    return {
      writeSuccessful: false,
      division: ""
    };
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("teams").doc();
      const document = {
        name: this.division,
        division: "7ZVK0QD0ZR3VCPcPSrEy"
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    }
  }
};
</script>
