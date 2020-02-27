<template>
  <v-row align="center" justify="center" no-gutter>
    <v-btn icon small color="red" @click="decrement">
      <v-icon>mdi-minus</v-icon>
    </v-btn>

    <v-col cols="8" md="4" xl="2">
      <v-text-field v-model="number" :label="name" dense></v-text-field>
    </v-col>

    <v-btn icon small color="green" @click="increment">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  props: {
    number: Number,
    name: String
  },
  methods: {
    decrement() {
      this.$emit("changed", "decrement");
    },
    increment() {
      this.$emit("changed", "increment");
    }
  }
};
</script>