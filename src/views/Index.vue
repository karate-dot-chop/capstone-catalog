<template>
  <div class="index">
    <ul>
      <li v-for="student in students" v-bind:key="student.id" class="student-index">
        <p>{{ student.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import students from "./dummy-data.js";
export default {
  data: function () {
    return {
      students: [
        { id: 1, name: "Sophie Fishman" },
        { id: 2, name: "Ian Belfatto" },
        { id: 3, name: "Mathias Schneider" },
      ],
      capstones: [
        {
          id: 1,
          student_id: 1,
          title: "Premonition",
          image_url:
            "https://cdn.shopify.com/s/files/1/0257/6105/4792/products/Premonition-EtahLove-1_250x.jpg?v=1595602901",
        },
        {
          id: 2,
          student_id: 2,
          title: "Travel Planner",
          image_url: "https://chrisguillebeau.com/files/2016/10/landscape-aircraft-clouds-storm-38574-250x250.jpeg",
        },
        {
          id: 3,
          student_id: 3,
          title: "Video Game Vault",
          image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/uwhGyQZNqa-1--wveLAc-g/ls.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
