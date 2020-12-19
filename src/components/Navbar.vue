<template>
  <header class="container bg-gray-900 px-2 py-2 mb-5 w-screen">
    <div class="flex flex-row items-center justify-between flex-wrap">
      <!-- right -->
      <div class="flex justify-end flex-shrink-0">
        <!-- cog icon -->
        <svg
          class="w-8 h-8 text-white mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <div class="text-gray-300 text-2xl">
          <h1>H . P.V.C</h1>
        </div>
      </div>

      <!-- menu -->
      <div class="text-white md:flex justify-between items-center space-x-5 hidden mr-5">
        <router-link class="block hover:text-gray-300" to="/">Home</router-link>
        <router-link class="block hover:text-gray-300" to="/about">About</router-link>
      </div>

      <!-- left  -->
      <div class="md:hidden">
        <!-- menu icon -->
        <button
          type="button"
          class="text-gray-300 focus:text-white focus:outline-none hover:text-white"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped></style>
