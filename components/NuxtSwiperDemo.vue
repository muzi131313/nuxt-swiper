<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="my-swiper" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, key) in banners" :key="key">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'NuxtSwiperDemo',
  data() {
    return {
      banners: [
        require('../static/images/1.jpg'),
        require('../static/images/2.jpg'),
        require('../static/images/3.jpg')
      ],
      swiperOption: {
        loop: true,
        spaceBetween: 0,
        pagination: '.swiper-pagination',
        onSlideChangeStart() {
          console.log('on slide change start')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.my-swiper {
  height: 500px;
  width: 100%;

  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 654px;
    }
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0;
    height: 30px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    &-switch  {
      height: 10px;
      width: 10px;
      border-radius: 5px;
      background-color: gray;
      display: inline-block;
      margin-right: 10px;
      &.swiper-active-switch {
        background-color: red;
      }
    }
  }
}
</style>
