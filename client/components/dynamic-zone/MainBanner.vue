<script setup lang="ts">

interface Props {
  data: MainBannerProps
}

defineProps<Props>()
</script>

<template>
<div class="py-8">
  <UContainer>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }"
        class="rounded-3xl"
    >
      <SwiperSlide
          v-for="el in data.images.data"
          :key="el.id"
      >
        <div class="h-[520px] text-center text-3xl font-bold">
          <img
              :src="`http://localhost:1337${el.attributes.url}`"
              alt=""
              class="w-full h-full object-cover"
          />
        </div>

      </SwiperSlide>
    </Swiper>
  </UContainer>
</div>
</template>

<style scoped>

</style>
