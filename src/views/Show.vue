<template>
  <div class="capstone-show">
    <img :src="capstone.screenshot" alt="" />
    <h2>Capstone Name: {{ capstone.name }}</h2>
    <p>Created By: {{ capstone.student.first_name + " " + capstone.student.last_name }}</p>
    <p>Description: {{ capstone.description }}</p>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      capstone: {
        id: 1,
        student: { id: 1, first_name: "Sophie", last_name: "Fishman" },
        name: "Premonition",
        screenshot:
          "https://cdn.shopify.com/s/files/1/0257/6105/4792/products/Premonition-EtahLove-1_250x.jpg?v=1595602901",
        description: "Sci-Fi movie app.",
      },
    };
  },
};
</script>
