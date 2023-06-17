<template>
  <div class="initial">
      <img :src="logoImgUrl" class="logoImg" alt="">
      <img :src='basicImgUrl' class="basicImg" alt="" >
      <div class="contentLogin">
        <div class="title">账号登录</div>
        <div class="loginInput">
          <div class="loginTitle">账号登录</div>

            <a-form
                :model="formState"
                name="horizontal_login"
                layout="inline"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  name="username"
              >
                <a-input v-model:value="formState.username" placeholder="请输入电话号码" :style="loginInputStyle" :maxlength="11">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item
                  name="password"
              >
                <a-input-password v-model:value="formState.password" placeholder="请输入密码" :style="loginInputStyle" :maxlength="20">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>

              <a-form-item>
                <a-button type="primary" html-type="submit" :style="loginStyle" @click="login">登录</a-button>
              </a-form-item>

            </a-form>

        </div>

          <span class="loginBottom">还没有账号？</span>
          <router-link class="list-group-item" active-class="active" to="/regist" >去注册</router-link>

      </div>
  </div>
</template>


<script>
  import { defineComponent, reactive } from 'vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import {sendSqlite} from "@/api/api";
  import {message} from "ant-design-vue";

  export default defineComponent({

    methods: {
      login() {
        sendSqlite('POST','api/enter/login', this.formState, (res) => {
          if(res.data.code === 200) {
            message.success(res.data.msg)
          } else if(res.data.code === 500) {
            message.error(res.data.msg);
          }
          console.log(res.data)
        })
      }
    },

      components: {
        UserOutlined,
        LockOutlined,
      },

      setup() {

        const formState = reactive({
          username: '',
          password: '',
        });

        const onFinish = values => {
          console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };

        return {
          formState,
          onFinish,
          onFinishFailed,
        }
      },
    name: "loginPage",
    data(){
      return {
        style:{
          fontSize:"30px",
          width:"475px",
          height:"60px",
        },
        loginStyle:{
          marginTop: "92px",
          width:"475px",
          height:"60px",
          fontSize:"20px",
        },
        loginInputStyle:{
          fontSize:"20px",
          width:"475px",
          height:"60px",
          marginTop: "25px",
        },

        basicImgUrl:require("../../../assets/basic.png"),
        logoImgUrl: require("../../../assets/logo.png")
      }
    },

  })

</script>

<style>
#horizontal_login_username{
  font-size: 18px;
}

#horizontal_login_password{
  font-size: 18px;
}

#ant-form-item-control-input-content{
  margin-top: -10px;
}


.initial{
  width: 1920px;
  height: 100%;
  margin: auto;
  position: relative;

}

.basicImg{
  width: 891px;
  height: 695px;
  position: absolute;
  top: 125px;
  left:300px;
}

.logoImg{
  width: 176px;
  height: 45px;
  position: absolute;
  top: 62px;
  left:82px;
}
.contentLogin{
  width: 570px;
  height: 610px;
  position: absolute;
  top: 130px;
  left:1050px;
  background-color: white;
  box-shadow:  1px -1px 1px 1px #e5e5e5,
  -1px 1px 1px 1px #e5e5e5,
  -1px 1px 1px 1px #e5e5e5,
  -1px 1px 1px 1px #e5e5e5;

}
.title{
  font-family: PingFangSC,PingFangSC-Regular;
  padding-top: 20px;
  margin: auto;
  font-size: 30px;
  font-weight: 700;
  width: 150px;
  height: 26px;
}

.loginInput{
  position: absolute;
  top: 100px;
  left: 50px;
  width: 480px;
  height: 400px;
}

.loginTitle{
  position: relative;
  padding-bottom: 20px;
  font-size: 30px;
  font-family: PingFangSC,PingFangSC-Regular;
  font-weight: 700;
  text-align: left;
  color: #74787c;
  line-height: 32px
}

.loginBottom{
  position: absolute;
  font-size: 18px;
  margin-left: 360px;
  margin-top: 450px;
  font-family: PingFangSC,PingFangSC-Regular;
  font-weight: 500;
}

.list-group-item{
  position: absolute;
  font-size: 18px;
  margin-left: 465px;
  margin-top: 450px;
  font-family: PingFangSC,PingFangSC-Regular;
  font-weight: 500;
}

</style>