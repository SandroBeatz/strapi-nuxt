<script setup lang="ts">
import { useRoute } from 'vue-router';
import {PRODUCT} from "~/graphql/page/product.query";

interface Query {
  product: any
}

const lang = 'ru'

const route = useRoute();

const queryParams = computed(() => {
  const id = route.params.id as string
  const productId = id.split('-')[0]
  const itemId = id.split('-')[1]

  return {
    productId,
    itemId
  }
})


const variables = {
  lang: lang,
  id: queryParams.value.productId
}

const productResponse = useAsyncQuery<Query>(PRODUCT, variables)

const hasProduct = computed(() => !!productResponse.data.value?.product.data)

const product = computed(() => productResponse.data.value?.product.data)
const title = computed(() => hasProduct.value ? product.value.attributes.title : '')
const shortDescription = computed(() => hasProduct.value ? product.value.attributes.short_description : '')
const category = computed(() =>  {
  if(hasProduct.value) {
    const subcategory = product.value.attributes.subcategory.data
    const subsubcategory = product.value.attributes.subsubcategory.data

    return subsubcategory || subcategory
  }

  return null
})
const price = computed(() => hasProduct.value ? product.value.attributes.price : null)
const images = computed(() =>  {
  if(hasProduct.value) {
    const item = product.value.attributes.product_items.data.find(i => i.id === queryParams.value.itemId)

    return item ? item.attributes.images.data : []
  }

  return []
})
const colors = computed(() =>  {
  if(hasProduct.value) {
    return product.value.attributes.product_items.data.map(i => {
      return {
        id: i.id,
        active: i.id === queryParams.value.itemId,
        image: i.attributes.images.data[0].attributes.url,
        ...i
      }
    })
  }

  return []
})
const sizes = computed(() =>  {
  if(hasProduct.value) {
    const item = product.value.attributes.product_items.data.find(i => i.id === queryParams.value.itemId)

    return item ? item.attributes.sizes : []
  }

  return []
})



</script>

<template>
  <div class="py-8">
    <UContainer v-if="hasProduct">
      <div class="grid grid-cols-2 gap-8">
        <div class="">
          <div class="flex w-full justify-between gap-4 sticky top-0">
            <div class="w-[90px]">
              <Swiper
                  :direction="'vertical'"
                  :modules="[SwiperAutoplay, SwiperEffectCreative]"
                  :slides-per-view="5"
                  class="h-full"
              >
                <SwiperSlide
                    v-for="el in images"
                    :key="el.id"
                >
                  <div class="w-full aspect-1/1 rounded-2xl overflow-hidden cursor-pointer">
                    <img
                        :src="`http://localhost:1337${el.attributes.url}`"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="flex-1 overflow-hidden">
              <div class="max-w-full">
                <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :slides-per-view="1"
                    class="rounded-3xl max-w-full "
                >
                  <SwiperSlide
                      v-for="el in images"
                      :key="el.id"
                  >
                    <div class="max-w-full flex rounded-3xl overflow-hidden">
                      <img
                          :src="`http://localhost:1337${el.attributes.url}`"
                          alt=""
                          class="max-w-full w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="flex mb-4">
            <div class="flex-1">
              <h1 class="text-2xl font-bold">{{title}}</h1>
              <p v-if="category" class="text-slate-400">{{category.attributes.title}}</p>
            </div>
            <div class="ml-auto">
              <div class="flex items-center py-2">
                <UIcon name="i-heroicons-star-solid" class="text-amber-300 text-xl mr-1" />
                <p class="text-md">4.7</p>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex items-center text-green-600">
              <UIcon name="i-heroicons-check-circle" class="text-lg mr-1" />
              <p class="text-sm">Товар в наличии</p>
            </div>
          </div>
          <div class="mb-6">
            <p class="text-sm text-slate-600">{{shortDescription}}</p>
          </div>
          <div v-if="price" class="flex items-baseline mb-6">
            <h4 class="text-xl text-red-500 mr-4">{{price.price}}</h4>
            <span v-if="price.old_price" class="text-md line-through text-slate-400">{{price.old_price}}</span>
          </div>
          <div class="mb-6">
            <div class="flex items-center mb-2 text-sm">
              <span class="text-slate-400 mr-0.5">Цвет:</span><span>Синий</span>
            </div>
            <div class="flex gap-2">
              <template v-for="color in colors" :key="color.id">
                <a href="#" class="no-underline flex rounded-xl overflow-hidden w-16 h-20 border border-slate-200" :class="{'border-primary': color.active}">
                  <img
                      :src="`http://localhost:1337${color.image}`"
                      alt="Sandro"
                      class="w-full h-full object-cover"
                  />
                </a>
              </template>
            </div>

          </div>
          <div class="mb-6">
            <div class="flex items-center mb-2 text-sm">
              <span class="text-slate-400 mr-0.5">Размер: </span> <span>XL</span>
            </div>
            <div class="flex gap-2">
              <template v-for="(size, i) in sizes" :key="i">
                <a href="#" class="no-underline flex rounded-xl overflow-hidden w-12 h-12 border border-slate-200 hover:border-slate-300">
                  <span class="uppercase m-auto text-md text-slate-600">{{size.size}}</span>
                </a>
              </template>
            </div>

          </div>
          <div class="mb-6">
            <div class="flex gap-4">
              <UButton
                  icon="i-heroicons-shopping-cart"
                  size="xl"
                  color="primary"
                  variant="solid"
                  label="Добавить в корзину"
                  :trailing="false"
              />
              <UButton
                  icon="i-heroicons-heart"
                  color="rose"
                  variant="soft"
                  size="xl"
                  square
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
