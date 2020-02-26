const fs = require("fs");

const file = "./store/store.json";

module.exports = {
  read() {
    const store = JSON.parse(fs.readFileSync(file));
    console.log(store);
    return store.number;
  },
  write(number) {
    const store = JSON.parse(fs.readFileSync(file));
    store.number = number;
    fs.writeFileSync(file, JSON.stringify(store));
  }
};
