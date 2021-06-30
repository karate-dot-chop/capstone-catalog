<template>
  <div id="wrapper">
    <!-- <div class="capstone-show">
    <img :src="capstone.screenshot" alt="" />
    <h2>Capstone Name: {{ capstone.name }}</h2>
    <p>Created By: {{ capstone.student.first_name + " " + capstone.student.last_name }}</p>
    <p>Description: {{ capstone.description }}</p>
  </div> -->

    <!-- Main -->
    <div id="main">
      <div class="inner">
        <h1 text-align="center">{{ capstone.name }}</h1>
        <span class="image main"><img :src="capstone.screenshot" alt="" /></span>
        <p>
          {{ capstone.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      capstone: {
        // id: 1,
        // student: { id: 1, first_name: "Sophie", last_name: "Fishman" },
        // name: "Premonition",
        // screenshot:
        //   "https://cdn.shopify.com/s/files/1/0257/6105/4792/products/Premonition-EtahLove-1_250x.jpg?v=1595602901",
        // description: "Sci-Fi movie app.",
      },
    };
  },
  created: function () {
    axios.get(`/capstones/${this.$route.params.id}`).then((response) => {
      console.log("Capstone object", response.data);
      this.capstone = response.data;
    });
  },
};
</script>
