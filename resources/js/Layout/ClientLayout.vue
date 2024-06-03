<template>
    <div class="navbar bg-base-100 ">
        <div class="flex-1">
            <img src="../../assets/logo.jpg" class="h-[80px]" @click="go_client"></img>
        </div>
        <div class="flex-none z-10">
            <ul class="menu menu-horizontal px-8">
                <li class="mr-4" @click="go_client"><a>Dashboard</a></li>
                <li class="mr-4" v-if="props.dashboard.berita">
                    <details>
                        <summary>
                            Berita
                        </summary>
                        <ul class="p-2 bg-base-100 rounded-t-none w-max">
                            <li v-for="(item, index) in props.dashboard.berita" :key="index"
                                @click="go_kategori(item.id)">
                                <a>{{ item.nama }}</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="mr-4" v-if="props.dashboard.peran">
                    <details>
                        <summary>
                            Peran Anda
                        </summary>
                        <ul class="p-2 bg-base-100 rounded-t-none w-max">
                            <li v-for="(item, index) in props.dashboard.peran" :key="index"
                                @click="go_kategori(item.id)">
                                <a>{{ item.nama }}</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="mr-4" v-if="props.dashboard.program"
                    @click="show_postingan(props.dashboard.program[0].id)"><a>Program</a></li>
                <li class="mr-4" v-if="props.dashboard.edukasi" @click="show_postingan(props.dashboard.edukasi[0].id)">
                    <a>Edukasi</a></li>
            </ul>
            <button class="btn btn-sm btn-primary" @click="login">Login</button>
        </div>
    </div>
    <div class="carousel w-full max-h-[400px]">
        <div id="slide1" class="carousel-item relative w-full">
            <img src="../../assets/img1.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
            <img src="../../assets/img2.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a>
                <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
            <img src="../../assets/img3.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    <div class="mt-8 flex flex-col px-8">
        <slot></slot>
    </div>
    <footer class="footer p-10 bg-base-200 text-base-content mt-8 border-t-8 justify-center">
        <aside>
            <p class="font-bold">Created by UPT Puskesmas Padang Bulan Selayang II</p>
        </aside>
    </footer>
</template>
<script setup>
import { router } from '@inertiajs/vue3';

const props = defineProps({
    dashboard: Object
})

const login = () => {
    router.get(route("login"))
}

const go_client = () => {
    router.get(route('client'))
}

const go_kategori = (kategori) => {
    router.get(route("client.kategori", { kategori }))
}

const show_postingan = (id) => {
    router.get(route("postingan.show_postingan", { id }))
}
</script>
