<template>
    <div class="w-full h-full bg-base-100 rounded-xl px-6 py-4">
        <div class="flex justify-between mb-4">
            <div class="font-bold text-2xl">Kategori</div>
            <button class="btn btn-success btn-sm">Tambah Kategori</button>
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
                    <tr>
                        <th>1</th>
                        <td>Ibu</td>
                        <td>2 Posting</td>
                        <td>
                            <div class="flex gap-4">
                                <btn class="btn btn-sm w-max btn-primary">Edit</btn>
                                <btn class="btn btn-sm w-max btn-error">Hapus</btn>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import layout from "../../Layout/MainLayout.vue"

defineOptions({
    layout
})
</script>
