<template>
  <div>
    <counter name="LOCAL" :number="num.local" @changed="changedLocal"></counter>
    <counter name="STORE" :number="num.store" @changed="changedStore"></counter>
    <counter name="SERVER" :number="num.server" @changed="changedServer"></counter>
  </div>
</template>

<script>
import Counter from "../components/Counter";

export default {
  components: {
    Counter
  },
  data() {
    return {
      num: {
        local: 0,
        store: 0,
        server: 0
      }
    };
  },
  methods: {
    changedLocal(btnType) {
      if (btnType === "decrement") {
        this.num.local--;
      } else if (btnType === "increment") {
        this.num.local++;
      }
    }
  }
};
</script>