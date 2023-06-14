<template>
    <div>
      <initial-page></initial-page>
    </div>
</template>

<script>
import {useRouter} from "vue-router/dist/vue-router";
import InitialPage from "@/project/initial/Initial";

export default {

  name: "App",
  components: {InitialPage},

  setup() {
    const router = useRouter();
    function goto(){
      router.push("/initial");
    }
    return{
      goto
    }
  },
};
</script>


