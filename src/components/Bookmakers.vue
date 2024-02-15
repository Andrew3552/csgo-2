<template>
  <div :class="$style.bookmakers">
    <div :class="$style.title">
      <img src="/images/title.png" :class="$style.title__image">

      <span>{{ $t('bookmakers.title')}}</span>
    </div>

    <div :class="$style.list">
      <template v-for="(item, index) in bookmakers" :key="index">
        <a v-if="item.locales.includes(locale)" :class="$style.item" :href="item.link" :style="{backgroundImage: 'url(' + item.image + ')', backgroundSize: 'cover'}">
          <h2 :class="$style.cardTitle" v-html="$t(item.title)"></h2>
          <button :class="`${$style.button} ${$style[item.btnClass]}`">{{ $t('bookmakers.btn') }}</button>
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import {PropType} from "vue";

interface Bookmaker {
  name: string,
  image: string,
  link: string,
  title: string,
  btnClass: string,
  locales: ('ua' | 'pl' | 'tr' | 'en' | 'ru' | 'pt')[],
}

defineProps({
  bookmakers: {
    type: Array as PropType<Bookmaker>,
  }
});

const {locale} = useI18n();
</script>

<style lang="scss" module>
  .bookmakers {
    margin: 120px 0 0 0;

    @media (max-width: 768px) {
      margin: 48px 0 0 0;
    }

    @media (max-width: 550px) {
      margin: 36px 0 0 0;
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
    padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
    gap: 65px 92px;
    justify-content: center;

    @media (max-width: 768px) {
      gap: 37px 26px;
      padding: 0 24px;
    }

    @media (max-width: 550px) {
      gap: 25px;
      flex-direction: column;
      align-items: center;
    }
  }

  .item {
    width: 525px;
    text-decoration: none;

    @media (max-width: 550px) {
      width: 250px;
      height: 250px;
    }

    transition: 200ms ease-in-out;

    &:hover {
      opacity: .8;
    }

    img {
      width: 100%;
    }
  }

  .button {
    margin: 0 auto 240px auto;
    display: flex;
    background: none;
    padding: 15px 40px;
    outline: none;
    color: #ffffff;
    border: none;
    font-size: 18px;
    border-radius: 8px;

    @media (max-width: 550px) {
      padding: 7px 30px;
      font-size: 10px;
      border-radius: 5px;
      margin: 0 auto;
    }

    &.white {
      border: 2px solid #B5DBFF;
      box-shadow: 0 0 6px 0 #B5DBFF;

      &:hover {
        box-shadow: 0 0 8px 0 #B5DBFF;
      }
    }

    &.red {
      border: 2px solid #D61B26;
      box-shadow: 0 0 6px 0 #D61B26;

      &:hover {
        box-shadow: 0 0 8px 0 #D61B26;
      }
    }

    &.yellow {
      border: 2px solid #FFCE00;
      box-shadow: 0 0 6px 0 #FFCE00;

      &:hover {
        box-shadow: 0 0 8px 0 #FFCE00;
      }
    }

    &.green {
      border: 2px solid #61AFA1;
      box-shadow: 0 0 6px 0 #61AFA1;

      &:hover {
        box-shadow: 0 0 8px 0 #61AFA1;
      }
    }

    &.blue {
      border: 2px solid #0075FF;
      box-shadow: 0 0 6px 0 #0075FF;

      &:hover {
        box-shadow: 0 0 8px 0 #0075FF;
      }
    }
  }

  .cardTitle {
    padding: 130px 90px 50px 90px;
    font-size: 21px;
    color: #FFFFFF;
    text-align: center;
    font-weight: bold;
    white-space: pre-line;

    @media (max-width: 550px) {
      padding: 70px 20px 20px 20px;
      font-size: 12px;
    }

    .xBet {
      color: #0075FF;
    }
  }
</style>
