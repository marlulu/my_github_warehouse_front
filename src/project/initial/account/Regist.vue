<template>
  <div class="initial">
    <img :src="logoImgUrl" class="logoImg" alt="">
    <img :src='registImgUrl' class="registImg" alt="" >
    <div class="contentRegist">
      <div class="title">注册账号</div>
      <div class="registInput">

        <a-form
            :model="formState"
            name="horizontal_login"
            :label-col="{ span:  8}"
            :wrapper-col="{ span: 25 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
          <a-form-item
              name="username"
              :rules="[{ validator: isFollowLength, trigger:'blur'  }]"
          >
            <a-input v-model:value="formState.username" placeholder="请输入电话号码" :style="style" :maxlength="11" @input="search($event)">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
              name="password"
              :rules="[{ required: true, message: '请输入密码' }]"
          >
            <a-input-password v-model:value="formState.password" placeholder="请输入密码" :style="style" :maxlength="20" @input="search($event)">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item
              name="passwordRe"
              :rules="[{ validator: validateNutrients, trigger:'blur' }]"
          >
            <a-input-password v-model:value="formState.passwordRe" placeholder="请再次输入密码确定" :style="style" :maxlength="20" @input="search($event)">>
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>


            <a-tabs v-model:activeKey="activeKey" type="card"  @change="callback">

              <a-tab-pane key="1" tab="教师" :style="selectPersonTeacher">

                  <a-form-item
                      name="name"
                      :rules="[{ required: true, message: '请输入姓名' }]"
                  >
                    <a-input v-model:value="formState.name" placeholder="请输入姓名" :style="registInputStyle" @input="search($event)">>
                    </a-input>
                  </a-form-item>

                  <a-form-item
                      name="school"
                      :rules="[{ required: true, message: '请输入学校/机构' }]"
                  >
                    <a-input v-model:value="formState.school" placeholder="请输入学校/机构" :style="registInputStyle" @input="search($event)">>
                    </a-input>
                  </a-form-item>


              </a-tab-pane>

              <a-tab-pane key="2" tab="学生" :style="selectPersonStudent">
                  <a-form-item
                      name="name"
                      :rules="[{ required: true, message: '请输入姓名' }]"
                  >
                    <a-input v-model:value="formState.name" placeholder="请输入姓名" :style="registInputStyle" :maxlength="10" @input="search($event)">>
                    </a-input>
                  </a-form-item>

                  <a-form-item
                      name="school"
                      :rules="[{ required: true, message: '请输入学校/机构' }]"
                  >
                    <a-input v-model:value="formState.school" placeholder="请输入学校/机构" :style="registInputStyle" :maxlength="10" @input="search($event)">>
                    </a-input>
                  </a-form-item>

                  <a-form-item
                      name="studentNum"
                      :rules="[{ required: true, message: '请输入学号', trigger:'blur' }]"
                  >
                    <a-input v-model:value="formState.studentNum" placeholder="请输入学号" :style="registInputStyle" :maxlength="11" @tabClick="search($event)">>
                    </a-input>
                  </a-form-item>

              </a-tab-pane>
            </a-tabs>

            <div class="wrapper">
              <a-form-item
                  name="code"
                  :rules="[{ validator: isSame, trigger:'blur' }]"
              >
                <a-input v-model:value="formState.code" placeholder="请输入验证码" :style="identifyInput" :maxlength="4" @input="search($event)">></a-input>
              </a-form-item>
              <span @click="refreshCode" class="identify">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </span>
            </div>

            <div class="actionButton">
              <a-button type="primary" html-type="submit" :style="registStyle" @click="()=> refreshCode">注册</a-button>
              <span class="registBottom">已有账号？</span>
              <router-link class="list-group-item-regist-student" active-class="active" to="/login" >去登录</router-link>
            </div>
          </a-form-item>

        </a-form>



      </div>

    </div>
  </div>
</template>


<script>

import {defineComponent, reactive, ref} from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import SIdentify from "../../../components/identify/identify"
import {sendSqlite} from "@/api/api";
import router from "@/router/router";
import { message } from 'ant-design-vue';



