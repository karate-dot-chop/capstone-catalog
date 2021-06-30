<template>
  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <h1 text-align="center">{{ capstone.name }}</h1>
        <i>Created by: {{ capstone.student.first_name }} {{ capstone.student.last_name }}</i>
        <br />
        <br />
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
      capstone: {},
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
