<template>
  <div class="hello" >{{ state.age }}</div>
</template>

<script>

    import {reactive} from "vue";

    const originalData = {
      name: '张三',
      age: 20,
      info: {
        address: '北京市',
        phone: '13888888888'
      },
      hobbies: ['篮球', '游泳', '旅游']
    }


    const state = reactive(originalData)


    export default {
      setup() {
        const data = reactive({
          name: '',
        })
        console.log(data.name)
        return {
          state
        }
      },
      name: 'HelloWorld',
      props: {
        msg: String
      },


      mounted() {
        const increase = () => {
          state.age = 23
          console.log(state.age)
          alert(state.age)
          return {
            state
          }
        }

        return increase()
      }


    }
</script>
