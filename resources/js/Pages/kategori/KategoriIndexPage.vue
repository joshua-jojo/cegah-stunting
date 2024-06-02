<template>
    <div class="w-full h-full bg-base-100 rounded-xl px-6 py-4 mb-16 overflow-auto">
        <div class="flex justify-between mb-4">
            <div class="font-bold text-2xl">Kategori</div>
            <button class="btn btn-success btn-sm" @click="tambah_show">Tambah Kategori</button>
        </div>

        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nama Kategori</th>
                        <th>Jumlah Posting</th>
                        <th>Opsi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in props.kategori" :key="index">
                        <th>{{ index + 1 }}</th>
                        <td>
                            <template v-if="form_edit.id == item.id">
                                <div class="form-control">
                                    <input class="input input-sm input-bordered w-full" autofocus
                                        v-model="form_edit.nama"></input>
                                    <div class="label" v-if="form_edit.errors.nama">
                                        <span class="label-text-alt text-error"> {{ form_edit.errors.nama }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                {{ item.nama }}
                            </template>
                        </td>
                        <td>{{ item.postingan_count }} Posting</td>
                        <td>
                            <div class="flex gap-4" v-if="form_edit.id != item.id">
                                <button class="btn btn-sm w-max btn-primary" @click="get_edit(item)">Edit</button>
                                <button class="btn btn-sm w-max btn-error" @click="get_hapus(item)">Hapus</button>
                            </div>
                            <div class="flex gap-4" v-else>
                                <button class="btn btn-sm w-max btn-success" @click="submit_edit">Simpan</button>
                                <button class="btn btn-sm w-max btn-error" @click="form_edit.reset()">Batal</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- tambah dialog  -->
    <dialog ref="modal_tambah" class="modal ">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Tambah Kategori</h3>
            <form @submit.prevent="submit_tambah">
                <div class="py-4 form-control">
                    <div class="label">
                        <span class="label-text">Nama Kategori</span>
                    </div>
                    <input v-model="form_tambah.nama" class="input input-bordered"
                        placeholder="Masukkan Nama Kategori"></input>
                    <div class="label" v-if="form_tambah.errors.nama">
                        <span class="label-text-alt text-error">{{ form_tambah.errors.nama }}</span>
                    </div>
                </div>
                <div class="modal-action">
                    <button class="btn btn-success" type="submit" :disabled="form_tambah.processing">
                        <span class="loading loading-spinner" v-if="form_tambah.processing"></span>
                        Tambah
                    </button>
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </form>
        </div>
    </dialog>

    <!-- hapus dialog  -->
    <dialog ref="dialog_hapus" class="modal ">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Hapus Kategori {{ form_hapus.nama }}</h3>
            <form @submit.prevent="submit_hapus">
                <div class="py-4">
                    Lanjutkan untuk menghapus kategori <b>{{ form_hapus.nama }}</b>.
                </div>
                <div class="modal-action">
                    <button class="btn btn-error" type="submit" :disabled="form_hapus.processing">
                        <span class="loading loading-spinner" v-if="form_hapus.processing"></span>
                        Hapus
                    </button>
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </form>
        </div>
    </dialog>
</template>
<script setup>
import { useForm } from "@inertiajs/vue3";
import layout from "../../Layout/MainLayout.vue"
import { ref } from "vue";

defineOptions({
    layout
})

const props = defineProps({
    kategori: Array
})

const modal_tambah = ref(null)
const form_tambah = useForm({
    nama: ""
})
const tambah_show = () => {
    modal_tambah.value.showModal()
}
const submit_tambah = () => {
    form_tambah.post(route("kategori.tambah"), {
        onSuccess: () => {
            modal_tambah.value.close()
            form_tambah.reset()
        }
    })
}

const form_edit = useForm({
    id: null,
    nama: null
})
const get_edit = (item) => {
    form_edit.clearErrors()
    form_edit.id = item.id
    form_edit.nama = item.nama
}
const submit_edit = () => {
    form_edit.post(route("kategori.edit"), {
        onSuccess: () => {
            form_edit.reset()
        }
    })
}

const dialog_hapus = ref(null)
const form_hapus = useForm({
    id: null,
    nama: null,
})
const get_hapus = (item) => {
    form_hapus.id = item.id
    form_hapus.nama = item.nama
    dialog_hapus.value.showModal()
}
const submit_hapus = () => {
    form_hapus.post(route("kategori.hapus"), {
        onSuccess: () => {
            dialog_hapus.value.close()
        }
    })
}
</script>
