<script setup lang="ts">
// import CategoryImg from "assets/img/categories/category-1.jpg";
import MCardItem from "~/components/shared/Cards/MCardItem.vue";
import {PRODUCTS} from "~/graphql/products.query";

interface Query {
  productItems: any
}

const lang = 'ru'

const categories = [
  {
    label: 'Верхняя одежда',
    to: '/components/vertical-navigation'
  }, {
    label: 'Футболки',
    to: '/components/command-palette'
  }, {
    label: 'Брюки',
    to: '/components/table'
  }
]
const sizes = [
  {
    label: '40',
    to: '/components/vertical-navigation'
  }, {
    label: '42',
    to: '/components/command-palette'
  }, {
    label: '44',
    to: '/components/table'
  }, {
    label: '46',
    to: '/components/table'
  }, {
    label: '48',
    to: '/components/table'
  }
]

const route = useRoute()

const queryParams = computed(() => {
  const parts = route.path.split('/')

  const category = parts[1]
  const subCategory = parts[2]

  // console.log(splitted)

  return {
    category: category ? {eq: category} : undefined,
    subCategory: subCategory ? {eq: subCategory} : undefined,
  }
})


const variables = {
  lang: lang,
  ...queryParams.value
}

const productsResponse = useAsyncQuery<Query>(PRODUCTS, variables)

const products = computed(() => {
  return productsResponse.data.value?.productItems.data
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <div class="grid grid-cols-5 gap-6 w-full">
        <div class="border-r border-slate-200 pr-6">
          <div class="mb-4">
            <h5>Мужская одежда</h5>
            <UVerticalNavigation :links="categories">
              <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </div>

          <div class="mb-4">
            <h5>Размеры</h5>
            <UVerticalNavigation :links="sizes">
              <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </div>
        </div>
        <div class="col-span-4">
          <div class="grid grid-cols-4 gap-6">
            <template v-for="product in products" :key="product.id">
              <m-card-item
                  :id="`${product.attributes.product.data.id}-${product.id}`"
                  :title="product.attributes.product.data.attributes.title"
                  :caption="product.attributes.product.data.attributes.category.data.attributes.title"
                  :image="product.attributes.images.data[0].attributes.url"
                  :price="product.attributes.product.data.attributes.price.price"
                  :old-price="product.attributes.product.data.attributes.price.old_price"
              />
            </template>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
