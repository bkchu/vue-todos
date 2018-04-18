<template>
  <div>
    New List: <input @keydown.enter="addList" type="text" v-model.trim="newListName">
    <div class="Lists">
      <div :key="index" v-for="(list, index) in lists">
        <List :index="index" :list="list" :deleteList="deleteList" :updateList="updateList"></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List";

export default {
  data() {
    return {
      lists: this.$root.$data.lists,
      newListName: ""
    };
  },
  methods: {
    addList() {
      if (this.newListName) {
        this.$root.$data.lists.push({ name: this.newListName, items: [] });
        this.newListName = "";
      }
    },
    deleteList(index) {
      this.$root.$data.lists.splice(index, 1);
    },
    updateList(index, name) {
      this.$root.$data.lists[index].name = name;
      this.$forceUpdate();
    }
  },
  components: {
    List
  }
};
</script>

<style scoped>
.Lists {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-auto-columns: 200px;
  margin: 20px 0;
  overflow-x: auto;
  text-align: center;
}
</style>