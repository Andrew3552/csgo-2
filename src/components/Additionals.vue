<template>
  <div :class="$style.additionals">
    <div :class="$style.title">
      <img src="/images/title.png" :class="$style.title__image">

      <span>{{ $t('additionals.title') }}</span>
    </div>

    <div :class="$style.list">
      <a v-for="(item, index) in additionals" :key="index" :class="$style.item" :href="item.link">
        <img :src="item.image" />
        <span :class="$style.note">{{ $t('additionals.note')}}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  additionals: {
    type: Array,
  }
});
</script>

<style lang="scss" module>
  .additionals {
    margin: 120px 0 0 0;

    @media (max-width: 768px) {
      margin: 80px 0 0 0;
    }
  }

  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1482px;
    height: 80px;
    margin: 0 auto 60px auto;
    padding: 0 16px;
    border-bottom: 1px solid #1E2339;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    color: #FFFFFF;

    span {
      z-index: 2;
      position: relative;
    }

    &__image {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      max-width: 700px;
      height: 100%;
      transform: translateX(-50%);
    }
  }

  .list {
    width: 100%;
    max-width: calc(1450px + 160px);
    margin: 0 auto;
    padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
    gap: 65px 92px;

    @media (max-width: 768px) {
      gap: 43px 51px;
      padding: 0 24px;
    }

    @media (max-width: 550px) {
      gap: 26px;
      flex-direction: column;
      align-items: center;
      padding: 0 16px;
    }
  }

  .item {
    width: calc(100% / 2 - 46px);
    position: relative;

    @media (max-width: 768px) {
      width: calc(100% / 2 - 26px);
    }

    @media (max-width: 550px) {
      width: 100%;
    }
    transition: 200ms ease-in-out;

    &:hover {
      opacity: .8;
    }

    img {
      width: 100%;
    }

    .note {
      position: absolute;
      color: white;
      font-size: 21px;
      bottom: 30%;
      left: 50%;
      transform: translate(-50%, 10px);

      @media (max-width: 1099px) {
        bottom: 20%;
        text-align: center;
      }
    }

  }
</style>
