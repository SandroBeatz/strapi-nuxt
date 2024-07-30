<script setup lang="ts">
// import CategoryImg from "assets/img/categories/category-1.jpg";
import MCardItem from "~/components/shared/Cards/MCardItem.vue";
import {PRODUCTS} from "~/graphql/products.query";
import {CATEGORY} from "~/graphql/category.query";

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

const categoryQuery = computed(() => {
  const parts = route.path.split('/')
  return parts[1]
})

const queryParams = computed(() => {
  const parts = route.path.split('/')

  const category = parts[1]
  const subCategory = parts[2]

  return {
    category: category ? {eq: category} : undefined,
    subCategory: subCategory ? {eq: subCategory} : undefined,
  }
})

const categoryResponse = useAsyncQuery<Query>(CATEGORY, {
  lang: lang,
  category: categoryQuery.value
})
const productsResponse = useAsyncQuery<Query>(PRODUCTS, {
  lang: lang,
  ...queryParams.value
})

const products = computed(() => {
  return productsResponse.data.value?.productItems.data
})

const category = computed(() => (categoryResponse.data.value?.category.data.attributes))
const subCategories = computed(() => category.value ? category.value.subcategories.data.map(i => {
  return {
    avatar: '/asfsa/fs',
    label: i.attributes.title,
    to: `/${categoryQuery.value}/${i.attributes.slug}`,
  }
}) : [])

const BREADCRUMBS = computed(() => ([
  { label: 'Главная', to: '/', labelClass: 'font-normal text-sm' },
  ...(category.value ? [{ label: category.value.title, to: `/${category.value.slug}`, labelClass: 'font-normal text-sm' }] : []),
  { label: 'Верхняя одежда', labelClass: 'font-normal text-sm' }
]))
</script>

<template>
  <div class="py-8">
    <UContainer>
      <UBreadcrumb
          class="mb-6 text-sm"
          divider="/"
          :links="BREADCRUMBS"
      ></UBreadcrumb>

      <div class="mb-6">
        <UHorizontalNavigation :links="subCategories" class="border-b border-gray-200 dark:border-gray-800" />
      </div>

      <div class="grid grid-cols-5 gap-6 w-full">
        <div class="border-r border-slate-200 pr-6">
<!--          <pre>{{subCategories}}</pre>-->
          <div class="mb-4">
            <h5>Бренд</h5>
            <UVerticalNavigation :links="categories">
              <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </div>

          <div class="mb-4">
            <h5>Цвет</h5>
            <UVerticalNavigation :links="sizes">
              <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </div>

          <div class="mb-4">
            <h5>Размер</h5>
            <UVerticalNavigation :links="sizes">
              <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
              </template>
            </UVerticalNavigation>
          </div>

          <div class="mb-4">
            <h5>Цена</h5>

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
