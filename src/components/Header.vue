<template>
    <div class="header">
        <div class="w clearfix pr">
            <h1 class="avatar fl" @click="$router.push('/')">
                殷梓伟
                <img src="https://cdn.javyin.net/avatar.jpg" alt="">
            </h1>
            <div class="clearfix tabs">
                <div class="fl tab" @click="handleSwitch('profile')">个人简介</div>
                <div class="fl tab" @click="handleSwitch('project')">项目案例</div>
                <div class="fl tab" @click="handleSwitch('gitlab')">Gitlab</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
      return {

      }
  },
  methods: {
      handleSwitch(page) {
          this.$router.push({
              path: page
          })
      }
  }
}
</script>

<style lang="less">
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    padding: 0.5vw 0;
    border-bottom: 0.2vw solid rgba(30,30,30,0.5);
    .avatar {
        font-size: 0;
        width: 7.5vw;
        height: 7.5vw;
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .tabs {
        color: #eee;
        font-size: 1.5vw;
        position: absolute;
        left: 13vw;
        bottom: 0;
        .tab {
            cursor: pointer;
            margin-right: 2.5vw;
            &:hover {
                // background-color: #fff;
                color: yellowgreen;
                font-weight: bold;
            }
        }
    }
}
</style>