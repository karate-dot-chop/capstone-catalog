<template>
  <div class="index">
    <ul>
      <li v-for="student in students" v-bind:key="student.id" class="student-index">
        <p>{{ student.first_name }} {{ student.last_name }}</p>
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
        { id: 1, first_name: "Sophie", last_name: "Fishman" },
        { id: 2, first_name: "Ian", last_name: "Belfatto" },
        { id: 3, first_name: "Mathias", last_name: "Schneider" },
      ],
      capstones: [
        {
          id: 1,
          student_id: 1,
          name: "Premonition",
          screenshot:
            "https://cdn.shopify.com/s/files/1/0257/6105/4792/products/Premonition-EtahLove-1_250x.jpg?v=1595602901",
        },
        {
          id: 2,
          student_id: 2,
          name: "Travel Planner",
          screenshot: "https://chrisguillebeau.com/files/2016/10/landscape-aircraft-clouds-storm-38574-250x250.jpeg",
        },
        {
          id: 3,
          student_id: 3,
          name: "Video Game Vault",
          screenshot: "https://s3-media0.fl.yelpcdn.com/bphoto/uwhGyQZNqa-1--wveLAc-g/ls.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
