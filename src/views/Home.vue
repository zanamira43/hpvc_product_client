<template>
  <div class="grid md:grid-cols-5 md:gap-2 grid-cols-1">
    <ProductsCard v-for="product in products" :key="product.id" :product="product" />
  </div>

  <div class="mx-auto text-center p-6 bg-gray-800 text-gray-100" v-if="showError">
    <h1>{{ error }}</h1>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup() {
    const products = ref([]);
    const error = ref("");
    const showError = ref(true);

    onMounted(async () => {
      try {
        const res = await axios.get("/api/products");
        products.value = res.data;
        showError.value = false;
      } catch (err) {
        if (err) {
          error.value = err.message;
          showError.value = true;
        } else {
          error.value = "There is an error";
          showError.value = true;
        }
      }
    });

    return {
      products,
      error,
      showError,
    };
  },
};
</script>
