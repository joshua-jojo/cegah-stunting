<template>
    <div class="bg-base-100 flex flex-col py-4 px-6 rounded-2xl overflow-auto overflow-y-auto mb-8">
        <div class="flex gap-8">
            <div class="form-control w-full mb-4">
                <div class="label">
                    <div class="label-text">Judul</div>
                </div>
                <input class="input input-bordered input-sm" v-model="form_posting.judul"></input>
            </div>
            <div class="form-control w-full mb-4">
                <div class="label">
                    <div class="label-text">Kategori</div>
                </div>
                <select class="select select-bordered select-sm" v-model="form_posting.kategori_id">
                    <option :value="null" disabled selected>Pilih Kategori</option>
                    <option :value="item.id" v-for="(item, index) in props.kategori" :key="index">{{ item.nama }}
                    </option>
                </select>
            </div>
        </div>
        <ckeditor :editor="ClassicEditor" v-model="form_posting.postingan" :config="editorConfig" class="h-full">
        </ckeditor>
        <button class="btn btn-block btn-primary mt-8" @click="save_postingan">Simpan</button>
    </div>
</template>
<script setup>
import layout from '../../Layout/MainLayout.vue';
import { ref, onMounted } from "vue";
import ClassicEditor from 'ckeditor5-custom-build'
import { useForm } from '@inertiajs/vue3';


defineOptions({
    layout
})

const props = defineProps({
    postingan: Object,
    kategori: Array
})

const editorData = ref("")
const editorConfig = {

}

const form_posting = useForm({
    id: null,
    judul: null,
    kategori_id: null,
    postingan: null,
})

const save_postingan = () => {
    form_posting.post(route("postingan.simpan_postingan_edit"))
}

onMounted(() => {
    form_posting.id = props.postingan.id
    form_posting.judul = props.postingan.judul
    form_posting.kategori_id = props.postingan.kategori_id
    form_posting.postingan = props.postingan.postingan
})
</script>

<style scope>
.ck-editor__editable {
    min-height: 300px;
}
</style>
