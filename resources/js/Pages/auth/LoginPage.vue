<template>
    <div class="card w-96 shadow-xl bg-base-100 max-w-xs">
        <div class="card-body">
            <h2 class="card-title justify-center text-2xl">
                LOGIN
            </h2>

            <div role="alert" class="alert alert-error" v-if="form_login.errors.login">
                <span>{{ form_login.errors.login }}</span>
            </div>

          <form @submit.prevent="isLogin" class="w-full">
                <label class="form-control w-full mt-4">
                    <div class="label">
                        <span class="label-text">Email</span>
                    </div>
                    <input type="text" placeholder="Email" class="input input-bordered w-full" v-model="form_login.email" />
                    <div class="label" v-if="form_login.errors.email">
                        <span class="label-text-alt text-error">{{ form_login.errors.email }}</span>
                    </div>
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Password</span>
                    </div>
                    <input type="password" placeholder="Password" class="input input-bordered w-full"
                        v-model="form_login.password" />
                    <div class="label" v-if="form_login.errors.password">
                        <span class="label-text-alt text-error">{{ form_login.errors.password }}</span>
                    </div>
                </label>
    
                <button class="btn btn-primary my-8 w-full" type="submit">LOGIN</button>
          </form>
        </div>
    </div>
</template>
<script setup>
import { useForm } from "@inertiajs/vue3";
import layout from "../../Layout/AuthLayout.vue";

defineOptions({
    layout
})

const form_login = useForm({
    email: "",
    password: "",
})
const isLogin = () => {
    form_login.post(route("login.cek"))
}
</script>
