<template>
  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <header>
          <h1>Welcome to the Student Capstone Catalog!</h1>
          <p>
            Here you can see all of the capstones that the students of Actualize have created. Click on a tile to learn
            more about each individual project.
          </p>
        </header>
        <section class="tiles">
          <article class="style6" v-for="capstone in capstones" v-bind:key="capstone.id">
            <span class="image">
              <img :src="capstone.screenshot" alt="" />
            </span>
            <a :href="`/capstones/${capstone.id}`">
              <h2>{{ capstone.name }}</h2>
              <p>{{ capstone.student.first_name + " " + capstone.student.last_name }}</p>
            </a>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      capstones: [],
    };
  },
  created: function () {
    axios.get("/capstones").then((response) => {
      console.log("Capstones array", response.data);
      this.capstones = response.data;
    });
  },
};
</script>

<style></style>
