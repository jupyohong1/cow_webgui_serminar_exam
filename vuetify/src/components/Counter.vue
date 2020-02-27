<template>
  <div>
    {{ name }} :
    <button @click="decrement">-</button>
    <input v-model="number" />
    <button @click="increment">+</button>
  </div>
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