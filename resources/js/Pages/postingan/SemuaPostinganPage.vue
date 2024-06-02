<template>
    <div class="w-full grid grid-cols-3 gap-8 mb-20">
        <div class="card w-full bg-base-100 shadow-xl" v-for="(item, index) in props.postingan" :key="index">
            <div class="card-body">
                <h2 class="card-title mb-4 truncate-multiline-2">{{ item.judul }}
                </h2>
                <p class="text-sm text-base-content italic">Kategori : {{ item.kategori?.nama ?? 'Kosong' }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-sm" @click="show_postingan(item.id)">Lihat</button>
                    <button class="btn btn-sm btn-primary" @click="edit_postingan(item.id)">Edit</button>
                    <button class="btn btn-sm btn-error" @click="get_hapus(item)">Hapus</button>
                </div>
            </div>
        </div>
    </div>


    <dialog ref="dialog_hapus" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Lanjutkan untuk hapus postingan?</h3>
            <p class="py-4">Postingan <b>{{ data_postingan.judul }}?</b></p>
            <div class="modal-action">
                <button class="btn btn-error" @click="hapus">Hapus</button>
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>

</template>
<script setup>
import { router } from "@inertiajs/vue3";
import layout from "../../Layout/MainLayout.vue"
import { ref } from "vue";

defineOptions({
    layout
})

const props = defineProps({
    postingan: Array
})

const show_postingan = (id) => {
    router.get(route("postingan.show_postingan", { id }))
}

const edit_postingan = (postingan) => {
    router.get(route("postingan.edit_postingan", { postingan }))
}

const dialog_hapus = ref("")
const data_postingan = ref("")
const get_hapus = (data) => {
    data_postingan.value = data
    dialog_hapus.value.showModal()
}

const hapus = () => {
    router.get(route("postingan.hapus", { postingan: data_postingan.value.id }))
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
