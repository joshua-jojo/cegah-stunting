<template>
    <div class="card w-96 shadow-xl bg-base-100">
        <div class="card-body">
            <h2 class="card-title justify-center text-2xl">
                LOGIN
            </h2>

            <label class="form-control w-full mt-4">
                <div class="label">
                    <span class="label-text">Email</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <!-- <div class="label">
                    <span class="label-text-alt text-error">Bottom Left label</span>
                </div> -->
            </label>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <!-- <div class="label">
                    <span class="label-text-alt text-error">Bottom Left label</span>
                </div> -->
            </label>

            <button class="btn btn-primary my-8">LOGIN</button>
        </div>
    </div>
</template>
<script setup>
import layout from "../../Layout/AuthLayout.vue";

defineOptions({
    layout
})
</script>
