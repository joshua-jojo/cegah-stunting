<template>
    <div class="bg-base-100 flex flex-col py-4 px-6 rounded-2xl overflow-auto overflow-y-auto mb-8">
       <div class="flex gap-8">
            <div class="form-control w-full mb-4">
                <div class="label">
                    <div class="label-text">Judul</div>
                </div>
                <input class="input input-bordered input-sm"></input>
            </div>
            <div class="form-control w-full mb-4">
                <div class="label">
                    <div class="label-text">Kategori</div>
                </div>
                <select class="select select-bordered select-sm">
                    <option :value="null" disabled selected>Pilih Kategori</option>
                </select>
            </div>
       </div>
        <ckeditor :editor="Editor" v-model="editorData" :config="editorConfig" class="h-full"></ckeditor>
        <button class="btn btn-block btn-primary mt-8">Simpan</button>
    </div>
</template>
<script setup>
import layout from '../../Layout/MainLayout.vue';
import { ref } from "vue";
import Editor from 'ckeditor5-custom-build'


defineOptions({
    layout
})

const editorData = ref("")
const editorConfig = {
   
}
</script>

<style scope>
.ck-editor__editable {
    min-height: 300px;
}
</style>
