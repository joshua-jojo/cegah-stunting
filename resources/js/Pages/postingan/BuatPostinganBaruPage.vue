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
        <ckeditor :editor="Editor" v-model="form_posting.posting" :config="editorConfig" class="h-full"></ckeditor>
        <button class="btn btn-block btn-primary mt-8" @click="simpan"
            :disabled="form_posting.processing">
            <span class="loading loading-spinner" v-if="form_posting.processing"></span>
            Simpan</button>
    </div>
</template>
<script setup>
import layout from '../../Layout/MainLayout.vue';
import { ref } from "vue";
import Editor from 'ckeditor5-custom-build'
import { useForm } from '@inertiajs/vue3';


defineOptions({
    layout
})

const props = defineProps({
    kategori: Array
})
const editorConfig = {

}

const form_posting = useForm({
    judul: "",
    kategori_id: null,
    posting: ""
})

const simpan = () => {
    form_posting.post(route("postingan.simpan_postingan_baru"),{
        onSuccess : () => {
            form_posting.reset()
        }
    })
}
</script>


<style scope>
.ck-editor__editable {
    min-height: 300px;
}
</style>
