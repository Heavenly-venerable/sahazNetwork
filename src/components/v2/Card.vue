<template>
  <div
    class="pb-16 p-4 flex flex-col md:flex-row justify-center items-center dark:bg-gray-900"
  >
    <div
      class="p-6 bg-white border border-gray-200 md:rounded-lg shadow md:w-[80%] dark:bg-gray-800 dark:border-gray-700"
    >
      <h5
        class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Cek Jangkauan Wilayah
      </h5>

      <form>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300"
            placeholder="Kode Pos Wilayah"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-primary-100 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-100 dark:hover:bg-primary-200 dark:focus:ring-blue-300"
          >
            Check
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
