<template>
  <div :class="$style.headerSlider">
    <div :class="$style.onlineCounter">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_10)">
        <g clip-path="url(#clip1_1_10)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.608 1.17139L10.2444 12.8078L11.8596 8.50011H16V9.95466H12.8676L10.1193 17.2841L6.48291 5.64775L4.86764 9.95466H0V8.50011H3.85964L6.608 1.17139Z" fill="#1F4955"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_10">
        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
        <clipPath id="clip1_1_10">
        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
        </defs>
      </svg>

      <div :class="$style.onlineCounter__stat">{{ counter }}</div>
      <div :class="$style.onlineCounter__label">Online</div>
    </div>

    <swiper
      :class="$style.slider"
      :slidesPerView="12"
      :loop="true"
      :speed="2000"
      :allowTouchMove="false"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '330': {
          spaceBetween: -16,
          speed: 500,
        },
        '769': {
          spaceBetween: -22,
        },
      }"
      :mousewheel="false"
      :modules="modules"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
        :class="$style.slider__item"
      >
        <div :class="$style.slider__itemWrapper">
          <img  :src="item.image" :class="$style.slider__image" />
          <div :class="[$style.slider__blend, $style['slider__blend--left']]" :style="{backgroundColor: item.color}" />
          <div :class="[$style.slider__blend, $style['slider__blend--right']]" :style="{backgroundColor: item.color}" />
          <svg :class="$style.showLg" width="177" height="82" viewBox="0 0 177 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.13661 81.5L20.8927 0.5H175.863L156.107 81.5H1.13661Z" :stroke="`url(#paint${index}_linear_1_104)`"/>
            <defs>
            <linearGradient :id="`paint${index}_linear_1_104`" x1="170" y1="33" x2="-13" y2="33" gradientUnits="userSpaceOnUse">
            <stop :stop-color="item.color"/>
            <stop offset="1" :stop-color="item.color" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <svg :class="$style.hideLg" width="131" height="61" viewBox="0 0 131 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.636608 60.5L15.2708 0.5H130.29L115.656 60.5H0.636608Z" :stroke="`url(#paint${index}_linear_8_137)`"/>
            <defs>
            <linearGradient :id="`paint${index}_linear_8_137`" x1="126.091" y1="24.5488" x2="-10.0427" y2="24.5488" gradientUnits="userSpaceOnUse">
              <stop :stop-color="item.color"/>
              <stop offset="1" :stop-color="item.color" stop-opacity="0"/>
                </linearGradient>
              </defs>
          </svg>

        </div>
      </swiper-slide>
    </swiper>

    <svg class="svg" style="position: fixed; top: -2000px; left: -2000px;">
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.007,1 L0.12,0.006 H1 L0.893,1 H0.007"></path></clipPath>
      <clipPath id="my-clip-path1" clipPathUnits="objectBoundingBox"><path d="M0,0 H1 L0.821,1 H0 V0"></path></clipPath>
      <clipPath id="my-clip-path2" clipPathUnits="userSpaceOnUse"><path d="M2974.5 82.0003L0.5 82.0003L20.5 0.000372688L2974.5 0.000106812L2974.5 82.0003Z"></path></clipPath>

      <clipPath id="my-clip-path3" clipPathUnits="objectBoundingBox"><path d="M0.005,1 L0.118,0.008 H1 L0.892,1 H0.005"></path></clipPath>
      <clipPath id="my-clip-path4" clipPathUnits="objectBoundingBox"><path d="M0,0 H1 L0.865,1 H0 V0"></path></clipPath>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { HeaderSliderProps } from './index';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode, Mousewheel } from 'swiper';
import 'swiper/css';

defineProps<HeaderSliderProps>();

const modules = ref<any[]>([Autoplay, FreeMode, Mousewheel]);

const counter = ref<number>(parseInt(localStorage.getItem('counter')) || 5482); // Восстановление значения из localStorage

// Функция для изменения значения счетчика (увеличение или уменьшение)
function changeCounter() {
  const randomValue = Math.random() > 0.45 ? 1 : -1;
  counter.value += randomValue;

  // Сохраняем текущее значение счетчика в Local Storage
  localStorage.setItem('counter', counter.value.toString());
}

// Запускаем интервал для изменения счетчика через случайное время
onMounted(() => {
  setInterval(changeCounter, getRandomTime());
});

// Функция для генерации случайного времени (в миллисекундах) между изменениями
function getRandomTime() {
  return Math.random() * 15000 + 1000;
}

// При демонтаже компонента (перезагрузке страницы) сохраняем значение счетчика
onBeforeMount(() => {
  localStorage.setItem('counter', counter.value.toString());
});

</script>

<style lang="scss" module>
  .hideLg {
    @media (min-width: 769px) {
      display: none;
    }
  }

  .showLg {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .headerSlider {
    position: relative;
    display: flex;
  }

  .onlineCounter {
    flex-shrink: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 100%;
    background: linear-gradient(303.34deg, #0A1626 13.17%, #070A18 74.74%);
    color: #fff;

    -webkit-clip-path: url(#my-clip-path1);
    clip-path: url(#my-clip-path1);

    @media (max-width: 768px) {
      -webkit-clip-path: url(#my-clip-path4);
      clip-path: url(#my-clip-path4);
    }

    &__stat {
      font-weight: 500;
      font-size: 11px;
      line-height: 18px;
      margin: 5px 0 1px 0;
    }

    &__label {
      font-weight: 500;
      font-size: 11px;
      line-height: 18px;
      color: #B7BCDB;
    }
  }

  .slider {
    margin-left: 94px;
    user-select: none;
    pointer-events: none;
    @media (min-width: 769px) {
      -webkit-clip-path: url(#my-clip-path2);
      clip-path: url(#my-clip-path2);
    }

    > div {
      transition-timing-function: linear !important
    }

    &__item {
      position: relative;
      width: 177px !important;
      height: 82px;

      @media (max-width: 768px) {
        width: 130.5px !important;
        height: 61px;
      }

      &Wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-clip-path: url(#my-clip-path);
        clip-path: url(#my-clip-path);

        @media (max-width: 768px) {
          -webkit-clip-path: url(#my-clip-path3);
          clip-path: url(#my-clip-path3);
        }

        > svg {
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }

    &__image {
      z-index: 3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__blend {
      z-index: 2;
      position: absolute;
      width: 73px;
      height: 73px;
      border-radius: 100%;
      filter: blur(35px);

      &--left {
        bottom: 0;
        left: -6.5px;
      }

      &--right {
        top: -19px;
        right: -14.5px;
      }
    }
  }
</style>
