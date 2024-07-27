<script setup lang="ts">
import {useRoute} from 'vue-router';
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
const description = computed(() => hasProduct.value ? product.value.attributes.description : '')
const category = computed(() => {
  if (hasProduct.value) {
    const subcategory = product.value.attributes.subcategory.data
    const subsubcategory = product.value.attributes.subsubcategory.data

    return subsubcategory || subcategory
  }

  return null
})
const price = computed(() => hasProduct.value ? product.value.attributes.price : null)
const images = computed(() => {
  if (hasProduct.value) {
    const item = product.value.attributes.product_items.data.find(i => i.id === queryParams.value.itemId)

    return item ? item.attributes.images.data : []
  }

  return []
})
const colors = computed(() => {
  if (hasProduct.value) {
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
const sizes = computed(() => {
  if (hasProduct.value) {
    const item = product.value.attributes.product_items.data.find(i => i.id === queryParams.value.itemId)

    return item ? item.attributes.sizes : []
  }

  return []
})


const items = [{
  key: 'about',
  label: 'О товаре',
  icon: 'i-heroicons-information-circle'
}, {
  key: 'reviews',
  label: 'Отзывы',
  icon: 'i-heroicons-arrow-down-tray'
}, {
  key: 'сollections',
  label: 'С чем носить',
  icon: 'i-heroicons-arrow-down-tray'
}]

</script>

<template>
  <div class="py-8">
    <UContainer v-if="hasProduct">
      <div class="grid grid-cols-2 gap-8 mb-12">
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
              <h1 class="text-2xl font-bold">{{ title }}</h1>
              <p v-if="category" class="text-slate-400">{{ category.attributes.title }}</p>
            </div>
            <div class="ml-auto">
              <div class="flex items-center py-2">
                <UIcon name="i-heroicons-star-solid" class="text-amber-300 text-xl mr-1"/>
                <p class="text-md">4.7</p>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex items-center text-green-600">
              <UIcon name="i-heroicons-check-circle" class="text-lg mr-1"/>
              <p class="text-sm">Товар в наличии</p>
            </div>
          </div>
          <div class="mb-6">
            <p class="text-sm text-slate-600">{{ shortDescription }}</p>
          </div>
          <div v-if="price" class="flex items-baseline mb-6">
            <h4 class="text-xl text-red-500 mr-4">{{ price.price }}</h4>
            <span v-if="price.old_price" class="text-md line-through text-slate-400">{{ price.old_price }}</span>
          </div>
          <div class="mb-6">
            <div class="flex items-center mb-2 text-sm">
              <span class="text-slate-400 mr-0.5">Цвет:</span><span>Синий</span>
            </div>
            <div class="flex gap-2">
              <template v-for="color in colors" :key="color.id">
                <a href="#" class="no-underline flex rounded-xl overflow-hidden w-16 h-20 border border-slate-200"
                   :class="{'border-primary': color.active}">
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
                <a href="#"
                   class="no-underline flex rounded-xl overflow-hidden w-12 h-12 border border-slate-200 hover:border-slate-300">
                  <span class="uppercase m-auto text-md text-slate-600">{{ size.size }}</span>
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
          <div class="mb-6">
            <p class="font-medium mb-3">Доставим завтра или позже</p>
            <div class="flex text-slate-500 mb-2">
              <UIcon name="i-heroicons-building-storefront" class="text-2xl mr-2"/>
              <p class="py-0.5 max-w-72">B пункты выдачи заказов — c примеркой, бесплатно</p>
            </div>
            <div class="flex text-slate-500">
              <UIcon name="i-heroicons-truck" class="text-2xl mr-2"/>
              <p class="py-0.5 max-w-72">По адресу, курьером — c примеркой, бесплатно при покупке от 6 000 ₽</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <UTabs :items="items">
          <template #item="{ item }">
            <template v-if="item.key === 'about'">
              <div class="grid grid-cols-2 gap-8 p-4">
                <div class="border-r border-gray-200">
                  <table class="w-full table-fixed">
                    <tbody>
                    <tr>
                      <td class="text-slate-400">
                        <div class="flex overflow-hidden mr-2">
                          <span class="tb-label">Состав, %</span>
                        </div>
                      </td>
                      <td class="font-medium">Хлопок - 100%</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Размер товара на модели</td>
                      <td class="font-medium">M INT</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Параметры модели</td>
                      <td class="font-medium">103-78-98</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Рост модели на фото</td>
                      <td class="font-medium">189 см</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Длина (см)</td>
                      <td class="font-medium">72 см</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Длина рукава (см)</td>
                      <td class="font-medium">22 см</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Сезон</td>
                      <td class="font-medium">Мульти</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Цвет</td>
                      <td class="font-medium">Белый</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Узор</td>
                      <td class="font-medium">Однотонный</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Гарантийный срок</td>
                      <td class="font-medium">30 дней</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Страна производства</td>
                      <td class="font-medium">Бангладеш</td>
                    </tr>
                    <tr>
                      <td class="text-slate-400">Артикул</td>
                      <td class="font-medium">MP002XM08LOB</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="">
                  {{description}}
                </div>
              </div>
            </template>
            <template v-if="item.key === 'reviews'"></template>
          </template>
        </UTabs>
      </div>

    </UContainer>
  </div>
</template>

<style scoped lang="scss">
.tb-label {
  display: inline-block;
  white-space: nowrap;

  &:after {
    content: '.................................................................';
    padding: 0 5px;
  }
}
</style>
