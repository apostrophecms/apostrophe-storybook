export default {
  methods: {
    generateId (prefix) {
      const num = Math.floor(Math.random() * Math.floor(10000));
      return `${prefix}-${num}` ? prefix : num.toString();
    }
  }
};