export default defineComponent({

  methods: {

    callback () {
      this.formState.studentNum = ""
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },

    isFollowLength (rule, value) {
      if(value.length !== 11) {
        return Promise.reject(new Error('格式不正确'))
      }
      return Promise.resolve();
    },

    validateNutrients (rule, value){
      if(this.formState.password !== value || this.formState.password === '') {
        return Promise.reject(new Error('两次输入的密码不一致'))
      }
      return Promise.resolve();
    },

    isSame (rule, value) {
      if(this.identifyCode !== value) {
        return Promise.reject(new Error('验证码输入错误'))
      }
      return Promise.resolve();
    },

    search(event){
      console.log(event.currentTarget.value)
    },

    // 生成随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[Math.floor(Math.random() * (this.identifyCodes.length))]
      }
    },

  },
  mounted() {
    //进入页面则刷新验证码图片
    this.refreshCode();
    localStorage.removeItem('token');
  },

  name: "registPage",
  components: {
    SIdentify,
    UserOutlined,
    LockOutlined,
  },

  setup() {

    const formState = reactive({
      username: '',
      password: '',
      code:'',
      passwordRe:'',
      name:'',
      school:'',
      studentNum:'',
    });


    const onFinish = (values) => {
      console.log('Success:', values);
      const jsonData = JSON.stringify(formState);
      sendSqlite('POST','api/enter/regist', jsonData, (res) => {
        if(res.data.code === 200) {
          message.success(res.data.msg);
          router.push("/login")
        } else if(res.data.code === 500) {
          message.error(res.data.msg);
        }
        console.log(res)
      })
    };

    const onFinishFailed = errorInfo => {
      console.log(formState)
      console.log('Failed:', errorInfo);
    };


    return {
      formState,
      onFinish,
      onFinishFailed,
      activeKey: ref('1'),
    }
  },

  data(){
    return {
      style:{
        fontSize:"30px",
        width:"475px",
        height:"60px",
      },
      registStyle:{
        marginTop: "70px",
        width:"475px",
        height:"60px",
        fontSize:"20px",
      },
      selectPersonTeacher: {
        width:"475px",
        height:"175px",
      },
      selectPersonStudent: {
        width:"475px",
        height:"250px",
      },
      registInputStyle:{
        fontSize:"20px",
        width:"475px",
        height:"60px",
      },
      identifyInput:{
        fontSize:"20px",
        height: "60px",
        width:"250px",
      },




      registImgUrl:require("../../../assets/regist.png"),
      logoImgUrl: require("../../../assets/logo.png"),

      identifyCode: '',
      // 验证码规则
      identifyCodes: '3456789ABCDEFGHGKMNPQRSTUVWXY',
    }
  },

})

</script>

<style>

#horizontal_login_passwordRe{
  font-size: 18px;
}


.ant-tabs-tab{
  width: 236px;
  height: 50px;
  font-size: 30px;

}
.ant-tabs-tab-btn{
  font-size: 25px;
  margin-left: 75px;
}

.wrapper{
  position: relative;

}

.actionButton{
  margin-top: -60px;
}

.identify{
  position: absolute;
  cursor: pointer;
  top: -1px;
  left: 267px;
}
.initial{
  width: 1920px;
  height: 100%;
  margin: auto;
  position: relative;

}

.registImg{
  width: 950px;
  height: 700px;
  position: absolute;
  top: 120px;
  left:260px;
}

.logoImg{
  width: 176px;
  height: 45px;
  position: absolute;
  top: 62px;
  left:82px
}
.contentRegist{
  width: 570px;
  height: 850px;
  position: absolute;
  top: 40px;
  left:1100px;
  background-color: white;
  box-shadow:  1px -1px 1px 1px #e5e5e5,
  -1px 1px 1px 1px #e5e5e5,
  -1px 1px 1px 1px #e5e5e5,
  -1px 1px 1px 1px #e5e5e5;

}
.title{
  padding-top: 20px;
  margin: auto;
  font-size: 30px;
  font-weight: 700;
  width: 150px;
  height: 26px;
}

.registInput{
  position: absolute;
  top: 85px;
  left: 50px;
}

.list-group-item-regist-student{
  position: absolute;
  font-size: 18px;
  margin-left: -60px;
  margin-top: 135px;
  font-family: PingFangSC,PingFangSC-Regular;
  font-weight: 500;
  width: 100px;
}

.registBottom{
  width: 200px;
  position: absolute;
  font-size: 18px;
  margin-left: -150px;
  margin-top: 135px;
  font-family: PingFangSC,PingFangSC-Regular;
  font-weight: 500;

}


</style>