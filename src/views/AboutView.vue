<template>
  <div class="about">
    <h1>This is an about page {{ test }} </h1>
    <ui-table :data="data_mongo" :thead="thead2" :tbody="tbody2"></ui-table>
  </div>
</template>

<script>
  import axios from 'axios'
  import { ref } from 'vue' 

  export default {
  data() {
    return {
      thead2: [
        'ID',
        'Name',
      ],
      tbody2: ['_id', 'name']
    };
  },

  setup() {
    const data_mongo = ref([])

    const getData = async () => {
      axios({
        url: 'http://localhost:3000/api/v1/mongo',
        method: 'GET'
      }).then(res => data_mongo.value = res.data)
    }
    getData()

    return { data_mongo }
  }
  
};

</script>
