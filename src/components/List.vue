<template>
  <div class="List">
    <h1 class="List__link" @click="goTo(index)" >{{list.name}}</h1>
    <input @keydown.enter="toggleEdit(index)" v-if="editing" type="text" v-model="newValue" >
    <div class="List__buttons">
      <button @click="deleteList(index)">Delete</button>
      <button @click="toggleEdit(index)">{{editing ? "Save" : "Edit"}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      newValue: ""
    };
  },
  props: {
    list: Object,
    index: Number,
    deleteList: Function,
    updateList: Function
  },
  methods: {
    toggleEdit: function(index) {
      if (this.editing && this.newValue) {
        this.updateList(index, this.newValue);
      }
      this.editing = !this.editing;
    },
    goTo: function(index) {
      this.$router.push(`/list/${index}`);
    }
  }
};
</script>

<style scoped>
.List {
  border: 1px solid rgba(0, 0, 0, 0.85);
  padding: 20px;
  height: auto;
}

.List__link {
  font-size: 1rem;
  cursor: pointer;
}
</style>


