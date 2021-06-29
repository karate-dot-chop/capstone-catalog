<template>
  <div class="index">
    <ul>
      <li v-for="capstone in capstones" v-bind:key="capstone.id" class="capstone-index">
        <router-link :to="`/show/${capstone.id}`">
          <img :src="capstone.screenshot" alt="" />
        </router-link>
        <p>Name: {{ capstone.student.first_name }} {{ capstone.student.last_name }}</p>
        <p>Capstone Title: {{ capstone.name }}</p>
        <p>Description: {{ capstone.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      // belongs_to: :student
      capstones: [
        {
          id: 1,
          student: { id: 1, first_name: "Sophie", last_name: "Fishman" },
          name: "Premonition",
          screenshot:
            "https://cdn.shopify.com/s/files/1/0257/6105/4792/products/Premonition-EtahLove-1_250x.jpg?v=1595602901",
          description: "Sci-Fi movie app.",
        },
        {
          id: 2,
          student: { id: 2, first_name: "Ian", last_name: "Belfatto" },
          name: "Travel Planner",
          screenshot: "https://chrisguillebeau.com/files/2016/10/landscape-aircraft-clouds-storm-38574-250x250.jpeg",
          description: "Plan your trip.",
        },
        {
          id: 3,
          student: { id: 3, first_name: "Mathias", last_name: "Schneider" },
          name: "Video Game Vault",
          screenshot: "https://s3-media0.fl.yelpcdn.com/bphoto/uwhGyQZNqa-1--wveLAc-g/ls.jpg",
          description: "Game lists.",
        },
      ],
    };
  },
};
</script>

<style></style>
