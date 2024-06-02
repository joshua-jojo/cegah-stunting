<template>
    <div class="h-screen w-screen flex flex-col overflow-hidden">
        <div class="navbar bg-base-100 shadow z-10">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">Cegah Stunting</a>
            </div>
            <div class="flex-none">
                <button class="btn btn-ghost">
                    ADMIN
                </button>
            </div>
        </div>

        <div class="flex h-full w-full">
            <div class="h-full bg-base-100">
                <ul class="menu w-60 rounded-box">
                    <li v-for="(item, index) in menu" :key="index" @click="item.click">
                        <a :class="`${page == item.active ? 'active' : ''}`">{{ item.title }}</a>
                    </li>
                    <li @click="logout">
                        <a class="text-error">Logout</a>
                    </li>
                </ul>
            </div>
            <div class="h-full w-full p-4 max-h-full overflow-auto">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import { router } from "@inertiajs/vue3";
import { ref } from "vue";

const page = ref(route().current())
const menu = ref([
    {
        title: "Semua Postingan",
        active: "postingan.semua",
        click: () => {
            router.get(route("postingan.semua"), {}, {
                preserveState: true,
                onSuccess: () => {
                    page.value = route().current()
                }
            })
        }
    },
    {
        title: "Buat Postingan Baru",
        active: "postingan.buat_postingan_baru",
        click: () => {
            router.get(route("postingan.buat_postingan_baru"), {}, {
                preserveState: true,
                onSuccess: () => {
                    page.value = route().current()
                }
            })
        }
    },
    {
        title: "Kategori",
        active: "kategori.index",
        click: () => {
            router.get(route("kategori.index"), {}, {
                preserveState: true,
                onSuccess: () => {
                    page.value = route().current()
                }
            })
        }

    },
])

const logout = () => {
    router.get(route("client"))
}
</script>
