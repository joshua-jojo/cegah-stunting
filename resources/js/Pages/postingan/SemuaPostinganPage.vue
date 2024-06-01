<template>
    <div class="w-full grid grid-cols-3 gap-8 mb-20">
        <div class="card w-full bg-base-100 shadow-xl" v-for="(item, index) in props.postingan" :key="index">
            <div class="card-body">
                <h2 class="card-title mb-4 truncate-multiline-2">{{ item.judul }}
                </h2>
                <p class="text-sm text-base-content italic">Kategori : {{ item.kategori?.nama ?? 'Kosong' }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-sm btn-primary">Edit</button>
                    <button class="btn btn-sm btn-error">Hapus</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import layout from "../../Layout/MainLayout.vue"

defineOptions({
    layout
})

const props = defineProps({
    postingan: Array
})
</script>

<style scope>
.truncate-multiline-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
