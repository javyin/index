<template>
  <div class="project">
      <div class="w">
          <div class="items">
              <div class="item clearfix" v-for="(item,index) in list" :key="index">
                  <div class="left fl">
                      <img :src="item.img" alt="">
                  </div>
                  <div class="right fl"></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    img: 'http://cdn.javyin.net/storeowner.png'
                },
                {
                    img: 'http://cdn.javyin.net/bms.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="less">
.project {
    .items {
        .item {
            margin-bottom: 20px;
            &>div {
                height: 300px;
            }
            .left {
                width: 20%;
                background-color: pink;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .right {
                width: 80%;
                background-color: yellowgreen;
            }
        }
    }
}
</style>