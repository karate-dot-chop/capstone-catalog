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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis iaculis porta. Proin tortor leo, pellentesque vel laoreet ac, egestas non ex. Ut urna lectus, suscipit ac ante euismod, rhoncus lacinia tellus. Proin pellentesque eget quam id suscipit. Proin enim odio, bibendum non iaculis nec, mattis vel risus. Praesent faucibus sit amet est eu scelerisque. Quisque lacinia nulla id velit finibus, in maximus velit cursus. Aenean diam mauris, euismod sed pharetra id, pellentesque a nibh. Nam posuere lectus vitae purus maximus rhoncus. Fusce tristique mauris eu placerat sollicitudin.",
      },
    };
  },
};
</script>
