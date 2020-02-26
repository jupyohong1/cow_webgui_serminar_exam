<template>
  <div>
    <counter name="LOCAL" :number="num.local" @changed="changedLocal"></counter>
    <counter name="STORE" :number="num.store" @changed="changedStore"></counter>
    <counter name="SERVER" :number="num.server" @changed="changedServer"></counter>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import api from "../api";
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
        server: this.getNumber()
      }
    };
  },
  computed: {
    ...mapState(["number"])
  },
  mounted() {
    this.num.store = this.number;
  },
  methods: {
    ...mapActions(["changed"]),
    changedLocal(btnType) {
      if (btnType === "decrement") {
        this.num.local--;
      } else if (btnType === "increment") {
        this.num.local++;
      }
    },
    changedStore(btnType) {
      if (btnType === "decrement") {
        this.num.store--;
      } else if (btnType === "increment") {
        this.num.store++;
      }
      this.changed(this.num.store);
    },
    changedServer(btnType) {
      if (btnType === "decrement") {
        this.num.server--;
      } else if (btnType === "increment") {
        this.num.server++;
      }
      this.setNumber(this.num.server);
    },
    getNumber() {
      api.request("get", "/api/exam").then(res => {
        this.num.server = res.data;
      });
    },
    setNumber(number) {
      api.request("post", "/api/exam", { number }).then(res => {
        this.num.server = res.data;
      });
    }
  }
};
</script>