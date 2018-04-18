<template>
  <div class="Item">
    <p>{{item}}</p>
    <input @keydown.enter="toggleEdit(index)" v-if="editing" type="text" v-model="newValue" >
    <button @click="deleteItem(index)">Delete</button>
    <button @click="toggleEdit(index)">{{editing ? "Save" : "Edit"}}</button>
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
    item: String,
    index: Number,
    deleteItem: Function,
    updateItem: Function
  },
  methods: {
    toggleEdit: function(index) {
      if (this.editing && this.newValue) {
        console.log(index, this.newValue);
        this.updateItem(index, this.newValue);
      }
      this.editing = !this.editing;
    }
  }
};
</script>

<style scoped>
.Item {
  padding: 10px;
  border: 1px solid black;
}
</style>


