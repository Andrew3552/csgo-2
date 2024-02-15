<template>
  <div :class="$style.head">
    <picture :class="$style.image">
      <img src="/images/head-img.png" />
    </picture>
    <div :class="$style.content">
      <div :class="$style.nameTitle"><span :class="$style.cs">{{ $t("header.nametitle.part1")
        }}</span><span :class="$style.bet">{{
          $t("header.nametitle.part2")
        }}</span>
      </div>
      <div :class="$style.underTitle">{{ $t("header.note") }}</div>
      <div :class="$style.title" v-if="locale === 'tr'">
        <span>{{ $t("header.title.part1") }}&nbsp;</span
        >{{ $t("header.title.part2") }}<br />{{ $t("header.title.part3") }}
      </div>
      <div :class="$style.title" v-if="locale !== 'tr'">
        {{ $t("header.title.part1") }}<br />{{ $t("header.title.part2")
        }}<br /><span>{{ $t("header.title.part3") }}</span>
      </div>
      <p>
        {{ $t("header.description") }}
      </p>
      <div :class="$style.blockButton">
      <a href="#howitworks" :class="$style.button"> {{ $t("header.button") }} </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style lang="scss" module>
.head {
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 82px);

  @media (max-width: 768px) {
    min-height: calc(100vh - 61px);
  }

  @media (max-width: 550px) {
    align-items: flex-end;
  }
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;

    @media (max-width: 550px) {
      object-position: 75% center;
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 110px 0 110px 93px;

  @media (max-width: 768px) {
    padding: 100px 0 100px 24px;
  }

  @media (max-width: 550px) {
    justify-content: flex-end;
    padding: 30px 0 132px 16px;
  }
}

.nameTitle {
  font-family: "Wadik";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 22px;
  margin-bottom:40px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

.cs {
  background-image: linear-gradient(to right, #ff1919, #ff9900);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.bet {
  color: #ffffff;
}

.underTitle {
  font-family: "Wadik";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 22px;
  padding: 15px 40px;
  margin-bottom:20px;
  background: linear-gradient(to right, #FF1919, #FF9900);
  color: black;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 13px;
  }
  @media (max-width: 460px) {
    padding: 12px 20px;
  }

  @media (max-width: 380px) {
    margin-right: 20px;
  }
}

.title {
  font-family: "Wadik";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 100px;
  background-image: linear-gradient(to right, #ff1919, #ff9900);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 35px;
  }

  span {
    background-image: linear-gradient(to right, #ff1919, #ff9900);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}

p {
  margin: 50px 0 0 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  max-width: 655px;

  @media (max-width: 768px) {
    margin: 25px 0 0 0;
    max-width: 335px;
    font-size: 14px;
    line-height: 17px;
  }
}

.blockButton{
  border:0;
  border-color:transparent;
  padding:2px;
  background-image:radial-gradient(circle at 100% 100%,transparent 7px,#000000 7px,#000000 11px,transparent 11px),linear-gradient(to right,#000000,#FF1919,#FF9900),radial-gradient(circle at 0% 100%,transparent 7px,#FF9900 7px,#fb790e 11px,transparent 11px),linear-gradient(to bottom,#fb790e,#0d0d0d),radial-gradient(circle at 0% 0%,transparent 7px,#0d0d0d 7px,#0d0d0d 11px,transparent 11px),linear-gradient(to left,#0d0d0d,#FF1919,#FF9900),radial-gradient(circle at 100% 0%,transparent 7px,#f9a006 7px,#f9a006 11px,transparent 11px),linear-gradient(to top,#f9a006,#000000);
  background-size:11px 11px,calc(100% - 22px) 4px,11px 11px,4px calc(100% - 22px);
  background-position:top left,top center,top right,center right,bottom right,bottom center,bottom left,center left;
  background-repeat:no-repeat;
  margin-top:50px;
  cursor:pointer;
  text-decoration:none;
  transition:.2s ease-in-out
}

.blockButton:hover{
  opacity: 0.7;
}

.button {
  display:inline-block;
  margin:5px;
  padding:15px 30px;
  background:linear-gradient(to right,#FF1919,#FF9900);
  border-radius:5px;
  color:#000;
  font-weight:700;
  font-size:25px;
  line-height:1;
  text-transform:uppercase;
  text-decoration:none
}
</style>
