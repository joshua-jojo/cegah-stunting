<template>
    <div class="flex justify-center">
        <div class="flex flex-col w-[800px]">
            <div class="text-center font-bold text-3xl mb-16">{{ props.postingan.judul }}</div>

            <div class="text-base-content" v-html="props.postingan.postingan"></div>
        </div>
    </div>
</template>
<script setup>
import layout from "../../Layout/ClientLayout.vue";

defineOptions({
    layout
})

const props = defineProps({
    postingan: Object
})
</script>
