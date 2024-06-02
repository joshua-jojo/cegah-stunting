<template>
    <div class="navbar bg-base-100 ">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl" @click="go_client">Cegah Stunting</a>
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
                            <li v-for="(item, index) in props.dashboard.berita" :key="index" @click="go_kategori(item.id)">
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
                            <li v-for="(item, index) in props.dashboard.peran" :key="index" @click="go_kategori(item.id)">
                                <a>{{ item.nama }}</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="mr-4" v-if="props.dashboard.kegiatan">
                    <details>
                        <summary>
                            Kegiatan
                        </summary>
                        <ul class="p-2 bg-base-100 rounded-t-none w-max">
                            <li v-for="(item, index) in props.dashboard.kegiatan" :key="index" @click="go_kategori(item.id)">
                                <a>{{ item.nama }}</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="mr-4" v-if="props.dashboard.edukasi" @click="show_postingan(props.dashboard.edukasi[0].id)"><a>Edukasi</a></li>
            </ul>
            <button class="btn btn-sm btn-primary" @click="login">Login</button>
        </div>
    </div>
    <div class="carousel w-full">
        <div id="slide2" class="carousel-item relative w-full">
            <img src="https://cegahstunting.id/wp-content/uploads/2022/05/Metaslider-Website-RO-22-scaled-1980x894.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a>
                <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide1" class="carousel-item relative w-full">
            <img src="https://cegahstunting.id/wp-content/uploads/2021/03/1602-Website-Siklus-Daur-Kehidupan-New_Monev_Monev_Monev-scaled-1980x894.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
            <img src="https://cegahstunting.id/wp-content/uploads/2020/06/slider-home.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a>
                <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
            <img src="https://cegahstunting.id/wp-content/uploads/2021/05/METASLIDER-WEB_7_7-scaled-1980x894.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    <div class="mt-8 flex flex-col px-8">
        <slot></slot>
    </div>
    <footer class="footer p-10 bg-base-200 text-base-content mt-8">
        <aside>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                clip-rule="evenodd" class="fill-current">
                <path
                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
                </path>
            </svg>
            <p>ACME Industries Ltd.<br>Providing reliable tech since 1992</p>
        </aside>
        <nav>
            <h6 class="footer-title">Services</h6>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
            <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 class="footer-title">Company</h6>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 class="footer-title">Legal</h6>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
        </nav>
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
