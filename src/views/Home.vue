<template>
  <div class="home">
      <div class="header">
          <div class="w clearfix pr">
              <h1 class="avatar fl">殷梓伟</h1>
              <div class="clearfix tabs">
                  <div class="fl tab">个人简介</div>
                  <div class="fl tab">项目案例</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="less">
.home {
    .header {
        background-color: #333;
        padding: 10px 0;
        border-bottom: 5px solid rgba(30,30,30,0.5);
        .avatar {
            font-size: 0;
            width: 150px;
            height: 150px;
            background-color: pink;
            border-radius: 50%;
            cursor: pointer;
        }
        .tabs {
            color: #eee;
            font-size: 26px;
            position: absolute;
            left: 250px;
            bottom: 0;
            .tab {
                cursor: pointer;
                margin-right: 50px;
                &:hover {
                    // background-color: #fff;
                    color: yellowgreen;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>