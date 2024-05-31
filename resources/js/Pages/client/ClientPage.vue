<template>
    <div class="text-center font-bold text-3xl mb-8">
        Berita Terkait
    </div>
    <div class="grid grid-cols-3 gap-4">
        <div class="card w-full bg-base-100 shadow-xl" v-for="(item, index) in 9" :key="index">
            <div class="card-body">
                <h2 class="card-title mb-4 truncate-multiline-2">BKKBN Perkenalkan Aplikasi ELSIMIL untuk Cegah Stunting
                </h2>
            </div>
        </div>
    </div>

    <div class="mt-8 flex justify-center">
        <div class="join">
            <button class="join-item btn shadow">1</button>
            <button class="join-item btn btn-active shadow">2</button>
            <button class="join-item btn shadow">3</button>
            <button class="join-item btn shadow">4</button>
        </div>
    </div>

    <div class="text-center font-bold text-3xl my-8">
        Kategori
    </div>
    <div class="grid grid-cols-3 gap-4">
        <div class="card w-full bg-base-100 shadow-xl" v-for="(item, index) in 3" :key="index">
            <div class="card-body">
                <h2 class="card-title truncate-multiline-2 text-center">Kategori {{ index + 1 }}
                </h2>
            </div>
        </div>
    </div>
</template>
<script setup>
import layout from "../../Layout/ClientLayout.vue";

defineOptions({
    layout
})
</script>
