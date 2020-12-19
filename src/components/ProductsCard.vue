<template>
  <div class="bg-gray-100 mb-3 rounded-lg h-auto">
    <!-- Image  -->
    <div>
      <img
        v-lazy="product?.photo"
        :alt="product?.title"
        class="w-full max-h-60 overflow-hidden"
      />
    </div>

    <!-- card contnet -->
    <div class="py-4 px-3">
      <div class="space-y-4">
        <p class="space-x-8 text-center">
          $
          <span class="p-2 rounded-full bg-yellow-600 text-white">{{
            product?.singular_price
          }}</span>
          <span> السعر المفرد</span>
        </p>
        <hr />
        <p class="space-x-8 text-center">
          $
          <span class="p-2 rounded-full bg-yellow-600 text-white">{{
            product?.plural_price
          }}</span>

          <span> السعر الجملە</span>
        </p>
      </div>
      <hr class="mt-2" />
      <div class="mt-3">
        <h1 class="bg-gray-100 text-center mb-1">الاسم المواد</h1>
        <h3 class="p-1 bg-yellow-600 rounded-md text-center text-gray-100">
          {{ product?.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: ["product"],
};
</script>
<style></style>
