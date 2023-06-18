<template>
  <div class="appMain">
    <div class="header">
      <img :src="logoImgUrl" class="logoPic" @click="()=> $router.push('/login')">
      <div class="contentTitle">
        <a-tabs v-model:activeKey="activeKey" :centered="true">
          <a-tab-pane key="1" tab="我的课堂">
          </a-tab-pane>
        </a-tabs>
      </div>
      <img :src="informationManagementImgUrl" class="informationManagementImg">
      <img :src="bellImgUrl" class="bellImg">
      <img :src="userImgUrl" class="userImg" @click.prevent>
      <a-popover trigger="click">
        <template #content>
          <a-dropdown :trigger="['click']">
            <a-menu >
              <a-menu-item key="0">开通VIP</a-menu-item>
              <a-menu-item key="1">机构用户认证</a-menu-item>
              <a-menu-item key="2">个人设置</a-menu-item>
              <a-menu-item key="3" @click="()=> $router.push('/login')">退出登录</a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>
        <img :src="userImgUrl" class="userImg" @click.prevent>
      </a-popover>
    </div>

    <div class="main">
      <div class="contentHeader"></div>
      <div class="contentTools">
        <main-header :value="value"></main-header>
      </div>
      <div>
        <student-card></student-card>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import StudentCard from "@/project/projectTemplate/projectCard/studentCard";
import MainHeader from "@/project/projectTemplate/projectHeader/mainHeader";


export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
  components: {
    MainHeader,
    StudentCard

  },
  name: "mainPage",
  data() {
    return{
      value: '123',
      logoImgUrl: require("../../assets/logo.png"),
      userImgUrl: require("../../assets/user.png"),
      bellImgUrl: require("../../assets/bell.png"),
      informationManagementImgUrl: require("../../assets/informationManagement.png"),
    }
  }
});

</script>

<style scoped>

.informationManagementImg{
  position: absolute;
  cursor: pointer;
  width: 28px;
  height: 28px;
  left: calc(100% - 190px);
}

.bellImg{
  position: absolute;
  cursor: pointer;
  width: 32px;
  height: 32px;
  left: calc(100% - 145px);
}


.logoPic{
  position: absolute;
  cursor: pointer;
  border: none;
  width: 145px;
  height: 35px;
  left: 36px;
  top:22px;
}

.userImg{
  position: absolute;
  left: calc(100% - 95px);
  cursor: pointer;
  top:18px;
  width: 43px;
  height: 43px;
}

.appMain {
  width: 100%;
}

.header{
  position: fixed;
  background-color: #fff;
  z-index: 2;
  top: 0;
  left: 0;
  height: 82px;
  width: 100%;
  padding: 0 28px;
  min-width: 900px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 3px 15px #dfdfdf;

}

.main {
  max-width: 1350px;
  margin: 0 auto;
}

.contentTitle{
  z-index: 3;
  width: 1350px;
  margin: 0 auto;
  padding-top: 50px;
}

.contentHeader{
  width: 1350px;
  height: 90px;
  margin: 0 auto;

  background-color: black;
}

.contentTools{

}


.content{

}


</style>