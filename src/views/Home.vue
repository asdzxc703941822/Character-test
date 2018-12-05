<template>
  <div class="home">
    <mt-button size="normal" type="primary" @click="$router.push('/item')">开始</mt-button>
    <div><img src="../assets/v2-9c4db3d9346351b2942dea219942f977_b.jpg" alt=""></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  methods:{

  }
}
</script>
<style lang="scss">
  .home{
    position:relative;
    button{
      position:absolute;
      top:50%;
      left:50%;
      -webkit-transform: translate(-50%,-50%);
      -o-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
    }
    div{
      font-size: 0;
      img{
        width: 100%;
      }
    }
  }
</style>
