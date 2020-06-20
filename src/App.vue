<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    updated() {
        document.title = this.$route.meta.title;
    }
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: #404040;
}
a {
    text-decoration: none;
    color: #eee;
}
input {
    border: none;
    outline: none;
}
li {
    list-style: none;
}
.w {
    width: 76%;
    margin: auto;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.pr {
    position: relative;
}
.clearfix::before,
.clearfix::after {
    content: '';
    display: table;
}
.clearfix::after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}
</style>
