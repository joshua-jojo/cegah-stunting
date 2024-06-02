<template>
    <div class="text-center font-bold text-3xl mb-8">
        Berita Terkait
    </div>
    <div class="grid grid-cols-3 gap-8">
        <div class="card w-full bg-base-100 shadow-xl hover:scale-110 duration-300"
            v-for="(item, index) in props.postingan" :key="index" @click="show_postingan(item.id)">
            <div class="card-body">
                <h2 class="card-title mb-4 truncate-multiline-2">{{ item.judul }}
                </h2>
                <p class="text-xs italic">Kategori : {{ item.kategori?.nama }}</p>
            </div>
        </div>
    </div>

    <div class="text-center font-bold text-3xl my-8">
        Kategori
    </div>
    <div class="grid grid-cols-3 gap-8">
        <div class="card w-full bg-base-100 shadow-xl hover:scale-110 duration-300"
            v-for="(item, index) in props.kategori" :key="index" @click="show_kategori(item)">
            <div class="card-body">
                <h2 class="card-title truncate-multiline-2 text-center"> {{ item.nama }}
                </h2>
            </div>
        </div>
    </div>
</template>
<script setup>
import { router } from "@inertiajs/vue3";
import layout from "../../Layout/ClientLayout.vue";

defineOptions({
    layout
})

const props = defineProps({
    kategori: Array,
    postingan: Array,
})

const show_postingan = (id) => {
    router.get(route("postingan.show_postingan", { id }))
}

const show_kategori = (kategori) => {
    router.get(route("client.kategori", { kategori }))
}
</script>
<style scope>
.truncate-multiline-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>