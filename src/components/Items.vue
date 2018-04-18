<template>
<div class="Items">
  <router-link to="/">Back to Lists</router-link>
  <h1>{{$root.$data.lists[$route.params.id].name}}</h1>
  New List Item: <input @keydown.enter="addItem" type="text" v-model.trim="newItem">
  <div class="Items__items">
    <div :key="index" v-for="(item, index) in items">
      <Item :deleteItem="deleteItem" :updateItem="updateItem" :item="item" :index="index"/>
      <!-- {{item}} -->
    </div>
  </div>
</div>
</template>

<script>
import Item from "./Item";

export default {
  data() {
    return {
      items: this.$root.$data.lists[this.$route.params.id].items,
      // items: [],
      newItem: ""
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.$root.$data.lists[this.$route.params.id].items.push(this.newItem);
        this.newItem = "";
      }
    },
    deleteItem(index) {
      this.$root.$data.lists[this.$route.params.id].items.splice(index, 1);
    },
    updateItem(index, newItem) {
      this.$root.$data.lists[this.$route.params.id].items[index] = newItem;
      this.$forceUpdate();
    }
  },
  components: {
    Item
  }
};
</script>

<style scoped>
.Items {
  width: 100%;
  text-align: center;
}

.Items__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

