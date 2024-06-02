<template>
     <div class="text-center font-bold text-3xl my-8">
        Artikel Terkait {{ props.kategori.nama }}
    </div>

    <div class="grid grid-cols-3 gap-8">
        <div class="card w-full bg-base-100 shadow-xl hover:scale-110 duration-300"
            v-for="(item, index) in props.kategori.postingan" :key="index" @click="show_postingan(item.id)">
            <div class="card-body">
                <h2 class="card-title truncate-multiline-2 text-center"> {{ item.judul }}
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
    kategori: Object
})

const show_postingan = (id) => {
    router.get(route("postingan.show_postingan", { id }))
}
</script>
