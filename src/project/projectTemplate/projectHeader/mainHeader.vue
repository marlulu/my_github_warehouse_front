<template>
  <div>
    <div>全部课程</div>
    <div>
      <div>课程排序</div>
      <div>归档管理</div>
      <div>
        <a-button type="primary" @click="getData">{{value}}</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
// import {sendSqlite} from "@/api/api";

export default {
  name: "mainHeader",

  props: ["value"],
  data() {
    return{
      data: this.value
    }
  },

  methods: {
    getData() {
      console.log(this.data)
    },
  },

  setup() {
    let buttonName = ref('+加入课程')


    const changeButtonName = (value) => {
      buttonName.value = value
    }

    return {
      changeButtonName,
      buttonName
    }
  },
  mounted() {

    console.log("kpt" + localStorage.getItem('token'))
    // sendSqlite("GET","/","","") {
    //
    // }
    this.changeButtonName(localStorage.getItem('token'))
  }
}

</script>

<style>

</style>