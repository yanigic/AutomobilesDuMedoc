<!-- <template>
  <div id="app">
    <ul id="infinite-list" @scroll="onScroll">
      <li
        class="li"
        v-for="(item, index) in items"
        :key="index"
        :class="{ visible: index === firstVisibleIndex }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import cardImageOne from "../assets/img/imgSinglePro.jpeg";

export default {
  name: "App",
  setup() {
    const originalItems = ref([
      { name: "first", src: cardImageOne },
      { name: "gino", src: cardImageOne },
      { name: "due", src: cardImageOne },
      { name: "pesce", src: cardImageOne },
      { name: "cane", src: cardImageOne },
      { name: "gatto", src: cardImageOne },
    ]);
    const firstVisibleIndex = ref(null);
    const items = ref([...originalItems]);


    // Function to load more items
    const loadMore = (direction) => {
      for (let i = 0; i < 20; i++) {
        items.value.push("Item " + (items.value.length + 1));
      }
    };

    

    const onScroll = (event) => {
      const listElm = event.target;
      const listRect = listElm.getBoundingClientRect();

      let visibleIndex = null;

      items.value.forEach((_, index) => {
        const item = listElm.children[index];
        if (item) {
          const itemRect = item.getBoundingClientRect();
          if (
            itemRect.top <= listRect.top &&
            itemRect.bottom <= listRect.bottom
          ) {
            visibleIndex = index;
            return; // Esci dal forEach quando viene trovato il primo elemento visibile
          }
        }
      });

      firstVisibleIndex.value = visibleIndex;

      if (listElm.scrollTop === 0) {
        // Scrolled to the top, load more items upwards
        loadMore("up");
      } else if (
        listElm.scrollHeight - listElm.clientHeight ===
        listElm.scrollTop
      ) {
        // Scrolled to the bottom, load more items downwards
        loadMore("down");
      }
    };
    // Initial load of items
    loadMore("down");

    return {
      items,
      onScroll,
      firstVisibleIndex,
    };
  },
};
</script>

<style>
#infinite-list {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 0;
  list-style-type: none;
}
.li {
  height: 70px;
  padding: 60px;
  color: blue;
  background-color: antiquewhite;
}
.visible {
  background-color: #781313;
}
</style>
 -->

<template>
  <div>
    <ul id="infinite-list" @scroll="onScroll">
      <li
        class="li"
        v-for="(item, index) in items"
        :key="index"
        :class="{ visible: index === firstVisibleIndex }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import cardImageOne from "../assets/img/imgSinglePro.jpeg";

export default {
  name: "App",
  setup() {
    const originalItems = [
      { name: "first", src: cardImageOne },
      { name: "gino", src: cardImageOne },
      { name: "due", src: cardImageOne },
      { name: "pesce", src: cardImageOne },
      { name: "cane", src: cardImageOne },
      { name: "gatto", src: cardImageOne },
    ];

    const items = ref([...originalItems]);
    const firstVisibleIndex = ref(null);

    // Function to load more items by repeating the existing items
    const loadMore = () => {
      items.value = items.value.concat(originalItems);
    };

    const onScroll = (event) => {
      const listElm = event.target;
      const listRect = listElm.getBoundingClientRect();

      let visibleIndex = null;

      items.value.forEach((_, index) => {
        const item = listElm.children[index];
        if (item) {
          const itemRect = item.getBoundingClientRect();
          if (
            itemRect.top <= listRect.top &&
            itemRect.bottom <= listRect.bottom
          ) {
            visibleIndex = index;
            return; // Exit forEach when the first visible item is found
          }
        }
      });

      firstVisibleIndex.value = visibleIndex;

      if (
        listElm.scrollHeight - listElm.clientHeight <=
        listElm.scrollTop + 1
      ) {
        // Scrolled to the bottom, load more items
        loadMore();
      }
    };

    // Initial load of items
    onMounted(() => {
      loadMore();
    });

    return {
      items,
      onScroll,
      firstVisibleIndex,
    };
  },
};
</script>

<style>
#infinite-list {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 0;
  list-style-type: none;
}
.li {
  height: 70px;
  padding: 10px;
  color: blue;
  font-size: 60px;
}
.visible {
  color: var(--ADM-Yellow, #f3f90a);
}
</style>
