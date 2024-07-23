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
  const itemId = id.split('-')[0]

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
const category = computed(() =>  {
  if(hasProduct.value) {
    const subcategory = product.value.attributes.subcategory.data
    const subsubcategory = product.value.attributes.subsubcategory.data

    return subsubcategory || subcategory
  }

  return null
})
const price = computed(() => hasProduct.value ? product.value.attributes.price : null)



</script>

<template>
  <div class="py-8">
    <UContainer v-if="hasProduct">
      <div class="grid grid-cols-2 gap-8">
        <div class=""></div>
        <div class="">
          <div class="flex mb-6">
            <div class="flex-1">
              <h1 class="text-2xl font-bold">{{title}}</h1>
              <p v-if="category" class="text-slate-400">{{category.attributes.title}}</p>
            </div>
            <div class="ml-auto">
              <UButton
                  icon="i-heroicons-heart"
                  :ui="{ rounded: 'rounded-full' }"
                  color="rose"
                  variant="soft"
                  size="xl"
                  square
              />
            </div>
          </div>
          <div v-if="price" class="flex items-baseline">
            <h4 class="text-xl text-red-500 mr-4">{{price.price}}</h4>
            <span v-if="price.old_price" class="text-md line-through text-slate-400">{{price.old_price}}</span>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
