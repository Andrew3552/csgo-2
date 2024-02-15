<template>
    <div id="howitworks" :class="$style.howitworks">
        <div :class="$style.title">
            <img src="/images/title.png" :class="$style.title__image">
            <span>{{ $t('howitworks.title') }}</span>
        </div>
        <div :class="$style.list">
            <div v-for="key in ['part1', 'part2', 'part3']" :key="key" :class="$style.list__item">
                <img :src="howitworksImages[key]" alt="How It Works Image" :class="$style.list__img" />
                <h3>{{ $t(`howitworks.${key}`) }}</h3>
                <p :class="[$style.list__text, key !== 'part3' ? $style.addMargin : '']" v-html="$t(`howitworks_text.${key}`)"></p>
                <a :class="$style.list__link" v-if="key === 'part3'" href="https://t.me/cs365betsupport">{{ $t('howitworks_link.part3') }}</a>
                <span :class="$style.list__number">{{ $t(`howitworks_number.${key}`) }}</span>
                <img src="/images/title.png" :class="$style.list__image">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const howitworksImages = ref({
    part1: '/images/howitworks/block1.png',
    part2: '/images/howitworks/block2.png',
    part3: '/images/howitworks/block3.png',
});

</script>

<style lang="scss" module>

.title {
    position: relative;
    color: #FFF;
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

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    column-gap: 42px;

    @media (max-width: 1461px) {
        column-gap: 16px;
        font-size: 20px;
    }

    @media screen and (max-width: 1200px) {
        column-gap: 20px;
        font-size: 16px;
    }

    @media screen and (max-width: 768px) {
       flex-direction: column;
       row-gap: 20px;
    }



    &__item {
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 1px solid rgba(30, 35, 57, 0.00);
        background: linear-gradient(180deg, rgba(15, 18, 34, 0.00) 0%, #0F1222 100%);
    }

    &__img {
        text-align: center;
        margin-bottom: 30px;
        padding: 25px 174px 0;

        @media (max-width: 1461px) {
            padding: 21px 130px 0;
            height: auto;
            width: 90%;
            margin: 0 auto 30px;
        }

        @media (max-width: 1200px) {
            padding: 12px 82px 0;
            height: auto;
            width: 80%;
            margin: 0 auto 17px;
        }
    }

    &__text {
        color: rgba(255, 255, 255, 0.60);
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2;
        word-wrap: break-word;
        margin: 12px 0 12px;

        @media (max-width: 1461px) {
            font-size: 15px;
            margin-top: 10px;
        }

        @media (max-width: 1200px) {
            font-size: 12px;
            margin-top: 6px;
        }
    }

    .addMargin{
        margin-bottom: 52px;
    }

    &__link {
        color: #FFF;
        border: 1px solid #FFF;
        border-radius: 5px;
        padding: 10px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        width: 130px;
        margin: 0 auto;
        margin-bottom: 5px;
        text-decoration: none;
        transition: 200ms ease-in-out;
        text-transform: uppercase;

        &:hover {
            opacity: 0.7;
        }
    }

    &__image {
        max-width: 456px;

        @media (max-width: 1461px) {
            max-width: 369px;
        }

        @media (max-width: 1200px) {
            max-width: 270px;
        }
    }

    &__number {
        color: #373945;
        text-align: center;
        font-family: Wadik;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        @media (max-width: 1461px) {
            font-size: 48px;
        }

        @media (max-width: 1200px) {
            font-size: 24px;
        }
    }
}
</style>