<template>
  <div>
    <vuetify-counter name="LOCAL" :number="num.local" @changed="changedLocal"></vuetify-counter>
    <vuetify-counter name="STORE" :number="num.store" @changed="changedStore"></vuetify-counter>
    <vuetify-counter name="SERVER" :number="num.server" @changed="changedServer"></vuetify-counter>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import api from "../api";
import VuetifyCounter from "../components/VuetifyCounter";

export default {
  components: {
    VuetifyCounter
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